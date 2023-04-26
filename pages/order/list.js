import Link from "next/link"
import { useEffect, useState } from "react";
import { faSort } from '@fortawesome/fontawesome-free-solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Layout } from "../../components/layout"
import ButtonOrder from "../../components/order/ButtonOrder";
import FormSearchOrder from "../../components/order/FormSearchOrder";
import style from '../../components/order/List.module.css'
import { handleSortDataOrders, handleSearchOrders, convertArrItemDynamo } from "../../components/order/orderHelper";
import { useDispatch, useSelector } from 'react-redux';
import { 
    changeSortOrderNumber, 
    changeSortOrderStatus, 
    changeSortOrderDay, 
    changeSortEstimateStartDate,  
    getOrderStatusSort,
    getOrderDaySort, 
    getOrderNumberSort, 
    getEstimateStartDateSort, 
} from '../../components/order/slice';

export default function List() {
    const dispatch = useDispatch();
    var [listOrder, setListOrder] = useState([]);
    // var [orderNumberSort, setOrderNumberSort] = useState('asc');
    // var [orderStatusSort, setOrderStatusSort] = useState('asc');
    // var [orderDaySort, setOrderDaySort] = useState('asc');
    // var [estimateStartDateSort, setEstimateStartDateSort] = useState('asc');
    var orderNumberSort = useSelector((state) => state.orderNumberSort)
    var orderStatusSort = useSelector((state) => state.orderStatusSort)
    var orderDaySort = useSelector((state) => state.orderDaySort)
    var estimateStartDateSort = useSelector((state) => state.estimateStartDateSort)

    var [selectedRow, setSelectedRow] = useState(-1);
    var [clickedEdit, setClickedEdit] = useState(false);
    var [deleteStatus, setDeleteStatus] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            const response = await fetch('/api/order/list').then(res => res.json()).catch()
            // var orders = JSON.parse(response);
            //dynamo
            if(response.Items) {
                setListOrder(convertArrItemDynamo(response.Items))
            }
            setDeleteStatus(false)
            //dynamo
        }
        loadData()
    }, [deleteStatus])
    console.log('orderNumberSort',orderNumberSort)

    const handleStatusSort = function(fieldName) {
        switch(fieldName) {
            case 'orderNumber':
                let listOrderSortedByOrderNumber = handleSortDataOrders(listOrder, 'orderNumber', orderNumberSort)
                // setOrderNumberSort(orderNumberSort === 'asc' ? 'desc' : 'asc');
                dispatch(changeSortOrderNumber({status: (orderNumberSort === 'asc' ? 'desc' : 'asc')}))
                setListOrder(listOrderSortedByOrderNumber);
                break
            case 'orderStatus':
                let listOrderSortedByOrderStatus = handleSortDataOrders(listOrder, 'orderStatus', orderStatusSort)
                setOrderStatusSort(orderStatusSort === 'asc' ? 'desc' : 'asc');
                setListOrder(listOrderSortedByOrderStatus);
                break
            case 'orderDay':
                let listOrderSortedByOrderDay = handleSortDataOrders(listOrder, 'orderDay', orderDaySort)
                setOrderDaySort(orderDaySort === 'asc' ? 'desc' : 'asc');
                setListOrder(listOrderSortedByOrderDay);
                break
            default:
                let listOrderSortedByEstimateStartDate = handleSortDataOrders(listOrder, 'estimateStartDate', estimateStartDateSort)
                setEstimateStartDateSort(estimateStartDateSort === 'asc' ? 'desc' : 'asc');
                setListOrder(listOrderSortedByEstimateStartDate);
                break
        }
    }
    const handleSearchListOrder = async function(data) {
            var listOrderSearch = [];
            const response = await fetch('/api/order/list').then(res => res.json()).catch()
            // var orders = JSON.parse(response);
            // if(orders.orders) {
            //     listOrderSearch = orders.orders
            // }
            if(response.Items) {
                listOrderSearch = convertArrItemDynamo(response.Items)
            }

        let listOrderSearched = handleSearchOrders(listOrderSearch, data);
        setListOrder(listOrderSearched)
    }
    const handleDeleteOrder = async function(orderNumber) {
        const response = await fetch('/api/order/delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "orderNumber": orderNumber
            })
        })
        if(!response.ok) {
            throw new Error(response.statusText)
        }
        // const responseList = await fetch('/api/order/list').then(res => res.json()).catch()
        // var orders = JSON.parse(responseList);
        // if(orders.orders) {
            //     setListOrder(orders.orders)
            // }
        // if(response.Items) {
        //     setListOrder(convertArrItemDynamo(responseList.Items))
        // }
        setSelectedRow(-1)
        setDeleteStatus(true);
    }
    return(
        <Layout>
            <FormSearchOrder onSubmit={(data) => {
                handleSearchListOrder(data)
            }}/>
            {(selectedRow === -1) && clickedEdit && <div className="alert alert-danger">Please choose one.</div>}
            <table className="table table-bordered align-middle text-center">
                <thead className={`align-middle ${style.headerTable}`}> 
                    <tr>
                        <th scope="col" rowSpan={2}>No</th>
                        <th scope="col" rowSpan={2}>
                            Order 
                            <button className="btn" onClick={() => {handleStatusSort('orderNumber')}}><FontAwesomeIcon icon={faSort}/></button>
                        </th>
                        <th scope="col" rowSpan={2}>
                            Order Status
                            <button className="btn" onClick={() => {handleStatusSort('orderStatus')}}><FontAwesomeIcon icon={faSort}/></button>
                        </th>
                        <th scope="col" rowSpan={2}>
                            Order Day
                            <button className="btn" onClick={() => {handleStatusSort('orderDay')}}><FontAwesomeIcon icon={faSort}/></button>
                        </th>
                        <th scope="col" rowSpan={2}>
                            StartDate
                            <button className="btn" onClick={() => {handleStatusSort('estimateStartDate')}}><FontAwesomeIcon icon={faSort}/></button>
                        </th>
                        <th scope="col">TBPD</th>
                        <th scope="col">TTH</th>
                        <th scope="col" rowSpan={2}>Số người</th>
                        <th scope="col" rowSpan={2}>Chi phí</th>
                    </tr>
                    <tr>
                        <th>TBPNL</th>
                        <th>NN</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listOrder.map((order, index) => {
                            //dynamo
                            {/* var order = convertItemDynomoDbToObject(orderItem); */}
                            //dynamo
                            return(
                                <>
                                <tr key={order.orderNumber} className={(index%2!==0 ? style.lineTable  : '') + (selectedRow === order.orderNumber ? ` ${style.selected}` : '')} onClick={() => setSelectedRow(order.orderNumber)}>
                                    <td rowSpan={2}>{++index}</td>
                                    <td rowSpan={2}>{order.orderNumber}</td>
                                    <td rowSpan={2}>
                                        <ButtonOrder type={order.orderStatus}/>
                                    </td>
                                    <td rowSpan={2}>{order.orderDay}</td>
                                    <td rowSpan={2}>{order.estimateStartDate}</td>
                                    <td> {order.orderDepartment}</td>
                                    <td>{order.workplaceDepartment}</td>
                                    <td rowSpan={2}>{order.numPeopleUndecided}</td>
                                    <td rowSpan={2}>{order.fee}</td>
                                </tr>
                                <tr className={(index%2==0 ? style.lineTable : '') + (selectedRow === order.orderNumber ? ` ${style.selected}` : '')} onClick={() => setSelectedRow(order.orderNumber)}>
                                       <td>{order.contractStatus}</td>     
                                       <td>{order.career}</td>   
                                </tr>
                                </>
                               
                            )
                        })
                    }
                </tbody>
            </table>
            <div className={`d-flex justify-content-between ${style.widthBlockButton}`}>
                <button type="button" className="btn btn-primary"><Link className="text-light text-decoration-none" href='/order/add'>Register</Link></button>
                <button type="button" className="btn btn-warning">
                     <Link className="text-light text-decoration-none" href={`/order/detail/${selectedRow}`} passHref legacyBehavior>
                        <a onClick={(event) => {
                            if(selectedRow === -1) {
                                event.preventDefault()
                                setClickedEdit(true)
                            } else {
                                setClickedEdit(false)
                            }
                        }}>
                            Edit
                        </a>
                    </Link>
                        </button>
                <button type="button" className="btn btn-danger" onClick={() => {
                    if(selectedRow !== -1) {
                        handleDeleteOrder(selectedRow)
                        setClickedEdit(false)
                    } else {
                        setClickedEdit(true)
                    }
                }}>Delete</button>
            </div>

        </Layout>
    )
}
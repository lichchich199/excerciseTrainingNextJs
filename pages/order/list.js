import Link from "next/link"
import { Layout } from "../../components/layout"
import useSWR from 'swr';
import { fetcherListOrder } from "../../lib/fetchJson";
import style from '../../components/List.module.css'
import ButtonOrder from "../../components/order/ButtonOrder";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSort } from '@fortawesome/fontawesome-free-solid'
import { useEffect, useState } from "react";
import { handleSortDataOrders, handleSearchOrders } from "../../components/order/orderHelper";
import FormSearchOrder from "../../components/order/FormSearchOrder";

export default function List() {
    console.log('render')
    
    var [listOrder, setListOrder] = useState([]);
    var [orderNumberSort, setOrderNumberSort] = useState('asc');
    var [orderStatusSort, setOrderStatusSort] = useState('asc');
    var [orderDaySort, setOrderDaySort] = useState('asc');
    var [estimateStartDateSort, setEstimateStartDateSort] = useState('asc');

    useEffect(() => {
        // const { data } = await useSWR('/api/order/list', fetcherListOrder);
        const loadData = async () => {
            const response = await fetch('/api/order/list').then(res => res.json()).catch()
            var orders = JSON.parse(response);
            if(orders.orders) {
                setListOrder(orders.orders)
            }
        }
        loadData()
    }, [])

    const handleStatusSort = function(fieldName) {
        console.log(listOrder)
        switch(fieldName) {
            case 'orderNumber':
                let listOrderSortedByOrderNumber = handleSortDataOrders(listOrder, 'orderNumber', orderNumberSort)
                setOrderNumberSort(orderNumberSort === 'asc' ? 'desc' : 'asc');
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
            var orders = JSON.parse(response);
            if(orders.orders) {
                listOrderSearch = orders.orders
            }

        let listOrderSearched = handleSearchOrders(listOrderSearch, data);
        setListOrder(listOrderSearched)
    }

    return(
        <Layout>
            <FormSearchOrder onSubmit={(data) => {
                handleSearchListOrder(data)
            }}/>
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
                            return(
                                <>
                                <tr key={order.orderNumber} className={index%2!==0 ? style.lineTable : ''} onClick={() => console.log(order.orderNumber)}>
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
                                <tr className={index%2==0 ? style.lineTable : ''} onClick={() => console.log(index)}>
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
                <button type="button" className="btn btn-warning"><Link className="text-light text-decoration-none" href='/order/edit'>Edit</Link></button>
                <button type="button" className="btn btn-danger"><Link className="text-light text-decoration-none" href='/order/delete'>Delete</Link></button>
            </div>


        </Layout>
    )
}
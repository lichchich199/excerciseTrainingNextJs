import Link from "next/link"
import { Layout } from "../../components/layout"
import useSWR from 'swr';
import { fetcherListOrder } from "../../lib/fetchJson";
import style from '../../components/List.module.css'

export default function List() {
    const {data} = useSWR('/api/order/list', fetcherListOrder);
    var listOrder = data ? JSON.parse(data) : {};
    listOrder = listOrder.orders ? listOrder.orders : [];

    //handle deleteContact
    async function deleteContact(id){
       
    }

    return(
        <Layout>
            <div class={`input-group rounded ${style.searchBlock}`}>
                <input type="date" class="form-control rounded" placeholder="Ngày bắt đầu" aria-label="Search" aria-describedby="search-addon" />
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />

            </div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col" rowSpan={2}>No</th>
                        <th scope="col" rowSpan={2}>Order</th>
                        <th scope="col" rowSpan={2}>Order Status</th>
                        <th scope="col" rowSpan={2}>Order Day</th>
                        <th scope="col" rowSpan={2}>StartDate</th>
                        <th scope="col">TBPD</th>
                        <th scope="col">TTH</th>
                        <th scope="col" rowSpan={2}>Số người</th>
                        <th scope="col" rowSpan={2}>Chi phí</th>
                        <th rowSpan={2}></th>
                    </tr>
                    <tr>
                        <th>TBPNL</th>
                        <th>NN</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {
                        listOrder.map((order, index) => {
                            return(
                                <>
                                <tr key={order.orderNumber}>
                                    <td rowSpan={2}>{++index}</td>
                                    <td rowSpan={2}>{order.orderNumber}</td>
                                    <td rowSpan={2}>{order.orderStatus}</td>
                                    <td rowSpan={2}>{order.orderDay}</td>
                                    <td rowSpan={2}>{order.estimateStartDate}</td>
                                    <td> {order.orderDepartment}</td>
                                    <td>{order.workplaceDepartment}</td>
                                    <td rowSpan={2}>{order.numPeopleUndecided}</td>
                                    <td rowSpan={2}>{order.fee}</td>
                                    <td rowSpan={2}>
                                        <button type="button" className="btn btn-secondary" onClick={() => {
                                            deleteContact(contact.id)
                                        }}>Delete</button>
                                    </td>

                                </tr>
                                <tr>
                                       <td>{order.contractStatus}</td>     
                                       <td>{order.career}</td>     
                                </tr>
                                </>
                               
                            )
                        })
                    }
                </tbody>
            </table>
            <div className="d-flex justify-content-between w-50">
                <button type="button" className="btn btn-primary"><Link className="text-light text-decoration-none" href='/order/add'>Register</Link></button>
                <button type="button" className="btn btn-warning"><Link className="text-light text-decoration-none" href='/order/edit'>Edit</Link></button>
                <button type="button" className="btn btn-danger"><Link className="text-light text-decoration-none" href='/order/delete'>Delete</Link></button>
            </div>


        </Layout>
    )
}
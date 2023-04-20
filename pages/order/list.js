import Link from "next/link"
import { Layout } from "../../components/layout"
import { useEffect, useState } from "react";
import { geDataOrders } from '../../lib/order'
import useSWR from 'swr';


const fetcher = async () => {
   const res =  await fetch('/api/order/list')
   return await res.json();
}
export default function List() {
    const {data} = useSWR('/api/order/list', fetcher);
    var listOrder = data ? JSON.parse(data) : {};
    listOrder = listOrder.orders ? listOrder.orders : [];

    //handle deleteContact
    async function deleteContact(id){
       
    }

    return(
        <Layout>
            <h3>List User</h3>
            <button type="button" className="btn btn-primary"><Link className="text-light" href='/contact/add'>Add</Link></button>
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
                        <th scope="col" rowSpan={2}>Số người</th>
                        <th scope="col" rowSpan={2}>Chi phí</th>
                        <th rowSpan={2}></th>
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
                                <tr key={order.orderNumber}>
                                    <th scope="row"><Link href={`/contact/edit/${order.orderNumber}`}>{++index}</Link> </th>
                                    <td>{order.orderNumber}</td>
                                    <td>{order.orderStatus}</td>
                                    <td>{order.orderDay}</td>
                                    <td>{order.estimateStartDate}</td>
                                    <td>
                                        <tr>
                                            {order.orderDepartment}
                                        </tr>
                                        <tr>
                                            {order.contractStatus}
                                        </tr>
                                    </td>
                                    <td>
                                        <tr>
                                            {order.workplaceDepartment}
                                        </tr>
                                        <tr>
                                            {order.career}
                                        </tr>
                                    </td>
                                    <td>{order.numPeopleUndecided}</td>
                                    <td>{order.numPeopleUndecided2}</td>
                                    <td>{order.fee}</td>
                                    <td>
                                        <button type="button" className="btn btn-secondary" onClick={() => {
                                            deleteContact(contact.id)
                                        }}>Delete</button>
                                    </td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </Layout>
    )
}
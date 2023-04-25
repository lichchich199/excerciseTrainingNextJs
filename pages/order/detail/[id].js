import Router from 'next/router'

import { Layout } from '../../../components/layout';
import FormOrder from '../../../components/order/FormOrder';
import { useEffect, useState } from 'react';
import { convertItemDynomoDbToObject } from '../../../components/order/orderHelper';
import Link from "next/link"

 export default function Edit({orderNumber}) {
    const [order, setOrder] = useState({});

    // handle add order
    async function UpdateOrder (data) {
        const response = await fetch('/api/order/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "orderNumber": data?.orderNumber,
                "orderStatus": data?.orderStatus,
                "orderDay": data?.orderDay,
                "estimateStartDate": data?.estimateStartDate,
                "orderDepartment": data?.orderDepartment,
                "contractStatus": data?.contractStatus,
                "workplaceDepartment": data?.workplaceDepartment,
                "career": data?.career,
                "numPeopleOrder": data?.numPeopleOrder,
                "numPeopleUndecided": data?.numPeopleUndecided,
                "numPeopleUndecided2": data?.numPeopleUndecided2,
                "fee": data?.fee,
                "addressOrder": data?.addressOrder,
                "info1": data?.info1,
                "info2": data?.info2
            })
        })
        if(!response.ok) {
            throw new Error(response.statusText)
        }
        return await response.json()
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/order/getItem?orderNumber=${orderNumber}`).then(res => res.json()).catch()
            setOrder(response.Item);
            return response
        }
        fetchData();
    }, [orderNumber])

    return (
        <Layout>
            {order ?  <div className="card m-3">
                <h5 className="card-header">Edit Order</h5>
                <div className="card-body">
                    <FormOrder 
                        onSubmit={async (data) => {
                            event.preventDefault()
                            try {
                                await UpdateOrder(data)
                                Router.push('/order/list')
                            } catch (error) {
                                console.log('error:', error)
                            }}}
                        titleButton='Edit'
                        valuesEdit = {convertItemDynomoDbToObject(order)}
                    />
                </div>
            </div> : <div> <div className="alert alert-danger">Order does not exist.</div> <button type="button" className="btn btn-info"><Link href={`/order/list`}>Back to List</Link></button></div>}
        </Layout>
    );
}

// get param from url and set to props
export async function getServerSideProps({ params }) {
    return {
        props: { orderNumber: params?.id}
    }
  }
import Router from 'next/router'

import { Layout } from '../../../components/layout';
import FormOrder from '../../../components/order/FormOrder';
import { useEffect, useState } from 'react';
import { convertItemDynomoDbToObject } from '../../../components/order/orderHelper';

 export default function Edit({orderNumber}) {
    console.log('orderNumber:', orderNumber)
    const [order, setOrder] = useState({});
    const [orderNum, setOrderNum] = useState(orderNumber);

    // handle add order
    async function UpdateOrder (data) {
        const response = await fetch('/api/order/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
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
        console.log('res 30', response)
        if(!response.ok) {
            throw new Error(response.statusText)
        }
        return await response.json()
    }

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`/api/order/getItem?orderNumber=${orderNumber}`).then(res => res.json()).catch()
            // if(!response.ok) {
            //     console.log(response.statusText)
            // }
            setOrder(response.Item);
            return response
        }
        fetchData();
    }, [orderNumber])
    console.log('line52:',order )

    return (
        <Layout>
            <div className="card m-3">
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
            </div>
        </Layout>
    );
}

// get param from url and set to props
export async function getServerSideProps({ params }) {
    console.log(params)
    return {
        props: { orderNumber: params?.id}
    }
  }
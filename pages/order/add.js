import Router from 'next/router'

import { Layout } from '../../components/layout';
import FormOrder from '../../components/order/FormOrder';
import { useState } from 'react';

 export default function Add() {
    // handle add order
    async function InsertOrder (data) {
        console.log('insert',data);
        const response = await fetch('/api/order/add', {
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

    return (
        <Layout>
            <div className="card m-3">
                <h5 className="card-header">Insert Order</h5>
                <div className="card-body">
                    <FormOrder 
                        onSubmit={async (data) => {
                            event.preventDefault()
                            try {
                                await InsertOrder(data)
                                Router.push('/order/list')
                            } catch (error) {
                                console.log('error:', error)
                            }}}
                        titleButton='Add'
                    />
                </div>
            </div>
        </Layout>
    );
}

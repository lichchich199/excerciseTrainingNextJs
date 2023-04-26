import { client, UpdateItemCommand } from "../../../lib/dbConfig";

export default async function handler(req, res) {
  var order = req.body;
    const params = {
        TableName: 'Order',
        UpdateExpression: `SET 
            #orderStatus = :orderStatus, 
            #orderDay = :orderDay, 
            #estimateStartDate = :estimateStartDate, 
            #orderDepartment = :orderDepartment, 
            #contractStatus = :contractStatus, 
            #workplaceDepartment = :workplaceDepartment, 
            #career = :career, 
            #numPeopleOrder = :numPeopleOrder, 
            #numPeopleUndecided = :numPeopleUndecided, 
            #numPeopleUndecided2 = :numPeopleUndecided2, 
            #fee = :fee, 
            #addressOrder = :addressOrder, 
            #info1 = :info1, 
            #info2 = :info2`,
        ExpressionAttributeNames:{
            "#orderStatus": "orderStatus",
            "#orderDay": "orderDay",
            "#estimateStartDate": "estimateStartDate",
            "#orderDepartment": "orderDepartment",
            "#contractStatus": "contractStatus",
            "#workplaceDepartment": "workplaceDepartment",
            "#career": "career",
            "#numPeopleOrder": "numPeopleOrder",
            "#numPeopleUndecided": "numPeopleUndecided",
            "#numPeopleUndecided2": "numPeopleUndecided2",
            "#fee": "fee",
            "#addressOrder": "addressOrder",
            "#info1": "info1",
            "#info2": "info2",
        },
        ExpressionAttributeValues: {
            ":orderStatus": { "S": order.orderStatus },
            ":orderDay": { "S": order.orderDay },
            ":estimateStartDate": { "S": order.estimateStartDate },
            ":orderDepartment": { "S": order.orderDepartment },
            ":contractStatus": { "S": order.contractStatus },
            ":workplaceDepartment": { "S": order.workplaceDepartment },
            ":career": { "S": order.career },
            ":numPeopleOrder": { "S": order.numPeopleOrder },
            ":numPeopleUndecided": { "S": order.numPeopleUndecided },
            ":numPeopleUndecided2": { "S": order.numPeopleUndecided2 || '' },
            ":fee": { "S": order.fee },
            ":addressOrder": { "S": order.addressOrder },
            ":info1": { "S": order.info1 },
            ":info2": { "S": order.info2 },
        },
        Key: {
            "orderNumber": {
              "S" : order.orderNumber
            }
        },
        ReturnValues: 'ALL_NEW'
    };
    const ress = await client.send(new UpdateItemCommand(params))
    res.status(200).json(ress); 
}
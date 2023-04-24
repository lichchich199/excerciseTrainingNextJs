import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import

const ACCESS_KEY = 'hieu';
const SECRET_KEY = 'hieu';
const client = new DynamoDBClient({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY, 
    region: 'us-east-1', 
    endpoint: 'http://127.0.0.1:4566'
});

export default async function handler(req, res) {
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
            ":orderStatus": { "S": "NEW" },
            ":orderDay": { "S": "2023-12-30" },
            ":estimateStartDate": { "S": "2023-12-30" },
            ":orderDepartment": { "S": "orderDepartment" },
            ":contractStatus": { "S": "contractStatus" },
            ":workplaceDepartment": { "S": "Very hworkplaceDepartment" },
            ":career": { "S": "inviroment" },
            ":numPeopleOrder": { "S": "10" },
            ":numPeopleUndecided": { "S": "11" },
            ":numPeopleUndecided2": { "S": "12" },
            ":fee": { "S": "30000" },
            ":addressOrder": { "S": "ok" },
            ":info1": { "S": "Very happy" },
            ":info2": { "S": "happy" },
        },
        Key: {
            "orderNumber": {
              "S" : "3"
            }
        },
        ReturnValues: 'ALL_NEW'
    };
    const ress = await client.send(new UpdateItemCommand(params))
    // console.log(ress)
    console.log(ress.Item);
    res.status(200).json(ress); 
}
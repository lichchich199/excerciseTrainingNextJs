import { DynamoDBClient, BatchWriteItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import

const ACCESS_KEY = 'hieu';
const SECRET_KEY = 'hieu';
const client = new DynamoDBClient({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY, 
    region: 'us-east-1', 
    endpoint: 'http://127.0.0.1:4566'
});

export function generateRowId(shardId /* range 0-64 for shard/slot */) {
    var CUSTOMEPOCH = 1300000000000; // artificial epoch
    var ts = new Date().getTime() - CUSTOMEPOCH; // limit to recent
    var randid = Math.floor(Math.random() * 512);
    ts = (ts * 64);   // bit-shift << 6
    ts = ts + shardId;
    return (ts * 512) + randid;
}

export default async function handler(req, res) {
    console.log('req.body', req.body)
    if(req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }
    var order = req.body
    // validate
    const input = {
        "RequestItems": {
        "Order": [
            {
            "PutRequest": {
                "Item": {
                "orderNumber": {
                    "S": generateRowId(4)+''
                },
                "orderStatus": {
                    "S": order?.orderStatus
                },
                "orderDay": {
                    "S": order?.orderDay,
                },
                "estimateStartDate": {
                    "S":  order?.estimateStartDate,
                },
                "orderDepartment": {
                    "S": order?.orderDepartment,
                },
                "contractStatus": {
                    "S": order?.contractStatus,
                },
                "workplaceDepartment": {
                    "S": order?.workplaceDepartment,
                },
                "career": {
                    "S": order?.career,
                },
                "numPeopleOrder": {
                    "S": order?.numPeopleOrder,
                },
                "numPeopleUndecided": {
                    "S": order?.numPeopleUndecided,
                },
                "numPeopleUndecided2": {
                    "S": order?.numPeopleUndecided2 || '',
                },
                "fee": {
                    "S": order?.fee,
                },
                "addressOrder": {
                    "S": order?.addressOrder,
                },
                "info1": {
                    "S": order?.info1,
                },
                "info2": {
                    "S": order?.info2,
                }
                }
            }
            }
        ]
        }
    };
    const command = new BatchWriteItemCommand(input);
    const ress = await client.send(command);
    // console.log(ress)
    res.status(200).json(ress); 
}
import { DynamoDBClient, DeleteItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import

const ACCESS_KEY = 'hieu';
const SECRET_KEY = 'hieu';
const client = new DynamoDBClient({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY, 
    region: 'us-east-1', 
    endpoint: 'http://127.0.0.1:4566'
});

export default async function handler(req, res) {
    if(req.method !== 'POST') {
      return res.status(405).json({message: 'Method not allowed'});
    }
    // validate
    const input = {
        TableName: "Order", //TABLE_NAME
        Key: {
            'orderNumber': { 'S': req.body.orderNumber },
        },
      };
    const command = new DeleteItemCommand(input);
    const ress = await client.send(command);
    res.status(200).json(ress); 
}
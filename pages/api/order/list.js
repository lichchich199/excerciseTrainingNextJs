// import { readFileS3FromBucket } from "../../../services/s3";

// export default async (req, res) => {
//     const listOrder = await readFileS3FromBucket('order', 'orders.json')
//     res.status(200).json(listOrder); 
// }


import { DynamoDBClient, QueryCommand, ScanCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import

const ACCESS_KEY = 'hieu';
const SECRET_KEY = 'hieu';
const client = new DynamoDBClient({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY, 
    region: 'us-east-1', 
    endpoint: 'http://127.0.0.1:4566'
});

export default async (req, res) => {
    const input = {
        TableName: "Order", //TABLE_NAME
        // KeyConditionExpression:"#company = :companyValue and #factory = :factoryValue",
        // ExpressionAttributeNames: {
        //     "#company":"company",
        //     "#factory":"factory"
        //     },
        // ExpressionAttributeValues: {
        //     ":companyValue": company,
        //     ":factoryValue": factory
        //     }
        };
    const command = new ScanCommand(input);
    const ress = await client.send(command);
    res.status(200).json(ress); 
}
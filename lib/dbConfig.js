import { DynamoDBClient, BatchWriteItemCommand, ScanCommand, GetItemCommand, UpdateItemCommand, DeleteItemCommand} from "@aws-sdk/client-dynamodb"; // ES Modules import

const client = new DynamoDBClient({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    region: process.env.AWS_REGION, 
    endpoint: process.env.END_POINT
});

export {client, BatchWriteItemCommand, ScanCommand, GetItemCommand, UpdateItemCommand, DeleteItemCommand}
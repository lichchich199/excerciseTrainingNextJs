import { client, DeleteItemCommand } from "../../../lib/dbConfig";

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
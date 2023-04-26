import { client, GetItemCommand } from "../../../lib/dbConfig";

export default async function handler(req, res) {
    // validate
    console.log( 'req.query.orderNumber',req.query.orderNumber)
    const input = {
        TableName: "Order", //TABLE_NAME
        Key: {
            'orderNumber': { 'S': req.query.orderNumber || '' },
        },
      };
    const command = new GetItemCommand(input);
    const ress = await client.send(command);
    // console.log(ress)
    console.log(ress.Item);
    res.status(200).json(ress); 
}
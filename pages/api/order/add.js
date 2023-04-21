import AWS from 'aws-sdk'
import * as uuid from 'uuid';

AWS.config.update({
    accessKeyId: 'hieu',
    secretAccessKey: 'hieu', 
    region: "local",
    endpoint: "http://127.0.0.1:4566"
});

export default async function handler(req, res) {
    
    if(req.method !== 'POST') {
        return res.status(405).json({message: 'Method not allowed'});
    }
    var data = req.body
    console.log('line 9',data.gender);
    
    // update to dynamoDB

    // validate lại data
    var docClient = new AWS.DynamoDB.DocumentClient();
    var params = {
        TableName: "Order",
        Item: {
            // "orderNumber": uuid.v4(),
            // "orderStatus": data.orderStatus,
            // "orderDay": data.orderDay,
            // "estimateStartDate": data.estimateStartDate,
            // "orderDepartment": data.orderDepartment,
            // "contractStatus": data.contractStatus,
            // "workplaceDepartment": data.workplaceDepartment,
            // "career": data.career,
            // "numPeopleOrder": data.numPeopleOrder,
            // "numPeopleUndecided": data.numPeopleUndecided,
            // "numPeopleUndecided2": data.numPeopleUndecided2,
            // "fee": data.fee,
            // "addressOrder": data.addressOrder,
            // "info1": data.info1,
            // "info2": data.info2
        }
    };
    docClient.put(params, function(err, data) {
        if (err) {
            console.error(err);
            return res.status(500).json({message: 'Insert fail'})
        } else {
            console.log("PutItem succeeded:", uuid.v4());
            return res.status(200).json({message:'Success'}); 
        }
     });

  }
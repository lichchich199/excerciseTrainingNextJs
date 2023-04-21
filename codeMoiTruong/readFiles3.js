
import { S3Client, GetObjectCommand   } from "@aws-sdk/client-s3"; // ES Modules import
import config from './config.json' assert { type: "json" };

const REGION = config.REGION;
const ACCESS_KEY = config.AWS_ACCESS_KEY;
const SECRET_KEY = config.AWS_SECRET_KEY;
// const { S3Client, GetBucketAclCommand } = require("@aws-sdk/client-s3"); // CommonJS import
const client = new S3Client({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY, 
    region: 'ap-southeast-1', 
    endpoint: 'http://127.0.0.1:4566',
    s3BucketEndpoint: false,
    s3ForcePathStyle: true, 
});
const input = { // GetBucketAclRequest
  Bucket: "order", // required
  Key: "orders.json", // required

};
const command = new GetObjectCommand (input);
// const response = await client.send(command);
// console.log(response);
try {
    const response = await client.send(command);
    // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
    const str = await response.Body.transformToString();
    console.log(str);
  } catch (err) {
    console.error(err);
  }
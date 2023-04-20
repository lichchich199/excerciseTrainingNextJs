import { S3Client, GetObjectCommand   } from "@aws-sdk/client-s3";

// read s3 file by bucket
export const readFileS3FromBucket = async function(bucketName, fileName) {
    const client = new S3Client({
        accessKeyId: process.env.ACCESS_KEY,
        secretAccessKey: process.env.SECRET_KEY, 
        region: process.env.REGION, 
        endpoint: process.env.END_POINT,
        s3BucketEndpoint: false,
        s3ForcePathStyle: true, 
    });
    const input = { // GetBucketAclRequest
      Bucket: bucketName, // required
      Key: fileName, // required
    };
    const command = new GetObjectCommand (input);
    var str='{}'
    try {
        const response = await client.send(command);
        // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.
        str = await response.Body.transformToString();
    } catch (err) {
        console.error(err);
    }
    return str
}
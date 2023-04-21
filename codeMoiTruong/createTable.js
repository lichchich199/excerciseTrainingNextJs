import { DynamoDBClient, CreateTableCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
import config from './config.json' assert { type: "json" };

const ACCESS_KEY = config.AWS_ACCESS_KEY;
const SECRET_KEY = config.AWS_SECRET_KEY;
const client = new DynamoDBClient({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY, 
    region: 'local', 
    endpoint: 'http://127.0.0.1:4566'
});
const input = { // CreateTableInput
  AttributeDefinitions: [ // AttributeDefinitions // required
    { // AttributeDefinition
      AttributeName: "orderNumber", // required
      AttributeType: "S", // required
    },
    // {
    //     AttributeName: "OrderId",
    //     AttributeType: "S"
    // },
    // {
    //     AttributeName: "Amount",
    //     AttributeType: "N"
    // }
  ],
  TableName: "Order", // required
  KeySchema: [ // KeySchema // required
    { // KeySchemaElement
      AttributeName: "orderNumber", // required
      KeyType: "HASH", // required
    },
    // { // KeySchemaElement
    //     AttributeName: "OrderId", // required
    //     KeyType: "RANGE", // required
    //   },
    //   { // KeySchemaElement
    //     AttributeName: "Amount", // required
    //     KeyType: "RANGE", // required
    //   },
  ],
  LocalSecondaryIndexes: [ // LocalSecondaryIndexList
    // { // LocalSecondaryIndex
    //   IndexName: "UserAmountIndex", // required
    //   KeySchema: [ // required
    //     // {
    //     //   AttributeName: "Username", // required
    //     //   KeyType: "HASH", // required
    //     // },
    //     // {
    //     //     AttributeName: "Amount", // required
    //     //     KeyType: "RANGE", // required
    //     //   },
    // //   ],
    //   Projection: { // Projection
    //     ProjectionType: "KEYS_ONLY",
    //   },
    // },
  ],
  ProvisionedThroughput : {
    ReadCapacityUnits: 1,
    WriteCapacityUnits: 1
  }
//   GlobalSecondaryIndexes: [ // GlobalSecondaryIndexList
//     { // GlobalSecondaryIndex
//       IndexName: "orderNumber", // required
//       KeySchema: [ // required
//         {
//           AttributeName: "orderNumber", // required
//           KeyType: "HASH", // required
//         },
//       ],
//       Projection: {
//         ProjectionType: "ALL",
//         NonKeyAttributes: [
//           "orderNumber",
//         ],
//       },
//       ProvisionedThroughput: { // ProvisionedThroughput
//         ReadCapacityUnits: Number("long"), // required
//         WriteCapacityUnits: Number("long"), // required
//       },
//     },
//   ],
//   BillingMode: "PROVISIONED" || "PAY_PER_REQUEST",
//   ProvisionedThroughput: {
//     ReadCapacityUnits: Number("long"), // required
//     WriteCapacityUnits: Number("long"), // required
//   },
//   StreamSpecification: { // StreamSpecification
//     StreamEnabled: true || false, // required
//     StreamViewType: "NEW_IMAGE" || "OLD_IMAGE" || "NEW_AND_OLD_IMAGES" || "KEYS_ONLY",
//   },
//   SSESpecification: { // SSESpecification
//     Enabled: true || false,
//     SSEType: "AES256" || "KMS",
//     KMSMasterKeyId: "STRING_VALUE",
//   },
//   Tags: [ // TagList
//     { // Tag
//       Key: "STRING_VALUE", // required
//       Value: "STRING_VALUE", // required
//     },
//   ],
//   TableClass: "STANDARD",
//   DeletionProtectionEnabled: true || false,
};
const command = new CreateTableCommand(input);
const response = await client.send(command);
console.log(response)
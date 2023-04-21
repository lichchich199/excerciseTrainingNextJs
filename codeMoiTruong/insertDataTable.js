import { DynamoDBClient, BatchWriteItemCommand } from "@aws-sdk/client-dynamodb"; // ES Modules import
import config from './config.json' assert { type: "json" };
import fs from 'fs'

const ACCESS_KEY = config.AWS_ACCESS_KEY;
const SECRET_KEY = config.AWS_SECRET_KEY;
const client = new DynamoDBClient({
    accessKeyId: ACCESS_KEY,
    secretAccessKey: SECRET_KEY, 
    region: 'local', 
    endpoint: 'http://127.0.0.1:4566'
});

let orders = JSON.parse(fs.readFileSync('orders.json', 'utf8'));
orders.forEach( async function(order) {
// This example adds three new items to the Music table using a batch of three PutItem requests.
const input = {
    "RequestItems": {
      "Order": [
        {
          "PutRequest": {
            "Item": {
              "orderNumber": {
                "S": order.orderNumber
              },
              "orderStatus": {
                "S": order.orderStatus
              },
              "estimateStartDate": {
                "S": order.estimateStartDate
              },
              "orderDepartment": {
                "S": order.orderDepartment
              },
              "contractStatus": {
                "S": order.contractStatus
              },
              "workplaceDepartment": {
                "S": order.workplaceDepartment
              },
              "career": {
                "S": order.career
              },
              "numPeopleOrder": {
                "S": order.numPeopleOrder
              },
              "numPeopleUndecided": {
                "S": order.numPeopleUndecided
              },
              "numPeopleUndecided2": {
                "S": order.numPeopleUndecided2
              },
              "fee": {
                "S": order.fee
              },
              "addressOrder": {
                "S": order.addressOrder
              },
              "info1": {
                "S": order.info1
              },
              "info2": {
                "S": order.info2
              }
            }
          }
        // },
        // {
        //   "PutRequest": {
        //     "Item": {
        //       "AlbumTitle": {
        //         "S": "Songs About Life"
        //       },
        //       "Artist": {
        //         "S": "Acme Band"
        //       },
        //       "SongTitle": {
        //         "S": "Happy Day"
        //       }
        //     }
        //   }
        // },
        // {
        //   "PutRequest": {
        //     "Item": {
        //       "AlbumTitle": {
        //         "S": "Blue Sky Blues"
        //       },
        //       "Artist": {
        //         "S": "No One You Know"
        //       },
        //       "SongTitle": {
        //         "S": "Scared of My Shadow"
        //       }
        //     }
        //   }
        }
      ]
    }
  };
  const command = new BatchWriteItemCommand(input);
  const res = await client.send(command);
  console.log(res)
});
  // example id: to-add-multiple-items-to-a-table-1476118519747
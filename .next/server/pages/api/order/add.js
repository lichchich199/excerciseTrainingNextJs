"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/order/add";
exports.ids = ["pages/api/order/add"];
exports.modules = {

/***/ "@aws-sdk/client-dynamodb":
/*!*******************************************!*\
  !*** external "@aws-sdk/client-dynamodb" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-dynamodb");

/***/ }),

/***/ "(api)/./lib/dbConfig.js":
/*!*************************!*\
  !*** ./lib/dbConfig.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BatchWriteItemCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.BatchWriteItemCommand),\n/* harmony export */   \"DeleteItemCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DeleteItemCommand),\n/* harmony export */   \"GetItemCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.GetItemCommand),\n/* harmony export */   \"ScanCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.ScanCommand),\n/* harmony export */   \"UpdateItemCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.UpdateItemCommand),\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n // ES Modules import\nconst client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDBClient({\n    accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n    region: process.env.AWS_REGION,\n    endpoint: process.env.END_POINT\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGJDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUosQ0FBQyxvQkFBb0I7QUFFeEssTUFBTU0sU0FBUyxJQUFJTixvRUFBY0EsQ0FBQztJQUM5Qk8sYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7SUFDMUNDLGlCQUFpQkgsUUFBUUMsR0FBRyxDQUFDRyxxQkFBcUI7SUFDbERDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssVUFBVTtJQUM5QkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxTQUFTO0FBQ25DO0FBRXlHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2RiQ29uZmlnLmpzPzM2MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJDbGllbnQsIEJhdGNoV3JpdGVJdGVtQ29tbWFuZCwgU2NhbkNvbW1hbmQsIEdldEl0ZW1Db21tYW5kLCBVcGRhdGVJdGVtQ29tbWFuZCwgRGVsZXRlSXRlbUNvbW1hbmR9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjsgLy8gRVMgTW9kdWxlcyBpbXBvcnRcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBEeW5hbW9EQkNsaWVudCh7XHJcbiAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQsXHJcbiAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSwgXHJcbiAgICByZWdpb246IHByb2Nlc3MuZW52LkFXU19SRUdJT04sIFxyXG4gICAgZW5kcG9pbnQ6IHByb2Nlc3MuZW52LkVORF9QT0lOVFxyXG59KTtcclxuXHJcbmV4cG9ydCB7Y2xpZW50LCBCYXRjaFdyaXRlSXRlbUNvbW1hbmQsIFNjYW5Db21tYW5kLCBHZXRJdGVtQ29tbWFuZCwgVXBkYXRlSXRlbUNvbW1hbmQsIERlbGV0ZUl0ZW1Db21tYW5kfSJdLCJuYW1lcyI6WyJEeW5hbW9EQkNsaWVudCIsIkJhdGNoV3JpdGVJdGVtQ29tbWFuZCIsIlNjYW5Db21tYW5kIiwiR2V0SXRlbUNvbW1hbmQiLCJVcGRhdGVJdGVtQ29tbWFuZCIsIkRlbGV0ZUl0ZW1Db21tYW5kIiwiY2xpZW50IiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwiZW52IiwiQVdTX0FDQ0VTU19LRVlfSUQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJBV1NfU0VDUkVUX0FDQ0VTU19LRVkiLCJyZWdpb24iLCJBV1NfUkVHSU9OIiwiZW5kcG9pbnQiLCJFTkRfUE9JTlQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/dbConfig.js\n");

/***/ }),

/***/ "(api)/./pages/api/order/add.js":
/*!********************************!*\
  !*** ./pages/api/order/add.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"generateRowId\": () => (/* binding */ generateRowId)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/dbConfig */ \"(api)/./lib/dbConfig.js\");\n// import { BatchWriteItemCommand } from \"@aws-sdk/client-dynamodb\"; // ES Modules import\n\nfunction generateRowId(shardId /* range 0-64 for shard/slot */ ) {\n    var CUSTOMEPOCH = 1300000000000; // artificial epoch\n    var ts = new Date().getTime() - CUSTOMEPOCH; // limit to recent\n    var randid = Math.floor(Math.random() * 512);\n    ts = ts * 64; // bit-shift << 6\n    ts = ts + shardId;\n    return ts * 512 + randid;\n}\nasync function handler(req, res) {\n    console.log(\"req.body\", req.body);\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    var order = req.body;\n    // validate\n    const input = {\n        \"RequestItems\": {\n            \"Order\": [\n                {\n                    \"PutRequest\": {\n                        \"Item\": {\n                            \"orderNumber\": {\n                                \"S\": generateRowId(4) + \"\"\n                            },\n                            \"orderStatus\": {\n                                \"S\": order?.orderStatus\n                            },\n                            \"orderDay\": {\n                                \"S\": order?.orderDay\n                            },\n                            \"estimateStartDate\": {\n                                \"S\": order?.estimateStartDate\n                            },\n                            \"orderDepartment\": {\n                                \"S\": order?.orderDepartment\n                            },\n                            \"contractStatus\": {\n                                \"S\": order?.contractStatus\n                            },\n                            \"workplaceDepartment\": {\n                                \"S\": order?.workplaceDepartment\n                            },\n                            \"career\": {\n                                \"S\": order?.career\n                            },\n                            \"numPeopleOrder\": {\n                                \"S\": order?.numPeopleOrder\n                            },\n                            \"numPeopleUndecided\": {\n                                \"S\": order?.numPeopleUndecided\n                            },\n                            \"numPeopleUndecided2\": {\n                                \"S\": order?.numPeopleUndecided2 || \"\"\n                            },\n                            \"fee\": {\n                                \"S\": order?.fee\n                            },\n                            \"addressOrder\": {\n                                \"S\": order?.addressOrder\n                            },\n                            \"info1\": {\n                                \"S\": order?.info1\n                            },\n                            \"info2\": {\n                                \"S\": order?.info2\n                            }\n                        }\n                    }\n                }\n            ]\n        }\n    };\n    const command = new _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__.BatchWriteItemCommand(input);\n    const ress = await _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__.client.send(command);\n    // console.log(ress)\n    res.status(200).json(ress);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvYWRkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHlGQUF5RjtBQUNuQjtBQUUvRCxTQUFTRSxjQUFjQyxRQUFRLDZCQUE2QixHQUE5QixFQUFrQztJQUNuRSxJQUFJQyxjQUFjLGVBQWUsbUJBQW1CO0lBQ3BELElBQUlDLEtBQUssSUFBSUMsT0FBT0MsT0FBTyxLQUFLSCxhQUFhLGtCQUFrQjtJQUMvRCxJQUFJSSxTQUFTQyxLQUFLQyxLQUFLLENBQUNELEtBQUtFLE1BQU0sS0FBSztJQUN4Q04sS0FBTUEsS0FBSyxJQUFPLGlCQUFpQjtJQUNuQ0EsS0FBS0EsS0FBS0Y7SUFDVixPQUFPLEtBQU0sTUFBT0s7QUFDeEIsQ0FBQztBQUVjLGVBQWVJLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDQyxRQUFRQyxHQUFHLENBQUMsWUFBWUgsSUFBSUksSUFBSTtJQUNoQyxJQUFHSixJQUFJSyxNQUFNLEtBQUssUUFBUTtRQUN0QixPQUFPSixJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFNBQVM7UUFBb0I7SUFDOUQsQ0FBQztJQUNELElBQUlDLFFBQVFULElBQUlJLElBQUk7SUFDcEIsV0FBVztJQUNYLE1BQU1NLFFBQVE7UUFDVixnQkFBZ0I7WUFDaEIsU0FBUztnQkFDTDtvQkFDQSxjQUFjO3dCQUNWLFFBQVE7NEJBQ1IsZUFBZTtnQ0FDWCxLQUFLckIsY0FBYyxLQUFHOzRCQUMxQjs0QkFDQSxlQUFlO2dDQUNYLEtBQUtvQixPQUFPRTs0QkFDaEI7NEJBQ0EsWUFBWTtnQ0FDUixLQUFLRixPQUFPRzs0QkFDaEI7NEJBQ0EscUJBQXFCO2dDQUNqQixLQUFNSCxPQUFPSTs0QkFDakI7NEJBQ0EsbUJBQW1CO2dDQUNmLEtBQUtKLE9BQU9LOzRCQUNoQjs0QkFDQSxrQkFBa0I7Z0NBQ2QsS0FBS0wsT0FBT007NEJBQ2hCOzRCQUNBLHVCQUF1QjtnQ0FDbkIsS0FBS04sT0FBT087NEJBQ2hCOzRCQUNBLFVBQVU7Z0NBQ04sS0FBS1AsT0FBT1E7NEJBQ2hCOzRCQUNBLGtCQUFrQjtnQ0FDZCxLQUFLUixPQUFPUzs0QkFDaEI7NEJBQ0Esc0JBQXNCO2dDQUNsQixLQUFLVCxPQUFPVTs0QkFDaEI7NEJBQ0EsdUJBQXVCO2dDQUNuQixLQUFLVixPQUFPVyx1QkFBdUI7NEJBQ3ZDOzRCQUNBLE9BQU87Z0NBQ0gsS0FBS1gsT0FBT1k7NEJBQ2hCOzRCQUNBLGdCQUFnQjtnQ0FDWixLQUFLWixPQUFPYTs0QkFDaEI7NEJBQ0EsU0FBUztnQ0FDTCxLQUFLYixPQUFPYzs0QkFDaEI7NEJBQ0EsU0FBUztnQ0FDTCxLQUFLZCxPQUFPZTs0QkFDaEI7d0JBQ0E7b0JBQ0o7Z0JBQ0E7YUFDSDtRQUNEO0lBQ0o7SUFDQSxNQUFNQyxVQUFVLElBQUlyQyxnRUFBcUJBLENBQUNzQjtJQUMxQyxNQUFNZ0IsT0FBTyxNQUFNdkMsc0RBQVcsQ0FBQ3NDO0lBQy9CLG9CQUFvQjtJQUNwQnhCLElBQUlLLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNtQjtBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVyL2FkZC5qcz83MWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEJhdGNoV3JpdGVJdGVtQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjsgLy8gRVMgTW9kdWxlcyBpbXBvcnRcclxuaW1wb3J0IHsgY2xpZW50LCBCYXRjaFdyaXRlSXRlbUNvbW1hbmQgfSBmcm9tIFwiLi4vLi4vLi4vbGliL2RiQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSb3dJZChzaGFyZElkIC8qIHJhbmdlIDAtNjQgZm9yIHNoYXJkL3Nsb3QgKi8pIHtcclxuICAgIHZhciBDVVNUT01FUE9DSCA9IDEzMDAwMDAwMDAwMDA7IC8vIGFydGlmaWNpYWwgZXBvY2hcclxuICAgIHZhciB0cyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gQ1VTVE9NRVBPQ0g7IC8vIGxpbWl0IHRvIHJlY2VudFxyXG4gICAgdmFyIHJhbmRpZCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDUxMik7XHJcbiAgICB0cyA9ICh0cyAqIDY0KTsgICAvLyBiaXQtc2hpZnQgPDwgNlxyXG4gICAgdHMgPSB0cyArIHNoYXJkSWQ7XHJcbiAgICByZXR1cm4gKHRzICogNTEyKSArIHJhbmRpZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgY29uc29sZS5sb2coJ3JlcS5ib2R5JywgcmVxLmJvZHkpXHJcbiAgICBpZihyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe21lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgb3JkZXIgPSByZXEuYm9keVxyXG4gICAgLy8gdmFsaWRhdGVcclxuICAgIGNvbnN0IGlucHV0ID0ge1xyXG4gICAgICAgIFwiUmVxdWVzdEl0ZW1zXCI6IHtcclxuICAgICAgICBcIk9yZGVyXCI6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBcIlB1dFJlcXVlc3RcIjoge1xyXG4gICAgICAgICAgICAgICAgXCJJdGVtXCI6IHtcclxuICAgICAgICAgICAgICAgIFwib3JkZXJOdW1iZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiOiBnZW5lcmF0ZVJvd0lkKDQpKycnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJvcmRlclN0YXR1c1wiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTXCI6IG9yZGVyPy5vcmRlclN0YXR1c1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwib3JkZXJEYXlcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiOiBvcmRlcj8ub3JkZXJEYXksXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJlc3RpbWF0ZVN0YXJ0RGF0ZVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTXCI6ICBvcmRlcj8uZXN0aW1hdGVTdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJvcmRlckRlcGFydG1lbnRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiOiBvcmRlcj8ub3JkZXJEZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiY29udHJhY3RTdGF0dXNcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiOiBvcmRlcj8uY29udHJhY3RTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJ3b3JrcGxhY2VEZXBhcnRtZW50XCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlNcIjogb3JkZXI/LndvcmtwbGFjZURlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJjYXJlZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiOiBvcmRlcj8uY2FyZWVyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwibnVtUGVvcGxlT3JkZXJcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiOiBvcmRlcj8ubnVtUGVvcGxlT3JkZXIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJudW1QZW9wbGVVbmRlY2lkZWRcIjoge1xyXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiOiBvcmRlcj8ubnVtUGVvcGxlVW5kZWNpZGVkLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwibnVtUGVvcGxlVW5kZWNpZGVkMlwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTXCI6IG9yZGVyPy5udW1QZW9wbGVVbmRlY2lkZWQyIHx8ICcnLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIFwiZmVlXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlNcIjogb3JkZXI/LmZlZSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NPcmRlclwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTXCI6IG9yZGVyPy5hZGRyZXNzT3JkZXIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgXCJpbmZvMVwiOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJTXCI6IG9yZGVyPy5pbmZvMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBcImluZm8yXCI6IHtcclxuICAgICAgICAgICAgICAgICAgICBcIlNcIjogb3JkZXI/LmluZm8yLFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgQmF0Y2hXcml0ZUl0ZW1Db21tYW5kKGlucHV0KTtcclxuICAgIGNvbnN0IHJlc3MgPSBhd2FpdCBjbGllbnQuc2VuZChjb21tYW5kKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3MpXHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNzKTsgXHJcbn0iXSwibmFtZXMiOlsiY2xpZW50IiwiQmF0Y2hXcml0ZUl0ZW1Db21tYW5kIiwiZ2VuZXJhdGVSb3dJZCIsInNoYXJkSWQiLCJDVVNUT01FUE9DSCIsInRzIiwiRGF0ZSIsImdldFRpbWUiLCJyYW5kaWQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsIm9yZGVyIiwiaW5wdXQiLCJvcmRlclN0YXR1cyIsIm9yZGVyRGF5IiwiZXN0aW1hdGVTdGFydERhdGUiLCJvcmRlckRlcGFydG1lbnQiLCJjb250cmFjdFN0YXR1cyIsIndvcmtwbGFjZURlcGFydG1lbnQiLCJjYXJlZXIiLCJudW1QZW9wbGVPcmRlciIsIm51bVBlb3BsZVVuZGVjaWRlZCIsIm51bVBlb3BsZVVuZGVjaWRlZDIiLCJmZWUiLCJhZGRyZXNzT3JkZXIiLCJpbmZvMSIsImluZm8yIiwiY29tbWFuZCIsInJlc3MiLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/add.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order/add.js"));
module.exports = __webpack_exports__;

})();
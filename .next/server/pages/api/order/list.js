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
exports.id = "pages/api/order/list";
exports.ids = ["pages/api/order/list"];
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

/***/ "(api)/./pages/api/order/list.js":
/*!*********************************!*\
  !*** ./pages/api/order/list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/dbConfig */ \"(api)/./lib/dbConfig.js\");\n// import { readFileS3FromBucket } from \"../../../services/s3\";\n// export default async (req, res) => {\n//     const listOrder = await readFileS3FromBucket('order', 'orders.json')\n//     res.status(200).json(listOrder); \n// }\n// import { ScanCommand } from \"@aws-sdk/client-dynamodb\"; // ES Modules import\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const input = {\n        TableName: \"Order\"\n    };\n    const command = new _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__.ScanCommand(input);\n    const ress = await _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__.client.send(command);\n    res.status(200).json(ress);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLCtEQUErRDtBQUUvRCx1Q0FBdUM7QUFDdkMsMkVBQTJFO0FBQzNFLHdDQUF3QztBQUN4QyxJQUFJO0FBR0osK0VBQStFO0FBQ25CO0FBRTVELGlFQUFlLE9BQU9FLEtBQUtDLE1BQVE7SUFDL0IsTUFBTUMsUUFBUTtRQUNWQyxXQUFXO0lBVVg7SUFDSixNQUFNQyxVQUFVLElBQUlMLHNEQUFXQSxDQUFDRztJQUNoQyxNQUFNRyxPQUFPLE1BQU1QLHNEQUFXLENBQUNNO0lBQy9CSCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtBQUN6QixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVyL2xpc3QuanM/ODc5OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyByZWFkRmlsZVMzRnJvbUJ1Y2tldCB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9zM1wiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgICBjb25zdCBsaXN0T3JkZXIgPSBhd2FpdCByZWFkRmlsZVMzRnJvbUJ1Y2tldCgnb3JkZXInLCAnb3JkZXJzLmpzb24nKVxyXG4vLyAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obGlzdE9yZGVyKTsgXHJcbi8vIH1cclxuXHJcblxyXG4vLyBpbXBvcnQgeyBTY2FuQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjsgLy8gRVMgTW9kdWxlcyBpbXBvcnRcclxuaW1wb3J0IHsgY2xpZW50LCBTY2FuQ29tbWFuZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJDb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSB7XHJcbiAgICAgICAgVGFibGVOYW1lOiBcIk9yZGVyXCIsIC8vVEFCTEVfTkFNRVxyXG4gICAgICAgIC8vIEtleUNvbmRpdGlvbkV4cHJlc3Npb246XCIjY29tcGFueSA9IDpjb21wYW55VmFsdWUgYW5kICNmYWN0b3J5ID0gOmZhY3RvcnlWYWx1ZVwiLFxyXG4gICAgICAgIC8vIEV4cHJlc3Npb25BdHRyaWJ1dGVOYW1lczoge1xyXG4gICAgICAgIC8vICAgICBcIiNjb21wYW55XCI6XCJjb21wYW55XCIsXHJcbiAgICAgICAgLy8gICAgIFwiI2ZhY3RvcnlcIjpcImZhY3RvcnlcIlxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcclxuICAgICAgICAvLyAgICAgXCI6Y29tcGFueVZhbHVlXCI6IGNvbXBhbnksXHJcbiAgICAgICAgLy8gICAgIFwiOmZhY3RvcnlWYWx1ZVwiOiBmYWN0b3J5XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBTY2FuQ29tbWFuZChpbnB1dCk7XHJcbiAgICBjb25zdCByZXNzID0gYXdhaXQgY2xpZW50LnNlbmQoY29tbWFuZCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNzKTsgXHJcbn0iXSwibmFtZXMiOlsiY2xpZW50IiwiU2NhbkNvbW1hbmQiLCJyZXEiLCJyZXMiLCJpbnB1dCIsIlRhYmxlTmFtZSIsImNvbW1hbmQiLCJyZXNzIiwic2VuZCIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/list.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order/list.js"));
module.exports = __webpack_exports__;

})();
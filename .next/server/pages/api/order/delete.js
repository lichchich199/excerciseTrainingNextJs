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
exports.id = "pages/api/order/delete";
exports.ids = ["pages/api/order/delete"];
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

/***/ "(api)/./pages/api/order/delete.js":
/*!***********************************!*\
  !*** ./pages/api/order/delete.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/dbConfig */ \"(api)/./lib/dbConfig.js\");\n\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    // validate\n    const input = {\n        TableName: \"Order\",\n        Key: {\n            \"orderNumber\": {\n                \"S\": req.body.orderNumber\n            }\n        }\n    };\n    const command = new _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__.DeleteItemCommand(input);\n    const ress = await _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__.client.send(command);\n    res.status(200).json(ress);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvZGVsZXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQWtFO0FBRW5ELGVBQWVFLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzVDLElBQUdELElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3hCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUztRQUFvQjtJQUM1RCxDQUFDO0lBQ0QsV0FBVztJQUNYLE1BQU1DLFFBQVE7UUFDVkMsV0FBVztRQUNYQyxLQUFLO1lBQ0QsZUFBZTtnQkFBRSxLQUFLUixJQUFJUyxJQUFJLENBQUNDLFdBQVc7WUFBQztRQUMvQztJQUNGO0lBQ0YsTUFBTUMsVUFBVSxJQUFJYiw0REFBaUJBLENBQUNRO0lBQ3RDLE1BQU1NLE9BQU8sTUFBTWYsc0RBQVcsQ0FBQ2M7SUFDL0JWLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNRO0FBQ3pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvb3JkZXIvZGVsZXRlLmpzP2Y2MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50LCBEZWxldGVJdGVtQ29tbWFuZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJDb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe21lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnfSk7XHJcbiAgICB9XHJcbiAgICAvLyB2YWxpZGF0ZVxyXG4gICAgY29uc3QgaW5wdXQgPSB7XHJcbiAgICAgICAgVGFibGVOYW1lOiBcIk9yZGVyXCIsIC8vVEFCTEVfTkFNRVxyXG4gICAgICAgIEtleToge1xyXG4gICAgICAgICAgICAnb3JkZXJOdW1iZXInOiB7ICdTJzogcmVxLmJvZHkub3JkZXJOdW1iZXIgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBEZWxldGVJdGVtQ29tbWFuZChpbnB1dCk7XHJcbiAgICBjb25zdCByZXNzID0gYXdhaXQgY2xpZW50LnNlbmQoY29tbWFuZCk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNzKTsgXHJcbn0iXSwibmFtZXMiOlsiY2xpZW50IiwiRGVsZXRlSXRlbUNvbW1hbmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJpbnB1dCIsIlRhYmxlTmFtZSIsIktleSIsImJvZHkiLCJvcmRlck51bWJlciIsImNvbW1hbmQiLCJyZXNzIiwic2VuZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/delete.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order/delete.js"));
module.exports = __webpack_exports__;

})();
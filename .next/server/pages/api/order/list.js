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

/***/ "(api)/./pages/api/order/list.js":
/*!*********************************!*\
  !*** ./pages/api/order/list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n// import { readFileS3FromBucket } from \"../../../services/s3\";\n// export default async (req, res) => {\n//     const listOrder = await readFileS3FromBucket('order', 'orders.json')\n//     res.status(200).json(listOrder); \n// }\n // ES Modules import\nconst ACCESS_KEY = \"hieu\";\nconst SECRET_KEY = \"hieu\";\nconst client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDBClient({\n    accessKeyId: ACCESS_KEY,\n    secretAccessKey: SECRET_KEY,\n    region: \"us-east-1\",\n    endpoint: \"http://127.0.0.1:4566\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const input = {\n        TableName: \"Order\"\n    };\n    const command = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.ScanCommand(input);\n    const ress = await client.send(command);\n    // console.log(ress)\n    console.log(ress.Items);\n    res.status(200).json(ress);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrREFBK0Q7QUFFL0QsdUNBQXVDO0FBQ3ZDLDJFQUEyRTtBQUMzRSx3Q0FBd0M7QUFDeEMsSUFBSTtBQUdpRixDQUFDLG9CQUFvQjtBQUUxRyxNQUFNRyxhQUFhO0FBQ25CLE1BQU1DLGFBQWE7QUFDbkIsTUFBTUMsU0FBUyxJQUFJTCxvRUFBY0EsQ0FBQztJQUM5Qk0sYUFBYUg7SUFDYkksaUJBQWlCSDtJQUNqQkksUUFBUTtJQUNSQyxVQUFVO0FBQ2Q7QUFFQSxpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQy9CLE1BQU1DLFFBQVE7UUFDVkMsV0FBVztJQVVYO0lBQ0osTUFBTUMsVUFBVSxJQUFJWixpRUFBV0EsQ0FBQ1U7SUFDaEMsTUFBTUcsT0FBTyxNQUFNVixPQUFPVyxJQUFJLENBQUNGO0lBQy9CLG9CQUFvQjtJQUNwQkcsUUFBUUMsR0FBRyxDQUFDSCxLQUFLSSxLQUFLO0lBQ3RCUixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTjtBQUN6QixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVyL2xpc3QuanM/ODc5OCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyByZWFkRmlsZVMzRnJvbUJ1Y2tldCB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2aWNlcy9zM1wiO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcbi8vICAgICBjb25zdCBsaXN0T3JkZXIgPSBhd2FpdCByZWFkRmlsZVMzRnJvbUJ1Y2tldCgnb3JkZXInLCAnb3JkZXJzLmpzb24nKVxyXG4vLyAgICAgcmVzLnN0YXR1cygyMDApLmpzb24obGlzdE9yZGVyKTsgXHJcbi8vIH1cclxuXHJcblxyXG5pbXBvcnQgeyBEeW5hbW9EQkNsaWVudCwgUXVlcnlDb21tYW5kLCBTY2FuQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjsgLy8gRVMgTW9kdWxlcyBpbXBvcnRcclxuXHJcbmNvbnN0IEFDQ0VTU19LRVkgPSAnaGlldSc7XHJcbmNvbnN0IFNFQ1JFVF9LRVkgPSAnaGlldSc7XHJcbmNvbnN0IGNsaWVudCA9IG5ldyBEeW5hbW9EQkNsaWVudCh7XHJcbiAgICBhY2Nlc3NLZXlJZDogQUNDRVNTX0tFWSxcclxuICAgIHNlY3JldEFjY2Vzc0tleTogU0VDUkVUX0tFWSwgXHJcbiAgICByZWdpb246ICd1cy1lYXN0LTEnLCBcclxuICAgIGVuZHBvaW50OiAnaHR0cDovLzEyNy4wLjAuMTo0NTY2J1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc3QgaW5wdXQgPSB7XHJcbiAgICAgICAgVGFibGVOYW1lOiBcIk9yZGVyXCIsIC8vVEFCTEVfTkFNRVxyXG4gICAgICAgIC8vIEtleUNvbmRpdGlvbkV4cHJlc3Npb246XCIjY29tcGFueSA9IDpjb21wYW55VmFsdWUgYW5kICNmYWN0b3J5ID0gOmZhY3RvcnlWYWx1ZVwiLFxyXG4gICAgICAgIC8vIEV4cHJlc3Npb25BdHRyaWJ1dGVOYW1lczoge1xyXG4gICAgICAgIC8vICAgICBcIiNjb21wYW55XCI6XCJjb21wYW55XCIsXHJcbiAgICAgICAgLy8gICAgIFwiI2ZhY3RvcnlcIjpcImZhY3RvcnlcIlxyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vIEV4cHJlc3Npb25BdHRyaWJ1dGVWYWx1ZXM6IHtcclxuICAgICAgICAvLyAgICAgXCI6Y29tcGFueVZhbHVlXCI6IGNvbXBhbnksXHJcbiAgICAgICAgLy8gICAgIFwiOmZhY3RvcnlWYWx1ZVwiOiBmYWN0b3J5XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBTY2FuQ29tbWFuZChpbnB1dCk7XHJcbiAgICBjb25zdCByZXNzID0gYXdhaXQgY2xpZW50LnNlbmQoY29tbWFuZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNzKVxyXG4gICAgY29uc29sZS5sb2cocmVzcy5JdGVtcyk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNzKTsgXHJcbn0iXSwibmFtZXMiOlsiRHluYW1vREJDbGllbnQiLCJRdWVyeUNvbW1hbmQiLCJTY2FuQ29tbWFuZCIsIkFDQ0VTU19LRVkiLCJTRUNSRVRfS0VZIiwiY2xpZW50IiwiYWNjZXNzS2V5SWQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJyZWdpb24iLCJlbmRwb2ludCIsInJlcSIsInJlcyIsImlucHV0IiwiVGFibGVOYW1lIiwiY29tbWFuZCIsInJlc3MiLCJzZW5kIiwiY29uc29sZSIsImxvZyIsIkl0ZW1zIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/list.js\n");

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
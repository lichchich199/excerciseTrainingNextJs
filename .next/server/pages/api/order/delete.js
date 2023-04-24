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

/***/ "(api)/./pages/api/order/delete.js":
/*!***********************************!*\
  !*** ./pages/api/order/delete.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n // ES Modules import\nconst ACCESS_KEY = \"hieu\";\nconst SECRET_KEY = \"hieu\";\nconst client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDBClient({\n    accessKeyId: ACCESS_KEY,\n    secretAccessKey: SECRET_KEY,\n    region: \"us-east-1\",\n    endpoint: \"http://127.0.0.1:4566\"\n});\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    console.log(\"req.body.orderNumber\", req.body.orderNumber);\n    // validate\n    const input = {\n        TableName: \"Order\",\n        Key: {\n            \"orderNumber\": {\n                \"S\": \"1\"\n            }\n        }\n    };\n    const command = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DeleteItemCommand(input);\n    const ress = await client.send(command);\n    // console.log(ress)\n    console.log(ress.Item);\n    res.status(200).json(ress);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvZGVsZXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RSxDQUFDLG9CQUFvQjtBQUVsRyxNQUFNRSxhQUFhO0FBQ25CLE1BQU1DLGFBQWE7QUFDbkIsTUFBTUMsU0FBUyxJQUFJSixvRUFBY0EsQ0FBQztJQUM5QkssYUFBYUg7SUFDYkksaUJBQWlCSDtJQUNqQkksUUFBUTtJQUNSQyxVQUFVO0FBQ2Q7QUFFZSxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFHRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN4QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFNBQVM7UUFBb0I7SUFDNUQsQ0FBQztJQUNEQyxRQUFRQyxHQUFHLENBQUMsd0JBQXdCUCxJQUFJUSxJQUFJLENBQUNDLFdBQVc7SUFDeEQsV0FBVztJQUNYLE1BQU1DLFFBQVE7UUFDVkMsV0FBVztRQUNYQyxLQUFLO1lBQ0QsZUFBZTtnQkFBRSxLQUFLO1lBQUk7UUFDOUI7SUFDRjtJQUNGLE1BQU1DLFVBQVUsSUFBSXRCLHVFQUFpQkEsQ0FBQ21CO0lBQ3RDLE1BQU1JLE9BQU8sTUFBTXBCLE9BQU9xQixJQUFJLENBQUNGO0lBQy9CLG9CQUFvQjtJQUNwQlAsUUFBUUMsR0FBRyxDQUFDTyxLQUFLRSxJQUFJO0lBQ3JCZixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDVTtBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVyL2RlbGV0ZS5qcz9mNjJkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IER5bmFtb0RCQ2xpZW50LCBEZWxldGVJdGVtQ29tbWFuZCB9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjsgLy8gRVMgTW9kdWxlcyBpbXBvcnRcclxuXHJcbmNvbnN0IEFDQ0VTU19LRVkgPSAnaGlldSc7XHJcbmNvbnN0IFNFQ1JFVF9LRVkgPSAnaGlldSc7XHJcbmNvbnN0IGNsaWVudCA9IG5ldyBEeW5hbW9EQkNsaWVudCh7XHJcbiAgICBhY2Nlc3NLZXlJZDogQUNDRVNTX0tFWSxcclxuICAgIHNlY3JldEFjY2Vzc0tleTogU0VDUkVUX0tFWSwgXHJcbiAgICByZWdpb246ICd1cy1lYXN0LTEnLCBcclxuICAgIGVuZHBvaW50OiAnaHR0cDovLzEyNy4wLjAuMTo0NTY2J1xyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGlmKHJlcS5tZXRob2QgIT09ICdQT1NUJykge1xyXG4gICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe21lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnfSk7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygncmVxLmJvZHkub3JkZXJOdW1iZXInLCByZXEuYm9keS5vcmRlck51bWJlcilcclxuICAgIC8vIHZhbGlkYXRlXHJcbiAgICBjb25zdCBpbnB1dCA9IHtcclxuICAgICAgICBUYWJsZU5hbWU6IFwiT3JkZXJcIiwgLy9UQUJMRV9OQU1FXHJcbiAgICAgICAgS2V5OiB7XHJcbiAgICAgICAgICAgICdvcmRlck51bWJlcic6IHsgJ1MnOiAnMScgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBEZWxldGVJdGVtQ29tbWFuZChpbnB1dCk7XHJcbiAgICBjb25zdCByZXNzID0gYXdhaXQgY2xpZW50LnNlbmQoY29tbWFuZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNzKVxyXG4gICAgY29uc29sZS5sb2cocmVzcy5JdGVtKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3MpOyBcclxufSJdLCJuYW1lcyI6WyJEeW5hbW9EQkNsaWVudCIsIkRlbGV0ZUl0ZW1Db21tYW5kIiwiQUNDRVNTX0tFWSIsIlNFQ1JFVF9LRVkiLCJjbGllbnQiLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSIsInJlZ2lvbiIsImVuZHBvaW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsImJvZHkiLCJvcmRlck51bWJlciIsImlucHV0IiwiVGFibGVOYW1lIiwiS2V5IiwiY29tbWFuZCIsInJlc3MiLCJzZW5kIiwiSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/delete.js\n");

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
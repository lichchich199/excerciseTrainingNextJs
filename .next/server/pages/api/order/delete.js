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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n // ES Modules import\nconst ACCESS_KEY = \"hieu\";\nconst SECRET_KEY = \"hieu\";\nconst client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDBClient({\n    accessKeyId: ACCESS_KEY,\n    secretAccessKey: SECRET_KEY,\n    region: \"us-east-1\",\n    endpoint: \"http://127.0.0.1:4566\"\n});\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    // validate\n    const input = {\n        TableName: \"Order\",\n        Key: {\n            \"orderNumber\": {\n                \"S\": req.body.orderNumber\n            }\n        }\n    };\n    const command = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DeleteItemCommand(input);\n    const ress = await client.send(command);\n    res.status(200).json(ress);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvZGVsZXRlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2RSxDQUFDLG9CQUFvQjtBQUVsRyxNQUFNRSxhQUFhO0FBQ25CLE1BQU1DLGFBQWE7QUFDbkIsTUFBTUMsU0FBUyxJQUFJSixvRUFBY0EsQ0FBQztJQUM5QkssYUFBYUg7SUFDYkksaUJBQWlCSDtJQUNqQkksUUFBUTtJQUNSQyxVQUFVO0FBQ2Q7QUFFZSxlQUFlQyxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxJQUFHRCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN4QixPQUFPRCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFNBQVM7UUFBb0I7SUFDNUQsQ0FBQztJQUNELFdBQVc7SUFDWCxNQUFNQyxRQUFRO1FBQ1ZDLFdBQVc7UUFDWEMsS0FBSztZQUNELGVBQWU7Z0JBQUUsS0FBS1IsSUFBSVMsSUFBSSxDQUFDQyxXQUFXO1lBQUM7UUFDL0M7SUFDRjtJQUNGLE1BQU1DLFVBQVUsSUFBSXBCLHVFQUFpQkEsQ0FBQ2U7SUFDdEMsTUFBTU0sT0FBTyxNQUFNbEIsT0FBT21CLElBQUksQ0FBQ0Y7SUFDL0JWLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNRO0FBQ3pCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvb3JkZXIvZGVsZXRlLmpzP2Y2MmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJDbGllbnQsIERlbGV0ZUl0ZW1Db21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYlwiOyAvLyBFUyBNb2R1bGVzIGltcG9ydFxyXG5cclxuY29uc3QgQUNDRVNTX0tFWSA9ICdoaWV1JztcclxuY29uc3QgU0VDUkVUX0tFWSA9ICdoaWV1JztcclxuY29uc3QgY2xpZW50ID0gbmV3IER5bmFtb0RCQ2xpZW50KHtcclxuICAgIGFjY2Vzc0tleUlkOiBBQ0NFU1NfS0VZLFxyXG4gICAgc2VjcmV0QWNjZXNzS2V5OiBTRUNSRVRfS0VZLCBcclxuICAgIHJlZ2lvbjogJ3VzLWVhc3QtMScsIFxyXG4gICAgZW5kcG9pbnQ6ICdodHRwOi8vMTI3LjAuMC4xOjQ1NjYnXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgaWYocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XHJcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7bWVzc2FnZTogJ01ldGhvZCBub3QgYWxsb3dlZCd9KTtcclxuICAgIH1cclxuICAgIC8vIHZhbGlkYXRlXHJcbiAgICBjb25zdCBpbnB1dCA9IHtcclxuICAgICAgICBUYWJsZU5hbWU6IFwiT3JkZXJcIiwgLy9UQUJMRV9OQU1FXHJcbiAgICAgICAgS2V5OiB7XHJcbiAgICAgICAgICAgICdvcmRlck51bWJlcic6IHsgJ1MnOiByZXEuYm9keS5vcmRlck51bWJlciB9LFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH07XHJcbiAgICBjb25zdCBjb21tYW5kID0gbmV3IERlbGV0ZUl0ZW1Db21tYW5kKGlucHV0KTtcclxuICAgIGNvbnN0IHJlc3MgPSBhd2FpdCBjbGllbnQuc2VuZChjb21tYW5kKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3MpOyBcclxufSJdLCJuYW1lcyI6WyJEeW5hbW9EQkNsaWVudCIsIkRlbGV0ZUl0ZW1Db21tYW5kIiwiQUNDRVNTX0tFWSIsIlNFQ1JFVF9LRVkiLCJjbGllbnQiLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSIsInJlZ2lvbiIsImVuZHBvaW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiaW5wdXQiLCJUYWJsZU5hbWUiLCJLZXkiLCJib2R5Iiwib3JkZXJOdW1iZXIiLCJjb21tYW5kIiwicmVzcyIsInNlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/delete.js\n");

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
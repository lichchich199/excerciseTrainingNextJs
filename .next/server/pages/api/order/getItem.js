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
exports.id = "pages/api/order/getItem";
exports.ids = ["pages/api/order/getItem"];
exports.modules = {

/***/ "@aws-sdk/client-dynamodb":
/*!*******************************************!*\
  !*** external "@aws-sdk/client-dynamodb" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-dynamodb");

/***/ }),

/***/ "(api)/./pages/api/order/getItem.js":
/*!************************************!*\
  !*** ./pages/api/order/getItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n // ES Modules import\nconst ACCESS_KEY = \"hieu\";\nconst SECRET_KEY = \"hieu\";\nconst client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDBClient({\n    accessKeyId: ACCESS_KEY,\n    secretAccessKey: SECRET_KEY,\n    region: \"us-east-1\",\n    endpoint: \"http://127.0.0.1:4566\"\n});\nasync function handler(req, res) {\n    // validate\n    console.log(\"req.query.orderNumber\", req.query.orderNumber);\n    const input = {\n        TableName: \"Order\",\n        Key: {\n            \"orderNumber\": {\n                \"S\": req.query.orderNumber || \"\"\n            }\n        }\n    };\n    const command = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.GetItemCommand(input);\n    const ress = await client.send(command);\n    // console.log(ress)\n    console.log(ress.Item);\n    res.status(200).json(ress);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvZ2V0SXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEUsQ0FBQyxvQkFBb0I7QUFFL0YsTUFBTUUsYUFBYTtBQUNuQixNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLFNBQVMsSUFBSUosb0VBQWNBLENBQUM7SUFDOUJLLGFBQWFIO0lBQ2JJLGlCQUFpQkg7SUFDakJJLFFBQVE7SUFDUkMsVUFBVTtBQUNkO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsV0FBVztJQUNYQyxRQUFRQyxHQUFHLENBQUUseUJBQXdCSCxJQUFJSSxLQUFLLENBQUNDLFdBQVc7SUFDMUQsTUFBTUMsUUFBUTtRQUNWQyxXQUFXO1FBQ1hDLEtBQUs7WUFDRCxlQUFlO2dCQUFFLEtBQUtSLElBQUlJLEtBQUssQ0FBQ0MsV0FBVyxJQUFJO1lBQUc7UUFDdEQ7SUFDRjtJQUNGLE1BQU1JLFVBQVUsSUFBSWxCLG9FQUFjQSxDQUFDZTtJQUNuQyxNQUFNSSxPQUFPLE1BQU1oQixPQUFPaUIsSUFBSSxDQUFDRjtJQUMvQixvQkFBb0I7SUFDcEJQLFFBQVFDLEdBQUcsQ0FBQ08sS0FBS0UsSUFBSTtJQUNyQlgsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0o7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9vcmRlci9nZXRJdGVtLmpzPzE4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJDbGllbnQsIEdldEl0ZW1Db21tYW5kIH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1keW5hbW9kYlwiOyAvLyBFUyBNb2R1bGVzIGltcG9ydFxyXG5cclxuY29uc3QgQUNDRVNTX0tFWSA9ICdoaWV1JztcclxuY29uc3QgU0VDUkVUX0tFWSA9ICdoaWV1JztcclxuY29uc3QgY2xpZW50ID0gbmV3IER5bmFtb0RCQ2xpZW50KHtcclxuICAgIGFjY2Vzc0tleUlkOiBBQ0NFU1NfS0VZLFxyXG4gICAgc2VjcmV0QWNjZXNzS2V5OiBTRUNSRVRfS0VZLCBcclxuICAgIHJlZ2lvbjogJ3VzLWVhc3QtMScsIFxyXG4gICAgZW5kcG9pbnQ6ICdodHRwOi8vMTI3LjAuMC4xOjQ1NjYnXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xyXG4gICAgLy8gdmFsaWRhdGVcclxuICAgIGNvbnNvbGUubG9nKCAncmVxLnF1ZXJ5Lm9yZGVyTnVtYmVyJyxyZXEucXVlcnkub3JkZXJOdW1iZXIpXHJcbiAgICBjb25zdCBpbnB1dCA9IHtcclxuICAgICAgICBUYWJsZU5hbWU6IFwiT3JkZXJcIiwgLy9UQUJMRV9OQU1FXHJcbiAgICAgICAgS2V5OiB7XHJcbiAgICAgICAgICAgICdvcmRlck51bWJlcic6IHsgJ1MnOiByZXEucXVlcnkub3JkZXJOdW1iZXIgfHwgJycgfSxcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBHZXRJdGVtQ29tbWFuZChpbnB1dCk7XHJcbiAgICBjb25zdCByZXNzID0gYXdhaXQgY2xpZW50LnNlbmQoY29tbWFuZCk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhyZXNzKVxyXG4gICAgY29uc29sZS5sb2cocmVzcy5JdGVtKTtcclxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3MpOyBcclxufSJdLCJuYW1lcyI6WyJEeW5hbW9EQkNsaWVudCIsIkdldEl0ZW1Db21tYW5kIiwiQUNDRVNTX0tFWSIsIlNFQ1JFVF9LRVkiLCJjbGllbnQiLCJhY2Nlc3NLZXlJZCIsInNlY3JldEFjY2Vzc0tleSIsInJlZ2lvbiIsImVuZHBvaW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsIm9yZGVyTnVtYmVyIiwiaW5wdXQiLCJUYWJsZU5hbWUiLCJLZXkiLCJjb21tYW5kIiwicmVzcyIsInNlbmQiLCJJdGVtIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/getItem.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/order/getItem.js"));
module.exports = __webpack_exports__;

})();
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n // ES Modules import\nconst ACCESS_KEY = \"hieu\";\nconst SECRET_KEY = \"hieu\";\nconst client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDBClient({\n    accessKeyId: ACCESS_KEY,\n    secretAccessKey: SECRET_KEY,\n    region: \"us-east-1\",\n    endpoint: \"http://127.0.0.1:4566\"\n});\nasync function handler(req, res) {\n    // validate\n    const input = {\n        TableName: \"Order\",\n        Key: {\n            \"orderNumber\": {\n                \"S\": req.query.orderNumber || \"\"\n            }\n        }\n    };\n    const command = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.GetItemCommand(input);\n    const ress = await client.send(command);\n    // console.log(ress)\n    console.log(ress.Item);\n    res.status(200).json(ress);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvZ2V0SXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEUsQ0FBQyxvQkFBb0I7QUFFL0YsTUFBTUUsYUFBYTtBQUNuQixNQUFNQyxhQUFhO0FBQ25CLE1BQU1DLFNBQVMsSUFBSUosb0VBQWNBLENBQUM7SUFDOUJLLGFBQWFIO0lBQ2JJLGlCQUFpQkg7SUFDakJJLFFBQVE7SUFDUkMsVUFBVTtBQUNkO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsV0FBVztJQUNYLE1BQU1DLFFBQVE7UUFDVkMsV0FBVztRQUNYQyxLQUFLO1lBQ0QsZUFBZTtnQkFBRSxLQUFLSixJQUFJSyxLQUFLLENBQUNDLFdBQVcsSUFBSTtZQUFHO1FBQ3REO0lBQ0Y7SUFDRixNQUFNQyxVQUFVLElBQUloQixvRUFBY0EsQ0FBQ1c7SUFDbkMsTUFBTU0sT0FBTyxNQUFNZCxPQUFPZSxJQUFJLENBQUNGO0lBQy9CLG9CQUFvQjtJQUNwQkcsUUFBUUMsR0FBRyxDQUFDSCxLQUFLSSxJQUFJO0lBQ3JCWCxJQUFJWSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTjtBQUN6QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVyL2dldEl0ZW0uanM/MTgxOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEeW5hbW9EQkNsaWVudCwgR2V0SXRlbUNvbW1hbmQgfSBmcm9tIFwiQGF3cy1zZGsvY2xpZW50LWR5bmFtb2RiXCI7IC8vIEVTIE1vZHVsZXMgaW1wb3J0XHJcblxyXG5jb25zdCBBQ0NFU1NfS0VZID0gJ2hpZXUnO1xyXG5jb25zdCBTRUNSRVRfS0VZID0gJ2hpZXUnO1xyXG5jb25zdCBjbGllbnQgPSBuZXcgRHluYW1vREJDbGllbnQoe1xyXG4gICAgYWNjZXNzS2V5SWQ6IEFDQ0VTU19LRVksXHJcbiAgICBzZWNyZXRBY2Nlc3NLZXk6IFNFQ1JFVF9LRVksIFxyXG4gICAgcmVnaW9uOiAndXMtZWFzdC0xJywgXHJcbiAgICBlbmRwb2ludDogJ2h0dHA6Ly8xMjcuMC4wLjE6NDU2NidcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICAvLyB2YWxpZGF0ZVxyXG4gICAgY29uc3QgaW5wdXQgPSB7XHJcbiAgICAgICAgVGFibGVOYW1lOiBcIk9yZGVyXCIsIC8vVEFCTEVfTkFNRVxyXG4gICAgICAgIEtleToge1xyXG4gICAgICAgICAgICAnb3JkZXJOdW1iZXInOiB7ICdTJzogcmVxLnF1ZXJ5Lm9yZGVyTnVtYmVyIHx8ICcnIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgR2V0SXRlbUNvbW1hbmQoaW5wdXQpO1xyXG4gICAgY29uc3QgcmVzcyA9IGF3YWl0IGNsaWVudC5zZW5kKGNvbW1hbmQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcylcclxuICAgIGNvbnNvbGUubG9nKHJlc3MuSXRlbSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNzKTsgXHJcbn0iXSwibmFtZXMiOlsiRHluYW1vREJDbGllbnQiLCJHZXRJdGVtQ29tbWFuZCIsIkFDQ0VTU19LRVkiLCJTRUNSRVRfS0VZIiwiY2xpZW50IiwiYWNjZXNzS2V5SWQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJyZWdpb24iLCJlbmRwb2ludCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJpbnB1dCIsIlRhYmxlTmFtZSIsIktleSIsInF1ZXJ5Iiwib3JkZXJOdW1iZXIiLCJjb21tYW5kIiwicmVzcyIsInNlbmQiLCJjb25zb2xlIiwibG9nIiwiSXRlbSIsInN0YXR1cyIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/getItem.js\n");

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
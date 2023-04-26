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

/***/ "(api)/./lib/dbConfig.js":
/*!*************************!*\
  !*** ./lib/dbConfig.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BatchWriteItemCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.BatchWriteItemCommand),\n/* harmony export */   \"DeleteItemCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DeleteItemCommand),\n/* harmony export */   \"GetItemCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.GetItemCommand),\n/* harmony export */   \"ScanCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.ScanCommand),\n/* harmony export */   \"UpdateItemCommand\": () => (/* reexport safe */ _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.UpdateItemCommand),\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-dynamodb */ \"@aws-sdk/client-dynamodb\");\n/* harmony import */ var _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__);\n // ES Modules import\nconst client = new _aws_sdk_client_dynamodb__WEBPACK_IMPORTED_MODULE_0__.DynamoDBClient({\n    accessKeyId: process.env.AWS_ACCESS_KEY_ID,\n    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,\n    region: process.env.AWS_REGION,\n    endpoint: process.env.END_POINT\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvZGJDb25maWcuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUosQ0FBQyxvQkFBb0I7QUFFeEssTUFBTU0sU0FBUyxJQUFJTixvRUFBY0EsQ0FBQztJQUM5Qk8sYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7SUFDMUNDLGlCQUFpQkgsUUFBUUMsR0FBRyxDQUFDRyxxQkFBcUI7SUFDbERDLFFBQVFMLFFBQVFDLEdBQUcsQ0FBQ0ssVUFBVTtJQUM5QkMsVUFBVVAsUUFBUUMsR0FBRyxDQUFDTyxTQUFTO0FBQ25DO0FBRXlHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbGliL2RiQ29uZmlnLmpzPzM2MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRHluYW1vREJDbGllbnQsIEJhdGNoV3JpdGVJdGVtQ29tbWFuZCwgU2NhbkNvbW1hbmQsIEdldEl0ZW1Db21tYW5kLCBVcGRhdGVJdGVtQ29tbWFuZCwgRGVsZXRlSXRlbUNvbW1hbmR9IGZyb20gXCJAYXdzLXNkay9jbGllbnQtZHluYW1vZGJcIjsgLy8gRVMgTW9kdWxlcyBpbXBvcnRcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBEeW5hbW9EQkNsaWVudCh7XHJcbiAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQVdTX0FDQ0VTU19LRVlfSUQsXHJcbiAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSwgXHJcbiAgICByZWdpb246IHByb2Nlc3MuZW52LkFXU19SRUdJT04sIFxyXG4gICAgZW5kcG9pbnQ6IHByb2Nlc3MuZW52LkVORF9QT0lOVFxyXG59KTtcclxuXHJcbmV4cG9ydCB7Y2xpZW50LCBCYXRjaFdyaXRlSXRlbUNvbW1hbmQsIFNjYW5Db21tYW5kLCBHZXRJdGVtQ29tbWFuZCwgVXBkYXRlSXRlbUNvbW1hbmQsIERlbGV0ZUl0ZW1Db21tYW5kfSJdLCJuYW1lcyI6WyJEeW5hbW9EQkNsaWVudCIsIkJhdGNoV3JpdGVJdGVtQ29tbWFuZCIsIlNjYW5Db21tYW5kIiwiR2V0SXRlbUNvbW1hbmQiLCJVcGRhdGVJdGVtQ29tbWFuZCIsIkRlbGV0ZUl0ZW1Db21tYW5kIiwiY2xpZW50IiwiYWNjZXNzS2V5SWQiLCJwcm9jZXNzIiwiZW52IiwiQVdTX0FDQ0VTU19LRVlfSUQiLCJzZWNyZXRBY2Nlc3NLZXkiLCJBV1NfU0VDUkVUX0FDQ0VTU19LRVkiLCJyZWdpb24iLCJBV1NfUkVHSU9OIiwiZW5kcG9pbnQiLCJFTkRfUE9JTlQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/dbConfig.js\n");

/***/ }),

/***/ "(api)/./pages/api/order/getItem.js":
/*!************************************!*\
  !*** ./pages/api/order/getItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/dbConfig */ \"(api)/./lib/dbConfig.js\");\n\nasync function handler(req, res) {\n    // validate\n    console.log(\"req.query.orderNumber\", req.query.orderNumber);\n    const input = {\n        TableName: \"Order\",\n        Key: {\n            \"orderNumber\": {\n                \"S\": req.query.orderNumber || \"\"\n            }\n        }\n    };\n    const command = new _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__.GetItemCommand(input);\n    const ress = await _lib_dbConfig__WEBPACK_IMPORTED_MODULE_0__.client.send(command);\n    // console.log(ress)\n    console.log(ress.Item);\n    res.status(200).json(ress);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvZ2V0SXRlbS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUErRDtBQUVoRCxlQUFlRSxRQUFRQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM1QyxXQUFXO0lBQ1hDLFFBQVFDLEdBQUcsQ0FBRSx5QkFBd0JILElBQUlJLEtBQUssQ0FBQ0MsV0FBVztJQUMxRCxNQUFNQyxRQUFRO1FBQ1ZDLFdBQVc7UUFDWEMsS0FBSztZQUNELGVBQWU7Z0JBQUUsS0FBS1IsSUFBSUksS0FBSyxDQUFDQyxXQUFXLElBQUk7WUFBRztRQUN0RDtJQUNGO0lBQ0YsTUFBTUksVUFBVSxJQUFJWCx5REFBY0EsQ0FBQ1E7SUFDbkMsTUFBTUksT0FBTyxNQUFNYixzREFBVyxDQUFDWTtJQUMvQixvQkFBb0I7SUFDcEJQLFFBQVFDLEdBQUcsQ0FBQ08sS0FBS0UsSUFBSTtJQUNyQlgsSUFBSVksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0o7QUFDekIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9vcmRlci9nZXRJdGVtLmpzPzE4MTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xpZW50LCBHZXRJdGVtQ29tbWFuZCB9IGZyb20gXCIuLi8uLi8uLi9saWIvZGJDb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIC8vIHZhbGlkYXRlXHJcbiAgICBjb25zb2xlLmxvZyggJ3JlcS5xdWVyeS5vcmRlck51bWJlcicscmVxLnF1ZXJ5Lm9yZGVyTnVtYmVyKVxyXG4gICAgY29uc3QgaW5wdXQgPSB7XHJcbiAgICAgICAgVGFibGVOYW1lOiBcIk9yZGVyXCIsIC8vVEFCTEVfTkFNRVxyXG4gICAgICAgIEtleToge1xyXG4gICAgICAgICAgICAnb3JkZXJOdW1iZXInOiB7ICdTJzogcmVxLnF1ZXJ5Lm9yZGVyTnVtYmVyIHx8ICcnIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgfTtcclxuICAgIGNvbnN0IGNvbW1hbmQgPSBuZXcgR2V0SXRlbUNvbW1hbmQoaW5wdXQpO1xyXG4gICAgY29uc3QgcmVzcyA9IGF3YWl0IGNsaWVudC5zZW5kKGNvbW1hbmQpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocmVzcylcclxuICAgIGNvbnNvbGUubG9nKHJlc3MuSXRlbSk7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihyZXNzKTsgXHJcbn0iXSwibmFtZXMiOlsiY2xpZW50IiwiR2V0SXRlbUNvbW1hbmQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwib3JkZXJOdW1iZXIiLCJpbnB1dCIsIlRhYmxlTmFtZSIsIktleSIsImNvbW1hbmQiLCJyZXNzIiwic2VuZCIsIkl0ZW0iLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/getItem.js\n");

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
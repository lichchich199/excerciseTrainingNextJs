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

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "(api)/./pages/api/order/list.js":
/*!*********************************!*\
  !*** ./pages/api/order/list.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _services_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/s3 */ \"(api)/./services/s3.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    console.log(\"z\\xf4\");\n    const listOrder = await (0,_services_s3__WEBPACK_IMPORTED_MODULE_0__.readFileS3FromBucket)(\"order\", \"orders.json\");\n    // console.log(listOrder)\n    res.status(200).json(listOrder);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvbGlzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE0RDtBQUU1RCxpRUFBZSxPQUFPQyxLQUFLQyxNQUFRO0lBQy9CQyxRQUFRQyxHQUFHLENBQUM7SUFDWixNQUFNQyxZQUFZLE1BQU1MLGtFQUFvQkEsQ0FBQyxTQUFTO0lBQ3RELHlCQUF5QjtJQUN6QkUsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0Y7QUFDekIsR0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9vcmRlci9saXN0LmpzPzg3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhZEZpbGVTM0Zyb21CdWNrZXQgfSBmcm9tIFwiLi4vLi4vLi4vc2VydmljZXMvczNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3rDtCcpXHJcbiAgICBjb25zdCBsaXN0T3JkZXIgPSBhd2FpdCByZWFkRmlsZVMzRnJvbUJ1Y2tldCgnb3JkZXInLCAnb3JkZXJzLmpzb24nKVxyXG4gICAgLy8gY29uc29sZS5sb2cobGlzdE9yZGVyKVxyXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24obGlzdE9yZGVyKTsgXHJcbn0iXSwibmFtZXMiOlsicmVhZEZpbGVTM0Zyb21CdWNrZXQiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwibGlzdE9yZGVyIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/list.js\n");

/***/ }),

/***/ "(api)/./services/s3.js":
/*!************************!*\
  !*** ./services/s3.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"readFileS3FromBucket\": () => (/* binding */ readFileS3FromBucket)\n/* harmony export */ });\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws-sdk/client-s3 */ \"@aws-sdk/client-s3\");\n/* harmony import */ var _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__);\n\n// read s3 file by bucket\nconst readFileS3FromBucket = async function(bucketName, fileName) {\n    const client = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.S3Client({\n        accessKeyId: process.env.ACCESS_KEY,\n        secretAccessKey: process.env.SECRET_KEY,\n        region: process.env.REGION,\n        endpoint: process.env.END_POINT,\n        s3BucketEndpoint: false,\n        s3ForcePathStyle: true\n    });\n    const input = {\n        Bucket: bucketName,\n        Key: fileName\n    };\n    const command = new _aws_sdk_client_s3__WEBPACK_IMPORTED_MODULE_0__.GetObjectCommand(input);\n    var str = \"{}\";\n    try {\n        const response = await client.send(command);\n        // The Body object also has 'transformToByteArray' and 'transformToWebStream' methods.\n        str = await response.Body.transformToString();\n    } catch (err) {\n        console.error(err);\n    }\n    return str;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2aWNlcy9zMy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBa0U7QUFFbEUseUJBQXlCO0FBQ2xCLE1BQU1FLHVCQUF1QixlQUFlQyxVQUFVLEVBQUVDLFFBQVEsRUFBRTtJQUNyRSxNQUFNQyxTQUFTLElBQUlMLHdEQUFRQSxDQUFDO1FBQ3hCTSxhQUFhQyxRQUFRQyxHQUFHLENBQUNDLFVBQVU7UUFDbkNDLGlCQUFpQkgsUUFBUUMsR0FBRyxDQUFDRyxVQUFVO1FBQ3ZDQyxRQUFRTCxRQUFRQyxHQUFHLENBQUNLLE1BQU07UUFDMUJDLFVBQVVQLFFBQVFDLEdBQUcsQ0FBQ08sU0FBUztRQUMvQkMsa0JBQWtCLEtBQUs7UUFDdkJDLGtCQUFrQixJQUFJO0lBQzFCO0lBQ0EsTUFBTUMsUUFBUTtRQUNaQyxRQUFRaEI7UUFDUmlCLEtBQUtoQjtJQUNQO0lBQ0EsTUFBTWlCLFVBQVUsSUFBSXBCLGdFQUFnQkEsQ0FBRWlCO0lBQ3RDLElBQUlJLE1BQUk7SUFDUixJQUFJO1FBQ0EsTUFBTUMsV0FBVyxNQUFNbEIsT0FBT21CLElBQUksQ0FBQ0g7UUFDbkMsc0ZBQXNGO1FBQ3RGQyxNQUFNLE1BQU1DLFNBQVNFLElBQUksQ0FBQ0MsaUJBQWlCO0lBQy9DLEVBQUUsT0FBT0MsS0FBSztRQUNWQyxRQUFRQyxLQUFLLENBQUNGO0lBQ2xCO0lBQ0EsT0FBT0w7QUFDWCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvczMuanM/YTkxOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTM0NsaWVudCwgR2V0T2JqZWN0Q29tbWFuZCAgIH0gZnJvbSBcIkBhd3Mtc2RrL2NsaWVudC1zM1wiO1xyXG5cclxuLy8gcmVhZCBzMyBmaWxlIGJ5IGJ1Y2tldFxyXG5leHBvcnQgY29uc3QgcmVhZEZpbGVTM0Zyb21CdWNrZXQgPSBhc3luYyBmdW5jdGlvbihidWNrZXROYW1lLCBmaWxlTmFtZSkge1xyXG4gICAgY29uc3QgY2xpZW50ID0gbmV3IFMzQ2xpZW50KHtcclxuICAgICAgICBhY2Nlc3NLZXlJZDogcHJvY2Vzcy5lbnYuQUNDRVNTX0tFWSxcclxuICAgICAgICBzZWNyZXRBY2Nlc3NLZXk6IHByb2Nlc3MuZW52LlNFQ1JFVF9LRVksIFxyXG4gICAgICAgIHJlZ2lvbjogcHJvY2Vzcy5lbnYuUkVHSU9OLCBcclxuICAgICAgICBlbmRwb2ludDogcHJvY2Vzcy5lbnYuRU5EX1BPSU5ULFxyXG4gICAgICAgIHMzQnVja2V0RW5kcG9pbnQ6IGZhbHNlLFxyXG4gICAgICAgIHMzRm9yY2VQYXRoU3R5bGU6IHRydWUsIFxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBpbnB1dCA9IHsgLy8gR2V0QnVja2V0QWNsUmVxdWVzdFxyXG4gICAgICBCdWNrZXQ6IGJ1Y2tldE5hbWUsIC8vIHJlcXVpcmVkXHJcbiAgICAgIEtleTogZmlsZU5hbWUsIC8vIHJlcXVpcmVkXHJcbiAgICB9O1xyXG4gICAgY29uc3QgY29tbWFuZCA9IG5ldyBHZXRPYmplY3RDb21tYW5kIChpbnB1dCk7XHJcbiAgICB2YXIgc3RyPSd7fSdcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBjbGllbnQuc2VuZChjb21tYW5kKTtcclxuICAgICAgICAvLyBUaGUgQm9keSBvYmplY3QgYWxzbyBoYXMgJ3RyYW5zZm9ybVRvQnl0ZUFycmF5JyBhbmQgJ3RyYW5zZm9ybVRvV2ViU3RyZWFtJyBtZXRob2RzLlxyXG4gICAgICAgIHN0ciA9IGF3YWl0IHJlc3BvbnNlLkJvZHkudHJhbnNmb3JtVG9TdHJpbmcoKTtcclxuICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJcclxufSJdLCJuYW1lcyI6WyJTM0NsaWVudCIsIkdldE9iamVjdENvbW1hbmQiLCJyZWFkRmlsZVMzRnJvbUJ1Y2tldCIsImJ1Y2tldE5hbWUiLCJmaWxlTmFtZSIsImNsaWVudCIsImFjY2Vzc0tleUlkIiwicHJvY2VzcyIsImVudiIsIkFDQ0VTU19LRVkiLCJzZWNyZXRBY2Nlc3NLZXkiLCJTRUNSRVRfS0VZIiwicmVnaW9uIiwiUkVHSU9OIiwiZW5kcG9pbnQiLCJFTkRfUE9JTlQiLCJzM0J1Y2tldEVuZHBvaW50IiwiczNGb3JjZVBhdGhTdHlsZSIsImlucHV0IiwiQnVja2V0IiwiS2V5IiwiY29tbWFuZCIsInN0ciIsInJlc3BvbnNlIiwic2VuZCIsIkJvZHkiLCJ0cmFuc2Zvcm1Ub1N0cmluZyIsImVyciIsImNvbnNvbGUiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./services/s3.js\n");

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
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

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("aws-sdk");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "(api)/./pages/api/order/add.js":
/*!********************************!*\
  !*** ./pages/api/order/add.js ***!
  \********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertGuidToInt\": () => (/* binding */ convertGuidToInt),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\naws_sdk__WEBPACK_IMPORTED_MODULE_0___default().config.update({\n    accessKeyId: \"hieu\",\n    secretAccessKey: \"hieu\",\n    region: \"local\",\n    endpoint: \"http://127.0.0.1:4566\"\n});\nconst convertGuidToInt = (id)=>{\n    console.log(id.replace(/-/g, \"\"));\n    // remove the dashes from the given uuid and convert to a hexadecimal BigNumber object\n    const bn = new BigInt(id.replace(/-/g, \"\"), 16);\n    // return the string representation of the BigNumber object as a decimal\n    return bn.toString(10);\n};\nasync function handler(req, res) {\n    console.log(\"đ\\xe3 v\\xe0o\");\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    var data = req.body;\n    console.log(\"line 9\", data.gender);\n    // update to dynamoDB\n    // validate lại data\n    var lUUID = convertGuidToInt(uuid__WEBPACK_IMPORTED_MODULE_1__.v4());\n    console.log(\"lUUID\", lUUID);\n    var docClient = new (aws_sdk__WEBPACK_IMPORTED_MODULE_0___default().DynamoDB.DocumentClient)();\n    var params = {\n        TableName: \"Order\",\n        Item: {\n        }\n    };\n    docClient.put(params, function(err, data) {\n        if (err) {\n            console.error(err);\n            return res.status(500).json({\n                message: \"Insert fail\"\n            });\n        } else {\n            console.log(\"PutItem succeeded:\", uuid__WEBPACK_IMPORTED_MODULE_1__.v4());\n            return res.status(200).json({\n                message: \"Success\"\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvYWRkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlCO0FBQ0k7QUFFN0JBLDREQUFpQixDQUFDO0lBQ2RJLGFBQWE7SUFDYkMsaUJBQWlCO0lBQ2pCQyxRQUFRO0lBQ1JDLFVBQVU7QUFDZDtBQUVPLE1BQU1DLG1CQUFtQixDQUFDQyxLQUFPO0lBQ3BDQyxRQUFRQyxHQUFHLENBQUNGLEdBQUdHLE9BQU8sQ0FBQyxNQUFNO0lBQzdCLHNGQUFzRjtJQUN0RixNQUFNQyxLQUFLLElBQUlDLE9BQU9MLEdBQUdHLE9BQU8sQ0FBQyxNQUFNLEtBQUs7SUFDNUMsd0VBQXdFO0lBQ3hFLE9BQU9DLEdBQUdFLFFBQVEsQ0FBQztBQUN2QixFQUFFO0FBRWEsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUNSLFFBQVFDLEdBQUcsQ0FBQztJQUVaLElBQUdNLElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3RCLE9BQU9ELElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBQ0MsU0FBUztRQUFvQjtJQUM5RCxDQUFDO0lBQ0QsSUFBSUMsT0FBT04sSUFBSU8sSUFBSTtJQUNuQmQsUUFBUUMsR0FBRyxDQUFDLFVBQVNZLEtBQUtFLE1BQU07SUFFaEMscUJBQXFCO0lBRXJCLG9CQUFvQjtJQUNwQixJQUFJQyxRQUFRbEIsaUJBQWlCUCxvQ0FBTztJQUNwQ1MsUUFBUUMsR0FBRyxDQUFDLFNBQVNlO0lBQ3JCLElBQUlFLFlBQVksSUFBSTVCLHdFQUEyQjtJQUMvQyxJQUFJK0IsU0FBUztRQUNUQyxXQUFXO1FBQ1hDLE1BQU07UUFnQk47SUFDSjtJQUNBTCxVQUFVTSxHQUFHLENBQUNILFFBQVEsU0FBU0ksR0FBRyxFQUFFWixJQUFJLEVBQUU7UUFDdEMsSUFBSVksS0FBSztZQUNMekIsUUFBUTBCLEtBQUssQ0FBQ0Q7WUFDZCxPQUFPakIsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztnQkFBQ0MsU0FBUztZQUFhO1FBQ3ZELE9BQU87WUFDSFosUUFBUUMsR0FBRyxDQUFDLHNCQUFzQlYsb0NBQU87WUFDekMsT0FBT2lCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLFNBQVE7WUFBUztRQUNsRCxDQUFDO0lBQ0o7QUFFSCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL29yZGVyL2FkZC5qcz83MWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBV1MgZnJvbSAnYXdzLXNkaydcclxuaW1wb3J0ICogYXMgdXVpZCBmcm9tICd1dWlkJztcclxuXHJcbkFXUy5jb25maWcudXBkYXRlKHtcclxuICAgIGFjY2Vzc0tleUlkOiAnaGlldScsXHJcbiAgICBzZWNyZXRBY2Nlc3NLZXk6ICdoaWV1JywgXHJcbiAgICByZWdpb246IFwibG9jYWxcIixcclxuICAgIGVuZHBvaW50OiBcImh0dHA6Ly8xMjcuMC4wLjE6NDU2NlwiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbnZlcnRHdWlkVG9JbnQgPSAoaWQpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGlkLnJlcGxhY2UoLy0vZywgJycpKTtcclxuICAgIC8vIHJlbW92ZSB0aGUgZGFzaGVzIGZyb20gdGhlIGdpdmVuIHV1aWQgYW5kIGNvbnZlcnQgdG8gYSBoZXhhZGVjaW1hbCBCaWdOdW1iZXIgb2JqZWN0XHJcbiAgICBjb25zdCBibiA9IG5ldyBCaWdJbnQoaWQucmVwbGFjZSgvLS9nLCAnJyksIDE2KTtcclxuICAgIC8vIHJldHVybiB0aGUgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBCaWdOdW1iZXIgb2JqZWN0IGFzIGEgZGVjaW1hbFxyXG4gICAgcmV0dXJuIGJuLnRvU3RyaW5nKDEwKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIGNvbnNvbGUubG9nKCfEkcOjIHbDoG8nKVxyXG4gICAgXHJcbiAgICBpZihyZXEubWV0aG9kICE9PSAnUE9TVCcpIHtcclxuICAgICAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oe21lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnfSk7XHJcbiAgICB9XHJcbiAgICB2YXIgZGF0YSA9IHJlcS5ib2R5XHJcbiAgICBjb25zb2xlLmxvZygnbGluZSA5JyxkYXRhLmdlbmRlcik7XHJcbiAgICBcclxuICAgIC8vIHVwZGF0ZSB0byBkeW5hbW9EQlxyXG5cclxuICAgIC8vIHZhbGlkYXRlIGzhuqFpIGRhdGFcclxuICAgIHZhciBsVVVJRCA9IGNvbnZlcnRHdWlkVG9JbnQodXVpZC52NCgpKVxyXG4gICAgY29uc29sZS5sb2coJ2xVVUlEJywgbFVVSUQpXHJcbiAgICB2YXIgZG9jQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xyXG4gICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICBUYWJsZU5hbWU6IFwiT3JkZXJcIixcclxuICAgICAgICBJdGVtOiB7XHJcbiAgICAgICAgICAgIC8vIFwib3JkZXJOdW1iZXJcIjogdXVpZC52NCgpLFxyXG4gICAgICAgICAgICAvLyBcIm9yZGVyU3RhdHVzXCI6IGRhdGEub3JkZXJTdGF0dXMsXHJcbiAgICAgICAgICAgIC8vIFwib3JkZXJEYXlcIjogZGF0YS5vcmRlckRheSxcclxuICAgICAgICAgICAgLy8gXCJlc3RpbWF0ZVN0YXJ0RGF0ZVwiOiBkYXRhLmVzdGltYXRlU3RhcnREYXRlLFxyXG4gICAgICAgICAgICAvLyBcIm9yZGVyRGVwYXJ0bWVudFwiOiBkYXRhLm9yZGVyRGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgLy8gXCJjb250cmFjdFN0YXR1c1wiOiBkYXRhLmNvbnRyYWN0U3RhdHVzLFxyXG4gICAgICAgICAgICAvLyBcIndvcmtwbGFjZURlcGFydG1lbnRcIjogZGF0YS53b3JrcGxhY2VEZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAvLyBcImNhcmVlclwiOiBkYXRhLmNhcmVlcixcclxuICAgICAgICAgICAgLy8gXCJudW1QZW9wbGVPcmRlclwiOiBkYXRhLm51bVBlb3BsZU9yZGVyLFxyXG4gICAgICAgICAgICAvLyBcIm51bVBlb3BsZVVuZGVjaWRlZFwiOiBkYXRhLm51bVBlb3BsZVVuZGVjaWRlZCxcclxuICAgICAgICAgICAgLy8gXCJudW1QZW9wbGVVbmRlY2lkZWQyXCI6IGRhdGEubnVtUGVvcGxlVW5kZWNpZGVkMixcclxuICAgICAgICAgICAgLy8gXCJmZWVcIjogZGF0YS5mZWUsXHJcbiAgICAgICAgICAgIC8vIFwiYWRkcmVzc09yZGVyXCI6IGRhdGEuYWRkcmVzc09yZGVyLFxyXG4gICAgICAgICAgICAvLyBcImluZm8xXCI6IGRhdGEuaW5mbzEsXHJcbiAgICAgICAgICAgIC8vIFwiaW5mbzJcIjogZGF0YS5pbmZvMlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkb2NDbGllbnQucHV0KHBhcmFtcywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7bWVzc2FnZTogJ0luc2VydCBmYWlsJ30pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQdXRJdGVtIHN1Y2NlZWRlZDpcIiwgdXVpZC52NCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOidTdWNjZXNzJ30pOyBcclxuICAgICAgICB9XHJcbiAgICAgfSk7XHJcblxyXG4gIH0iXSwibmFtZXMiOlsiQVdTIiwidXVpZCIsImNvbmZpZyIsInVwZGF0ZSIsImFjY2Vzc0tleUlkIiwic2VjcmV0QWNjZXNzS2V5IiwicmVnaW9uIiwiZW5kcG9pbnQiLCJjb252ZXJ0R3VpZFRvSW50IiwiaWQiLCJjb25zb2xlIiwibG9nIiwicmVwbGFjZSIsImJuIiwiQmlnSW50IiwidG9TdHJpbmciLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkYXRhIiwiYm9keSIsImdlbmRlciIsImxVVUlEIiwidjQiLCJkb2NDbGllbnQiLCJEeW5hbW9EQiIsIkRvY3VtZW50Q2xpZW50IiwicGFyYW1zIiwiVGFibGVOYW1lIiwiSXRlbSIsInB1dCIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/add.js\n");

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
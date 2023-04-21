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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! aws-sdk */ \"aws-sdk\");\n/* harmony import */ var aws_sdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(aws_sdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\naws_sdk__WEBPACK_IMPORTED_MODULE_0___default().config.update({\n    accessKeyId: \"hieu\",\n    secretAccessKey: \"hieu\",\n    region: \"local\",\n    endpoint: \"http://127.0.0.1:4566\"\n});\nasync function handler(req, res) {\n    if (req.method !== \"POST\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    var data = req.body;\n    console.log(\"line 9\", data.gender);\n    // update to dynamoDB\n    // validate lại data\n    var docClient = new (aws_sdk__WEBPACK_IMPORTED_MODULE_0___default().DynamoDB.DocumentClient)();\n    var params = {\n        TableName: \"Order\",\n        Item: {\n        }\n    };\n    docClient.put(params, function(err, data) {\n        if (err) {\n            console.error(err);\n            return res.status(500).json({\n                message: \"Insert fail\"\n            });\n        } else {\n            console.log(\"PutItem succeeded:\", uuid__WEBPACK_IMPORTED_MODULE_1__.v4());\n            return res.status(200).json({\n                message: \"Success\"\n            });\n        }\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvb3JkZXIvYWRkLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUI7QUFDSTtBQUU3QkEsNERBQWlCLENBQUM7SUFDZEksYUFBYTtJQUNiQyxpQkFBaUI7SUFDakJDLFFBQVE7SUFDUkMsVUFBVTtBQUNkO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFFNUMsSUFBR0QsSUFBSUUsTUFBTSxLQUFLLFFBQVE7UUFDdEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFDQyxTQUFTO1FBQW9CO0lBQzlELENBQUM7SUFDRCxJQUFJQyxPQUFPTixJQUFJTyxJQUFJO0lBQ25CQyxRQUFRQyxHQUFHLENBQUMsVUFBU0gsS0FBS0ksTUFBTTtJQUVoQyxxQkFBcUI7SUFFckIsb0JBQW9CO0lBQ3BCLElBQUlDLFlBQVksSUFBSXBCLHdFQUEyQjtJQUMvQyxJQUFJdUIsU0FBUztRQUNUQyxXQUFXO1FBQ1hDLE1BQU07UUFnQk47SUFDSjtJQUNBTCxVQUFVTSxHQUFHLENBQUNILFFBQVEsU0FBU0ksR0FBRyxFQUFFWixJQUFJLEVBQUU7UUFDdEMsSUFBSVksS0FBSztZQUNMVixRQUFRVyxLQUFLLENBQUNEO1lBQ2QsT0FBT2pCLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7Z0JBQUNDLFNBQVM7WUFBYTtRQUN2RCxPQUFPO1lBQ0hHLFFBQVFDLEdBQUcsQ0FBQyxzQkFBc0JqQixvQ0FBTztZQUN6QyxPQUFPUyxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFDQyxTQUFRO1lBQVM7UUFDbEQsQ0FBQztJQUNKO0FBRUgsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL2FwaS9vcmRlci9hZGQuanM/NzFlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQVdTIGZyb20gJ2F3cy1zZGsnXHJcbmltcG9ydCAqIGFzIHV1aWQgZnJvbSAndXVpZCc7XHJcblxyXG5BV1MuY29uZmlnLnVwZGF0ZSh7XHJcbiAgICBhY2Nlc3NLZXlJZDogJ2hpZXUnLFxyXG4gICAgc2VjcmV0QWNjZXNzS2V5OiAnaGlldScsIFxyXG4gICAgcmVnaW9uOiBcImxvY2FsXCIsXHJcbiAgICBlbmRwb2ludDogXCJodHRwOi8vMTI3LjAuMC4xOjQ1NjZcIlxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcclxuICAgIFxyXG4gICAgaWYocmVxLm1ldGhvZCAhPT0gJ1BPU1QnKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHttZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJ30pO1xyXG4gICAgfVxyXG4gICAgdmFyIGRhdGEgPSByZXEuYm9keVxyXG4gICAgY29uc29sZS5sb2coJ2xpbmUgOScsZGF0YS5nZW5kZXIpO1xyXG4gICAgXHJcbiAgICAvLyB1cGRhdGUgdG8gZHluYW1vREJcclxuXHJcbiAgICAvLyB2YWxpZGF0ZSBs4bqhaSBkYXRhXHJcbiAgICB2YXIgZG9jQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xyXG4gICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICBUYWJsZU5hbWU6IFwiT3JkZXJcIixcclxuICAgICAgICBJdGVtOiB7XHJcbiAgICAgICAgICAgIC8vIFwib3JkZXJOdW1iZXJcIjogdXVpZC52NCgpLFxyXG4gICAgICAgICAgICAvLyBcIm9yZGVyU3RhdHVzXCI6IGRhdGEub3JkZXJTdGF0dXMsXHJcbiAgICAgICAgICAgIC8vIFwib3JkZXJEYXlcIjogZGF0YS5vcmRlckRheSxcclxuICAgICAgICAgICAgLy8gXCJlc3RpbWF0ZVN0YXJ0RGF0ZVwiOiBkYXRhLmVzdGltYXRlU3RhcnREYXRlLFxyXG4gICAgICAgICAgICAvLyBcIm9yZGVyRGVwYXJ0bWVudFwiOiBkYXRhLm9yZGVyRGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgLy8gXCJjb250cmFjdFN0YXR1c1wiOiBkYXRhLmNvbnRyYWN0U3RhdHVzLFxyXG4gICAgICAgICAgICAvLyBcIndvcmtwbGFjZURlcGFydG1lbnRcIjogZGF0YS53b3JrcGxhY2VEZXBhcnRtZW50LFxyXG4gICAgICAgICAgICAvLyBcImNhcmVlclwiOiBkYXRhLmNhcmVlcixcclxuICAgICAgICAgICAgLy8gXCJudW1QZW9wbGVPcmRlclwiOiBkYXRhLm51bVBlb3BsZU9yZGVyLFxyXG4gICAgICAgICAgICAvLyBcIm51bVBlb3BsZVVuZGVjaWRlZFwiOiBkYXRhLm51bVBlb3BsZVVuZGVjaWRlZCxcclxuICAgICAgICAgICAgLy8gXCJudW1QZW9wbGVVbmRlY2lkZWQyXCI6IGRhdGEubnVtUGVvcGxlVW5kZWNpZGVkMixcclxuICAgICAgICAgICAgLy8gXCJmZWVcIjogZGF0YS5mZWUsXHJcbiAgICAgICAgICAgIC8vIFwiYWRkcmVzc09yZGVyXCI6IGRhdGEuYWRkcmVzc09yZGVyLFxyXG4gICAgICAgICAgICAvLyBcImluZm8xXCI6IGRhdGEuaW5mbzEsXHJcbiAgICAgICAgICAgIC8vIFwiaW5mbzJcIjogZGF0YS5pbmZvMlxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBkb2NDbGllbnQucHV0KHBhcmFtcywgZnVuY3Rpb24oZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7bWVzc2FnZTogJ0luc2VydCBmYWlsJ30pXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQdXRJdGVtIHN1Y2NlZWRlZDpcIiwgdXVpZC52NCgpKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOidTdWNjZXNzJ30pOyBcclxuICAgICAgICB9XHJcbiAgICAgfSk7XHJcblxyXG4gIH0iXSwibmFtZXMiOlsiQVdTIiwidXVpZCIsImNvbmZpZyIsInVwZGF0ZSIsImFjY2Vzc0tleUlkIiwic2VjcmV0QWNjZXNzS2V5IiwicmVnaW9uIiwiZW5kcG9pbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJkYXRhIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJnZW5kZXIiLCJkb2NDbGllbnQiLCJEeW5hbW9EQiIsIkRvY3VtZW50Q2xpZW50IiwicGFyYW1zIiwiVGFibGVOYW1lIiwiSXRlbSIsInB1dCIsImVyciIsImVycm9yIiwidjQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/order/add.js\n");

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
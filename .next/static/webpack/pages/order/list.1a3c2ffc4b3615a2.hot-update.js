"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/order/list",{

/***/ "./pages/order/list.js":
/*!*****************************!*\
  !*** ./pages/order/list.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ List; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lib/order */ \"./lib/order.js\");\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swr */ \"./node_modules/swr/core/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst fetcher = async ()=>{\n    console.log(\"line8\");\n    const res = await fetch(\"http://localhost:3001/api/order/add\");\n    console.log(res);\n    return await res.json();\n};\nfunction List() {\n    _s();\n    // console.log(listOrder)\n    // var [contactList, setContactList] = useState(listOrder);\n    const { data  } = (0,swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"/api/order/add\", fetcher);\n    console.log(\"line18\", data);\n    //handle deleteContact\n    async function deleteContact(id) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"hi\"\n    }, void 0, false, {\n        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\list.js\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n}\n_s(List, \"0sj2yJGYzZcCGI13NamvRceNarI=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = List;\nvar _c;\n$RefreshReg$(_c, \"List\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlci9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUNvQjtBQUNmO0FBQ2E7QUFDckI7QUFDeEIsTUFBTUssVUFBVSxVQUFZO0lBQ3hCQyxRQUFRQyxHQUFHLENBQUM7SUFDYixNQUFNQyxNQUFPLE1BQU1DLE1BQU07SUFDekJILFFBQVFDLEdBQUcsQ0FBQ0M7SUFDWixPQUFPLE1BQU1BLElBQUlFLElBQUk7QUFDeEI7QUFJYyxTQUFTQyxPQUFPOztJQUMzQix5QkFBeUI7SUFDekIsMkRBQTJEO0lBQzNELE1BQU0sRUFBQ0MsS0FBSSxFQUFDLEdBQUdSLCtDQUFNQSxDQUFDLGtCQUFrQkM7SUFDeENDLFFBQVFDLEdBQUcsQ0FBQyxVQUFTSztJQUVyQixzQkFBc0I7SUFDdEIsZUFBZUMsY0FBY0MsRUFBRSxFQUFDLENBRWhDO0lBRUEscUJBQ0ksOERBQUNDO2tCQUFJOzs7Ozs7QUFLYixDQUFDO0dBakJ1Qko7O1FBR0xQLDJDQUFNQTs7O0tBSERPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29yZGVyL2xpc3QuanM/ZWJmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvbGF5b3V0XCJcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgZ2VEYXRhT3JkZXJzIH0gZnJvbSAnLi4vLi4vbGliL29yZGVyJ1xyXG5pbXBvcnQgdXNlU1dSIGZyb20gJ3N3cic7XHJcbiBjb25zdCBmZXRjaGVyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgIGNvbnNvbGUubG9nKCdsaW5lOCcpO1xyXG4gICAgY29uc3QgcmVzID0gIGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL29yZGVyL2FkZCcpXHJcbiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcclxuIH1cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdCgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKGxpc3RPcmRlcilcclxuICAgIC8vIHZhciBbY29udGFjdExpc3QsIHNldENvbnRhY3RMaXN0XSA9IHVzZVN0YXRlKGxpc3RPcmRlcik7XHJcbiAgICBjb25zdCB7ZGF0YX0gPSB1c2VTV1IoJy9hcGkvb3JkZXIvYWRkJywgZmV0Y2hlcik7XHJcbiAgICBjb25zb2xlLmxvZygnbGluZTE4JyxkYXRhKTtcclxuXHJcbiAgICAvL2hhbmRsZSBkZWxldGVDb250YWN0XHJcbiAgICBhc3luYyBmdW5jdGlvbiBkZWxldGVDb250YWN0KGlkKXtcclxuICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PmhpPC9kaXY+XHJcbiAgICAgICAgLy8gPExheW91dD5cclxuICAgICAgICAgXHJcbiAgICAgICAgLy8gPC9MYXlvdXQ+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiTGluayIsIkxheW91dCIsInVzZVN0YXRlIiwiZ2VEYXRhT3JkZXJzIiwidXNlU1dSIiwiZmV0Y2hlciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJmZXRjaCIsImpzb24iLCJMaXN0IiwiZGF0YSIsImRlbGV0ZUNvbnRhY3QiLCJpZCIsImRpdiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/order/list.js\n"));

/***/ })

});
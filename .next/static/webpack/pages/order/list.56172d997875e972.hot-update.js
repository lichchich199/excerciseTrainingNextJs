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

/***/ "./components/order/orderHelper.js":
/*!*****************************************!*\
  !*** ./components/order/orderHelper.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"handleSortDataOrders\": function() { return /* binding */ handleSortDataOrders; }\n/* harmony export */ });\nconst handleSortDataOrders = (listOrder, fieldName, sortValue)=>{\n    console.log(\"fieldName:\", fieldName);\n    console.log(\"sortValue:\", sortValue);\n    console.log(\"sortValue:\", sortValue);\n    var sortedOrders = listOrder;\n    if (sortValue === \"asc\") {\n        // switch(fieldName) {\n        //     case 'orderNumber':\n        //         break\n        //     case 'orderStatus':\n        //         break\n        //     case 'orderDay':\n        //         break\n        //     default:\n        //         break\n        // }\n        sortedOrders = listOrder.sort((a, b)=>a[fieldName] > b[fieldName] ? 1 : b[fieldName] > a[fieldName] ? -1 : 0);\n        return listOrder.sort((a, b)=>a.fieldName - b.fieldName);\n    } else {\n        sortedOrders = listOrder.sort((a, b)=>a[fieldName] > b[fieldName] ? -1 : b[fieldName] > a[fieldName] ? 1 : 0);\n    }\n    return sortedOrders;\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZGVyL29yZGVySGVscGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSx1QkFBdUIsQ0FBQ0MsV0FBV0MsV0FBV0MsWUFBYztJQUNyRUMsUUFBUUMsR0FBRyxDQUFDLGNBQWNIO0lBQzFCRSxRQUFRQyxHQUFHLENBQUMsY0FBY0Y7SUFDMUJDLFFBQVFDLEdBQUcsQ0FBQyxjQUFjRjtJQUUxQixJQUFJRyxlQUFlTDtJQUNuQixJQUFHRSxjQUFjLE9BQU87UUFDcEIsc0JBQXNCO1FBQ3RCLDBCQUEwQjtRQUMxQixnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLGdCQUFnQjtRQUNoQix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsSUFBSTtRQUNKRyxlQUFlTCxVQUFVTSxJQUFJLENBQUMsQ0FBQ0MsR0FBRUMsSUFBTSxDQUFFLENBQUNQLFVBQVUsR0FBR08sQ0FBQyxDQUFDUCxVQUFVLEdBQUksSUFBSyxDQUFFLENBQUNBLFVBQVUsR0FBR00sQ0FBQyxDQUFDTixVQUFVLEdBQUksQ0FBQyxJQUFJLENBQUM7UUFDbEgsT0FBT0QsVUFBVU0sSUFBSSxDQUFDLENBQUNDLEdBQUVDLElBQU1ELEVBQUVOLFNBQVMsR0FBR08sRUFBRVAsU0FBUztJQUM1RCxPQUFPO1FBQ0hJLGVBQWVMLFVBQVVNLElBQUksQ0FBQyxDQUFDQyxHQUFFQyxJQUFNLENBQUUsQ0FBQ1AsVUFBVSxHQUFHTyxDQUFDLENBQUNQLFVBQVUsR0FBSSxDQUFDLElBQUssQ0FBRSxDQUFDQSxVQUFVLEdBQUdNLENBQUMsQ0FBQ04sVUFBVSxHQUFJLElBQUksQ0FBQztJQUN0SCxDQUFDO0lBR0QsT0FBT0k7QUFDWCxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3JkZXIvb3JkZXJIZWxwZXIuanM/NDg4MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaGFuZGxlU29ydERhdGFPcmRlcnMgPSAobGlzdE9yZGVyLCBmaWVsZE5hbWUsIHNvcnRWYWx1ZSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2ZpZWxkTmFtZTonLCBmaWVsZE5hbWUpXHJcbiAgICBjb25zb2xlLmxvZygnc29ydFZhbHVlOicsIHNvcnRWYWx1ZSlcclxuICAgIGNvbnNvbGUubG9nKCdzb3J0VmFsdWU6Jywgc29ydFZhbHVlKVxyXG5cclxuICAgIHZhciBzb3J0ZWRPcmRlcnMgPSBsaXN0T3JkZXI7XHJcbiAgICBpZihzb3J0VmFsdWUgPT09ICdhc2MnKSB7XHJcbiAgICAgICAgLy8gc3dpdGNoKGZpZWxkTmFtZSkge1xyXG4gICAgICAgIC8vICAgICBjYXNlICdvcmRlck51bWJlcic6XHJcbiAgICAgICAgLy8gICAgICAgICBicmVha1xyXG4gICAgICAgIC8vICAgICBjYXNlICdvcmRlclN0YXR1cyc6XHJcbiAgICAgICAgLy8gICAgICAgICBicmVha1xyXG4gICAgICAgIC8vICAgICBjYXNlICdvcmRlckRheSc6XHJcbiAgICAgICAgLy8gICAgICAgICBicmVha1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgIC8vICAgICAgICAgYnJlYWtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgc29ydGVkT3JkZXJzID0gbGlzdE9yZGVyLnNvcnQoKGEsYikgPT4gKGFbZmllbGROYW1lXSA+IGJbZmllbGROYW1lXSkgPyAxIDogKChiW2ZpZWxkTmFtZV0gPiBhW2ZpZWxkTmFtZV0pID8gLTEgOiAwKSlcclxuICAgICAgICByZXR1cm4gbGlzdE9yZGVyLnNvcnQoKGEsYikgPT4gYS5maWVsZE5hbWUgLSBiLmZpZWxkTmFtZSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc29ydGVkT3JkZXJzID0gbGlzdE9yZGVyLnNvcnQoKGEsYikgPT4gKGFbZmllbGROYW1lXSA+IGJbZmllbGROYW1lXSkgPyAtMSA6ICgoYltmaWVsZE5hbWVdID4gYVtmaWVsZE5hbWVdKSA/IDEgOiAwKSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuIHNvcnRlZE9yZGVyc1xyXG59Il0sIm5hbWVzIjpbImhhbmRsZVNvcnREYXRhT3JkZXJzIiwibGlzdE9yZGVyIiwiZmllbGROYW1lIiwic29ydFZhbHVlIiwiY29uc29sZSIsImxvZyIsInNvcnRlZE9yZGVycyIsInNvcnQiLCJhIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/order/orderHelper.js\n"));

/***/ })

});
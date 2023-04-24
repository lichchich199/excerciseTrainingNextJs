"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/order/detail/[id]",{

/***/ "./pages/order/detail/[id].js":
/*!************************************!*\
  !*** ./pages/order/detail/[id].js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Edit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_order_FormOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/order/FormOrder */ \"./components/order/FormOrder.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nvar __N_SSP = true;\nfunction Edit(param) {\n    let { orderNumber  } = param;\n    _s();\n    console.log(\"orderNumber:\", orderNumber);\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [orderNum, setOrderNum] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(orderNumber);\n    // handle add order\n    async function UpdateOrder(data) {\n        const response = await fetch(\"/api/order/update\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"orderStatus\": data === null || data === void 0 ? void 0 : data.orderStatus,\n                \"orderDay\": data === null || data === void 0 ? void 0 : data.orderDay,\n                \"estimateStartDate\": data === null || data === void 0 ? void 0 : data.estimateStartDate,\n                \"orderDepartment\": data === null || data === void 0 ? void 0 : data.orderDepartment,\n                \"contractStatus\": data === null || data === void 0 ? void 0 : data.contractStatus,\n                \"workplaceDepartment\": data === null || data === void 0 ? void 0 : data.workplaceDepartment,\n                \"career\": data === null || data === void 0 ? void 0 : data.career,\n                \"numPeopleOrder\": data === null || data === void 0 ? void 0 : data.numPeopleOrder,\n                \"numPeopleUndecided\": data === null || data === void 0 ? void 0 : data.numPeopleUndecided,\n                \"numPeopleUndecided2\": data === null || data === void 0 ? void 0 : data.numPeopleUndecided2,\n                \"fee\": data === null || data === void 0 ? void 0 : data.fee,\n                \"addressOrder\": data === null || data === void 0 ? void 0 : data.addressOrder,\n                \"info1\": data === null || data === void 0 ? void 0 : data.info1,\n                \"info2\": data === null || data === void 0 ? void 0 : data.info2\n            })\n        });\n        console.log(\"res 30\", response);\n        if (!response.ok) {\n            throw new Error(response.statusText);\n        }\n        return await response.json();\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"/api/order/getItem?orderNumber=\".concat(orderNumber)).then((res)=>res.json());\n            // if(!response.ok) {\n            //     console.log(response.statusText)\n            // }\n            return await response;\n        };\n        var orderItem = fetchData();\n        console.log(\"line50:\", typeof orderItem);\n        setOrder(orderItem);\n    }, [\n        orderNumber\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card m-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"card-header\",\n                    children: \"Edit Order\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 58,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_order_FormOrder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSubmit: async (data)=>{\n                            event.preventDefault();\n                            try {\n                                await UpdateOrder(data);\n                                next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/order/list\");\n                            } catch (error) {\n                                console.log(\"error:\", error);\n                            }\n                        },\n                        titleButton: \"Edit\",\n                        valuesEdit: order\n                    }, void 0, false, {\n                        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 59,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n            lineNumber: 57,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n        lineNumber: 56,\n        columnNumber: 9\n    }, this);\n}\n_s(Edit, \"3k7JZezuKoxkcPrZLUZmXAA6vfA=\");\n_c = Edit;\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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STtnQ0FDQSxNQUFNcEMsWUFBWUM7Z0NBQ2xCZCx1REFBVyxDQUFDOzRCQUNoQixFQUFFLE9BQU9tRCxPQUFPO2dDQUNaNUMsUUFBUUMsR0FBRyxDQUFDLFVBQVUyQzs0QkFDMUI7d0JBQUM7d0JBQ0xDLGFBQVk7d0JBQ1pDLFlBQWM1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU10QyxDQUFDO0dBckV3Qko7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvb3JkZXIvZGV0YWlsL1tpZF0uanM/ZmNiYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgTGF5b3V0IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgRm9ybU9yZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvb3JkZXIvRm9ybU9yZGVyJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbiBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0KHtvcmRlck51bWJlcn0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdvcmRlck51bWJlcjonLCBvcmRlck51bWJlcilcclxuICAgIGNvbnN0IFtvcmRlciwgc2V0T3JkZXJdID0gdXNlU3RhdGUoe30pO1xyXG4gICAgY29uc3QgW29yZGVyTnVtLCBzZXRPcmRlck51bV0gPSB1c2VTdGF0ZShvcmRlck51bWJlcik7XHJcblxyXG4gICAgLy8gaGFuZGxlIGFkZCBvcmRlclxyXG4gICAgYXN5bmMgZnVuY3Rpb24gVXBkYXRlT3JkZXIgKGRhdGEpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL29yZGVyL3VwZGF0ZScsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcIm9yZGVyU3RhdHVzXCI6IGRhdGE/Lm9yZGVyU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgXCJvcmRlckRheVwiOiBkYXRhPy5vcmRlckRheSxcclxuICAgICAgICAgICAgICAgIFwiZXN0aW1hdGVTdGFydERhdGVcIjogZGF0YT8uZXN0aW1hdGVTdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICBcIm9yZGVyRGVwYXJ0bWVudFwiOiBkYXRhPy5vcmRlckRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRyYWN0U3RhdHVzXCI6IGRhdGE/LmNvbnRyYWN0U3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgXCJ3b3JrcGxhY2VEZXBhcnRtZW50XCI6IGRhdGE/LndvcmtwbGFjZURlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImNhcmVlclwiOiBkYXRhPy5jYXJlZXIsXHJcbiAgICAgICAgICAgICAgICBcIm51bVBlb3BsZU9yZGVyXCI6IGRhdGE/Lm51bVBlb3BsZU9yZGVyLFxyXG4gICAgICAgICAgICAgICAgXCJudW1QZW9wbGVVbmRlY2lkZWRcIjogZGF0YT8ubnVtUGVvcGxlVW5kZWNpZGVkLFxyXG4gICAgICAgICAgICAgICAgXCJudW1QZW9wbGVVbmRlY2lkZWQyXCI6IGRhdGE/Lm51bVBlb3BsZVVuZGVjaWRlZDIsXHJcbiAgICAgICAgICAgICAgICBcImZlZVwiOiBkYXRhPy5mZWUsXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NPcmRlclwiOiBkYXRhPy5hZGRyZXNzT3JkZXIsXHJcbiAgICAgICAgICAgICAgICBcImluZm8xXCI6IGRhdGE/LmluZm8xLFxyXG4gICAgICAgICAgICAgICAgXCJpbmZvMlwiOiBkYXRhPy5pbmZvMlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcyAzMCcsIHJlc3BvbnNlKVxyXG4gICAgICAgIGlmKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dClcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKVxyXG4gICAgfVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgZmV0Y2hEYXRhID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL29yZGVyL2dldEl0ZW0/b3JkZXJOdW1iZXI9JHtvcmRlck51bWJlcn1gKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxyXG4gICAgICAgICAgICAvLyBpZighcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBvcmRlckl0ZW0gPSBmZXRjaERhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnbGluZTUwOicsdHlwZW9mIG9yZGVySXRlbSlcclxuICAgICAgICBzZXRPcmRlcihvcmRlckl0ZW0pO1xyXG4gICAgfSwgW29yZGVyTnVtYmVyXSlcclxuICAgIFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG0tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+RWRpdCBPcmRlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtT3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBVcGRhdGVPcmRlcihkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvb3JkZXIvbGlzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjonLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUJ1dHRvbj0nRWRpdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzRWRpdCA9IHtvcmRlcn1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gZ2V0IHBhcmFtIGZyb20gdXJsIGFuZCBzZXQgdG8gcHJvcHNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IG9yZGVyTnVtYmVyOiBwYXJhbXM/LmlkfVxyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsiUm91dGVyIiwiTGF5b3V0IiwiRm9ybU9yZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJFZGl0Iiwib3JkZXJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwib3JkZXIiLCJzZXRPcmRlciIsIm9yZGVyTnVtIiwic2V0T3JkZXJOdW0iLCJVcGRhdGVPcmRlciIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib3JkZXJTdGF0dXMiLCJvcmRlckRheSIsImVzdGltYXRlU3RhcnREYXRlIiwib3JkZXJEZXBhcnRtZW50IiwiY29udHJhY3RTdGF0dXMiLCJ3b3JrcGxhY2VEZXBhcnRtZW50IiwiY2FyZWVyIiwibnVtUGVvcGxlT3JkZXIiLCJudW1QZW9wbGVVbmRlY2lkZWQiLCJudW1QZW9wbGVVbmRlY2lkZWQyIiwiZmVlIiwiYWRkcmVzc09yZGVyIiwiaW5mbzEiLCJpbmZvMiIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsImZldGNoRGF0YSIsInRoZW4iLCJyZXMiLCJvcmRlckl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJlcnJvciIsInRpdGxlQnV0dG9uIiwidmFsdWVzRWRpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/order/detail/[id].js\n"));

/***/ })

});
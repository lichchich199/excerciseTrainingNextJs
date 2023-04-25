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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Edit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_order_FormOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/order/FormOrder */ \"./components/order/FormOrder.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_order_orderHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/order/orderHelper */ \"./components/order/orderHelper.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Edit(param) {\n    let { orderNumber  } = param;\n    _s();\n    console.log(\"orderNumber:\", orderNumber);\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [orderNum, setOrderNum] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(orderNumber);\n    // handle add order\n    async function UpdateOrder(data) {\n        const response = await fetch(\"/api/order/update\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"orderNumber\": data === null || data === void 0 ? void 0 : data.orderNumber,\n                \"orderStatus\": data === null || data === void 0 ? void 0 : data.orderStatus,\n                \"orderDay\": data === null || data === void 0 ? void 0 : data.orderDay,\n                \"estimateStartDate\": data === null || data === void 0 ? void 0 : data.estimateStartDate,\n                \"orderDepartment\": data === null || data === void 0 ? void 0 : data.orderDepartment,\n                \"contractStatus\": data === null || data === void 0 ? void 0 : data.contractStatus,\n                \"workplaceDepartment\": data === null || data === void 0 ? void 0 : data.workplaceDepartment,\n                \"career\": data === null || data === void 0 ? void 0 : data.career,\n                \"numPeopleOrder\": data === null || data === void 0 ? void 0 : data.numPeopleOrder,\n                \"numPeopleUndecided\": data === null || data === void 0 ? void 0 : data.numPeopleUndecided,\n                \"numPeopleUndecided2\": data === null || data === void 0 ? void 0 : data.numPeopleUndecided2,\n                \"fee\": data === null || data === void 0 ? void 0 : data.fee,\n                \"addressOrder\": data === null || data === void 0 ? void 0 : data.addressOrder,\n                \"info1\": data === null || data === void 0 ? void 0 : data.info1,\n                \"info2\": data === null || data === void 0 ? void 0 : data.info2\n            })\n        });\n        if (!response.ok) {\n            throw new Error(response.statusText);\n        }\n        return await response.json();\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"/api/order/getItem?orderNumber=\".concat(orderNumber)).then((res)=>res.json()).catch();\n            setOrder(response.Item);\n            return response;\n        };\n        fetchData();\n    }, [\n        orderNumber\n    ]);\n    console.log(\"line52:\", order);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: order ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card m-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"card-header\",\n                    children: \"Edit Order\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_order_FormOrder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSubmit: async (data)=>{\n                            event.preventDefault();\n                            try {\n                                await UpdateOrder(data);\n                                next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/order/list\");\n                            } catch (error) {\n                                console.log(\"error:\", error);\n                            }\n                        },\n                        titleButton: \"Edit\",\n                        valuesEdit: (0,_components_order_orderHelper__WEBPACK_IMPORTED_MODULE_5__.convertItemDynomoDbToObject)(order)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                        lineNumber: 58,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 57,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n            lineNumber: 55,\n            columnNumber: 23\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"alert alert-danger\",\n                    children: \"Order does not exist.\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 71,\n                    columnNumber: 28\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"btn btn-info\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/order/list\",\n                        children: \"Back to List\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                        lineNumber: 71,\n                        columnNumber: 139\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 71,\n                    columnNumber: 92\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n            lineNumber: 71,\n            columnNumber: 22\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n        lineNumber: 54,\n        columnNumber: 9\n    }, this);\n}\n_s(Edit, \"3k7JZezuKoxkcPrZLUZmXAA6vfA=\");\n_c = Edit;\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixJQUFJO2dDQUNBLE1BQU1yQyxZQUFZQztnQ0FDbEJoQix1REFBVyxDQUFDOzRCQUNoQixFQUFFLE9BQU9zRCxPQUFPO2dDQUNaN0MsUUFBUUMsR0FBRyxDQUFDLFVBQVU0Qzs0QkFDMUI7d0JBQUM7d0JBQ0xDLGFBQVk7d0JBQ1pDLFlBQWNuRCwwRkFBMkJBLENBQUNNOzs7Ozs7Ozs7Ozs7Ozs7O2lDQUc3Qyw4REFBQ29DOztnQkFBSTs4QkFBQyw4REFBQ0E7b0JBQUlDLFdBQVU7OEJBQXFCOzs7Ozs7Z0JBQTJCOzhCQUFDLDhEQUFDUztvQkFBT0MsTUFBSztvQkFBU1YsV0FBVTs4QkFBZSw0RUFBQzFDLGtEQUFJQTt3QkFBQ3FELE1BQU87a0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBQWtDOzs7Ozs7QUFHdk0sQ0FBQztHQWpFd0JwRDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9vcmRlci9kZXRhaWwvW2lkXS5qcz9mY2JhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBGb3JtT3JkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9vcmRlci9Gb3JtT3JkZXInO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjb252ZXJ0SXRlbUR5bm9tb0RiVG9PYmplY3QgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL29yZGVyL29yZGVySGVscGVyJztcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcblxyXG4gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdCh7b3JkZXJOdW1iZXJ9KSB7XHJcbiAgICBjb25zb2xlLmxvZygnb3JkZXJOdW1iZXI6Jywgb3JkZXJOdW1iZXIpXHJcbiAgICBjb25zdCBbb3JkZXIsIHNldE9yZGVyXSA9IHVzZVN0YXRlKHt9KTtcclxuICAgIGNvbnN0IFtvcmRlck51bSwgc2V0T3JkZXJOdW1dID0gdXNlU3RhdGUob3JkZXJOdW1iZXIpO1xyXG5cclxuICAgIC8vIGhhbmRsZSBhZGQgb3JkZXJcclxuICAgIGFzeW5jIGZ1bmN0aW9uIFVwZGF0ZU9yZGVyIChkYXRhKSB7XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9vcmRlci91cGRhdGUnLCB7XHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgXCJvcmRlck51bWJlclwiOiBkYXRhPy5vcmRlck51bWJlcixcclxuICAgICAgICAgICAgICAgIFwib3JkZXJTdGF0dXNcIjogZGF0YT8ub3JkZXJTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBcIm9yZGVyRGF5XCI6IGRhdGE/Lm9yZGVyRGF5LFxyXG4gICAgICAgICAgICAgICAgXCJlc3RpbWF0ZVN0YXJ0RGF0ZVwiOiBkYXRhPy5lc3RpbWF0ZVN0YXJ0RGF0ZSxcclxuICAgICAgICAgICAgICAgIFwib3JkZXJEZXBhcnRtZW50XCI6IGRhdGE/Lm9yZGVyRGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIFwiY29udHJhY3RTdGF0dXNcIjogZGF0YT8uY29udHJhY3RTdGF0dXMsXHJcbiAgICAgICAgICAgICAgICBcIndvcmtwbGFjZURlcGFydG1lbnRcIjogZGF0YT8ud29ya3BsYWNlRGVwYXJ0bWVudCxcclxuICAgICAgICAgICAgICAgIFwiY2FyZWVyXCI6IGRhdGE/LmNhcmVlcixcclxuICAgICAgICAgICAgICAgIFwibnVtUGVvcGxlT3JkZXJcIjogZGF0YT8ubnVtUGVvcGxlT3JkZXIsXHJcbiAgICAgICAgICAgICAgICBcIm51bVBlb3BsZVVuZGVjaWRlZFwiOiBkYXRhPy5udW1QZW9wbGVVbmRlY2lkZWQsXHJcbiAgICAgICAgICAgICAgICBcIm51bVBlb3BsZVVuZGVjaWRlZDJcIjogZGF0YT8ubnVtUGVvcGxlVW5kZWNpZGVkMixcclxuICAgICAgICAgICAgICAgIFwiZmVlXCI6IGRhdGE/LmZlZSxcclxuICAgICAgICAgICAgICAgIFwiYWRkcmVzc09yZGVyXCI6IGRhdGE/LmFkZHJlc3NPcmRlcixcclxuICAgICAgICAgICAgICAgIFwiaW5mbzFcIjogZGF0YT8uaW5mbzEsXHJcbiAgICAgICAgICAgICAgICBcImluZm8yXCI6IGRhdGE/LmluZm8yXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZighcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJlc3BvbnNlLnN0YXR1c1RleHQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9vcmRlci9nZXRJdGVtP29yZGVyTnVtYmVyPSR7b3JkZXJOdW1iZXJ9YCkudGhlbihyZXMgPT4gcmVzLmpzb24oKSkuY2F0Y2goKVxyXG4gICAgICAgICAgICBzZXRPcmRlcihyZXNwb25zZS5JdGVtKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZldGNoRGF0YSgpO1xyXG4gICAgfSwgW29yZGVyTnVtYmVyXSlcclxuICAgIGNvbnNvbGUubG9nKCdsaW5lNTI6JyxvcmRlciApXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICB7b3JkZXIgPyAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG0tM1wiPlxyXG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtaGVhZGVyXCI+RWRpdCBPcmRlcjwvaDU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtT3JkZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU3VibWl0PXthc3luYyAoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBVcGRhdGVPcmRlcihkYXRhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJvdXRlci5wdXNoKCcvb3JkZXIvbGlzdCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjonLCBlcnJvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZUJ1dHRvbj0nRWRpdCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzRWRpdCA9IHtjb252ZXJ0SXRlbUR5bm9tb0RiVG9PYmplY3Qob3JkZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+IDogPGRpdj4gPGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5PcmRlciBkb2VzIG5vdCBleGlzdC48L2Rpdj4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1pbmZvXCI+PExpbmsgaHJlZj17YC9vcmRlci9saXN0YH0+QmFjayB0byBMaXN0PC9MaW5rPjwvYnV0dG9uPjwvZGl2Pn1cclxuICAgICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbn1cclxuXHJcbi8vIGdldCBwYXJhbSBmcm9tIHVybCBhbmQgc2V0IHRvIHByb3BzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyBwYXJhbXMgfSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczogeyBvcmRlck51bWJlcjogcGFyYW1zPy5pZH1cclxuICAgIH1cclxuICB9Il0sIm5hbWVzIjpbIlJvdXRlciIsIkxheW91dCIsIkZvcm1PcmRlciIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY29udmVydEl0ZW1EeW5vbW9EYlRvT2JqZWN0IiwiTGluayIsIkVkaXQiLCJvcmRlck51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJvcmRlciIsInNldE9yZGVyIiwib3JkZXJOdW0iLCJzZXRPcmRlck51bSIsIlVwZGF0ZU9yZGVyIiwiZGF0YSIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcmRlclN0YXR1cyIsIm9yZGVyRGF5IiwiZXN0aW1hdGVTdGFydERhdGUiLCJvcmRlckRlcGFydG1lbnQiLCJjb250cmFjdFN0YXR1cyIsIndvcmtwbGFjZURlcGFydG1lbnQiLCJjYXJlZXIiLCJudW1QZW9wbGVPcmRlciIsIm51bVBlb3BsZVVuZGVjaWRlZCIsIm51bVBlb3BsZVVuZGVjaWRlZDIiLCJmZWUiLCJhZGRyZXNzT3JkZXIiLCJpbmZvMSIsImluZm8yIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwiZmV0Y2hEYXRhIiwidGhlbiIsInJlcyIsImNhdGNoIiwiSXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImg1Iiwib25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsImVycm9yIiwidGl0bGVCdXR0b24iLCJ2YWx1ZXNFZGl0IiwiYnV0dG9uIiwidHlwZSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/order/detail/[id].js\n"));

/***/ })

});
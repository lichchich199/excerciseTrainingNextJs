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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Edit; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_order_FormOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/order/FormOrder */ \"./components/order/FormOrder.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_order_orderHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/order/orderHelper */ \"./components/order/orderHelper.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nvar __N_SSP = true;\nfunction Edit(param) {\n    let { orderNumber  } = param;\n    _s();\n    console.log(\"orderNumber:\", orderNumber);\n    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({});\n    const [orderNum, setOrderNum] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(orderNumber);\n    // handle add order\n    async function UpdateOrder(data) {\n        const response = await fetch(\"/api/order/update\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"orderNumber\": data === null || data === void 0 ? void 0 : data.orderNumber,\n                \"orderStatus\": data === null || data === void 0 ? void 0 : data.orderStatus,\n                \"orderDay\": data === null || data === void 0 ? void 0 : data.orderDay,\n                \"estimateStartDate\": data === null || data === void 0 ? void 0 : data.estimateStartDate,\n                \"orderDepartment\": data === null || data === void 0 ? void 0 : data.orderDepartment,\n                \"contractStatus\": data === null || data === void 0 ? void 0 : data.contractStatus,\n                \"workplaceDepartment\": data === null || data === void 0 ? void 0 : data.workplaceDepartment,\n                \"career\": data === null || data === void 0 ? void 0 : data.career,\n                \"numPeopleOrder\": data === null || data === void 0 ? void 0 : data.numPeopleOrder,\n                \"numPeopleUndecided\": data === null || data === void 0 ? void 0 : data.numPeopleUndecided,\n                \"numPeopleUndecided2\": data === null || data === void 0 ? void 0 : data.numPeopleUndecided2,\n                \"fee\": data === null || data === void 0 ? void 0 : data.fee,\n                \"addressOrder\": data === null || data === void 0 ? void 0 : data.addressOrder,\n                \"info1\": data === null || data === void 0 ? void 0 : data.info1,\n                \"info2\": data === null || data === void 0 ? void 0 : data.info2\n            })\n        });\n        if (!response.ok) {\n            throw new Error(response.statusText);\n        }\n        return await response.json();\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            const response = await fetch(\"/api/order/getItem?orderNumber=\".concat(orderNumber)).then((res)=>res.json()).catch();\n            setOrder(response.Item);\n            return response;\n        };\n        fetchData();\n    }, [\n        orderNumber\n    ]);\n    console.log(\"line52:\", order);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: order ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card m-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"card-header\",\n                    children: \"Edit Order\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_order_FormOrder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSubmit: async (data)=>{\n                            event.preventDefault();\n                            try {\n                                await UpdateOrder(data);\n                                next_router__WEBPACK_IMPORTED_MODULE_1___default().push(\"/order/list\");\n                            } catch (error) {\n                                console.log(\"error:\", error);\n                            }\n                        },\n                        titleButton: \"Edit\",\n                        valuesEdit: (0,_components_order_orderHelper__WEBPACK_IMPORTED_MODULE_5__.convertItemDynomoDbToObject)(order)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                        lineNumber: 57,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 56,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n            lineNumber: 54,\n            columnNumber: 23\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"alert alert-danger\",\n                    children: \"Order does not exist.\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 70,\n                    columnNumber: 28\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"btn btn-secondary\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Link, {\n                        href: \"/order/list\",\n                        children: \"Cancel\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                        lineNumber: 70,\n                        columnNumber: 140\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n                    lineNumber: 70,\n                    columnNumber: 88\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n            lineNumber: 70,\n            columnNumber: 22\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\detail\\\\[id].js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this);\n}\n_s(Edit, \"3k7JZezuKoxkcPrZLUZmXAA6vfA=\");\n_c = Edit;\nvar _c;\n$RefreshReg$(_c, \"Edit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Z0NBQ0EsTUFBTXJDLFlBQVlDO2dDQUNsQmYsdURBQVcsQ0FBQzs0QkFDaEIsRUFBRSxPQUFPcUQsT0FBTztnQ0FDWjdDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVNEM7NEJBQzFCO3dCQUFDO3dCQUNMQyxhQUFZO3dCQUNaQyxZQUFjbEQsMEZBQTJCQSxDQUFDSzs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHN0MsOERBQUNvQzs7Z0JBQUk7OEJBQUMsOERBQUNBO29CQUFJVSxPQUFNOzhCQUFxQjs7Ozs7O2dCQUEyQjs4QkFBQyw4REFBQ0M7b0JBQU9DLE1BQUs7b0JBQVNYLFdBQVU7OEJBQW9CLDRFQUFDWTt3QkFBS0MsTUFBTztrQ0FBYzs7Ozs7Ozs7Ozs7Ozs7OztnQkFBNEI7Ozs7OztBQUdsTSxDQUFDO0dBakV3QnREO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29yZGVyL2RldGFpbC9baWRdLmpzP2ZjYmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEZvcm1PcmRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL29yZGVyL0Zvcm1PcmRlcic7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNvbnZlcnRJdGVtRHlub21vRGJUb09iamVjdCB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvb3JkZXIvb3JkZXJIZWxwZXInO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXQoe29yZGVyTnVtYmVyfSkge1xyXG4gICAgY29uc29sZS5sb2coJ29yZGVyTnVtYmVyOicsIG9yZGVyTnVtYmVyKVxyXG4gICAgY29uc3QgW29yZGVyLCBzZXRPcmRlcl0gPSB1c2VTdGF0ZSh7fSk7XHJcbiAgICBjb25zdCBbb3JkZXJOdW0sIHNldE9yZGVyTnVtXSA9IHVzZVN0YXRlKG9yZGVyTnVtYmVyKTtcclxuXHJcbiAgICAvLyBoYW5kbGUgYWRkIG9yZGVyXHJcbiAgICBhc3luYyBmdW5jdGlvbiBVcGRhdGVPcmRlciAoZGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvb3JkZXIvdXBkYXRlJywge1xyXG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgIFwib3JkZXJOdW1iZXJcIjogZGF0YT8ub3JkZXJOdW1iZXIsXHJcbiAgICAgICAgICAgICAgICBcIm9yZGVyU3RhdHVzXCI6IGRhdGE/Lm9yZGVyU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgXCJvcmRlckRheVwiOiBkYXRhPy5vcmRlckRheSxcclxuICAgICAgICAgICAgICAgIFwiZXN0aW1hdGVTdGFydERhdGVcIjogZGF0YT8uZXN0aW1hdGVTdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICBcIm9yZGVyRGVwYXJ0bWVudFwiOiBkYXRhPy5vcmRlckRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRyYWN0U3RhdHVzXCI6IGRhdGE/LmNvbnRyYWN0U3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgXCJ3b3JrcGxhY2VEZXBhcnRtZW50XCI6IGRhdGE/LndvcmtwbGFjZURlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImNhcmVlclwiOiBkYXRhPy5jYXJlZXIsXHJcbiAgICAgICAgICAgICAgICBcIm51bVBlb3BsZU9yZGVyXCI6IGRhdGE/Lm51bVBlb3BsZU9yZGVyLFxyXG4gICAgICAgICAgICAgICAgXCJudW1QZW9wbGVVbmRlY2lkZWRcIjogZGF0YT8ubnVtUGVvcGxlVW5kZWNpZGVkLFxyXG4gICAgICAgICAgICAgICAgXCJudW1QZW9wbGVVbmRlY2lkZWQyXCI6IGRhdGE/Lm51bVBlb3BsZVVuZGVjaWRlZDIsXHJcbiAgICAgICAgICAgICAgICBcImZlZVwiOiBkYXRhPy5mZWUsXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NPcmRlclwiOiBkYXRhPy5hZGRyZXNzT3JkZXIsXHJcbiAgICAgICAgICAgICAgICBcImluZm8xXCI6IGRhdGE/LmluZm8xLFxyXG4gICAgICAgICAgICAgICAgXCJpbmZvMlwiOiBkYXRhPy5pbmZvMlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvb3JkZXIvZ2V0SXRlbT9vcmRlck51bWJlcj0ke29yZGVyTnVtYmVyfWApLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpLmNhdGNoKClcclxuICAgICAgICAgICAgc2V0T3JkZXIocmVzcG9uc2UuSXRlbSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZVxyXG4gICAgICAgIH1cclxuICAgICAgICBmZXRjaERhdGEoKTtcclxuICAgIH0sIFtvcmRlck51bWJlcl0pXHJcbiAgICBjb25zb2xlLmxvZygnbGluZTUyOicsb3JkZXIgKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAge29yZGVyID8gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLWhlYWRlclwiPkVkaXQgT3JkZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybU9yZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgVXBkYXRlT3JkZXIoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCgnL29yZGVyL2xpc3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVCdXR0b249J0VkaXQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlc0VkaXQgPSB7Y29udmVydEl0ZW1EeW5vbW9EYlRvT2JqZWN0KG9yZGVyKX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PiA6IDxkaXY+IDxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj5PcmRlciBkb2VzIG5vdCBleGlzdC48L2Rpdj4gPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIj48TGluayBocmVmPXtgL29yZGVyL2xpc3RgfT5DYW5jZWw8L0xpbms+PC9idXR0b24+PC9kaXY+fVxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG5cclxuLy8gZ2V0IHBhcmFtIGZyb20gdXJsIGFuZCBzZXQgdG8gcHJvcHNcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyh7IHBhcmFtcyB9KSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7IG9yZGVyTnVtYmVyOiBwYXJhbXM/LmlkfVxyXG4gICAgfVxyXG4gIH0iXSwibmFtZXMiOlsiUm91dGVyIiwiTGF5b3V0IiwiRm9ybU9yZGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjb252ZXJ0SXRlbUR5bm9tb0RiVG9PYmplY3QiLCJFZGl0Iiwib3JkZXJOdW1iZXIiLCJjb25zb2xlIiwibG9nIiwib3JkZXIiLCJzZXRPcmRlciIsIm9yZGVyTnVtIiwic2V0T3JkZXJOdW0iLCJVcGRhdGVPcmRlciIsImRhdGEiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib3JkZXJTdGF0dXMiLCJvcmRlckRheSIsImVzdGltYXRlU3RhcnREYXRlIiwib3JkZXJEZXBhcnRtZW50IiwiY29udHJhY3RTdGF0dXMiLCJ3b3JrcGxhY2VEZXBhcnRtZW50IiwiY2FyZWVyIiwibnVtUGVvcGxlT3JkZXIiLCJudW1QZW9wbGVVbmRlY2lkZWQiLCJudW1QZW9wbGVVbmRlY2lkZWQyIiwiZmVlIiwiYWRkcmVzc09yZGVyIiwiaW5mbzEiLCJpbmZvMiIsIm9rIiwiRXJyb3IiLCJzdGF0dXNUZXh0IiwianNvbiIsImZldGNoRGF0YSIsInRoZW4iLCJyZXMiLCJjYXRjaCIsIkl0ZW0iLCJkaXYiLCJjbGFzc05hbWUiLCJoNSIsIm9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJlcnJvciIsInRpdGxlQnV0dG9uIiwidmFsdWVzRWRpdCIsImNsYXNzIiwiYnV0dG9uIiwidHlwZSIsIkxpbmsiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/order/detail/[id].js\n"));

/***/ })

});
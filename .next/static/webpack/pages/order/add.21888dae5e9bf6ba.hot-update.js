"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/order/add",{

/***/ "./pages/order/add.js":
/*!****************************!*\
  !*** ./pages/order/add.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Add; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout */ \"./components/layout.js\");\n/* harmony import */ var _components_order_FormOrder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/order/FormOrder */ \"./components/order/FormOrder.js\");\n\n\n\n\nfunction Add() {\n    // handle add contact\n    async function saveContact(data) {\n        console.log(data);\n        const response = await fetch(\"/api/order/add\", {\n            method: \"POST\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            body: JSON.stringify({\n                \"orderStatus\": data === null || data === void 0 ? void 0 : data.orderStatus,\n                \"orderDay\": data === null || data === void 0 ? void 0 : data.orderDay,\n                \"estimateStartDate\": data === null || data === void 0 ? void 0 : data.estimateStartDate,\n                \"orderDepartment\": data === null || data === void 0 ? void 0 : data.orderDepartment,\n                \"contractStatus\": data === null || data === void 0 ? void 0 : data.contractStatus,\n                \"workplaceDepartment\": data === null || data === void 0 ? void 0 : data.workplaceDepartment,\n                \"career\": data === null || data === void 0 ? void 0 : data.career,\n                \"numPeopleOrder\": data === null || data === void 0 ? void 0 : data.numPeopleOrder,\n                \"numPeopleUndecided\": data === null || data === void 0 ? void 0 : data.numPeopleUndecided,\n                \"numPeopleUndecided2\": data === null || data === void 0 ? void 0 : data.numPeopleUndecided2,\n                \"fee\": data === null || data === void 0 ? void 0 : data.fee,\n                \"addressOrder\": data === null || data === void 0 ? void 0 : data.addressOrder,\n                \"info1\": data === null || data === void 0 ? void 0 : data.info1,\n                \"info2\": data === null || data === void 0 ? void 0 : data.info2\n            })\n        });\n        if (!response.ok) {\n            throw new Error(response.statusText);\n        }\n        return await response.json();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"card m-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                    className: \"card-header\",\n                    children: \"Insert Order\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\add.js\",\n                    lineNumber: 39,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card-body\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_order_FormOrder__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSubmit: async (data)=>{\n                            event.preventDefault();\n                            try {\n                                await saveContact(data);\n                            // Router.push('/order/list')\n                            } catch (error) {\n                                console.log(\"error:\", error);\n                            }\n                        },\n                        titleButton: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\add.js\",\n                        lineNumber: 41,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\add.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\add.js\",\n            lineNumber: 38,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\order\\\\add.js\",\n        lineNumber: 37,\n        columnNumber: 9\n    }, this);\n}\n_c = Add;\nvar _c;\n$RefreshReg$(_c, \"Add\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vcmRlci9hZGQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBZ0M7QUFFaUI7QUFDUTtBQUV6QyxTQUFTRyxNQUFNO0lBQzNCLHFCQUFxQjtJQUNyQixlQUFlQyxZQUFhQyxJQUFJLEVBQUU7UUFDOUJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWixNQUFNRyxXQUFXLE1BQU1DLE1BQU0sa0JBQWtCO1lBQzNDQyxRQUFRO1lBQ1JDLFNBQVM7Z0JBQUUsZ0JBQWdCO1lBQW1CO1lBQzlDQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7Z0JBQ2pCLGVBQWVULGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVUsV0FBVztnQkFDaEMsWUFBWVYsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNVyxRQUFRO2dCQUMxQixxQkFBcUJYLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTVksaUJBQWlCO2dCQUM1QyxtQkFBbUJaLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWEsZUFBZTtnQkFDeEMsa0JBQWtCYixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1jLGNBQWM7Z0JBQ3RDLHVCQUF1QmQsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNZSxtQkFBbUI7Z0JBQ2hELFVBQVVmLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWdCLE1BQU07Z0JBQ3RCLGtCQUFrQmhCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWlCLGNBQWM7Z0JBQ3RDLHNCQUFzQmpCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWtCLGtCQUFrQjtnQkFDOUMsdUJBQXVCbEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNbUIsbUJBQW1CO2dCQUNoRCxPQUFPbkIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNb0IsR0FBRztnQkFDaEIsZ0JBQWdCcEIsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNcUIsWUFBWTtnQkFDbEMsU0FBU3JCLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTXNCLEtBQUs7Z0JBQ3BCLFNBQVN0QixpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU11QixLQUFLO1lBQ3hCO1FBQ0o7UUFDQSxJQUFHLENBQUNwQixTQUFTcUIsRUFBRSxFQUFFO1lBQ2IsTUFBTSxJQUFJQyxNQUFNdEIsU0FBU3VCLFVBQVUsRUFBQztRQUN4QyxDQUFDO1FBQ0QsT0FBTyxNQUFNdkIsU0FBU3dCLElBQUk7SUFDOUI7SUFFQSxxQkFDSSw4REFBQy9CLHNEQUFNQTtrQkFDSCw0RUFBQ2dDO1lBQUlDLFdBQVU7OzhCQUNYLDhEQUFDQztvQkFBR0QsV0FBVTs4QkFBYzs7Ozs7OzhCQUM1Qiw4REFBQ0Q7b0JBQUlDLFdBQVU7OEJBQ1gsNEVBQUNoQyxtRUFBU0E7d0JBQ05rQyxVQUFVLE9BQU8vQixPQUFTOzRCQUN0QmdDLE1BQU1DLGNBQWM7NEJBQ3BCLElBQUk7Z0NBQ0EsTUFBTWxDLFlBQVlDOzRCQUNsQiw2QkFBNkI7NEJBQ2pDLEVBQUUsT0FBT2tDLE9BQU87Z0NBQ1pqQyxRQUFRQyxHQUFHLENBQUMsVUFBVWdDOzRCQUMxQjt3QkFBQzt3QkFDTEMsYUFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1wQyxDQUFDO0tBbER3QnJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29yZGVyL2FkZC5qcz9kMWFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBGb3JtT3JkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9vcmRlci9Gb3JtT3JkZXInO1xyXG5cclxuIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZCgpIHtcclxuICAgIC8vIGhhbmRsZSBhZGQgY29udGFjdFxyXG4gICAgYXN5bmMgZnVuY3Rpb24gc2F2ZUNvbnRhY3QgKGRhdGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL29yZGVyL2FkZCcsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICBcIm9yZGVyU3RhdHVzXCI6IGRhdGE/Lm9yZGVyU3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgXCJvcmRlckRheVwiOiBkYXRhPy5vcmRlckRheSxcclxuICAgICAgICAgICAgICAgIFwiZXN0aW1hdGVTdGFydERhdGVcIjogZGF0YT8uZXN0aW1hdGVTdGFydERhdGUsXHJcbiAgICAgICAgICAgICAgICBcIm9yZGVyRGVwYXJ0bWVudFwiOiBkYXRhPy5vcmRlckRlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImNvbnRyYWN0U3RhdHVzXCI6IGRhdGE/LmNvbnRyYWN0U3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgXCJ3b3JrcGxhY2VEZXBhcnRtZW50XCI6IGRhdGE/LndvcmtwbGFjZURlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICBcImNhcmVlclwiOiBkYXRhPy5jYXJlZXIsXHJcbiAgICAgICAgICAgICAgICBcIm51bVBlb3BsZU9yZGVyXCI6IGRhdGE/Lm51bVBlb3BsZU9yZGVyLFxyXG4gICAgICAgICAgICAgICAgXCJudW1QZW9wbGVVbmRlY2lkZWRcIjogZGF0YT8ubnVtUGVvcGxlVW5kZWNpZGVkLFxyXG4gICAgICAgICAgICAgICAgXCJudW1QZW9wbGVVbmRlY2lkZWQyXCI6IGRhdGE/Lm51bVBlb3BsZVVuZGVjaWRlZDIsXHJcbiAgICAgICAgICAgICAgICBcImZlZVwiOiBkYXRhPy5mZWUsXHJcbiAgICAgICAgICAgICAgICBcImFkZHJlc3NPcmRlclwiOiBkYXRhPy5hZGRyZXNzT3JkZXIsXHJcbiAgICAgICAgICAgICAgICBcImluZm8xXCI6IGRhdGE/LmluZm8xLFxyXG4gICAgICAgICAgICAgICAgXCJpbmZvMlwiOiBkYXRhPy5pbmZvMlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbS0zXCI+XHJcbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC1oZWFkZXJcIj5JbnNlcnQgT3JkZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybU9yZGVyIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17YXN5bmMgKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2F2ZUNvbnRhY3QoZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBSb3V0ZXIucHVzaCgnL29yZGVyL2xpc3QnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6JywgZXJyb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGVCdXR0b249J0FkZCdcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUm91dGVyIiwiTGF5b3V0IiwiRm9ybU9yZGVyIiwiQWRkIiwic2F2ZUNvbnRhY3QiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInJlc3BvbnNlIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvcmRlclN0YXR1cyIsIm9yZGVyRGF5IiwiZXN0aW1hdGVTdGFydERhdGUiLCJvcmRlckRlcGFydG1lbnQiLCJjb250cmFjdFN0YXR1cyIsIndvcmtwbGFjZURlcGFydG1lbnQiLCJjYXJlZXIiLCJudW1QZW9wbGVPcmRlciIsIm51bVBlb3BsZVVuZGVjaWRlZCIsIm51bVBlb3BsZVVuZGVjaWRlZDIiLCJmZWUiLCJhZGRyZXNzT3JkZXIiLCJpbmZvMSIsImluZm8yIiwib2siLCJFcnJvciIsInN0YXR1c1RleHQiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDUiLCJvblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlcnJvciIsInRpdGxlQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/order/add.js\n"));

/***/ })

});
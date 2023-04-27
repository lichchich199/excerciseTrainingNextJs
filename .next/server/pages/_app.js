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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/order/slice.js":
/*!***********************************!*\
  !*** ./components/order/slice.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"changeSortEstimateStartDate\": () => (/* binding */ changeSortEstimateStartDate),\n/* harmony export */   \"changeSortOrderDay\": () => (/* binding */ changeSortOrderDay),\n/* harmony export */   \"changeSortOrderNumber\": () => (/* binding */ changeSortOrderNumber),\n/* harmony export */   \"changeSortOrderStatus\": () => (/* binding */ changeSortOrderStatus),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getEstimateStartDateSort\": () => (/* binding */ getEstimateStartDateSort),\n/* harmony export */   \"getOrderDaySort\": () => (/* binding */ getOrderDaySort),\n/* harmony export */   \"getOrderNumberSort\": () => (/* binding */ getOrderNumberSort),\n/* harmony export */   \"getOrderStatusSort\": () => (/* binding */ getOrderStatusSort),\n/* harmony export */   \"taskSlice\": () => (/* binding */ taskSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    orderNumberSort: \"asc\",\n    orderStatusSort: \"asc\",\n    orderDaySort: \"asc\",\n    estimateStartDateSort: \"asc\"\n};\n// create a slice\nconst taskSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"order\",\n    initialState,\n    reducers: {\n        changeSortOrderNumber: (state, action)=>{\n            state.orderNumberSort = action.payload.status;\n        },\n        changeSortOrderStatus: (state, action)=>{\n            state.orderStatusSort = action.payload.status;\n        },\n        changeSortOrderDay: (state, action)=>{\n            state.orderDaySort = action.payload.status;\n        },\n        changeSortEstimateStartDate: (state, action)=>{\n            state.estimateStartDateSort = action.payload.status;\n        }\n    }\n});\n// export action addTask from taskSlice\nconst { changeSortOrderNumber , changeSortOrderStatus , changeSortOrderDay , changeSortEstimateStartDate  } = taskSlice.actions;\n// export action get orderNumberSort\nconst getOrderNumberSort = (state)=>state.order.orderNumberSort;\n// export action get orderStatusSort\nconst getOrderStatusSort = (state)=>state.order.orderStatusSort;\n// export action get orderDaySort\nconst getOrderDaySort = (state)=>state.order.orderDaySort;\n// export action get estimateStartDateSort\nconst getEstimateStartDateSort = (state)=>state.order.estimateStartDateSort;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL29yZGVyL3NsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxlQUFlO0lBQ2pCQyxpQkFBa0I7SUFDbEJDLGlCQUFrQjtJQUNsQkMsY0FBZTtJQUNmQyx1QkFBd0I7QUFDNUI7QUFFQSxpQkFBaUI7QUFDVixNQUFNQyxZQUFZTiw2REFBV0EsQ0FBQztJQUNqQ08sTUFBTTtJQUNOTjtJQUNBTyxVQUFVO1FBQ05DLHVCQUF1QixDQUFDQyxPQUFPQyxTQUFXO1lBQ3RDRCxNQUFNUixlQUFlLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ0MsTUFBTTtRQUNqRDtRQUNBQyx1QkFBdUIsQ0FBQ0osT0FBT0MsU0FBVztZQUN0Q0QsTUFBTVAsZUFBZSxHQUFHUSxPQUFPQyxPQUFPLENBQUNDLE1BQU07UUFDakQ7UUFDQUUsb0JBQW9CLENBQUNMLE9BQU9DLFNBQVc7WUFDbkNELE1BQU1OLFlBQVksR0FBR08sT0FBT0MsT0FBTyxDQUFDQyxNQUFNO1FBQzlDO1FBQ0FHLDZCQUE2QixDQUFDTixPQUFPQyxTQUFXO1lBQzVDRCxNQUFNTCxxQkFBcUIsR0FBR00sT0FBT0MsT0FBTyxDQUFDQyxNQUFNO1FBQ3ZEO0lBQ0o7QUFDSixHQUFFO0FBQ0YsdUNBQXVDO0FBQ2hDLE1BQU0sRUFBQ0osc0JBQXFCLEVBQUVLLHNCQUFxQixFQUFFQyxtQkFBa0IsRUFBRUMsNEJBQTJCLEVBQUMsR0FBR1YsVUFBVVcsT0FBTyxDQUFDO0FBQ2pJLG9DQUFvQztBQUM3QixNQUFNQyxxQkFBc0IsQ0FBQ1IsUUFBVUEsTUFBTVMsS0FBSyxDQUFDakIsZUFBZTtBQUN6RSxvQ0FBb0M7QUFDN0IsTUFBTWtCLHFCQUFzQixDQUFDVixRQUFVQSxNQUFNUyxLQUFLLENBQUNoQixlQUFlO0FBQ3pFLGlDQUFpQztBQUMxQixNQUFNa0Isa0JBQW1CLENBQUNYLFFBQVVBLE1BQU1TLEtBQUssQ0FBQ2YsWUFBWTtBQUNuRSwwQ0FBMEM7QUFDbkMsTUFBTWtCLDJCQUE0QixDQUFDWixRQUFVQSxNQUFNUyxLQUFLLENBQUNkLHFCQUFxQjtBQUVyRixpRUFBZUMsVUFBVWlCLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29yZGVyL3NsaWNlLmpzPzZlODIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gICAgb3JkZXJOdW1iZXJTb3J0IDogJ2FzYycsXHJcbiAgICBvcmRlclN0YXR1c1NvcnQgOiAnYXNjJyxcclxuICAgIG9yZGVyRGF5U29ydCA6ICdhc2MnLFxyXG4gICAgZXN0aW1hdGVTdGFydERhdGVTb3J0IDogJ2FzYydcclxufTtcclxuXHJcbi8vIGNyZWF0ZSBhIHNsaWNlXHJcbmV4cG9ydCBjb25zdCB0YXNrU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOiAnb3JkZXInLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBjaGFuZ2VTb3J0T3JkZXJOdW1iZXI6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLm9yZGVyTnVtYmVyU29ydCA9IGFjdGlvbi5wYXlsb2FkLnN0YXR1c1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hhbmdlU29ydE9yZGVyU3RhdHVzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBzdGF0ZS5vcmRlclN0YXR1c1NvcnQgPSBhY3Rpb24ucGF5bG9hZC5zdGF0dXNcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoYW5nZVNvcnRPcmRlckRheTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgc3RhdGUub3JkZXJEYXlTb3J0ID0gYWN0aW9uLnBheWxvYWQuc3RhdHVzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGFuZ2VTb3J0RXN0aW1hdGVTdGFydERhdGU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIHN0YXRlLmVzdGltYXRlU3RhcnREYXRlU29ydCA9IGFjdGlvbi5wYXlsb2FkLnN0YXR1c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuLy8gZXhwb3J0IGFjdGlvbiBhZGRUYXNrIGZyb20gdGFza1NsaWNlXHJcbmV4cG9ydCBjb25zdCB7Y2hhbmdlU29ydE9yZGVyTnVtYmVyLCBjaGFuZ2VTb3J0T3JkZXJTdGF0dXMsIGNoYW5nZVNvcnRPcmRlckRheSwgY2hhbmdlU29ydEVzdGltYXRlU3RhcnREYXRlfSA9IHRhc2tTbGljZS5hY3Rpb25zO1xyXG4vLyBleHBvcnQgYWN0aW9uIGdldCBvcmRlck51bWJlclNvcnRcclxuZXhwb3J0IGNvbnN0IGdldE9yZGVyTnVtYmVyU29ydCA9ICAoc3RhdGUpID0+IHN0YXRlLm9yZGVyLm9yZGVyTnVtYmVyU29ydFxyXG4vLyBleHBvcnQgYWN0aW9uIGdldCBvcmRlclN0YXR1c1NvcnRcclxuZXhwb3J0IGNvbnN0IGdldE9yZGVyU3RhdHVzU29ydCA9ICAoc3RhdGUpID0+IHN0YXRlLm9yZGVyLm9yZGVyU3RhdHVzU29ydFxyXG4vLyBleHBvcnQgYWN0aW9uIGdldCBvcmRlckRheVNvcnRcclxuZXhwb3J0IGNvbnN0IGdldE9yZGVyRGF5U29ydCA9ICAoc3RhdGUpID0+IHN0YXRlLm9yZGVyLm9yZGVyRGF5U29ydFxyXG4vLyBleHBvcnQgYWN0aW9uIGdldCBlc3RpbWF0ZVN0YXJ0RGF0ZVNvcnRcclxuZXhwb3J0IGNvbnN0IGdldEVzdGltYXRlU3RhcnREYXRlU29ydCA9ICAoc3RhdGUpID0+IHN0YXRlLm9yZGVyLmVzdGltYXRlU3RhcnREYXRlU29ydFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdGFza1NsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJpbml0aWFsU3RhdGUiLCJvcmRlck51bWJlclNvcnQiLCJvcmRlclN0YXR1c1NvcnQiLCJvcmRlckRheVNvcnQiLCJlc3RpbWF0ZVN0YXJ0RGF0ZVNvcnQiLCJ0YXNrU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJjaGFuZ2VTb3J0T3JkZXJOdW1iZXIiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzdGF0dXMiLCJjaGFuZ2VTb3J0T3JkZXJTdGF0dXMiLCJjaGFuZ2VTb3J0T3JkZXJEYXkiLCJjaGFuZ2VTb3J0RXN0aW1hdGVTdGFydERhdGUiLCJhY3Rpb25zIiwiZ2V0T3JkZXJOdW1iZXJTb3J0Iiwib3JkZXIiLCJnZXRPcmRlclN0YXR1c1NvcnQiLCJnZXRPcmRlckRheVNvcnQiLCJnZXRFc3RpbWF0ZVN0YXJ0RGF0ZVNvcnQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/order/slice.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.js\");\n\n\n\n\n\n\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_5__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\_app.js\",\n            lineNumber: 10,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\excerciseTrainingNextJs\\\\pages\\\\_app.js\",\n        lineNumber: 9,\n        columnNumber: 7\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBNkI7QUFDWTtBQUNZO0FBQ2Q7QUFDSDtBQUVyQixTQUFTRSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQscUJBQ0ksOERBQUNKLGlEQUFRQTtRQUFDQyxPQUFPQSwrQ0FBS0E7a0JBQ2xCLDRFQUFDRTtZQUFXLEdBQUdDLFNBQVM7Ozs7Ozs7Ozs7O0FBR2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFsLmNzcydcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcclxuaW1wb3J0ICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUvc3R5bGVzLmNzcydcclxuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XHJcbmltcG9ydCB7c3RvcmV9IGZyb20gXCIuLi9yZWR1eC9zdG9yZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDwvUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJQcm92aWRlciIsInN0b3JlIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_order_slice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/order/slice */ \"./components/order/slice.js\");\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        order: _components_order_slice__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWtEO0FBQ0c7QUFFOUMsTUFBTUUsUUFBUUYsZ0VBQWNBLENBQUM7SUFDaENHLFNBQVM7UUFDTEMsT0FBT0gsK0RBQVlBO0lBQ3ZCO0FBQ0osR0FBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHV4L3N0b3JlLmpzPzM1NDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29uZmlndXJlU3RvcmUgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgb3JkZXJSZWR1Y2VyIGZyb20gXCIuLi9jb21wb25lbnRzL29yZGVyL3NsaWNlXCI7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XHJcbiAgICByZWR1Y2VyOiB7XHJcbiAgICAgICAgb3JkZXI6IG9yZGVyUmVkdWNlcixcclxuICAgIH1cclxufSkiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJvcmRlclJlZHVjZXIiLCJzdG9yZSIsInJlZHVjZXIiLCJvcmRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store.js\n");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.css":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.css ***!
  \*******************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/pizza/[slug]",{

/***/ "./pages/pizza/[slug].js":
/*!*******************************!*\
  !*** ./pages/pizza/[slug].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Pizza; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @emotion/react */ \"./node_modules/@emotion/react/dist/emotion-react.browser.esm.js\");\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar __N_SSG = true;\nfunction Pizza(param) {\n    var pizza = param.pizza;\n    var src = (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(pizza.image).url();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: _emotion_react__WEBPACK_IMPORTED_MODULE_4__.css.container,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: _emotion_react__WEBPACK_IMPORTED_MODULE_4__.css.ImageWrapper,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    loader: function() {\n                        return src;\n                    },\n                    src: src,\n                    layout: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                    lineNumber: 11,\n                    columnNumber: 21\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                lineNumber: 10,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n            lineNumber: 9,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n};\n_c = Pizza;\nvar _c;\n$RefreshReg$(_c, \"Pizza\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9waXp6YS9bc2x1Z10uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBcUM7QUFDUTtBQUNLO0FBQ25COztBQUNoQixTQUFTSSxLQUFLLENBQUMsS0FBTyxFQUFDO1FBQVIsS0FBTSxHQUFOLEtBQU8sQ0FBTkMsS0FBSztJQUNoQyxJQUFNQyxHQUFHLEdBQUdKLG1EQUFNLENBQUNHLEtBQUssQ0FBQ0UsS0FBSyxDQUFDLENBQUNDLEdBQUcsRUFBRTtJQUNyQyxxQkFDSSw4REFBQ1AsMERBQU07a0JBQ0gsNEVBQUNRLEtBQUc7WUFBQ0MsU0FBUyxFQUFFVix5REFBYTtzQkFDekIsNEVBQUNTLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVYsNERBQWdCOzBCQUM1Qiw0RUFBQ0csbURBQUs7b0JBQ05VLE1BQU0sRUFBRTsrQkFBS1AsR0FBRztxQkFBQTtvQkFDaEJBLEdBQUcsRUFBRUEsR0FBRztvQkFBRVEsTUFBTTs7Ozs7d0JBQUU7Ozs7O29CQUNoQjs7Ozs7Z0JBQ0o7Ozs7O1lBQ0QsQ0FDWjtDQUNKO0FBYnVCVixLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BpenphL1tzbHVnXS5qcz9lZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNzcyB9IGZyb20gJ0BlbW90aW9uL3JlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCB7IGNsaWVudCwgdXJsRm9yIH0gZnJvbSBcIi4uLy4uL2xpYi9jbGllbnRcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaXp6YSh7cGl6emF9KXtcclxuICAgIGNvbnN0IHNyYyA9IHVybEZvcihwaXp6YS5pbWFnZSkudXJsKCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuSW1hZ2VXcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXsoKT0+IHNyY31cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3NyY30gbGF5b3V0Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpe1xyXG4gICAgY29uc3QgcGF0aHMgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICAgICAgYCpbX3R5cGU9PVwicGl6emFcIiAmJiBkZWZpbmVkKHNsdWcuY3VycmVudCldW10uc2x1Zy5jdXJyZW50YFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHBhdGhzOiBwYXRocy5tYXAoKHNsdWcpPT4gKHtwYXJhbXM6IHtzbHVnfX0pKSxcclxuICAgICAgICBmYWxsYmFjazogJ2Jsb2NraW5nJyxcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpe1xyXG4gICAgY29uc3Qge3NsdWcgPSBcIlwifSA9IGNvbnRleHQucGFyYW1zO1xyXG4gICAgY29uc3QgcGl6emEgPSBhd2FpdCBjbGllbnQuZmV0Y2goXHJcbiAgICAgICAgYCpbX3R5cGU9PVwicGl6emFcIiAmJiBzbHVnLmN1cnJlbnQgPT0gJyR7c2x1Z30nXVswXWBcclxuICAgIClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBpenphXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sIm5hbWVzIjpbImNzcyIsIkxheW91dCIsInVybEZvciIsIkltYWdlIiwiUGl6emEiLCJwaXp6YSIsInNyYyIsImltYWdlIiwidXJsIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiSW1hZ2VXcmFwcGVyIiwibG9hZGVyIiwibGF5b3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pizza/[slug].js\n"));

/***/ })

});
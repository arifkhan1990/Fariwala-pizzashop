"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Menu.jsx":
/*!*****************************!*\
  !*** ./components/Menu.jsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/Menu.module.css */ \"./styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n\n\n\n\nfunction Menu(param) {\n    var pizzas = param.pizzas;\n    var _this = this;\n    // console.log(pizzas);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default().heading),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"OUR MENU\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                        lineNumber: 9,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Menu That Always\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Make you Fall In Love\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                lineNumber: 8,\n                columnNumber: 13\n            }, this),\n            pizzas.map(function(pizza, id) {\n                var src = (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(pizza.image).url();\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default().pizza),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default().ImageWrapper),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                loader: function() {\n                                    return src;\n                                },\n                                src: src,\n                                alt: \"\",\n                                objectFit: \"cover\",\n                                layout: \"fill\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                                lineNumber: 20,\n                                columnNumber: 29\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: pizza.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 25\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                \" $\",\n                                pizza.price[1]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                            lineNumber: 25,\n                            columnNumber: 25\n                        }, _this)\n                    ]\n                }, id, true, {\n                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                    lineNumber: 18,\n                    columnNumber: 21\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n};\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBNEM7QUFDYjtBQUNRO0FBQ3hCLFNBQVNHLElBQUksQ0FBQyxLQUFRLEVBQUM7UUFBVCxNQUFPLEdBQVAsS0FBUSxDQUFQQyxNQUFNOztJQUNoQyx1QkFBdUI7SUFDdkIscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFTiwwRUFBYTs7MEJBQ3pCLDhEQUFDSyxLQUFHO2dCQUFDQyxTQUFTLEVBQUVOLHdFQUFXOztrQ0FDdkIsOERBQUNTLE1BQUk7a0NBQUMsVUFBUTs7Ozs7NEJBQU87a0NBQ3JCLDhEQUFDQSxNQUFJO2tDQUFDLGtCQUFnQjs7Ozs7NEJBQU87a0NBQzdCLDhEQUFDQSxNQUFJO2tDQUFDLHVCQUFxQjs7Ozs7NEJBQU87Ozs7OztvQkFDaEM7WUFHTEwsTUFBTSxDQUFDTSxHQUFHLENBQUMsU0FBQ0MsS0FBSyxFQUFDQyxFQUFFLEVBQUk7Z0JBQ3JCLElBQU1DLEdBQUcsR0FBR1gsbURBQU0sQ0FBQ1MsS0FBSyxDQUFDRyxLQUFLLENBQUMsQ0FBQ0MsR0FBRyxFQUFFO2dCQUNyQyxxQkFDSSw4REFBQ1YsS0FBRztvQkFBQ0MsU0FBUyxFQUFFTixzRUFBUzs7c0NBQ3JCLDhEQUFDSyxLQUFHOzRCQUFDQyxTQUFTLEVBQUVOLDZFQUFnQjtzQ0FDNUIsNEVBQUNDLG1EQUFLO2dDQUNOZ0IsTUFBTSxFQUFFOzJDQUFLSixHQUFHO2lDQUFBO2dDQUNoQkEsR0FBRyxFQUFFQSxHQUFHO2dDQUFFSyxHQUFHLEVBQUMsRUFBRTtnQ0FBQ0MsU0FBUyxFQUFDLE9BQU87Z0NBQUNDLE1BQU0sRUFBQyxNQUFNOzs7OztxQ0FBRTs7Ozs7aUNBQ2hEO3NDQUNOLDhEQUFDWCxNQUFJO3NDQUFFRSxLQUFLLENBQUNVLElBQUk7Ozs7O2lDQUFRO3NDQUN6Qiw4REFBQ1osTUFBSTs7Z0NBQUMsSUFBRTtnQ0FBQ0UsS0FBSyxDQUFDVyxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7aUNBQVE7O21CQVBIVixFQUFFOzs7O3lCQVM1QixDQUNUO2FBQ0osQ0FBQzs7Ozs7O1lBQ0EsQ0FDVDtDQUNKO0FBNUJ1QlQsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUuanN4P2I4NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZXMvTWVudS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICcuLi9saWIvY2xpZW50JztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSh7cGl6emFzfSl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwaXp6YXMpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk9VUiBNRU5VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TWVudSBUaGF0IEFsd2F5czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk1ha2UgeW91IEZhbGwgSW4gTG92ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7LyogcGl6emFzICovfVxyXG4gICAgICAgICAgICB7cGl6emFzLm1hcCgocGl6emEsaWQpPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gdXJsRm9yKHBpenphLmltYWdlKS51cmwoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnBpenphfSBrZXk9e2lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5JbWFnZVdyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXsoKT0+IHNyY31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfSBhbHQ9XCJcIiBvYmplY3RGaXQ9J2NvdmVyJyBsYXlvdXQ9J2ZpbGwnLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntwaXp6YS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+ICR7cGl6emEucHJpY2VbMV19PC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsiY3NzIiwiSW1hZ2UiLCJ1cmxGb3IiLCJNZW51IiwicGl6emFzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaGVhZGluZyIsInNwYW4iLCJtYXAiLCJwaXp6YSIsImlkIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJJbWFnZVdyYXBwZXIiLCJsb2FkZXIiLCJhbHQiLCJvYmplY3RGaXQiLCJsYXlvdXQiLCJuYW1lIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n"));

/***/ })

});
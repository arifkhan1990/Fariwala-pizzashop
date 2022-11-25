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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Menu.module.css */ \"./styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/client */ \"./lib/client.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/Link */ \"./node_modules/next/Link.js\");\n/* harmony import */ var next_Link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_Link__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nfunction Menu(param) {\n    var pizzas = param.pizzas;\n    var _this = this;\n    // console.log(pizzas);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().heading),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"OUR MENU\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                        lineNumber: 10,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Menu That Always\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                        lineNumber: 11,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        children: \"Make you Fall In Love\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                        lineNumber: 12,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                lineNumber: 9,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().menu),\n                children: pizzas.map(function(pizza, id) {\n                    var src = (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(pizza.image).url();\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().pizza),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_Link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                href: \"./pizza/\".concat(pizza.slu),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().ImageWrapper),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        loader: function() {\n                                            return src;\n                                        },\n                                        src: src,\n                                        alt: \"\",\n                                        objectFit: \"cover\",\n                                        layout: \"fill\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                                        lineNumber: 24,\n                                        columnNumber: 33\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                                    lineNumber: 23,\n                                    columnNumber: 29\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                                lineNumber: 21,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: pizza.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                                lineNumber: 29,\n                                columnNumber: 29\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        style: {\n                                            color: \"var(--dollarRed)\"\n                                        },\n                                        children: \"$\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 35\n                                    }, _this),\n                                    pizza.price[1]\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                                lineNumber: 30,\n                                columnNumber: 29\n                            }, _this)\n                        ]\n                    }, id, true, {\n                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 25\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n                lineNumber: 14,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\components\\\\Menu.jsx\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n};\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01lbnUuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE0QztBQUNiO0FBQ1E7QUFDVjtBQUNkLFNBQVNJLElBQUksQ0FBQyxLQUFRLEVBQUM7UUFBVCxNQUFPLEdBQVAsS0FBUSxDQUFQQyxNQUFNOztJQUNoQyx1QkFBdUI7SUFDdkIscUJBQ0ksOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFFUCwwRUFBYTs7MEJBQ3pCLDhEQUFDTSxLQUFHO2dCQUFDQyxTQUFTLEVBQUVQLHdFQUFXOztrQ0FDdkIsOERBQUNVLE1BQUk7a0NBQUMsVUFBUTs7Ozs7NEJBQU87a0NBQ3JCLDhEQUFDQSxNQUFJO2tDQUFDLGtCQUFnQjs7Ozs7NEJBQU87a0NBQzdCLDhEQUFDQSxNQUFJO2tDQUFDLHVCQUFxQjs7Ozs7NEJBQU87Ozs7OztvQkFDaEM7MEJBQ04sOERBQUNKLEtBQUc7Z0JBQUNDLFNBQVMsRUFBRVAscUVBQVE7MEJBR25CSyxNQUFNLENBQUNPLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUNDLEVBQUUsRUFBSTtvQkFDckIsSUFBTUMsR0FBRyxHQUFHYixtREFBTSxDQUFDVyxLQUFLLENBQUNHLEtBQUssQ0FBQyxDQUFDQyxHQUFHLEVBQUU7b0JBQ3JDLHFCQUNJLDhEQUFDWCxLQUFHO3dCQUFDQyxTQUFTLEVBQUVQLHNFQUFTOzswQ0FDckIsOERBQUNHLGtEQUFJO2dDQUFDZSxJQUFJLEVBQUUsVUFBUyxDQUFZLE9BQVZMLEtBQUssQ0FBQ00sR0FBRyxDQUFFOzBDQUVsQyw0RUFBQ2IsS0FBRztvQ0FBQ0MsU0FBUyxFQUFFUCw2RUFBZ0I7OENBQzVCLDRFQUFDQyxtREFBSzt3Q0FDTm9CLE1BQU0sRUFBRTttREFBS04sR0FBRzt5Q0FBQTt3Q0FDaEJBLEdBQUcsRUFBRUEsR0FBRzt3Q0FBRU8sR0FBRyxFQUFDLEVBQUU7d0NBQUNDLFNBQVMsRUFBQyxPQUFPO3dDQUFDQyxNQUFNLEVBQUMsTUFBTTs7Ozs7NkNBQUU7Ozs7O3lDQUNoRDs7Ozs7cUNBQ0M7MENBQ1AsOERBQUNkLE1BQUk7MENBQUVHLEtBQUssQ0FBQ1ksSUFBSTs7Ozs7cUNBQVE7MENBQ3pCLDhEQUFDZixNQUFJOztrREFBQyw4REFBQ0EsTUFBSTt3Q0FBQ2dCLEtBQUssRUFBRTs0Q0FBQ0MsS0FBSyxFQUFDLGtCQUFrQjt5Q0FBQztrREFBRSxHQUFDOzs7Ozs2Q0FBTztvQ0FBQ2QsS0FBSyxDQUFDZSxLQUFLLENBQUMsQ0FBQyxDQUFDOzs7Ozs7cUNBQVE7O3VCQVZsRGQsRUFBRTs7Ozs2QkFZNUIsQ0FDVDtpQkFDSixDQUFDOzs7OztvQkFDQTs7Ozs7O1lBQ0osQ0FDVDtDQUNKO0FBakN1QlYsS0FBQUEsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01lbnUuanN4P2I4NjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICcuLi9zdHlsZXMvTWVudS5tb2R1bGUuY3NzJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyB1cmxGb3IgfSBmcm9tICcuLi9saWIvY2xpZW50JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9MaW5rJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSh7cGl6emFzfSl7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhwaXp6YXMpO1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk9VUiBNRU5VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TWVudSBUaGF0IEFsd2F5czwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk1ha2UgeW91IEZhbGwgSW4gTG92ZTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubWVudX0+XHJcblxyXG4gICAgICAgICAgICB7LyogcGl6emFzICovfVxyXG4gICAgICAgICAgICAgICAge3Bpenphcy5tYXAoKHBpenphLGlkKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSB1cmxGb3IocGl6emEuaW1hZ2UpLnVybCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5waXp6YX0ga2V5PXtpZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgLi9waXp6YS8ke3BpenphLnNsdX1gfT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLkltYWdlV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlcj17KCk9PiBzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9IGFsdD1cIlwiIG9iamVjdEZpdD0nY292ZXInIGxheW91dD0nZmlsbCcvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57cGl6emEubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3BhbiBzdHlsZT17e2NvbG9yOid2YXIoLS1kb2xsYXJSZWQpJ319PiQ8L3NwYW4+e3BpenphLnByaWNlWzFdfTwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJjc3MiLCJJbWFnZSIsInVybEZvciIsIkxpbmsiLCJNZW51IiwicGl6emFzIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaGVhZGluZyIsInNwYW4iLCJtZW51IiwibWFwIiwicGl6emEiLCJpZCIsInNyYyIsImltYWdlIiwidXJsIiwiaHJlZiIsInNsdSIsIkltYWdlV3JhcHBlciIsImxvYWRlciIsImFsdCIsIm9iamVjdEZpdCIsImxheW91dCIsIm5hbWUiLCJzdHlsZSIsImNvbG9yIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Menu.jsx\n"));

/***/ })

});
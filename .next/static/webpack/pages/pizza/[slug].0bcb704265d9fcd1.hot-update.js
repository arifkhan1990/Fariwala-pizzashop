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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Pizza; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../styles/Pizza.module.css */ \"./styles/Pizza.module.css\");\n/* harmony import */ var _styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout.jsx\");\n/* harmony import */ var _lib_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/client */ \"./lib/client.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/arrowLeft.png */ \"./assets/arrowLeft.png\");\n/* harmony import */ var _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../assets/arrowRight.png */ \"./assets/arrowRight.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nvar __N_SSG = true;\nfunction Pizza(param) {\n    var pizza = param.pizza;\n    _s();\n    var src = (0,_lib_client__WEBPACK_IMPORTED_MODULE_2__.urlFor)(pizza.image).url();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1), Quantity = ref[0], setQuantity = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1), Size = ref1[0], setSize = ref1[1];\n    var handleQuantity = function(type) {\n        type === \"inc\" ? setQuantity(function(prev) {\n            return prev + 1;\n        }) : Quantity === 1 ? null : setQuantity(function(prev) {\n            return prev - 1;\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().imageWrapper),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        loader: function() {\n                            return src;\n                        },\n                        src: src,\n                        alt: \"\",\n                        layout: \"fill\",\n                        unoptimized: true,\n                        objectFit: \"cover\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                        lineNumber: 25,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().right),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: pizza.name\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                            lineNumber: 29,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: pizza.details\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                            lineNumber: 30,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    style: {\n                                        color: \"var(--dollarRed)\"\n                                    },\n                                    children: \"$\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                    lineNumber: 31,\n                                    columnNumber: 27\n                                }, this),\n                                pizza.price[Size]\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                            lineNumber: 31,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().size),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Size\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                    lineNumber: 35,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().sizeVaraints),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return setSize(0);\n                                            },\n                                            className: Size === 0 ? (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().selected) : \"\",\n                                            children: \"Small\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                            lineNumber: 37,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return setSize(1);\n                                            },\n                                            className: Size === 1 ? (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().selected) : \"\",\n                                            children: \"Medium\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                            lineNumber: 38,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            onClick: function() {\n                                                return setSize(2);\n                                            },\n                                            className: Size === 2 ? (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().selected) : \"\",\n                                            children: \"Large\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                            lineNumber: 39,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                    lineNumber: 36,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                            lineNumber: 34,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().quantity),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"Quantity\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                    lineNumber: 45,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().counter),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: _assets_arrowLeft_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                            height: 20,\n                                            width: 20,\n                                            alt: \"\",\n                                            objectFit: \"contain\",\n                                            on: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                            lineNumber: 47,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            children: \"1\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                            lineNumber: 48,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: _assets_arrowRight_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                            height: 20,\n                                            width: 20,\n                                            alt: \"\",\n                                            objectFit: \"contain\"\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                            lineNumber: 49,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                                    lineNumber: 46,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                            lineNumber: 44,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"btn \".concat((_styles_Pizza_module_css__WEBPACK_IMPORTED_MODULE_7___default().btn)),\n                            children: \"Add to Cart\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n                    lineNumber: 28,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\88018\\\\OneDrive\\\\Desktop\\\\Fariwala-pizzashop\\\\pages\\\\pizza\\\\[slug].js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n};\n_s(Pizza, \"/0Sh/rSFqQWmHr+XSphGP1IzzsE=\");\n_c = Pizza;\nvar _c;\n$RefreshReg$(_c, \"Pizza\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEVBQUVOLElBQUksS0FBSyxDQUFDLEdBQUVkLDBFQUFZLEdBQUcsRUFBRTtzREFBRSxPQUFLOzs7OztnREFBTTs7Ozs7O3dDQUNsRjs7Ozs7O2dDQUNKO3NDQUdOLDhEQUFDbUIsS0FBRzs0QkFBQ0MsU0FBUyxFQUFFcEIsMEVBQVk7OzhDQUN4Qiw4REFBQzZCLE1BQUk7OENBQUMsVUFBUTs7Ozs7d0NBQU87OENBQ3JCLDhEQUFDVixLQUFHO29DQUFDQyxTQUFTLEVBQUVwQix5RUFBVzs7c0RBQ3ZCLDhEQUFDRyxtREFBSzs0Q0FBQ00sR0FBRyxFQUFFTCw2REFBUzs0Q0FBRXFDLE1BQU0sRUFBRSxFQUFFOzRDQUFFQyxLQUFLLEVBQUUsRUFBRTs0Q0FBRWxCLEdBQUcsRUFBQyxFQUFFOzRDQUFDRyxTQUFTLEVBQUMsU0FBUzs0Q0FBQ2dCLEVBQUU7Ozs7O2dEQUFHO3NEQUM5RSw4REFBQ2QsTUFBSTtzREFBQyxHQUFDOzs7OztnREFBTztzREFDZCw4REFBQzFCLG1EQUFLOzRDQUFDTSxHQUFHLEVBQUVKLDhEQUFVOzRDQUFFb0MsTUFBTSxFQUFFLEVBQUU7NENBQUVDLEtBQUssRUFBRSxFQUFFOzRDQUFFbEIsR0FBRyxFQUFDLEVBQUU7NENBQUNHLFNBQVMsRUFBQyxTQUFTOzs7OztnREFBRzs7Ozs7O3dDQUUxRTs7Ozs7O2dDQUNKO3NDQUdOLDhEQUFDUixLQUFHOzRCQUFDQyxTQUFTLEVBQUUsTUFBSyxDQUFVLE9BQVJwQixxRUFBTyxDQUFFO3NDQUFFLGFBRWxDOzs7OztnQ0FBTTs7Ozs7O3dCQUNKOzs7Ozs7Z0JBQ0o7Ozs7O1lBQ0QsQ0FDWjtDQUNKO0dBdER1Qk8sS0FBSztBQUFMQSxLQUFBQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3BpenphL1tzbHVnXS5qcz9lZTRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSAnLi4vLi4vc3R5bGVzL1BpenphLm1vZHVsZS5jc3MnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuaW1wb3J0IHsgY2xpZW50LCB1cmxGb3IgfSBmcm9tIFwiLi4vLi4vbGliL2NsaWVudFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBMZWZ0QXJyb3cgZnJvbSAnLi4vLi4vYXNzZXRzL2Fycm93TGVmdC5wbmcnO1xyXG5pbXBvcnQgUmlnaHRBcnJvdyBmcm9tICcuLi8uLi9hc3NldHMvYXJyb3dSaWdodC5wbmcnO1xyXG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGl6emEoe3BpenphfSl7XHJcbiAgICBjb25zdCBzcmMgPSB1cmxGb3IocGl6emEuaW1hZ2UpLnVybCgpO1xyXG5cclxuICAgIGNvbnN0IFtRdWFudGl0eSwgc2V0UXVhbnRpdHldID0gdXNlU3RhdGUoMSlcclxuICAgIGNvbnN0IFtTaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKDEpO1xyXG4gICAgY29uc3QgaGFuZGxlUXVhbnRpdHkgPSAodHlwZSkgPT4ge1xyXG4gICAgICAgIHR5cGUgPT09ICdpbmMnXHJcbiAgICAgICAgPyBzZXRRdWFudGl0eSgocHJldikgPT4gcHJldiArIDEpXHJcbiAgICAgICAgOiBRdWFudGl0eSA9PT0gMVxyXG4gICAgICAgID8gbnVsbFxyXG4gICAgICAgIDogc2V0UXVhbnRpdHkoKHByZXYpID0+IHByZXYgLSAxKTtcclxuXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmltYWdlV3JhcHBlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIGxvYWRlcj17KCk9PiBzcmN9IHNyYz17c3JjfSBhbHQ9JycgbGF5b3V0PSdmaWxsJyB1bm9wdGltaXplZCBvYmplY3RGaXQ9J2NvdmVyJy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKiByaWdodCBzaWRlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yaWdodH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3BpenphLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPntwaXp6YS5kZXRhaWxzfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj48c3BhbiBzdHlsZT17e2NvbG9yOid2YXIoLS1kb2xsYXJSZWQpJ319PiQ8L3NwYW4+e3BpenphLnByaWNlW1NpemVdfTwvc3Bhbj5cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc2l6ZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNpemU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3Muc2l6ZVZhcmFpbnRzfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiBzZXRTaXplKDApfSBjbGFzc05hbWU9e1NpemUgPT09IDA/IGNzcy5zZWxlY3RlZCA6IFwiXCJ9PlNtYWxsPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpPT4gc2V0U2l6ZSgxKX0gY2xhc3NOYW1lPXtTaXplID09PSAxPyBjc3Muc2VsZWN0ZWQgOiBcIlwifT5NZWRpdW08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCk9PiBzZXRTaXplKDIpfSBjbGFzc05hbWU9e1NpemUgPT09IDI/IGNzcy5zZWxlY3RlZCA6IFwiXCJ9PkxhcmdlPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICB7LyogUXVhbnRpdHkgY291bnRlciAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnF1YW50aXR5fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UXVhbnRpdHk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuY291bnRlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtMZWZ0QXJyb3d9IGhlaWdodD17MjB9IHdpZHRoPXsyMH0gYWx0PVwiXCIgb2JqZWN0Rml0PSdjb250YWluJyBvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+MTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e1JpZ2h0QXJyb3d9IGhlaWdodD17MjB9IHdpZHRoPXsyMH0gYWx0PVwiXCIgb2JqZWN0Rml0PSdjb250YWluJyAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBidXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BidG4gJHtjc3MuYnRufWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBZGQgdG8gQ2FydFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCl7XHJcbiAgICBjb25zdCBwYXRocyA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgICAgICBgKltfdHlwZT09XCJwaXp6YVwiICYmIGRlZmluZWQoc2x1Zy5jdXJyZW50KV1bXS5zbHVnLmN1cnJlbnRgXHJcbiAgICApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGF0aHM6IHBhdGhzLm1hcCgoc2x1Zyk9PiAoe3BhcmFtczoge3NsdWd9fSkpLFxyXG4gICAgICAgIGZhbGxiYWNrOiAnYmxvY2tpbmcnLFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCl7XHJcbiAgICBjb25zdCB7c2x1ZyA9IFwiXCJ9ID0gY29udGV4dC5wYXJhbXM7XHJcbiAgICBjb25zdCBwaXp6YSA9IGF3YWl0IGNsaWVudC5mZXRjaChcclxuICAgICAgICBgKltfdHlwZT09XCJwaXp6YVwiICYmIHNsdWcuY3VycmVudCA9PSAnJHtzbHVnfSddWzBdYFxyXG4gICAgKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgcGl6emFcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsiY3NzIiwiTGF5b3V0IiwidXJsRm9yIiwiSW1hZ2UiLCJMZWZ0QXJyb3ciLCJSaWdodEFycm93IiwidXNlU3RhdGUiLCJQaXp6YSIsInBpenphIiwic3JjIiwiaW1hZ2UiLCJ1cmwiLCJRdWFudGl0eSIsInNldFF1YW50aXR5IiwiU2l6ZSIsInNldFNpemUiLCJoYW5kbGVRdWFudGl0eSIsInR5cGUiLCJwcmV2IiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaW1hZ2VXcmFwcGVyIiwibG9hZGVyIiwiYWx0IiwibGF5b3V0IiwidW5vcHRpbWl6ZWQiLCJvYmplY3RGaXQiLCJyaWdodCIsInNwYW4iLCJuYW1lIiwiZGV0YWlscyIsInN0eWxlIiwiY29sb3IiLCJwcmljZSIsInNpemUiLCJzaXplVmFyYWludHMiLCJvbkNsaWNrIiwic2VsZWN0ZWQiLCJxdWFudGl0eSIsImNvdW50ZXIiLCJoZWlnaHQiLCJ3aWR0aCIsIm9uIiwiYnRuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pizza/[slug].js\n"));

/***/ })

});
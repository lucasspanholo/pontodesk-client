"use strict";
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

/***/ "./src/contexts/SidebarDrawerContext.tsx":
/*!***********************************************!*\
  !*** ./src/contexts/SidebarDrawerContext.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SidebarDrawerProvider\": () => (/* binding */ SidebarDrawerProvider),\n/* harmony export */   \"useSidebarDrawer\": () => (/* binding */ useSidebarDrawer)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst SidebarDrawerContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)({\n});\nfunction SidebarDrawerProvider({ children  }) {\n    const disclosure = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        disclosure.onClose();\n    }, [\n        router.asPath\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(SidebarDrawerContext.Provider, {\n        value: disclosure,\n        __source: {\n            fileName: \"/home/allan/Documentos/Portifolio/Control-Calls/Pontodesk-Client/src/contexts/SidebarDrawerContext.tsx\",\n            lineNumber: 22,\n            columnNumber: 5\n        },\n        __self: this,\n        children: children\n    }));\n}\nconst useSidebarDrawer = ()=>(0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(SidebarDrawerContext)\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXFFO0FBQzlCO0FBQ2dDO0FBUXZFLEtBQUssQ0FBQ0ssb0JBQW9CLGlCQUFHSCxvREFBYSxDQUFDLENBQUM7QUFBQSxDQUFDO0FBRXRDLFNBQVNJLHFCQUFxQixDQUFDLENBQUMsQ0FBQ0MsUUFBUSxFQUE2QixDQUFDLEVBQUUsQ0FBQztJQUMvRSxLQUFLLENBQUNDLFVBQVUsR0FBR1IsK0RBQWE7SUFDaEMsS0FBSyxDQUFDUyxNQUFNLEdBQUdSLHNEQUFTO0lBRXhCRyxnREFBUyxLQUFPLENBQUM7UUFDZkksVUFBVSxDQUFDRSxPQUFPO0lBQ3BCLENBQUMsRUFBRSxDQUFDRDtRQUFBQSxNQUFNLENBQUNFLE1BQU07SUFBQSxDQUFDO0lBRWxCLE1BQU0sc0VBQ0hOLG9CQUFvQixDQUFDTyxRQUFRO1FBQUNDLEtBQUssRUFBRUwsVUFBVTs7Ozs7OztrQkFDN0NELFFBQVE7O0FBR2YsQ0FBQztBQUVNLEtBQUssQ0FBQ08sZ0JBQWdCLE9BQVNYLGlEQUFVLENBQUNFLG9CQUFvQiIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbnRvZGVzay1jbGllbnQvLi9zcmMvY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQudHN4P2IxZmMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzY2xvc3VyZSwgVXNlRGlzY2xvc3VyZVJldHVybiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIFJlYWN0Tm9kZSwgdXNlQ29udGV4dCwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBTaWRlYmFyRHJhd2VyUHJvdmlkZXJQcm9wcyB7XG4gIGNoaWxkcmVuOiBSZWFjdE5vZGU7XG59XG5cbnR5cGUgU2lkZWJhckRyYXdlckNvbnRleHREYXRhID0gVXNlRGlzY2xvc3VyZVJldHVyblxuXG5jb25zdCBTaWRlYmFyRHJhd2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgU2lkZWJhckRyYXdlckNvbnRleHREYXRhKTtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZGViYXJEcmF3ZXJQcm92aWRlcih7IGNoaWxkcmVuIH06IFNpZGViYXJEcmF3ZXJQcm92aWRlclByb3BzKSB7XG4gIGNvbnN0IGRpc2Nsb3N1cmUgPSB1c2VEaXNjbG9zdXJlKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZGlzY2xvc3VyZS5vbkNsb3NlKClcbiAgfSwgW3JvdXRlci5hc1BhdGhdKVxuXG4gIHJldHVybihcbiAgICA8U2lkZWJhckRyYXdlckNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2Rpc2Nsb3N1cmV9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvU2lkZWJhckRyYXdlckNvbnRleHQuUHJvdmlkZXI+XG4gIClcbn1cblxuZXhwb3J0IGNvbnN0IHVzZVNpZGViYXJEcmF3ZXIgPSAoKSA9PiB1c2VDb250ZXh0KFNpZGViYXJEcmF3ZXJDb250ZXh0KSJdLCJuYW1lcyI6WyJ1c2VEaXNjbG9zdXJlIiwidXNlUm91dGVyIiwiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJTaWRlYmFyRHJhd2VyQ29udGV4dCIsIlNpZGViYXJEcmF3ZXJQcm92aWRlciIsImNoaWxkcmVuIiwiZGlzY2xvc3VyZSIsInJvdXRlciIsIm9uQ2xvc2UiLCJhc1BhdGgiLCJQcm92aWRlciIsInZhbHVlIiwidXNlU2lkZWJhckRyYXdlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/SidebarDrawerContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query/devtools */ \"react-query/devtools\");\n/* harmony import */ var react_query_devtools__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_query_devtools__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/theme */ \"./src/styles/theme.ts\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contexts/SidebarDrawerContext */ \"./src/contexts/SidebarDrawerContext.tsx\");\n/* harmony import */ var _services_queryClient__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/queryClient */ \"./src/services/queryClient.ts\");\n\n\n\n\n\n\n// import { makeServer } from '../services/mirage'\n\nif (true) {\n// makeServer();\n}\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {\n        client: _services_queryClient__WEBPACK_IMPORTED_MODULE_6__.queryClient,\n        __source: {\n            fileName: \"/home/allan/Documentos/Portifolio/Control-Calls/Pontodesk-Client/src/pages/_app.tsx\",\n            lineNumber: 17,\n            columnNumber: 5\n        },\n        __self: this,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {\n                resetCSS: true,\n                theme: _styles_theme__WEBPACK_IMPORTED_MODULE_3__.theme,\n                __source: {\n                    fileName: \"/home/allan/Documentos/Portifolio/Control-Calls/Pontodesk-Client/src/pages/_app.tsx\",\n                    lineNumber: 18,\n                    columnNumber: 7\n                },\n                __self: this,\n                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_contexts_SidebarDrawerContext__WEBPACK_IMPORTED_MODULE_5__.SidebarDrawerProvider, {\n                    __source: {\n                        fileName: \"/home/allan/Documentos/Portifolio/Control-Calls/Pontodesk-Client/src/pages/_app.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    },\n                    __self: this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Component, {\n                        ...pageProps,\n                        __source: {\n                            fileName: \"/home/allan/Documentos/Portifolio/Control-Calls/Pontodesk-Client/src/pages/_app.tsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                })\n            }),\n            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_query_devtools__WEBPACK_IMPORTED_MODULE_2__.ReactQueryDevtools, {\n                __source: {\n                    fileName: \"/home/allan/Documentos/Portifolio/Control-Calls/Pontodesk-Client/src/pages/_app.tsx\",\n                    lineNumber: 24,\n                    columnNumber: 7\n                },\n                __self: this\n            })\n        ]\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUNRO0FBQ2xCO0FBRVU7QUFDdUI7QUFDeEUsRUFBa0Q7QUFDRztBQUVyRCxFQUFFLEVBVkYsSUFVMEMsRUFBRSxDQUFDO0FBQzNDLEVBQWdCO0FBQ2xCLENBQUM7U0FFUU0sS0FBSyxDQUFDLENBQUMsQ0FBQ0MsU0FBUyxHQUFFQyxTQUFTLEVBQVcsQ0FBQyxFQUFFLENBQUM7SUFDbEQsTUFBTSx1RUFDSEwsNERBQW1CO1FBQUNNLE1BQU0sRUFBRUosOERBQVc7Ozs7Ozs7O2lGQUNyQ0wsNERBQWM7Z0JBQUNVLFFBQVE7Z0JBQUNSLEtBQUssRUFBRUEsZ0RBQUs7Ozs7Ozs7K0ZBQ2xDRSxpRkFBcUI7Ozs7Ozs7bUdBQ25CRyxTQUFTOzJCQUFLQyxTQUFTOzs7Ozs7Ozs7O2lGQUkzQlAsb0VBQWtCOzs7Ozs7Ozs7O0FBR3pCLENBQUM7QUFFRCxpRUFBZUssS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbnRvZGVzay1jbGllbnQvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IHsgQ2hha3JhUHJvdmlkZXIgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0J1xuaW1wb3J0IHsgUmVhY3RRdWVyeURldnRvb2xzIH0gZnJvbSAncmVhY3QtcXVlcnkvZGV2dG9vbHMnO1xuaW1wb3J0IHsgdGhlbWUgfSBmcm9tICcuLi9zdHlsZXMvdGhlbWUnXG5cbmltcG9ydCB7IFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7IFxuaW1wb3J0IHsgU2lkZWJhckRyYXdlclByb3ZpZGVyIH0gZnJvbSAnLi4vY29udGV4dHMvU2lkZWJhckRyYXdlckNvbnRleHQnXG4vLyBpbXBvcnQgeyBtYWtlU2VydmVyIH0gZnJvbSAnLi4vc2VydmljZXMvbWlyYWdlJ1xuaW1wb3J0IHsgcXVlcnlDbGllbnQgfSBmcm9tICcuLi9zZXJ2aWNlcy9xdWVyeUNsaWVudCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAvLyBtYWtlU2VydmVyKCk7XG59XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e3F1ZXJ5Q2xpZW50fT5cbiAgICAgIDxDaGFrcmFQcm92aWRlciByZXNldENTUyB0aGVtZT17dGhlbWV9PlxuICAgICAgICA8U2lkZWJhckRyYXdlclByb3ZpZGVyPlxuICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgPC9TaWRlYmFyRHJhd2VyUHJvdmlkZXI+XG4gICAgICA8L0NoYWtyYVByb3ZpZGVyPlxuXG4gICAgICA8UmVhY3RRdWVyeURldnRvb2xzIC8+XG4gICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJ0aGVtZSIsIlF1ZXJ5Q2xpZW50UHJvdmlkZXIiLCJTaWRlYmFyRHJhd2VyUHJvdmlkZXIiLCJxdWVyeUNsaWVudCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwiY2xpZW50IiwicmVzZXRDU1MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/queryClient.ts":
/*!*************************************!*\
  !*** ./src/services/queryClient.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"queryClient\": () => (/* binding */ queryClient)\n/* harmony export */ });\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_0__);\n\nconst queryClient = new react_query__WEBPACK_IMPORTED_MODULE_0__.QueryClient();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvcXVlcnlDbGllbnQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlDO0FBRWxDLEtBQUssQ0FBQ0MsV0FBVyxHQUFHLEdBQUcsQ0FBQ0Qsb0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb250b2Rlc2stY2xpZW50Ly4vc3JjL3NlcnZpY2VzL3F1ZXJ5Q2xpZW50LnRzPzUzZjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KCkiXSwibmFtZXMiOlsiUXVlcnlDbGllbnQiLCJxdWVyeUNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/queryClient.ts\n");

/***/ }),

/***/ "./src/styles/theme.ts":
/*!*****************************!*\
  !*** ./src/styles/theme.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"theme\": () => (/* binding */ theme)\n/* harmony export */ });\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/react */ \"@chakra-ui/react\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({\n    colors: {\n        gray: {\n            \"900\": \"#181B23\",\n            \"800\": \"#1F2029\",\n            \"700\": \"#353646\",\n            \"600\": \"#4B4D63\",\n            \"500\": \"#616480\",\n            \"400\": \"#797D9A\",\n            \"300\": \"#9699B0\",\n            \"200\": \"#B3B5C6\",\n            \"100\": \"#D1D2DC\",\n            \"50\": \"#EEEEF2\"\n        }\n    },\n    fonts: {\n        heading: 'Roboto',\n        body: 'Roboto'\n    },\n    styles: {\n        global: {\n            body: {\n                bg: 'gray.900',\n                color: 'gray.50'\n            }\n        }\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RoZW1lLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUV2QyxLQUFLLENBQUNDLEtBQUssR0FBR0QsNkRBQVcsQ0FBQyxDQUFDO0lBQ2hDRSxNQUFNLEVBQUUsQ0FBQztRQUNQQyxJQUFJLEVBQUUsQ0FBQztZQUNMLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUssTUFBRSxDQUFTO1lBQ2hCLENBQUksS0FBRSxDQUFTO1FBQ2pCLENBQUM7SUFDSCxDQUFDO0lBQ0RDLEtBQUssRUFBRSxDQUFDO1FBQ05DLE9BQU8sRUFBRSxDQUFRO1FBQ2pCQyxJQUFJLEVBQUUsQ0FBUTtJQUNoQixDQUFDO0lBQ0RDLE1BQU0sRUFBRSxDQUFDO1FBQ1BDLE1BQU0sRUFBRSxDQUFDO1lBQ1BGLElBQUksRUFBRSxDQUFDO2dCQUNMRyxFQUFFLEVBQUUsQ0FBVTtnQkFDZEMsS0FBSyxFQUFFLENBQVM7WUFDbEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvbnRvZGVzay1jbGllbnQvLi9zcmMvc3R5bGVzL3RoZW1lLnRzPzUxNjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXh0ZW5kVGhlbWUgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IHRoZW1lID0gZXh0ZW5kVGhlbWUoe1xuICBjb2xvcnM6IHtcbiAgICBncmF5OiB7XG4gICAgICBcIjkwMFwiOiBcIiMxODFCMjNcIixcbiAgICAgIFwiODAwXCI6IFwiIzFGMjAyOVwiLFxuICAgICAgXCI3MDBcIjogXCIjMzUzNjQ2XCIsXG4gICAgICBcIjYwMFwiOiBcIiM0QjRENjNcIixcbiAgICAgIFwiNTAwXCI6IFwiIzYxNjQ4MFwiLFxuICAgICAgXCI0MDBcIjogXCIjNzk3RDlBXCIsXG4gICAgICBcIjMwMFwiOiBcIiM5Njk5QjBcIixcbiAgICAgIFwiMjAwXCI6IFwiI0IzQjVDNlwiLFxuICAgICAgXCIxMDBcIjogXCIjRDFEMkRDXCIsXG4gICAgICBcIjUwXCI6IFwiI0VFRUVGMlwiLFxuICAgIH1cbiAgfSxcbiAgZm9udHM6IHtcbiAgICBoZWFkaW5nOiAnUm9ib3RvJyxcbiAgICBib2R5OiAnUm9ib3RvJyxcbiAgfSxcbiAgc3R5bGVzOiB7XG4gICAgZ2xvYmFsOiB7XG4gICAgICBib2R5OiB7XG4gICAgICAgIGJnOiAnZ3JheS45MDAnLFxuICAgICAgICBjb2xvcjogJ2dyYXkuNTAnXG4gICAgICB9XG4gICAgfVxuICB9XG59KSJdLCJuYW1lcyI6WyJleHRlbmRUaGVtZSIsInRoZW1lIiwiY29sb3JzIiwiZ3JheSIsImZvbnRzIiwiaGVhZGluZyIsImJvZHkiLCJzdHlsZXMiLCJnbG9iYWwiLCJiZyIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/theme.ts\n");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react-query/devtools":
/*!***************************************!*\
  !*** external "react-query/devtools" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("react-query/devtools");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
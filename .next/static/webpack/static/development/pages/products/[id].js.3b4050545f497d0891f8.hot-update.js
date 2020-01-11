webpackHotUpdate("static\\development\\pages\\products\\[id].js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cartContext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cartContext.js */ "./components/cartContext.js");
var _jsxFileName = "C:\\_Work\\nextjs-shopping-cart\\components\\Navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// components/Navbar.js




var Navbar = function Navbar(props) {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_cartContext_js__WEBPACK_IMPORTED_MODULE_1__["default"]),
      cart = _useContext.cart;

  return __jsx("nav", {
    className: "navbar navbar-light bg-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, __jsx("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Shoppr")), __jsx("a", {
    href: "/cart",
    className: "btn btn-outline-success my-2 my-sm-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Cart ", cart.length));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=[id].js.3b4050545f497d0891f8.hot-update.js.map
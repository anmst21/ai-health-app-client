"use strict";
exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 150:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);




const Button = ({ classname, children, click, type })=>{
    const className = classnames__WEBPACK_IMPORTED_MODULE_2___default()({
        btn: true,
        btn__blue: classname === "blue",
        btn__red: classname === "red",
        btn__green: classname === "green",
        btn__tertiary: classname === "tertiary",
        btn__white: classname === "white"
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: className,
        type: type,
        onClick: click,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);


/***/ }),

/***/ 297:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);



const LoginField = ({ label, name, placeholder, register, errors })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "login-form__element",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()({
                    "error-label": errors[name]
                }),
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...register(name),
                placeholder: placeholder,
                className: classnames__WEBPACK_IMPORTED_MODULE_2___default()("styled-input info-input", {
                    "error-border": errors[name]
                }),
                type: name === "Password" || name === "Password2" ? "password" : "text"
            }),
            errors[name] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "info-input__error",
                children: errors[name]?.message
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginField);


/***/ }),

/***/ 3583:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   M8: () => (/* binding */ schemaLogin),
/* harmony export */   fK: () => (/* binding */ schema),
/* harmony export */   g0: () => (/* binding */ rewriteLogin)
/* harmony export */ });
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5609);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(yup__WEBPACK_IMPORTED_MODULE_0__);

const schema = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    Login: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email(),
    Password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(8).matches(/^(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter and one number"),
    Password2: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().oneOf([
        yup__WEBPACK_IMPORTED_MODULE_0__.ref("Password"),
        null
    ], "Passwords must match")
});
const schemaLogin = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    Login: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email(),
    Password: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().min(8).matches(/^(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter and one number")
});
const rewriteLogin = yup__WEBPACK_IMPORTED_MODULE_0__.object().shape({
    Login: yup__WEBPACK_IMPORTED_MODULE_0__.string().required().email()
});


/***/ })

};
;
"use strict";
exports.id = 9;
exports.ids = [9];
exports.modules = {

/***/ 8009:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _components_misc_btn_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store_userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(160);
/* harmony import */ var _components_misc_login_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(297);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utilities_formFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5323);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1908);
/* harmony import */ var _utilities_validationSchema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3583);
/* harmony import */ var _redux_api_apiSlice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6890);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const SignUpScreen = ()=>{
    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__.yupResolver)(_utilities_validationSchema__WEBPACK_IMPORTED_MODULE_10__/* .schema */ .fK)
    });
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    const [registerUser] = (0,_redux_api_apiSlice__WEBPACK_IMPORTED_MODULE_11__/* .useRegisterMutation */ .l4)();
    //Aaaaaaaaaa2;
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const onSubmit = async (data, e)=>{
        e.preventDefault();
        console.log(data);
        try {
            const response = await registerUser({
                email: data.Login,
                password: data.Password
            }).unwrap();
            dispatch((0,_redux_store_userSlice__WEBPACK_IMPORTED_MODULE_3__/* .registerEmail */ .fv)(response));
            console.log(response);
            router.push("/sign-up/otp");
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };
    const loginFields = ()=>{
        return lodash__WEBPACK_IMPORTED_MODULE_2___default().map(_utilities_formFields__WEBPACK_IMPORTED_MODULE_8__/* .signUpFields */ .A_, ({ label, name, placeholder })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_misc_login_field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                label: label,
                name: name,
                placeholder: placeholder,
                errors: errors,
                register: register
            });
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "login-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Login Information"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Enter your login information then we will send you an E-Mail"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "login-form",
                onSubmit: handleSubmit(onSubmit),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "login-form__element__mt",
                        children: loginFields()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "btn-container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_misc_btn_component__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            classname: "blue",
                            type: "submit",
                            children: "Next"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SignUpScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
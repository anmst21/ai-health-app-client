"use strict";
exports.id = 139;
exports.ids = [139];
exports.modules = {

/***/ 6139:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _misc_btn_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(150);
/* harmony import */ var _components_misc_login_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(297);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5641);
/* harmony import */ var _utilities_formFields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5323);
/* harmony import */ var _redux_api_apiSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6890);
/* harmony import */ var _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1908);
/* harmony import */ var _utilities_validationSchema__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3583);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_6__, _hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const LoginScreen = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const [registerUser] = (0,_redux_api_apiSlice__WEBPACK_IMPORTED_MODULE_8__/* .useLoginMutation */ .YA)();
    const { register, handleSubmit, setError, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)({
        resolver: (0,_hookform_resolvers_yup__WEBPACK_IMPORTED_MODULE_9__.yupResolver)(_utilities_validationSchema__WEBPACK_IMPORTED_MODULE_10__/* .schemaLogin */ .M8)
    });
    const handleClick = (type, route)=>{
        if (type === "submit") {
            console.log("Form submitted");
        } else {
            router.push(route);
        }
    };
    console.log(errors);
    const formSubmit = async (data)=>{
        try {
            const response = await registerUser({
                email: data.Login,
                password: data.Password
            }).unwrap();
            response.user.userInfo ? router.push("/app") : router.push("/user-info");
        } catch (error) {
            if (error.data) {
                if (error.data.message === "Password incorrect") {
                    setError("Password", {
                        message: error.data.message
                    }, "server");
                } else {
                    setError("Login", {
                        message: error.data.message
                    }, "server");
                }
            } else {
                setError("Login", {
                    message: "Request failed"
                }, "server");
            }
        }
    };
    const loginFieldsComponent = ()=>{
        return lodash__WEBPACK_IMPORTED_MODULE_1___default().map(_utilities_formFields__WEBPACK_IMPORTED_MODULE_7__/* .loginFields */ .AA, ({ label, name, placeholder })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_misc_login_field__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                label: label,
                name: name,
                placeholder: placeholder,
                errors: errors,
                register: register
            }, name);
        });
    };
    const loginButtons = ()=>{
        return lodash__WEBPACK_IMPORTED_MODULE_1___default().map(_utilities_formFields__WEBPACK_IMPORTED_MODULE_7__/* .loginButtonsComponent */ .j7, ({ content, classname, route, type })=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_misc_btn_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                classname: classname,
                click: ()=>handleClick(type, route),
                type: type,
                children: content
            }, content);
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "login-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Breakfast, Lunch & Dinner "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Worlds first AI powered personal meal planner"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                className: "login-form",
                onSubmit: handleSubmit(formSubmit),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "login-form__element__mt",
                        children: [
                            loginFieldsComponent(),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "forgot-link",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    href: "/auth/password-reset",
                                    children: "Forgot password?"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "btn-container",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_misc_btn_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                classname: "blue",
                                type: "submit",
                                children: "Submit"
                            }),
                            loginButtons()
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
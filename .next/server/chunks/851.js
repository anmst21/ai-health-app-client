"use strict";
exports.id = 851;
exports.ids = [851];
exports.modules = {

/***/ 7309:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ImgUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6465);
/* harmony import */ var _misc_dropdown_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(981);
/* harmony import */ var _utilities_formFields__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5323);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5641);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _redux_store_userInfoSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9805);
/* harmony import */ var _redux_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4970);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _redux_store_userInfoSlice__WEBPACK_IMPORTED_MODULE_8__, _redux_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_9__]);
([react_hook_form__WEBPACK_IMPORTED_MODULE_5__, _redux_store_userInfoSlice__WEBPACK_IMPORTED_MODULE_8__, _redux_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const UserInfoField = ()=>{
    const userInfo = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.userInfo);
    const [selectedOption, setSelectedOption] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(userInfo.time);
    const [selection, setSelection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        label: userInfo.activity
    });
    console.log("user info", selectedOption);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({
        defaultValues: {
            firstName: userInfo.name,
            dob: userInfo.dob,
            heightFeet: userInfo.feet,
            heightInch: userInfo.inch
        }
    });
    const onValueChange = (event)=>{
        setSelectedOption(event.target.value);
    };
    const handleSelect = (option)=>{
        setSelection(option);
    };
    const onSubmit = (data)=>{
        const userInfo = {
            activity: selection.label,
            time: selectedOption,
            name: data.firstName,
            dob: data.dob,
            feet: data.heightFeet,
            inch: data.heightInch
        };
        dispatch((0,_redux_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_9__/* .submitUserInfo */ .MX)({
            details: userInfo
        }));
        dispatch((0,_redux_store_userInfoSlice__WEBPACK_IMPORTED_MODULE_8__/* .registerUserInfo */ .ig)(userInfo));
        router.push("/user-info/preferences");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            className: "login-form mt-user-info",
            onSubmit: handleSubmit(onSubmit),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ImgUpload__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "user-form-container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "login-form__element flex1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
                                        "error-label": errors.firstName
                                    }),
                                    children: "Your Name:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("styled-input info-input", {
                                        "error-border": errors.firstName
                                    }),
                                    type: "name",
                                    name: "firstName",
                                    placeholder: "Anthony",
                                    ...register("firstName", {
                                        required: true
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "login-form__element flex1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
                                        "error-label": errors.dob
                                    }),
                                    children: "DOB:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("styled-input info-input", {
                                        "error-border": errors.dob
                                    }),
                                    type: "date",
                                    name: "dob",
                                    placeholder: "12/18/2000",
                                    ...register("dob", {
                                        required: true
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "user-form-container ",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "login-form__element flex1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    className: classnames__WEBPACK_IMPORTED_MODULE_7___default()({
                                        "error-label": errors.heightFeet
                                    }),
                                    children: "Height:"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "user-form-container height-container",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("styled-input info-input height-input height-input__1", {
                                                "error-border": errors.heightFeet
                                            }),
                                            type: "number",
                                            name: "heightFeet",
                                            placeholder: '6"',
                                            ...register("heightFeet", {
                                                required: true
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_7___default()("styled-input info-input height-input height-input__2", {
                                                "error-border__inch": errors.heightInch
                                            }),
                                            type: "number",
                                            name: "heightInch",
                                            placeholder: "2'",
                                            ...register("heightInch", {
                                                required: true
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "login-form__element flex1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                    children: "Activity:"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_misc_dropdown_component__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                    options: _utilities_formFields__WEBPACK_IMPORTED_MODULE_4__/* .userDropdown */ .Q_,
                                    value: selection,
                                    onChange: handleSelect
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "radio-element",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "label-text text-center label-baldness-fix",
                            children: "How much time are you usually spend in the kitchen?"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "radio-container",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "radio",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "radio__label ",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "radio",
                                                value: "Less",
                                                checked: selectedOption === "Less",
                                                onChange: onValueChange,
                                                readOnly: true
                                            }),
                                            "Less"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "radio",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "radio__label",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "radio",
                                                value: "Average",
                                                checked: selectedOption === "Average",
                                                onChange: onValueChange,
                                                readOnly: true
                                            }),
                                            "Average"
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "radio",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                        className: "radio__label",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "radio",
                                                value: "More",
                                                checked: selectedOption === "More",
                                                onChange: onValueChange,
                                                readOnly: true
                                            }),
                                            "More"
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "btn-container",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn btn__blue",
                        type: "submit",
                        children: "Next"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfoField);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4851:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _UserInfoField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7309);
/* harmony import */ var _redux_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6924);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_UserInfoField__WEBPACK_IMPORTED_MODULE_1__, _redux_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__]);
([_UserInfoField__WEBPACK_IMPORTED_MODULE_1__, _redux_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const UserInfo = ()=>{
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        dispatch((0,_redux_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__/* .fetchUserInfo */ .C)());
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "login-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Let's Start!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Introduce yourself"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "otp-field",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_UserInfoField__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserInfo);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 589;
exports.ids = [589];
exports.modules = {

/***/ 6589:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SelectComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3864);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6924);
/* harmony import */ var _utilities_formFields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5323);
/* harmony import */ var _redux_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4970);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SelectComponent__WEBPACK_IMPORTED_MODULE_2__, _redux_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_4__, _redux_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_6__]);
([_SelectComponent__WEBPACK_IMPORTED_MODULE_2__, _redux_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_4__, _redux_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const PreferencePage = ()=>{
    const [formSubmitted, setFormSubmitted] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const selectedOptions = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useSelector)((state)=>state.options.preference);
    const valuesArray = selectedOptions.map((option)=>option.label);
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        dispatch((0,_redux_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_4__/* .fetchUserInfo */ .C)());
    }, []);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handleClick = ()=>{
        if (selectedOptions.length < 5) {
            setFormSubmitted(true);
        } else {
            dispatch((0,_redux_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_6__/* .submitUserPreferences */ .HP)(valuesArray));
            console.log(valuesArray);
            router.push("/user-info/indiferencies");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "login-container",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-container",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        children: "Tell us your preferences!"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                        children: "Create a list of products you like the most:"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "preference-container ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SelectComponent__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                        blue: true,
                        loadOptions: _utilities_formFields__WEBPACK_IMPORTED_MODULE_5__/* .optionsPreference */ .TI,
                        submitted: formSubmitted
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "btn-container",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: handleClick,
                            className: "btn btn__blue",
                            type: "submit",
                            children: "Next"
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreferencePage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 647;
exports.ids = [647];
exports.modules = {

/***/ 2217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_api_imageSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5758);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);





const BgUpload = ({ onChange, register, errors })=>{
    const [imagePreviewUrl, setImagePreviewUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [submitUserInfoImage] = (0,_redux_api_imageSlice__WEBPACK_IMPORTED_MODULE_3__/* .useSubmitPostInfoImageMutation */ .kv)();
    const photoUpload = async (e)=>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        onChange(file);
        reader.onloadend = async ()=>{
            setImagePreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
        htmlFor: "photo-upload",
        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("bg-custom-file-upload", {
            "bg-custom-file-upload__error": errors.bgUpload
        }),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-image-lg ",
                children: imagePreviewUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    alt: "bg-image",
                    src: imagePreviewUrl,
                    width: 850,
                    height: 260,
                    className: "bg-image-lg__component "
                })
            }),
            !imagePreviewUrl && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-img-wrap",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    alt: "avatar",
                    htmlFor: "photo-upload",
                    src: "/bg-upload.svg",
                    width: 60,
                    height: 60
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...register("bgUpload", {
                    required: true
                }),
                id: "photo-upload",
                type: "file",
                onChange: photoUpload
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BgUpload); //https://codepen.io/OlgaKoplik/pen/ZdyKGY


/***/ }),

/***/ 9710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ToggleSwitch = ({ onChange })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "cccontainer",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "login-form__element login-form__element-end",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                    children: "Vegan:"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "cds-toggle-wrapper",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                            id: "toggle-0",
                            type: "checkbox",
                            className: "cds-toggle-button",
                            onChange: (e)=>onChange(e.target.checked)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                            htmlFor: "toggle-0",
                            className: "cds-toggle-label"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleSwitch);


/***/ }),

/***/ 8647:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _redux_thunks_createPostThunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6198);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5641);
/* harmony import */ var _components_misc_dropdown_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(981);
/* harmony import */ var _BgUpload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2217);
/* harmony import */ var _ToggleSwitch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9710);
/* harmony import */ var _utilities_formFields__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5323);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_redux_thunks_createPostThunk__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__]);
([_redux_thunks_createPostThunk__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const ScheduleCreate = ()=>{
    const [selectionOne, setSelectionOne] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [selectionTwo, setSelectionTwo] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [imageFile, setImageFile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [isVegan, setIsVegan] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    console.log(imageFile);
    const { register, handleSubmit, formState: { errors } } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)();
    const handleSwitchChange = (newState)=>{
        setIsVegan(newState);
    };
    const handleSelectOne = (option)=>{
        setSelectionOne(option);
    };
    const handleSelectTwo = (option)=>{
        setSelectionTwo(option);
    };
    const onFileSubmit = (file)=>{
        setImageFile(file);
    };
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
    const formSubmit = (data)=>{
        const formData = new FormData();
        // Append the relevant fields to the formData object
        formData.append("vegan", isVegan);
        formData.append("style", selectionOne.label);
        formData.append("goal", selectionTwo.label);
        formData.append("planName", data.planName);
        formData.append("planDesc", data.planDesc);
        formData.append("profileImage", imageFile);
        // Send the post request with the formData object
        dispatch((0,_redux_thunks_createPostThunk__WEBPACK_IMPORTED_MODULE_5__/* .createPost */ .q)(formData));
        // Navigate away after the post request
        next_router__WEBPACK_IMPORTED_MODULE_6___default().push("/app");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "schedule-form-container ",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
            onSubmit: handleSubmit(formSubmit),
            className: "login-form schedule-form-container__margin",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_BgUpload__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                    onChange: onFileSubmit,
                    register: register,
                    errors: errors
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "bg-text-container text-container z-index-infini text-invet-color",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-invet-color__item ",
                            children: "Your schedule"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                            className: "text-invet-color__item ",
                            children: "AI will build you a schedule according to your preferences and a title information you provide below"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "btn-right-container",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "login-form",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "login-form__element login-form__element--margin-fix",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
                                                "error-label": errors.planName
                                            }),
                                            children: "Plan Name:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("info-input styled-input", {
                                                "error-border": errors.planDesc
                                            }),
                                            type: "input",
                                            name: "name",
                                            placeholder: "My Sports Plan",
                                            ...register("planName", {
                                                required: true
                                            })
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
                                                    children: "Style:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_misc_dropdown_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    options: _utilities_formFields__WEBPACK_IMPORTED_MODULE_11__/* .dietOptions */ .T2,
                                                    value: selectionOne,
                                                    onChange: handleSelectOne
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "login-form__element flex1",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                    children: "Goal:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_misc_dropdown_component__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                    options: _utilities_formFields__WEBPACK_IMPORTED_MODULE_11__/* .weightOptions */ .Cx,
                                                    value: selectionTwo,
                                                    onChange: handleSelectTwo,
                                                    scrollFix: true
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "login-form__element login-form__element--margin-fix",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()({
                                                "error-label": errors.planName
                                            }),
                                            children: "Plan Description:"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            className: classnames__WEBPACK_IMPORTED_MODULE_3___default()("info-input styled-input styled-input--heigth-fix", {
                                                "error-border": errors.planDesc
                                            }),
                                            type: "email",
                                            name: "name",
                                            placeholder: "Write everything you like here",
                                            ...register("planDesc", {
                                                required: true
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ToggleSwitch__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                    onChange: handleSwitchChange
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "btn-flipped",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                className: "btn-flipped__img",
                                alt: "arrow-btn",
                                htmlFor: "photo-upload",
                                src: "/arrow-btn.svg",
                                width: 53,
                                height: 45
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScheduleCreate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6198:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ createPost)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const createPost = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("posts/createPost", async (formData, thunkAPI)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/submitPostInfo", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: error.message
        });
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
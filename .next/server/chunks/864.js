"use strict";
exports.id = 864;
exports.ids = [864];
exports.modules = {

/***/ 3864:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8315);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6022);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_misc_dropdown_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(981);
/* harmony import */ var _redux_store_selectSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9823);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_select_async__WEBPACK_IMPORTED_MODULE_1__, _redux_store_selectSlice__WEBPACK_IMPORTED_MODULE_7__]);
([react_select_async__WEBPACK_IMPORTED_MODULE_1__, _redux_store_selectSlice__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SelectComponent = ({ loadOptions, red, blue, submitted })=>{
    const [selection, setSelection] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useDispatch)();
    let selectedOptions;
    console.log(selectedOptions);
    if (blue) {
        selectedOptions = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.options.preference);
    } else if (red) {
        selectedOptions = (0,react_redux__WEBPACK_IMPORTED_MODULE_5__.useSelector)((state)=>state.options.indifference);
    }
    const buttonClass = classnames__WEBPACK_IMPORTED_MODULE_4___default()({
        "options-list__container--red": red,
        "options-list__container--blue": blue
    });
    const handleChange = (option)=>{
        if (blue) {
            dispatch((0,_redux_store_selectSlice__WEBPACK_IMPORTED_MODULE_7__/* .addPreferenceOption */ .Tx)(option));
        } else if (red) {
            dispatch((0,_redux_store_selectSlice__WEBPACK_IMPORTED_MODULE_7__/* .addIndifferenceOption */ .UC)(option));
        }
    };
    const handleRemove = (option)=>{
        console.log(option);
        if (blue) {
            dispatch((0,_redux_store_selectSlice__WEBPACK_IMPORTED_MODULE_7__/* .removePreferenceOption */ .QG)(option));
        } else if (red) {
            dispatch((0,_redux_store_selectSlice__WEBPACK_IMPORTED_MODULE_7__/* .removeIndifferenceOption */ .nC)(option));
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "preference-selection",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "login-form__element margin-0",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "select",
                        children: "Search:"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_misc_dropdown_component__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                        heightFix: true,
                        options: loadOptions,
                        value: selection,
                        onChange: handleChange
                    }),
                    selectedOptions.length < 5 && submitted && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "info-input__error",
                        children: "Add at least 5 options!"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "login-form__element",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                        htmlFor: "async select",
                        children: "Selected Options"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "options-list",
                        children: selectedOptions && selectedOptions.map((option, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: buttonClass,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                    className: "options-list__item",
                                    children: [
                                        option.label,
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                            alt: "remove icon",
                                            htmlFor: "rm-icon",
                                            src: "/rm-icon-sm.svg",
                                            width: 12,
                                            height: 12,
                                            className: "options-list__image",
                                            onClick: ()=>handleRemove(option)
                                        })
                                    ]
                                })
                            }, index))
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SelectComponent);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
"use strict";
exports.id = 823;
exports.ids = [823];
exports.modules = {

/***/ 9823:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QG: () => (/* binding */ removePreferenceOption),
/* harmony export */   Tx: () => (/* binding */ addPreferenceOption),
/* harmony export */   UC: () => (/* binding */ addIndifferenceOption),
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   nC: () => (/* binding */ removeIndifferenceOption)
/* harmony export */ });
/* unused harmony exports setPreferences, setIndifferences */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_1__]);
_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const optionsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "options",
    initialState: {
        preference: [],
        indifference: []
    },
    reducers: {
        addPreferenceOption: (state, action)=>{
            const index = state.preference.findIndex((option)=>option.value === action.payload.value);
            if (index === -1) state.preference.push(action.payload);
        },
        removePreferenceOption: (state, action)=>{
            state.preference = state.preference.filter((option)=>option.label !== action.payload.label);
        },
        addIndifferenceOption: (state, action)=>{
            const index = state.indifference.findIndex((option)=>option.value === action.payload.value);
            if (index === -1) state.indifference.push(action.payload);
        },
        removeIndifferenceOption: (state, action)=>{
            state.indifference = state.indifference.filter((option)=>option.label !== action.payload.label);
        },
        setPreferences: (state, action)=>{
            state.preference = action.payload;
        },
        setIndifferences: (state, action)=>{
            state.indifference = action.payload;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_1__/* .fetchUserInfo */ .C.fulfilled, (state, action)=>{
            // Update the preferences and indifferences with the fetched data
            state.preference = action.payload.preferences.map((preference)=>({
                    label: preference
                }));
            state.indifference = action.payload.indifferences.map((indifference)=>({
                    label: indifference
                }));
        });
    }
});
const { addPreferenceOption, removePreferenceOption, addIndifferenceOption, removeIndifferenceOption, setPreferences, setIndifferences } = optionsSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (optionsSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
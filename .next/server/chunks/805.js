"use strict";
exports.id = 805;
exports.ids = [805];
exports.modules = {

/***/ 9805:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   ig: () => (/* binding */ registerUserInfo)
/* harmony export */ });
/* unused harmony export userInfoSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4970);
/* harmony import */ var _thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_1__, _thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__]);
([_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_1__, _thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const userInfoSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "userInfo",
    initialState: {
        name: "",
        dob: "",
        feet: "",
        inch: "",
        activity: "",
        time: ""
    },
    reducers: {
        registerUserInfo: (state, action)=>{
            state.name = action.payload.name;
            state.dob = action.payload.dob;
            state.feet = action.payload.feet;
            state.inch = action.payload.inch;
            state.activity = action.payload.activity;
            state.isLoading = action.payload.isLoading;
            state.error = action.payload.error;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_1__/* .submitUserInfo */ .MX.pending, (state)=>{
            state.isLoading = true;
        }).addCase(_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_1__/* .submitUserInfo */ .MX.fulfilled, (state, action)=>{
            state.isLoading = false;
            if (action.payload && action.payload.details) {
                // Update the state with the fetched data
                state.name = action.payload.details.name;
                state.dob = action.payload.details.dob;
                state.feet = action.payload.details.feet;
                state.inch = action.payload.details.inch;
                state.activity = action.payload.details.activity;
                state.time = action.payload.details.time;
            }
        }).addCase(_thunks_submitUserThunk__WEBPACK_IMPORTED_MODULE_1__/* .submitUserInfo */ .MX.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload.error;
        }).addCase(_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__/* .fetchUserInfo */ .C.pending, (state)=>{
            state.isLoading = true;
        }).addCase(_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__/* .fetchUserInfo */ .C.fulfilled, (state, action)=>{
            // Check if payload and details exist
            if (action.payload && action.payload.details) {
                // Update the state with the fetched data
                state.name = action.payload.details.name;
                state.dob = action.payload.details.dob;
                state.feet = action.payload.details.feet;
                state.inch = action.payload.details.inch;
                state.activity = action.payload.details.activity;
                state.time = action.payload.details.time;
            }
            state.isLoading = false;
        }).addCase(_thunks_fetchUserThunk__WEBPACK_IMPORTED_MODULE_2__/* .fetchUserInfo */ .C.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.payload ? action.payload.error : null;
        });
    }
});
const { registerUserInfo } = userInfoSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userInfoSlice.reducer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;
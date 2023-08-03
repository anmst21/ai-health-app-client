"use strict";
exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 6924:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   C: () => (/* binding */ fetchUserInfo)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const fetchUserInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("userInfo/fetch", async (_, { rejectWithValue })=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].get("/api/submitUserInfo");
        // Return the user info, which will be used as the payload for the `fulfilled` action
        return response.data;
    } catch (error) {
        // If there's an error, reject the promise with the error message
        return rejectWithValue({
            error: error.message
        });
    }
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HP: () => (/* binding */ submitUserPreferences),
/* harmony export */   MX: () => (/* binding */ submitUserInfo),
/* harmony export */   rd: () => (/* binding */ submitUserIndifferences)
/* harmony export */ });
/* unused harmony export submitUserDone */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);
axios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const submitUserInfo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("userInfo/submitUserInfo", async (formData, thunkAPI)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/submitUserInfo", formData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: error.message
        });
    }
});
const submitUserPreferences = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("userInfo/api/submitPreferences", async (userInfo, thunkAPI)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/submitPreferences", userInfo);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: error.message
        });
    }
});
const submitUserIndifferences = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("userInfo/api/submitIndifferences", async (userInfo, thunkAPI)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/submitIndifferences", userInfo);
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue({
            error: error.message
        });
    }
});
const submitUserDone = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("userInfo/api/submitUserDone", async (userInfo, thunkAPI)=>{
    try {
        const response = await axios__WEBPACK_IMPORTED_MODULE_1__["default"].post("/api/userInfoDone", userInfo);
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
"use strict";
exports.id = 890;
exports.ids = [890];
exports.modules = {

/***/ 6890:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $h: () => (/* binding */ useChangePasswordMutation),
/* harmony export */   S3: () => (/* binding */ useNewOtpMutation),
/* harmony export */   YA: () => (/* binding */ useLoginMutation),
/* harmony export */   gk: () => (/* binding */ apiSlice),
/* harmony export */   l4: () => (/* binding */ useRegisterMutation),
/* harmony export */   uY: () => (/* binding */ useVerifyOTPMutation)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const apiSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "apiSlice",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "/auth"
    }),
    endpoints: (builder)=>({
            register: builder.mutation({
                query: (credentials)=>({
                        url: "/register",
                        method: "POST",
                        body: credentials
                    })
            }),
            newOtp: builder.mutation({
                query: (credentials)=>({
                        url: "/resend-otp",
                        method: "POST",
                        body: credentials
                    })
            }),
            verifyOTP: builder.mutation({
                query: (otp)=>({
                        url: "/verify-register",
                        method: "POST",
                        body: otp
                    })
            }),
            changePassword: builder.mutation({
                query: (email)=>({
                        url: "/reset-password",
                        method: "POST",
                        body: email
                    })
            }),
            login: builder.mutation({
                query: (credentials)=>({
                        url: "/login",
                        method: "POST",
                        body: credentials
                    })
            })
        })
});
const { useRegisterMutation, useVerifyOTPMutation, useLoginMutation, useChangePasswordMutation, useNewOtpMutation } = apiSlice;


/***/ })

};
;
"use strict";
exports.id = 758;
exports.ids = [758];
exports.modules = {

/***/ 5758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QJ: () => (/* binding */ useSubmitUserInfoImageMutation),
/* harmony export */   cs: () => (/* binding */ imageSlice),
/* harmony export */   jf: () => (/* binding */ useFetchUserInfoImageQuery),
/* harmony export */   kv: () => (/* binding */ useSubmitPostInfoImageMutation)
/* harmony export */ });
/* unused harmony export useFetchPostInfoImageQuery */
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4335);
/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);

const imageSlice = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({
    reducerPath: "imageSlice",
    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({
        baseUrl: "/api"
    }),
    endpoints: (builder)=>({
            submitUserInfoImage: builder.mutation({
                query: (imageData)=>({
                        url: "/submitUserInfo/image",
                        method: "POST",
                        body: imageData
                    })
            }),
            fetchUserInfoImage: builder.query({
                query: ()=>"/submitUserInfo/image"
            }),
            submitPostInfoImage: builder.mutation({
                query: (imageData)=>({
                        url: "/submitPostInfo/image",
                        method: "POST",
                        body: imageData
                    })
            }),
            fetchPostInfoImage: builder.query({
                query: ()=>"/submitPostInfo/imagee"
            })
        })
});
const { useSubmitUserInfoImageMutation, useFetchUserInfoImageQuery, useSubmitPostInfoImageMutation, useFetchPostInfoImageQuery } = imageSlice;


/***/ })

};
;
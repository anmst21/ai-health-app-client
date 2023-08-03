"use strict";
exports.id = 465;
exports.ids = [465];
exports.modules = {

/***/ 6465:
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




const ImgUpload = ()=>{
    const { data: fetchedImage, refetch, isLoading, isError } = (0,_redux_api_imageSlice__WEBPACK_IMPORTED_MODULE_3__/* .useFetchUserInfoImageQuery */ .jf)(null);
    const [imagePreviewUrl, setImagePreviewUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();
    console.log(fetchedImage);
    const ImageComponent = ()=>{
        if (isLoading) {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "settings-page__loader",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                    alt: "loading",
                    src: "/loading_spinner.svg",
                    width: 50,
                    height: 50
                })
            });
        } else {
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                alt: "user avatar",
                htmlFor: "photo-upload",
                src: imagePreviewUrl,
                width: 100,
                height: 100,
                className: "custom-file-upload__cover"
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (fetchedImage) {
            setImagePreviewUrl(fetchedImage.filename);
        }
        if (isError || !fetchedImage || !fetchedImage.filename) {
            setImagePreviewUrl("/profile.svg");
        }
    }, [
        fetchedImage,
        isError
    ]);
    const [submitUserInfoImage] = (0,_redux_api_imageSlice__WEBPACK_IMPORTED_MODULE_3__/* .useSubmitUserInfoImageMutation */ .QJ)();
    const photoUpload = async (e)=>{
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = async ()=>{
            setImagePreviewUrl(reader.result);
            const formData = new FormData();
            formData.append("profileImage", file); // This is the change
            await submitUserInfoImage(formData);
            refetch();
        };
        reader.readAsDataURL(file);
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex-photo",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
            htmlFor: "photo-upload",
            className: "custom-file-upload",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "img-wrap settings-page__header--img",
                    children: ImageComponent()
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                    id: "photo-upload",
                    name: "profileImage",
                    type: "file",
                    onChange: photoUpload
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImgUpload); //https://codepen.io/OlgaKoplik/pen/ZdyKGY


/***/ })

};
;
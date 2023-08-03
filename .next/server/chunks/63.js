"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 2063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ otp_screen)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./redux/api/apiSlice.js
var apiSlice = __webpack_require__(6890);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react-countdown"
var external_react_countdown_ = __webpack_require__(4449);
var external_react_countdown_default = /*#__PURE__*/__webpack_require__.n(external_react_countdown_);
// EXTERNAL MODULE: ./redux/store/userSlice.js
var userSlice = __webpack_require__(160);
;// CONCATENATED MODULE: ./components/registration-flow/otp-screen/OtpField.js








let currentOtpIndex = 0;
const OTPField = ()=>{
    const [otp, setOtp] = (0,external_react_.useState)(new Array(6).fill(""));
    const [activeOtpIndex, setActiveOtpIndex] = (0,external_react_.useState)(0);
    const [formSubmitted, setFormSubmitted] = (0,external_react_.useState)(false);
    const [verifyOTP] = (0,apiSlice/* useVerifyOTPMutation */.uY)();
    const inputRef = (0,external_react_.useRef)();
    const data = (0,external_react_redux_.useSelector)((state)=>state.user);
    const date = new Date(data.otpExpires);
    const [newOtp] = (0,apiSlice/* useNewOtpMutation */.S3)();
    const router = (0,router_.useRouter)();
    const onSubmit = async (event)=>{
        event.preventDefault();
        if (otp.every((input)=>input !== "")) {
            console.log("All inputs are populated, submit the form");
            try {
                const response = await verifyOTP({
                    email: data.email,
                    otp: otp.join("")
                }).unwrap();
                console.log(response);
                router.push("/auth");
            } catch (error) {
                console.error("OTP failed:", error);
            }
        } else {
            console.log("Not all inputs are populated, show an error");
            setFormSubmitted(true);
        }
    };
    const handleResendOTP = async ()=>{
        try {
            const response = await newOtp({
                email: data.email
            }).unwrap();
            // After a successful action, you can do something with the response
            console.log("A new OTP has been sent:", response);
        } catch (error) {
            console.error("Failed to resend OTP:", error);
        }
    };
    const renderer = ({ hours, minutes, seconds, completed })=>{
        if (completed || !seconds && !minutes) {
            // Render a button to resend the OTP
            return /*#__PURE__*/ jsx_runtime.jsx("button", {
                type: "button",
                className: "otp-field__timer--button",
                onClick: handleResendOTP,
                children: /*#__PURE__*/ jsx_runtime.jsx("p", {
                    className: "otp-field__timer",
                    children: "Resend Code"
                })
            });
        } else {
            // Render the countdown timer
            return /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                className: "otp-field__timer",
                children: [
                    "Time remaining",
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                        className: "otp-field__timer--time",
                        children: [
                            minutes,
                            ":" + seconds.toString().padStart(2, "0")
                        ]
                    })
                ]
            });
        }
    };
    const handleOnChange = (e)=>{
        const value = e.target.value;
        const newOTP = [
            ...otp
        ];
        newOTP[currentOtpIndex] = value.substring(value.length - 1);
        if (!value) setActiveOtpIndex(currentOtpIndex - 1);
        else setActiveOtpIndex(currentOtpIndex + 1);
        setOtp(newOTP);
    };
    const handleOnKeyDown = (e, index)=>{
        currentOtpIndex = index;
        if (e.key === "Backspace") setActiveOtpIndex(currentOtpIndex - 1);
    };
    (0,external_react_.useEffect)(()=>{
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, [
        activeOtpIndex
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("form", {
        onSubmit: onSubmit,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "otp-field",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "otp-container ",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("label", {
                                htmlFor: "otp-input",
                                children: "Verificaition Code:"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "cell-container",
                                children: [
                                    otp.map((_, index)=>{
                                        return /*#__PURE__*/ jsx_runtime.jsx("div", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx("input", {
                                                onKeyDown: (e)=>handleOnKeyDown(e, index),
                                                value: otp[index],
                                                ref: index === activeOtpIndex ? inputRef : null,
                                                onChange: handleOnChange,
                                                type: "number",
                                                className: "otp-input label-text"
                                            })
                                        }, index);
                                    }),
                                    !otp.every((input)=>input !== "") && formSubmitted && /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "info-input__error",
                                        children: "Fill out all the fields!"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "nocode-link",
                        children: /*#__PURE__*/ jsx_runtime.jsx((external_react_countdown_default()), {
                            date: date,
                            renderer: renderer
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "btn-container",
                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                    className: "btn btn__white",
                    type: "submit",
                    children: "Submit"
                })
            })
        ]
    });
};
/* harmony default export */ const OtpField = (OTPField);

;// CONCATENATED MODULE: ./components/registration-flow/otp-screen/index.js


const SignUpScreen = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "login-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "text-container",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h1", {
                        children: "Verification"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("h4", {
                        children: "Enter your code from E-Mail"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(OtpField, {})
        ]
    });
};
/* harmony default export */ const otp_screen = (SignUpScreen);


/***/ }),

/***/ 160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   fv: () => (/* binding */ registerEmail)
/* harmony export */ });
/* unused harmony export userSlice */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_apiSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6890);


const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "user",
    initialState: {
        email: "",
        otpExpires: ""
    },
    reducers: {
        registerEmail: (state, action)=>{
            state.email = action.payload.email;
            state.otpExpires = action.payload.otpExpires;
        }
    }
});
const { registerEmail } = userSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);


/***/ })

};
;
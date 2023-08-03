"use strict";
exports.id = 779;
exports.ids = [779];
exports.modules = {

/***/ 6521:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const NoPosts = ()=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "l-1-r nopost-container",
        children: "Your collection is empty at the moment, add something to start with!"
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (NoPosts)));


/***/ }),

/***/ 8779:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _NoPosts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6521);
/* harmony import */ var _schedule_create__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8647);
/* harmony import */ var _AddPostButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8553);
/* harmony import */ var _plan_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7946);
/* harmony import */ var _weekly_schedule__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3586);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _directions_screen__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8056);
/* harmony import */ var _basket_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2224);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_schedule_create__WEBPACK_IMPORTED_MODULE_3__, _plan_card__WEBPACK_IMPORTED_MODULE_5__]);
([_schedule_create__WEBPACK_IMPORTED_MODULE_3__, _plan_card__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MainScreen = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "main-screen",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "main-screen__weekly-container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_directions_screen__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {})
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainScreen);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3586:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ weekly_schedule)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/misc/ChevronBack.js
var ChevronBack = __webpack_require__(8772);
// EXTERNAL MODULE: ./components/misc/MenuIcon.js
var MenuIcon = __webpack_require__(5928);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/misc/vertical-radio/index.js


const VerticalRadio = ({ data, value, setValue })=>{
    const handleChange = (event)=>{
        setValue(Number(event.target.value));
    };
    return /*#__PURE__*/ jsx_runtime.jsx("form", {
        action: "",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "vertical-radio",
            children: data.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("input", {
                    className: "progress-icon progress-icon__opaque",
                    type: "radio",
                    value: index,
                    checked: value === index,
                    onChange: handleChange
                }, index))
        })
    });
};
/* harmony default export */ const vertical_radio = (VerticalRadio);

// EXTERNAL MODULE: ./components/main-menu/main-screen/weekly-schedule/WeeklyScheduleCard.js
var WeeklyScheduleCard = __webpack_require__(4561);
// EXTERNAL MODULE: ./utilities/formFields.js
var formFields = __webpack_require__(5323);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/misc/round-menu/index.js




const round_menu_MenuIcon = ()=>{
    const [isOpen, setIsOpen] = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "menu-icon__container",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: external_classnames_default()("menu-icon", {
                    "menu-icon__click": isOpen
                }),
                onClick: ()=>setIsOpen((prevIsOpen)=>!prevIsOpen),
                children: isOpen ? /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    alt: "close-menu",
                    src: "/close-home.svg",
                    width: 30,
                    height: 30
                }) : /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                    alt: "round menu",
                    src: "/menu-icon.svg",
                    width: 9,
                    height: 31.5
                })
            }),
            isOpen && /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: " menu-icon-1",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            alt: "round menu",
                            src: "/export-icon-sm.svg",
                            width: 31,
                            height: 43
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "menu-icon-2",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            alt: "round menu",
                            src: "/edit-icon-sm.svg",
                            width: 35,
                            height: 35
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "menu-icon-3",
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            alt: "round menu",
                            src: "/trash-icon.svg",
                            width: 30,
                            height: 35
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const round_menu = (round_menu_MenuIcon);

;// CONCATENATED MODULE: ./components/main-menu/main-screen/weekly-schedule/index.js









const WeeklySchedule = ()=>{
    const weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ];
    const date = new Date();
    const today = date.toLocaleDateString("en-US", {
        weekday: "long"
    });
    const [dayIndex, setDayIndex] = (0,external_react_.useState)(weekDays.indexOf(today));
    const { meals } = formFields/* weekMeal */.Ap.find((meal)=>meal.day === weekDays[dayIndex]);
    console.log(meals);
    const incrementDay = ()=>{
        setDayIndex((prevDayIndex)=>(prevDayIndex + 1) % weekDays.length);
    };
    const decrementDay = ()=>{
        setDayIndex((prevDayIndex)=>(prevDayIndex - 1 + weekDays.length) % weekDays.length);
    };
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "main-screen__weekly-container",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(vertical_radio, {
                data: weekDays,
                value: dayIndex,
                setValue: setDayIndex
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "main-screen__arrow",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "main-screen__arrow--item",
                        onClick: decrementDay,
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            alt: "arr up",
                            src: "/scroll-down-chevron.svg",
                            width: 85,
                            height: 20
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        alt: "arr down",
                        className: "main-screen__arrow--item",
                        onClick: incrementDay,
                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                            src: "/scroll-down-chevron.svg",
                            width: 85,
                            height: 20
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                alt: "bg img",
                src: "/wallpaper-demo.png",
                width: 850,
                height: 640,
                className: "main-screen__bg-img plan-card__image--element"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "main-screen__absolute--header",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "settings-page__header--text",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(ChevronBack/* default */.Z, {
                                fix: true,
                                linkTo: "/app"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: weekDays[dayIndex]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(round_menu, {})
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "main-screen__cards",
                children: meals.map((meal, index)=>/*#__PURE__*/ jsx_runtime.jsx(WeeklyScheduleCard/* default */.Z, {
                        meal: meal
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const weekly_schedule = (WeeklySchedule);
{
/* <ChevronBack fix /> */ }

/***/ })

};
;
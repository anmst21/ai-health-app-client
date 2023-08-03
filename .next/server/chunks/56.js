"use strict";
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 8056:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ directions_screen)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/misc/MenuIcon.js
var MenuIcon = __webpack_require__(5928);
// EXTERNAL MODULE: ./components/misc/ChevronBack.js
var ChevronBack = __webpack_require__(8772);
// EXTERNAL MODULE: ./components/main-menu/main-screen/weekly-schedule/WeeklyScheduleCard.js
var WeeklyScheduleCard = __webpack_require__(4561);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/main-menu/main-screen/directions-screen/StepsCard.js



const StepsCard = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "directions-card",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "plan-card__conatainer plan-card__container-fix",
            style: {
                border: "none"
            },
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "plan-card__filler"
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "plan-card__image",
                    children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                        alt: "card image",
                        src: "/wallpaper-demo.png",
                        width: 400,
                        height: 250,
                        className: "plan-card__image--element plan-card__image--mask"
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "plan-card__content",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("h2", {
                            className: "plan-card__content--h1",
                            children: "Breakfast"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("h4", {
                            className: "plan-card__content--h4 plan-card__content__text-fix",
                            children: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ipsa unde minus! Aliquid repellendus neque consectetur eveniet repudiandae odit? Voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ipsa unde minus! Aliquid repellendus neque consectetur eveniet repudiandae odit? Voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ipsa unde minus! Aliquid repellendus neque consectetur eveniet repudiandae odit? Voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ipsa unde minus! Aliquid repellendus neque consectetur eveniet repudiandae odit? Voluptas? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis ipsa unde minus! Aliquid repellendus neque consectetur eveniet repudiandae odit? Voluptas?"
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const directions_screen_StepsCard = (StepsCard); // /wallpaper-demo.png

// EXTERNAL MODULE: ./components/misc/logo-round/index.js
var logo_round = __webpack_require__(7172);
// EXTERNAL MODULE: ./components/main-menu/main-screen/AddPostButton.js
var AddPostButton = __webpack_require__(8553);
;// CONCATENATED MODULE: ./components/main-menu/main-screen/directions-screen/index.js









const DirectionsScreen = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "main-screen__weekly-container",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "main-screen__absolute--header directions-card__fix",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "settings-page__header--text",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx(ChevronBack/* default */.Z, {
                                fix: true,
                                linkTo: "/app/complexId123"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "Directions"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(logo_round/* default */.Z, {
                        dir: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(AddPostButton/* default */.Z, {
                link: "/app/complexId123/basket"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "main-screen__cards main-screen__cards--fix",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(directions_screen_StepsCard, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(directions_screen_StepsCard, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(directions_screen_StepsCard, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(directions_screen_StepsCard, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(directions_screen_StepsCard, {}),
                    /*#__PURE__*/ jsx_runtime.jsx(directions_screen_StepsCard, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const directions_screen = (DirectionsScreen);


/***/ }),

/***/ 4561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_misc_MenuIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5928);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9003);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);






const WeeklyScheduleCard = ({ meal })=>{
    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    console.log(isOpen);
    const navigateToDirections = ()=>{
        const currentSlug = router.query.slug;
        router.push({
            pathname: "/app/[slug]/directions",
            query: {
                slug: currentSlug
            }
        });
    };
    const onClick = ()=>{
        setIsOpen((prevIsOpen)=>!prevIsOpen);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_5___default()({
            "weekly-schedule__open": isOpen
        }),
        children: [
            isOpen && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "weekly-schedule__menu",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: "/pencil-icon.svg",
                        width: 50,
                        height: 51
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: "/menu-icon-sm.svg",
                        width: 48,
                        height: 49
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    border: "none"
                },
                className: classnames__WEBPACK_IMPORTED_MODULE_5___default()("plan-card__conatainer", {
                    "plan-card__conatainer__open": isOpen
                }),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        onClick: onClick,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_misc_MenuIcon__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            card: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "plan-card__filler"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "plan-card__image plan-card__image--fix",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                            src: "/wallpaper-demo.png",
                            width: 400,
                            height: 250,
                            className: "plan-card__image--element plan-card__image--mask"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "plan-card__content",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "plan-card__content--h1",
                                children: meal.time
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "weekly-schedule__ul",
                                children: meal.content.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                        className: "weekly-schedule__ul--li",
                                        onClick: navigateToDirections,
                                        children: [
                                            item,
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                src: "/arrow-btn.svg",
                                                height: 21,
                                                width: 28,
                                                className: "weekly-schedule__ul--img "
                                            })
                                        ]
                                    }, index))
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WeeklyScheduleCard);


/***/ }),

/***/ 5928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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




const MenuIcon = ({ card })=>{
    const className = classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        "menu-icon": true,
        "menu-icon__card": card
    });
    const heightImg = card ? 25.5 : 31.5;
    const widthImg = card ? 7 : 9;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: className,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            alt: "round menu",
            src: "/menu-icon.svg",
            width: widthImg,
            height: heightImg
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MenuIcon);


/***/ })

};
;
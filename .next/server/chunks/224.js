"use strict";
exports.id = 224;
exports.ids = [224];
exports.modules = {

/***/ 2224:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ basket_screen)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./components/misc/ChevronBack.js
var ChevronBack = __webpack_require__(8772);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(6517);
var external_lodash_default = /*#__PURE__*/__webpack_require__.n(external_lodash_);
// EXTERNAL MODULE: ./components/misc/logo-round/index.js
var logo_round = __webpack_require__(7172);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
;// CONCATENATED MODULE: ./components/main-menu/main-screen/basket-screen/BasketItem.js



const BasketItem = ({ name, weight, index })=>{
    const [isActive, setIsActive] = (0,external_react_.useState)(false);
    const className = external_classnames_default()({
        "basket-screen__element": true,
        "basket-screen__element--active": isActive
    });
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: className,
        onClick: ()=>setIsActive((isActive)=>!isActive),
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("p1", {
                className: "basket-screen__p1",
                children: name
            }),
            /*#__PURE__*/ jsx_runtime.jsx("span", {
                className: "basket-screen__span",
                children: weight
            })
        ]
    }, index);
};
/* harmony default export */ const basket_screen_BasketItem = (BasketItem);

;// CONCATENATED MODULE: ./components/main-menu/main-screen/basket-screen/index.js






const products = [
    {
        name: "Product 1",
        weight: "2kg"
    },
    {
        name: "Product 2",
        weight: "2kg"
    },
    {
        name: "Product 3",
        weight: "2kg"
    },
    {
        name: "Product 4",
        weight: "2kg"
    },
    {
        name: "Product 5",
        weight: "2kg"
    },
    {
        name: "Product 6",
        weight: "2kg"
    },
    {
        name: "Product 7",
        weight: "2kg"
    },
    {
        name: "Product 8",
        weight: "2kg"
    },
    {
        name: "Product 9",
        weight: "2kg"
    },
    {
        name: "Product 10",
        weight: "2kg"
    }
];
const BasketScreen = ()=>{
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
                                linkTo: "/app/complexId123/directions"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("h1", {
                                children: "Basket"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(logo_round/* default */.Z, {
                        dir: true,
                        basket: true
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: "basket-screen__container",
                children: external_lodash_default().map(products, (product, index)=>/*#__PURE__*/ jsx_runtime.jsx(basket_screen_BasketItem, {
                        name: product.name,
                        index: index,
                        weight: product.weight
                    }))
            })
        ]
    });
};
/* harmony default export */ const basket_screen = (BasketScreen);


/***/ })

};
;
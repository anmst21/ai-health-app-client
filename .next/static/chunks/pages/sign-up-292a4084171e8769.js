(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[801],{3359:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sign-up",function(){return l(7708)}])},8772:function(e,a,l){"use strict";var n=l(5893);l(7294);var t=l(5675),r=l.n(t),u=l(4184),i=l.n(u),o=l(1664),s=l.n(o);a.Z=e=>{let{handleBack:a,fix:l,linkTo:t}=e,u=i()({"chevron-back":!0,"chevron-back__fix":l});return(0,n.jsx)(s(),{href:t,children:(0,n.jsx)("div",{className:u,onClick:a,children:(0,n.jsx)(r(),{alt:"chevron-back",src:"/chevron-back.svg",width:"16",height:"32"})})})}},150:function(e,a,l){"use strict";var n=l(5893);l(7294);var t=l(4184),r=l.n(t);l(1664),a.Z=e=>{let{classname:a,children:l,click:t,type:u}=e,i=r()({btn:!0,btn__blue:"blue"===a,btn__red:"red"===a,btn__green:"green"===a,btn__tertiary:"tertiary"===a,btn__white:"white"===a});return(0,n.jsx)("button",{className:i,type:u,onClick:t,children:l})}},297:function(e,a,l){"use strict";var n=l(5893);l(7294);var t=l(4184),r=l.n(t);a.Z=e=>{var a;let{label:l,name:t,placeholder:u,register:i,errors:o}=e;return(0,n.jsxs)("div",{className:"login-form__element",children:[(0,n.jsx)("label",{className:r()({"error-label":o[t]}),children:l}),(0,n.jsx)("input",{...i(t),placeholder:u,className:r()("styled-input info-input",{"error-border":o[t]}),type:"Password"===t||"Password2"===t?"password":"text"}),o[t]&&(0,n.jsx)("span",{className:"info-input__error",children:null===(a=o[t])||void 0===a?void 0:a.message})]})}},7172:function(e,a,l){"use strict";var n=l(5893);l(7294);var t=l(5675),r=l.n(t),u=l(4184),i=l.n(u);a.Z=e=>{let{dir:a,basket:l}=e,t=i()({"icon-round":!0,"icon-round__directions":a});return(0,n.jsx)("div",{className:t,children:(0,n.jsx)(r(),{alt:"logo-round",src:l?"/basket-icon.svg":"/registration-icon.svg",width:l?60:68,height:l?49:65})})}},8009:function(e,a,l){"use strict";var n=l(5893),t=l(150),r=l(6486),u=l.n(r),i=l(160),o=l(297),s=l(1248),c=l(7536),d=l(1163),b=l(5323),m=l(7533),h=l(3583),D=l(6890);a.Z=()=>{let{register:e,handleSubmit:a,formState:{errors:l}}=(0,c.cI)({resolver:(0,m.X)(h.fK)}),r=(0,s.I0)(),[g]=(0,D.l4)(),v=(0,d.useRouter)(),f=async(e,a)=>{a.preventDefault(),console.log(e);try{let a=await g({email:e.Login,password:e.Password}).unwrap();r((0,i.fv)(a)),console.log(a),v.push("/sign-up/otp")}catch(e){console.error("Registration failed:",e)}};return(0,n.jsxs)("div",{className:"login-container",children:[(0,n.jsxs)("div",{className:"text-container",children:[(0,n.jsx)("h1",{children:"Login Information"}),(0,n.jsx)("h4",{children:"Enter your login information then we will send you an E-Mail"})]}),(0,n.jsxs)("form",{className:"login-form",onSubmit:a(f),children:[(0,n.jsx)("div",{className:"login-form__element__mt",children:u().map(b.A_,a=>{let{label:t,name:r,placeholder:u}=a;return(0,n.jsx)(o.Z,{label:t,name:r,placeholder:u,errors:l,register:e})})}),(0,n.jsx)("div",{className:"btn-container",children:(0,n.jsx)(t.Z,{classname:"blue",type:"submit",children:"Next"})})]})]})}},7708:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return i}});var n=l(5893),t=l(8009),r=l(7172),u=l(8772);function i(){return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"screen-container",children:[(0,n.jsx)(r.Z,{}),(0,n.jsx)(u.Z,{linkTo:"/auth"}),(0,n.jsx)(t.Z,{})]})})}},5323:function(e,a,l){"use strict";l.d(a,{AA:function(){return i},A_:function(){return u},Ap:function(){return D},Cx:function(){return h},QP:function(){return s},Q_:function(){return c},T2:function(){return m},TI:function(){return d},Zd:function(){return b},j7:function(){return o}});var n=l(5893),t=l(5675),r=l.n(t);let u=[{label:"Login:",name:"Login",placeholder:"anmstudios21c@gmail.com"},{label:"Password:",name:"Password",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7"},{label:"Cumfirm Password:",name:"Password2",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7"}],i=[{label:"Login:",name:"Login",placeholder:"anmstudios21c@gmail.com"},{label:"Password:",name:"Password",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7"}],o=[{content:(0,n.jsxs)(n.Fragment,{children:["Login With",(0,n.jsx)(r(),{alt:"google icon",src:"/googlelogo.svg",width:25,height:25})]}),classname:"red",route:"/auth/google",type:"button"},{content:"Sign Up",classname:"tertiary",route:"/sign-up",type:"button"}],s=[{label:"Enter your Email:",name:"Login",placeholder:"anmstudios21c@gmail.com"}],c=[{label:"Light",value:"1"},{label:"Moderate",value:"2"},{label:"Extreme",value:"3"},{label:"Rare Exercise",value:"4"}],d=[{value:"chocolate",label:"Chocolate \uD83C\uDF6B"},{value:"strawberry",label:"Strawberry \uD83C\uDF53"},{value:"vanilla",label:"Vanilla \uD83C\uDF66"},{value:"bacon",label:"Bacon \uD83E\uDD53"},{value:"cheese",label:"Cheese \uD83E\uDDC0"},{value:"garlic",label:"Garlic \uD83E\uDDC4"},{value:"basil",label:"Basil \uD83C\uDF3F"},{value:"oregano",label:"Oregano \uD83C\uDF3F"},{value:"cinnamon",label:"Cinnamon \uD83C\uDF30"},{value:"nutmeg",label:"Nutmeg \uD83C\uDF30"},{value:"ginger",label:"Ginger \uD83C\uDF31"},{value:"honey",label:"Honey \uD83C\uDF6F"},{value:"lemon",label:"Lemon \uD83C\uDF4B"},{value:"mint",label:"Mint \uD83C\uDF31"},{value:"olive_oil",label:"Olive Oil \uD83E\uDED2"},{value:"peanut_butter",label:"Peanut Butter \uD83E\uDD5C"},{value:"almonds",label:"Almonds \uD83C\uDF30"},{value:"avocado",label:"Avocado \uD83E\uDD51"},{value:"blueberries",label:"Blueberries \uD83D\uDD35"},{value:"spinach",label:"Spinach \uD83E\uDD6C"}],b=[{value:"peanuts",label:"Peanuts \uD83E\uDD5C"},{value:"shellfish",label:"Shellfish \uD83E\uDD9E"},{value:"milk",label:"Milk \uD83E\uDD5B"},{value:"eggs",label:"Eggs \uD83E\uDD5A"},{value:"soy",label:"Soy \uD83C\uDF31"},{value:"wheat",label:"Wheat \uD83C\uDF3E"},{value:"fish",label:"Fish \uD83D\uDC1F"},{value:"tree_nuts",label:"Tree Nuts \uD83C\uDF30"},{value:"sesame_seeds",label:"Sesame Seeds \uD83C\uDF31"},{value:"mustard",label:"Mustard \uD83C\uDF2D"},{value:"sulfites",label:"Sulfites \uD83C\uDF77"},{value:"gluten",label:"Gluten \uD83C\uDF5E"},{value:"lactose",label:"Lactose \uD83E\uDDC0"},{value:"corn",label:"Corn \uD83C\uDF3D"},{value:"caffeine",label:"Caffeine ☕"},{value:"chocolate",label:"Chocolate \uD83C\uDF6B"},{value:"garlic",label:"Garlic \uD83E\uDDC4"},{value:"onions",label:"Onions \uD83E\uDDC5"},{value:"spicy_food",label:"Spicy Food \uD83C\uDF36️"},{value:"artificial_sweeteners",label:"Artificial Sweeteners \uD83C\uDF6C"}],m=[{label:"Fusion",value:"1"},{label:"Keto",value:"2"},{label:"Gluten Free",value:"3"},{label:"Comfort Food",value:"4"},{label:"Exotic Insects",value:"5"},{label:"Halal",value:"6"},{label:"Kosher",value:"7"}],h=[{label:"Gain Weight",value:"1"},{label:"Lose Weight",value:"2"},{label:"Maintain Weight",value:"3"}],D=[{day:"Monday",meals:[{time:"Breakfast",content:["Oatmeal with mixed berries","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Chicken Salad","Brown Rice","Steamed Vegetables"]},{time:"Dinner",content:["Grilled Salmon","Quinoa","Mixed Vegetables"]}]},{day:"Tuesday",meals:[{time:"Breakfast",content:["Whole Grain Toast with Avocado","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Tuna Salad","Sweet Potato","Green Beans"]},{time:"Dinner",content:["Steak","Baked Potato","Steamed Broccoli"]}]},{day:"Wednesday",meals:[{time:"Breakfast",content:["Oatmeal with Banana and Honey","Boiled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Chicken Wrap","Mixed Salad","Fruit"]},{time:"Dinner",content:["Pasta with Tomato Sauce","Salad","Garlic Bread"]}]},{day:"Thursday",meals:[{time:"Breakfast",content:["Pancakes with Syrup","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Turkey Sandwich","Chips","Apple"]},{time:"Dinner",content:["Chicken Stir Fry","Brown Rice"]}]},{day:"Friday",meals:[{time:"Breakfast",content:["French Toast","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Pasta Salad","Bread Roll","Orange"]},{time:"Dinner",content:["Pizza","Side Salad"]}]},{day:"Saturday",meals:[{time:"Breakfast",content:["Cereal with Milk","Fruit Salad","Greek yogurt with granola"]},{time:"Lunch",content:["BLT Sandwich","Crisps","Banana"]},{time:"Dinner",content:["BBQ Ribs","Corn on the Cob","Baked Beans"]}]},{day:"Sunday",meals:[{time:"Breakfast",content:["Bagel with Cream Cheese","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Roast Beef Sandwich","Potato Salad","Pickle"]},{time:"Dinner",content:["Roast Chicken","Roasted Potatoes","Steamed Vegetables"]}]}]},3583:function(e,a,l){"use strict";l.d(a,{M8:function(){return r},fK:function(){return t},g0:function(){return u}});var n=l(6310);let t=n.Ry().shape({Login:n.Z_().required().email(),Password:n.Z_().required().min(8).matches(/^(?=.*[A-Z])(?=.*\d)/,"Password must contain at least one uppercase letter and one number"),Password2:n.Z_().required().oneOf([n.iH("Password"),null],"Passwords must match")}),r=n.Ry().shape({Login:n.Z_().required().email(),Password:n.Z_().required().min(8).matches(/^(?=.*[A-Z])(?=.*\d)/,"Password must contain at least one uppercase letter and one number")}),u=n.Ry().shape({Login:n.Z_().required().email()})}},function(e){e.O(0,[662,873,966,536,216,774,888,179],function(){return e(e.s=3359)}),_N_E=e.O()}]);
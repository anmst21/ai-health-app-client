(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{876:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return l(5997)}])},150:function(e,a,l){"use strict";var n=l(5893);l(7294);var t=l(4184),r=l.n(t);l(1664),a.Z=e=>{let{classname:a,children:l,click:t,type:s}=e,u=r()({btn:!0,btn__blue:"blue"===a,btn__red:"red"===a,btn__green:"green"===a,btn__tertiary:"tertiary"===a,btn__white:"white"===a});return(0,n.jsx)("button",{className:u,type:s,onClick:t,children:l})}},297:function(e,a,l){"use strict";var n=l(5893);l(7294);var t=l(4184),r=l.n(t);a.Z=e=>{var a;let{label:l,name:t,placeholder:s,register:u,errors:i}=e;return(0,n.jsxs)("div",{className:"login-form__element",children:[(0,n.jsx)("label",{className:r()({"error-label":i[t]}),children:l}),(0,n.jsx)("input",{...u(t),placeholder:s,className:r()("styled-input info-input",{"error-border":i[t]}),type:"Password"===t||"Password2"===t?"password":"text"}),i[t]&&(0,n.jsx)("span",{className:"info-input__error",children:null===(a=i[t])||void 0===a?void 0:a.message})]})}},7172:function(e,a,l){"use strict";var n=l(5893);l(7294);var t=l(5675),r=l.n(t),s=l(4184),u=l.n(s);a.Z=e=>{let{dir:a,basket:l}=e,t=u()({"icon-round":!0,"icon-round__directions":a});return(0,n.jsx)("div",{className:t,children:(0,n.jsx)(r(),{alt:"logo-round",src:l?"/basket-icon.svg":"/registration-icon.svg",width:l?60:68,height:l?49:65})})}},6139:function(e,a,l){"use strict";var n=l(5893),t=l(6486),r=l.n(t),s=l(1163),u=l(150),i=l(297),o=l(1664),c=l.n(o),d=l(7536),m=l(5323),b=l(6890),h=l(7533),D=l(3583);a.Z=()=>{let e=(0,s.useRouter)(),[a]=(0,b.YA)(),{register:l,handleSubmit:t,setError:o,formState:{errors:g}}=(0,d.cI)({resolver:(0,h.X)(D.M8)}),v=(a,l)=>{"submit"===a?console.log("Form submitted"):e.push(l)};console.log(g);let f=async l=>{try{let n=await a({email:l.Login,password:l.Password}).unwrap();n.user.userInfo?e.push("/app"):e.push("/user-info")}catch(e){e.data?"Password incorrect"===e.data.message?o("Password",{message:e.data.message},"server"):o("Login",{message:e.data.message},"server"):o("Login",{message:"Request failed"},"server")}};return(0,n.jsxs)("div",{className:"login-container",children:[(0,n.jsxs)("div",{className:"text-container",children:[(0,n.jsx)("h1",{children:"Breakfast, Lunch & Dinner "}),(0,n.jsx)("h4",{children:"Worlds first AI powered personal meal planner"})]}),(0,n.jsxs)("form",{className:"login-form",onSubmit:t(f),children:[(0,n.jsxs)("div",{className:"login-form__element__mt",children:[r().map(m.AA,e=>{let{label:a,name:t,placeholder:r}=e;return(0,n.jsx)(i.Z,{label:a,name:t,placeholder:r,errors:g,register:l},t)}),(0,n.jsx)("div",{className:"forgot-link",children:(0,n.jsx)(c(),{href:"/auth/password-reset",children:"Forgot password?"})})]}),(0,n.jsxs)("div",{className:"btn-container",children:[(0,n.jsx)(u.Z,{classname:"blue",type:"submit",children:"Submit"}),r().map(m.j7,e=>{let{content:a,classname:l,route:t,type:r}=e;return(0,n.jsx)(u.Z,{classname:l,click:()=>v(r,t),type:r,children:a},a)})]})]})]})}},5997:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return s}});var n=l(5893),t=l(7172),r=l(6139);function s(){return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)("div",{className:"screen-container",children:[(0,n.jsx)(t.Z,{}),(0,n.jsx)("div",{children:(0,n.jsx)(r.Z,{})})]})})}},5323:function(e,a,l){"use strict";l.d(a,{AA:function(){return u},A_:function(){return s},Ap:function(){return D},Cx:function(){return h},QP:function(){return o},Q_:function(){return c},T2:function(){return b},TI:function(){return d},Zd:function(){return m},j7:function(){return i}});var n=l(5893),t=l(5675),r=l.n(t);let s=[{label:"Login:",name:"Login",placeholder:"anmstudios21c@gmail.com"},{label:"Password:",name:"Password",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7"},{label:"Cumfirm Password:",name:"Password2",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7"}],u=[{label:"Login:",name:"Login",placeholder:"anmstudios21c@gmail.com"},{label:"Password:",name:"Password",placeholder:"\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7"}],i=[{content:(0,n.jsxs)(n.Fragment,{children:["Login With",(0,n.jsx)(r(),{alt:"google icon",src:"/googlelogo.svg",width:25,height:25})]}),classname:"red",route:"/auth/google",type:"button"},{content:"Sign Up",classname:"tertiary",route:"/sign-up",type:"button"}],o=[{label:"Enter your Email:",name:"Login",placeholder:"anmstudios21c@gmail.com"}],c=[{label:"Light",value:"1"},{label:"Moderate",value:"2"},{label:"Extreme",value:"3"},{label:"Rare Exercise",value:"4"}],d=[{value:"chocolate",label:"Chocolate \uD83C\uDF6B"},{value:"strawberry",label:"Strawberry \uD83C\uDF53"},{value:"vanilla",label:"Vanilla \uD83C\uDF66"},{value:"bacon",label:"Bacon \uD83E\uDD53"},{value:"cheese",label:"Cheese \uD83E\uDDC0"},{value:"garlic",label:"Garlic \uD83E\uDDC4"},{value:"basil",label:"Basil \uD83C\uDF3F"},{value:"oregano",label:"Oregano \uD83C\uDF3F"},{value:"cinnamon",label:"Cinnamon \uD83C\uDF30"},{value:"nutmeg",label:"Nutmeg \uD83C\uDF30"},{value:"ginger",label:"Ginger \uD83C\uDF31"},{value:"honey",label:"Honey \uD83C\uDF6F"},{value:"lemon",label:"Lemon \uD83C\uDF4B"},{value:"mint",label:"Mint \uD83C\uDF31"},{value:"olive_oil",label:"Olive Oil \uD83E\uDED2"},{value:"peanut_butter",label:"Peanut Butter \uD83E\uDD5C"},{value:"almonds",label:"Almonds \uD83C\uDF30"},{value:"avocado",label:"Avocado \uD83E\uDD51"},{value:"blueberries",label:"Blueberries \uD83D\uDD35"},{value:"spinach",label:"Spinach \uD83E\uDD6C"}],m=[{value:"peanuts",label:"Peanuts \uD83E\uDD5C"},{value:"shellfish",label:"Shellfish \uD83E\uDD9E"},{value:"milk",label:"Milk \uD83E\uDD5B"},{value:"eggs",label:"Eggs \uD83E\uDD5A"},{value:"soy",label:"Soy \uD83C\uDF31"},{value:"wheat",label:"Wheat \uD83C\uDF3E"},{value:"fish",label:"Fish \uD83D\uDC1F"},{value:"tree_nuts",label:"Tree Nuts \uD83C\uDF30"},{value:"sesame_seeds",label:"Sesame Seeds \uD83C\uDF31"},{value:"mustard",label:"Mustard \uD83C\uDF2D"},{value:"sulfites",label:"Sulfites \uD83C\uDF77"},{value:"gluten",label:"Gluten \uD83C\uDF5E"},{value:"lactose",label:"Lactose \uD83E\uDDC0"},{value:"corn",label:"Corn \uD83C\uDF3D"},{value:"caffeine",label:"Caffeine ☕"},{value:"chocolate",label:"Chocolate \uD83C\uDF6B"},{value:"garlic",label:"Garlic \uD83E\uDDC4"},{value:"onions",label:"Onions \uD83E\uDDC5"},{value:"spicy_food",label:"Spicy Food \uD83C\uDF36️"},{value:"artificial_sweeteners",label:"Artificial Sweeteners \uD83C\uDF6C"}],b=[{label:"Fusion",value:"1"},{label:"Keto",value:"2"},{label:"Gluten Free",value:"3"},{label:"Comfort Food",value:"4"},{label:"Exotic Insects",value:"5"},{label:"Halal",value:"6"},{label:"Kosher",value:"7"}],h=[{label:"Gain Weight",value:"1"},{label:"Lose Weight",value:"2"},{label:"Maintain Weight",value:"3"}],D=[{day:"Monday",meals:[{time:"Breakfast",content:["Oatmeal with mixed berries","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Chicken Salad","Brown Rice","Steamed Vegetables"]},{time:"Dinner",content:["Grilled Salmon","Quinoa","Mixed Vegetables"]}]},{day:"Tuesday",meals:[{time:"Breakfast",content:["Whole Grain Toast with Avocado","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Tuna Salad","Sweet Potato","Green Beans"]},{time:"Dinner",content:["Steak","Baked Potato","Steamed Broccoli"]}]},{day:"Wednesday",meals:[{time:"Breakfast",content:["Oatmeal with Banana and Honey","Boiled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Chicken Wrap","Mixed Salad","Fruit"]},{time:"Dinner",content:["Pasta with Tomato Sauce","Salad","Garlic Bread"]}]},{day:"Thursday",meals:[{time:"Breakfast",content:["Pancakes with Syrup","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Turkey Sandwich","Chips","Apple"]},{time:"Dinner",content:["Chicken Stir Fry","Brown Rice"]}]},{day:"Friday",meals:[{time:"Breakfast",content:["French Toast","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Pasta Salad","Bread Roll","Orange"]},{time:"Dinner",content:["Pizza","Side Salad"]}]},{day:"Saturday",meals:[{time:"Breakfast",content:["Cereal with Milk","Fruit Salad","Greek yogurt with granola"]},{time:"Lunch",content:["BLT Sandwich","Crisps","Banana"]},{time:"Dinner",content:["BBQ Ribs","Corn on the Cob","Baked Beans"]}]},{day:"Sunday",meals:[{time:"Breakfast",content:["Bagel with Cream Cheese","Scrambled eggs","Greek yogurt with granola"]},{time:"Lunch",content:["Roast Beef Sandwich","Potato Salad","Pickle"]},{time:"Dinner",content:["Roast Chicken","Roasted Potatoes","Steamed Vegetables"]}]}]},3583:function(e,a,l){"use strict";l.d(a,{M8:function(){return r},fK:function(){return t},g0:function(){return s}});var n=l(6310);let t=n.Ry().shape({Login:n.Z_().required().email(),Password:n.Z_().required().min(8).matches(/^(?=.*[A-Z])(?=.*\d)/,"Password must contain at least one uppercase letter and one number"),Password2:n.Z_().required().oneOf([n.iH("Password"),null],"Passwords must match")}),r=n.Ry().shape({Login:n.Z_().required().email(),Password:n.Z_().required().min(8).matches(/^(?=.*[A-Z])(?=.*\d)/,"Password must contain at least one uppercase letter and one number")}),s=n.Ry().shape({Login:n.Z_().required().email()})}},function(e){e.O(0,[662,873,966,536,216,774,888,179],function(){return e(e.s=876)}),_N_E=e.O()}]);
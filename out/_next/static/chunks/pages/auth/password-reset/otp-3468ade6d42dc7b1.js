(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[587],{9231:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/password-reset/otp",function(){return t(931)}])},9592:function(e,n,t){"use strict";var s=t(5893);t(7294);var r=t(5675),i=t.n(r),a=t(4184),l=t.n(a),c=t(1664),o=t.n(c);n.Z=e=>{let{handleBack:n,fix:t,linkTo:r}=e,a=l()({"chevron-back":!0,"chevron-back__fix":t});return(0,s.jsx)(o(),{href:r,children:(0,s.jsx)("div",{className:a,onClick:n,children:(0,s.jsx)(i(),{alt:"chevron-back",src:"/chevron-back.svg",width:"16",height:"32"})})})}},7172:function(e,n,t){"use strict";var s=t(5893);t(7294);var r=t(5675),i=t.n(r),a=t(4184),l=t.n(a);n.Z=e=>{let{dir:n,basket:t}=e,r=l()({"icon-round":!0,"icon-round__directions":n});return(0,s.jsx)("div",{className:r,children:(0,s.jsx)(i(),{alt:"logo-round",src:t?"/basket-icon.svg":"/registration-icon.svg",width:t?60:68,height:t?49:65})})}},2063:function(e,n,t){"use strict";t.d(n,{Z:function(){return d}});var s=t(5893),r=t(7294),i=t(1248),a=t(6890),l=t(1163),c=t(9432);t(160);let o=0;var u=()=>{let[e,n]=(0,r.useState)(Array(6).fill("")),[t,u]=(0,r.useState)(0),[d,h]=(0,r.useState)(!1),[p]=(0,a.uY)(),m=(0,r.useRef)(),f=(0,i.v9)(e=>e.user),x=new Date(f.otpExpires),[j]=(0,a.S3)(),v=(0,l.useRouter)(),_=async n=>{if(n.preventDefault(),e.every(e=>""!==e)){console.log("All inputs are populated, submit the form");try{let n=await p({email:f.email,otp:e.join("")}).unwrap();console.log(n),v.push("/auth")}catch(e){console.error("OTP failed:",e)}}else console.log("Not all inputs are populated, show an error"),h(!0)},N=async()=>{try{let e=await j({email:f.email}).unwrap();console.log("A new OTP has been sent:",e)}catch(e){console.error("Failed to resend OTP:",e)}},b=t=>{let s=t.target.value,r=[...e];r[o]=s.substring(s.length-1),s?u(o+1):u(o-1),n(r)},w=(e,n)=>{o=n,"Backspace"===e.key&&u(o-1)};return(0,r.useEffect)(()=>{m.current&&m.current.focus()},[t]),(0,s.jsxs)("form",{onSubmit:_,children:[(0,s.jsxs)("div",{className:"otp-field",children:[(0,s.jsxs)("div",{className:"otp-container ",children:[(0,s.jsx)("label",{htmlFor:"otp-input",children:"Verificaition Code:"}),(0,s.jsxs)("div",{className:"cell-container",children:[e.map((n,r)=>(0,s.jsx)("div",{children:(0,s.jsx)("input",{onKeyDown:e=>w(e,r),value:e[r],ref:r===t?m:null,onChange:b,type:"number",className:"otp-input label-text"})},r)),!e.every(e=>""!==e)&&d&&(0,s.jsx)("span",{className:"info-input__error",children:"Fill out all the fields!"})]})]}),(0,s.jsx)("div",{className:"nocode-link",children:(0,s.jsx)(c.ZP,{date:x,renderer:e=>{let{hours:n,minutes:t,seconds:r,completed:i}=e;return!i&&(r||t)?(0,s.jsxs)("p",{className:"otp-field__timer",children:["Time remaining",(0,s.jsxs)("span",{className:"otp-field__timer--time",children:[t,":"+r.toString().padStart(2,"0")]})]}):(0,s.jsx)("button",{type:"button",className:"otp-field__timer--button",onClick:N,children:(0,s.jsx)("p",{className:"otp-field__timer",children:"Resend Code"})})}})})]}),(0,s.jsx)("div",{className:"btn-container",children:(0,s.jsx)("button",{className:"btn btn__white",type:"submit",children:"Submit"})})]})},d=()=>(0,s.jsxs)("div",{className:"login-container",children:[(0,s.jsxs)("div",{className:"text-container",children:[(0,s.jsx)("h1",{children:"Verification"}),(0,s.jsx)("h4",{children:"Enter your code from E-Mail"})]}),(0,s.jsx)(u,{})]})},931:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return l}});var s=t(5893),r=t(2063),i=t(7172),a=t(9592);function l(){return(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"screen-container",children:[(0,s.jsx)(i.Z,{}),(0,s.jsx)(a.Z,{linkTo:"/auth/password-reset"}),(0,s.jsx)(r.Z,{})]})})}}},function(e){e.O(0,[873,966,432,774,888,179],function(){return e(e.s=9231)}),_N_E=e.O()}]);
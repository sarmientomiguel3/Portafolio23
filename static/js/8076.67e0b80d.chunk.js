"use strict";(self.webpackChunkMiguel_Sarmiento_FullStack=self.webpackChunkMiguel_Sarmiento_FullStack||[]).push([[8076],{48076:function(e,r,o){o.r(r),o.d(r,{default:function(){return k}});var s=o(65964),i=o(2135),n=o(61113),d=o(90891),a=o(48175),t=o(8730),c=o(74165),l=o(15861),u=o(29439),m=o(47313),x=o(3463),p=o(58467),f=o(75627),h=o(62563),w=o(35898),Z=o(15480),v=o(41727),j=o(47131),b=o(32703),g=o(41034),q=o(50734),y=o(46417);function P(){var e=(0,p.s0)(),r=(0,g.Ds)().enqueueSnackbar,o=(0,m.useState)(!1),s=(0,u.Z)(o,2),i=s[0],n=s[1],d="undefined"!==typeof window?sessionStorage.getItem("email-recovery"):"",P=x.Ry().shape({code1:x.Z_().required("Code is required"),code2:x.Z_().required("Code is required"),code3:x.Z_().required("Code is required"),code4:x.Z_().required("Code is required"),code5:x.Z_().required("Code is required"),code6:x.Z_().required("Code is required"),email:x.Z_().required("Email is required").email("Email must be a valid email address"),password:x.Z_().min(6,"Password must be at least 6 characters").required("Password is required"),confirmPassword:x.Z_().required("Confirm password is required").oneOf([x.iH("password"),null],"Passwords must match")}),C={code1:"",code2:"",code3:"",code4:"",code5:"",code6:"",email:d||"",password:"",confirmPassword:""},k=(0,f.cI)({mode:"onChange",resolver:(0,h.X)(P),defaultValues:C}),_=k.handleSubmit,S=k.formState,I=S.isSubmitting,E=S.errors,A=function(){var o=(0,l.Z)((0,c.Z)().mark((function o(s){return(0,c.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,o.next=3,new Promise((function(e){return setTimeout(e,500)}));case 3:console.log("DATA:",{email:s.email,code:"".concat(s.code1).concat(s.code2).concat(s.code3).concat(s.code4).concat(s.code5).concat(s.code6),password:s.password}),sessionStorage.removeItem("email-recovery"),r("Change password success!"),e(a.vB.root),o.next=12;break;case 9:o.prev=9,o.t0=o.catch(0),console.error(o.t0);case 12:case"end":return o.stop()}}),o,null,[[0,9]])})));return function(e){return o.apply(this,arguments)}}();return(0,y.jsx)(q.ZP,{methods:k,onSubmit:_(A),children:(0,y.jsxs)(w.Z,{spacing:3,children:[(0,y.jsx)(q.au,{name:"email",label:"Email",disabled:!!d,InputLabelProps:{shrink:!0}}),(0,y.jsx)(q.Iy,{keyName:"code",inputs:["code1","code2","code3","code4","code5","code6"]}),(!!E.code1||!!E.code2||!!E.code3||!!E.code4||!!E.code5||!!E.code6)&&(0,y.jsx)(Z.Z,{error:!0,sx:{px:2},children:"Code is required"}),(0,y.jsx)(q.au,{name:"password",label:"Password",type:i?"text":"password",InputProps:{endAdornment:(0,y.jsx)(v.Z,{position:"end",children:(0,y.jsx)(j.Z,{onClick:function(){return n(!i)},edge:"end",children:(0,y.jsx)(t.Z,{icon:i?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,y.jsx)(q.au,{name:"confirmPassword",label:"Confirm New Password",type:i?"text":"password",InputProps:{endAdornment:(0,y.jsx)(v.Z,{position:"end",children:(0,y.jsx)(j.Z,{onClick:function(){return n(!i)},edge:"end",children:(0,y.jsx)(t.Z,{icon:i?"eva:eye-fill":"eva:eye-off-fill"})})})}}),(0,y.jsx)(b.Z,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:I,sx:{mt:3},children:"Update Password"})]})})}var C=o(42123);function k(){return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(s.ql,{children:(0,y.jsx)("title",{children:" New Password | Minimal UI"})}),(0,y.jsx)(C.Jg,{sx:{mb:5,height:96}}),(0,y.jsx)(n.Z,{variant:"h3",paragraph:!0,children:"Request sent successfully!"}),(0,y.jsxs)(n.Z,{sx:{color:"text.secondary",mb:5},children:["We've sent a 6-digit confirmation email to your email.",(0,y.jsx)("br",{}),"Please enter the code in below box to verify your email."]}),(0,y.jsx)(P,{}),(0,y.jsxs)(n.Z,{variant:"body2",sx:{my:3},children:["Don\u2019t have a code? \xa0",(0,y.jsx)(d.Z,{variant:"subtitle2",children:"Resend code"})]}),(0,y.jsxs)(d.Z,{component:i.rU,to:a.EE.login,color:"inherit",variant:"subtitle2",sx:{mx:"auto",alignItems:"center",display:"inline-flex"},children:[(0,y.jsx)(t.Z,{icon:"eva:chevron-left-fill",width:16}),"Return to sign in"]})]})}}}]);
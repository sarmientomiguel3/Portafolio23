"use strict";(self.webpackChunkMiguel_Sarmiento_FullStack=self.webpackChunkMiguel_Sarmiento_FullStack||[]).push([[6794],{3404:function(e,t,r){r.d(t,{Z:function(){return z}});var a=r(93433),o=r(29439),n=r(4942),i=r(87462),l=r(63366),c=r(47313),s=(r(20478),r(83061)),d=r(21921),u=r(17592),p=r(77342),v=r(61113),m=r(17551),f=r(54750),Z=r(46417),b=(0,f.Z)((0,Z.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),h=r(38743),x=(0,u.ZP)(h.Z)((function(e){var t=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(t.spacing(1)," * 0.5)"),marginRight:"calc(".concat(t.spacing(1)," * 0.5)")},"light"===t.palette.mode?{backgroundColor:t.palette.grey[100],color:t.palette.grey[700]}:{backgroundColor:t.palette.grey[700],color:t.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===t.palette.mode?{backgroundColor:t.palette.grey[200]}:{backgroundColor:t.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:t.shadows[0]},"light"===t.palette.mode?{backgroundColor:(0,m._4)(t.palette.grey[200],.12)}:{backgroundColor:(0,m._4)(t.palette.grey[600],.12)})})})),S=(0,u.ZP)(b)({width:24,height:16});var g=function(e){var t=e;return(0,Z.jsx)("li",{children:(0,Z.jsx)(x,(0,i.Z)({focusRipple:!0},e,{ownerState:t,children:(0,Z.jsx)(S,{ownerState:t})}))})},y=r(77430),L=r(32298);function C(e){return(0,L.Z)("MuiBreadcrumbs",e)}var M=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),w=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],R=(0,u.ZP)(v.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,t){return[(0,n.Z)({},"& .".concat(M.li),t.li),t.root]}})({}),N=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,t){return t.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),j=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,t){return t.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function P(e,t,r,a){return e.reduce((function(o,n,i){return i<e.length-1?o=o.concat(n,(0,Z.jsx)(j,{"aria-hidden":!0,className:t,ownerState:a,children:r},"separator-".concat(i))):o.push(n),o}),[])}var z=c.forwardRef((function(e,t){var r=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),n=r.children,u=r.className,v=r.component,m=void 0===v?"nav":v,f=r.expandText,b=void 0===f?"Show path":f,h=r.itemsAfterCollapse,x=void 0===h?1:h,S=r.itemsBeforeCollapse,y=void 0===S?1:S,L=r.maxItems,M=void 0===L?8:L,j=r.separator,z=void 0===j?"/":j,k=(0,l.Z)(r,w),I=c.useState(!1),T=(0,o.Z)(I,2),B=T[0],A=T[1],H=(0,i.Z)({},r,{component:m,expanded:B,expandText:b,itemsAfterCollapse:x,itemsBeforeCollapse:y,maxItems:M,separator:z}),W=function(e){var t=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},C,t)}(H),_=c.useRef(null),F=c.Children.toArray(n).filter((function(e){return c.isValidElement(e)})).map((function(e,t){return(0,Z.jsx)("li",{className:W.li,children:e},"child-".concat(t))}));return(0,Z.jsx)(R,(0,i.Z)({ref:t,component:m,color:"text.secondary",className:(0,s.Z)(W.root,u),ownerState:H},k,{children:(0,Z.jsx)(N,{className:W.ol,ref:_,ownerState:H,children:P(B||M&&F.length<=M?F:function(e){return y+x>=e.length?e:[].concat((0,a.Z)(e.slice(0,y)),[(0,Z.jsx)(g,{"aria-label":b,onClick:function(){A(!0);var e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,a.Z)(e.slice(e.length-x,e.length)))}(F),W.separator,z,H)})}))}))},54641:function(e,t,r){r.d(t,{Z:function(){return y}});var a=r(4942),o=r(63366),n=r(87462),i=r(47313),l=r(83061),c=r(21921),s=r(61113),d=r(77342),u=r(17592),p=r(77430),v=r(32298);function m(e){return(0,v.Z)("MuiCardHeader",e)}var f=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),Z=r(46417),b=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],h=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var r;return(0,n.Z)((r={},(0,a.Z)(r,"& .".concat(f.title),t.title),(0,a.Z)(r,"& .".concat(f.subheader),t.subheader),r),t.root)}})({display:"flex",alignItems:"center",padding:16}),x=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),S=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiCardHeader"}),a=r.action,i=r.avatar,u=r.className,p=r.component,v=void 0===p?"div":p,f=r.disableTypography,y=void 0!==f&&f,L=r.subheader,C=r.subheaderTypographyProps,M=r.title,w=r.titleTypographyProps,R=(0,o.Z)(r,b),N=(0,n.Z)({},r,{component:v,disableTypography:y}),j=function(e){var t=e.classes;return(0,c.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},m,t)}(N),P=M;null==P||P.type===s.Z||y||(P=(0,Z.jsx)(s.Z,(0,n.Z)({variant:i?"body2":"h5",className:j.title,component:"span",display:"block"},w,{children:P})));var z=L;return null==z||z.type===s.Z||y||(z=(0,Z.jsx)(s.Z,(0,n.Z)({variant:i?"body2":"body1",className:j.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:z}))),(0,Z.jsxs)(h,(0,n.Z)({className:(0,l.Z)(j.root,u),as:v,ref:t,ownerState:N},R,{children:[i&&(0,Z.jsx)(x,{className:j.avatar,ownerState:N,children:i}),(0,Z.jsxs)(g,{className:j.content,ownerState:N,children:[P,z]}),a&&(0,Z.jsx)(S,{className:j.action,ownerState:N,children:a})]}))}))},78490:function(e,t,r){r.d(t,{Z:function(){return h}});var a=r(63366),o=r(87462),n=r(47313),i=r(83061),l=r(21921),c=r(23054),s=r(70984),d=r(77342),u=r(17592),p=r(77430),v=r(32298);function m(e){return(0,v.Z)("MuiStep",e)}(0,p.Z)("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);var f=r(46417),Z=["active","children","className","component","completed","disabled","expanded","index","last"],b=(0,u.ZP)("div",{name:"MuiStep",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({},"horizontal"===t.orientation&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})})),h=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStep"}),u=r.active,p=r.children,v=r.className,h=r.component,x=void 0===h?"div":h,S=r.completed,g=r.disabled,y=r.expanded,L=void 0!==y&&y,C=r.index,M=r.last,w=(0,a.Z)(r,Z),R=n.useContext(c.Z),N=R.activeStep,j=R.connector,P=R.alternativeLabel,z=R.orientation,k=R.nonLinear,I=void 0!==u&&u,T=void 0!==S&&S,B=void 0!==g&&g;N===C?I=void 0===u||u:!k&&N>C?T=void 0===S||S:!k&&N<C&&(B=void 0===g||g);var A=n.useMemo((function(){return{index:C,last:M,expanded:L,icon:C+1,active:I,completed:T,disabled:B}}),[C,M,L,I,T,B]),H=(0,o.Z)({},r,{active:I,orientation:z,alternativeLabel:P,completed:T,disabled:B,expanded:L,component:x}),W=function(e){var t=e.classes,r={root:["root",e.orientation,e.alternativeLabel&&"alternativeLabel",e.completed&&"completed"]};return(0,l.Z)(r,m,t)}(H),_=(0,f.jsxs)(b,(0,o.Z)({as:x,className:(0,i.Z)(W.root,v),ref:t,ownerState:H},w,{children:[j&&P&&0!==C?j:null,p]}));return(0,f.jsx)(s.Z.Provider,{value:A,children:j&&!P&&0!==C?(0,f.jsxs)(n.Fragment,{children:[j,_]}):_})}))},70984:function(e,t,r){var a=r(47313).createContext({});t.Z=a},80123:function(e,t,r){var a=r(63366),o=r(87462),n=r(47313),i=r(83061),l=r(21921),c=r(91615),s=r(17592),d=r(77342),u=r(23054),p=r(70984),v=r(29701),m=r(46417),f=["className"],Z=(0,s.ZP)("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel,r.completed&&t.completed]}})((function(e){var t=e.ownerState;return(0,o.Z)({flex:"1 1 auto"},"vertical"===t.orientation&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})})),b=(0,s.ZP)("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:function(e,t){var r=e.ownerState;return[t.line,t["line".concat((0,c.Z)(r.orientation))]]}})((function(e){var t=e.ownerState,r=e.theme,a="light"===r.palette.mode?r.palette.grey[400]:r.palette.grey[600];return(0,o.Z)({display:"block",borderColor:r.vars?r.vars.palette.StepConnector.border:a},"horizontal"===t.orientation&&{borderTopStyle:"solid",borderTopWidth:1},"vertical"===t.orientation&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})})),h=n.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStepConnector"}),s=r.className,h=(0,a.Z)(r,f),x=n.useContext(u.Z),S=x.alternativeLabel,g=x.orientation,y=void 0===g?"horizontal":g,L=n.useContext(p.Z),C=L.active,M=L.disabled,w=L.completed,R=(0,o.Z)({},r,{alternativeLabel:S,orientation:y,active:C,completed:w,disabled:M}),N=function(e){var t=e.classes,r=e.orientation,a={root:["root",r,e.alternativeLabel&&"alternativeLabel",e.active&&"active",e.completed&&"completed",e.disabled&&"disabled"],line:["line","line".concat((0,c.Z)(r))]};return(0,l.Z)(a,v.M,t)}(R);return(0,m.jsx)(Z,(0,o.Z)({className:(0,i.Z)(N.root,s),ref:t,ownerState:R},h,{children:(0,m.jsx)(b,{className:N.line,ownerState:R})}))}));t.Z=h},29701:function(e,t,r){r.d(t,{M:function(){return n}});var a=r(77430),o=r(32298);function n(e){return(0,o.Z)("MuiStepConnector",e)}var i=(0,a.Z)("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);t.Z=i},80315:function(e,t,r){r.d(t,{Z:function(){return B}});var a=r(4942),o=r(63366),n=r(87462),i=r(47313),l=r(83061),c=r(21921),s=r(17592),d=r(77342),u=r(54750),p=r(46417),v=(0,u.Z)((0,p.jsx)("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),m=(0,u.Z)((0,p.jsx)("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning"),f=r(90210),Z=r(77430),b=r(32298);function h(e){return(0,b.Z)("MuiStepIcon",e)}var x,S=(0,Z.Z)("MuiStepIcon",["root","active","completed","error","text"]),g=["active","className","completed","error","icon"],y=(0,s.ZP)(f.Z,{name:"MuiStepIcon",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(e){var t,r=e.theme;return t={display:"block",transition:r.transitions.create("color",{duration:r.transitions.duration.shortest}),color:(r.vars||r).palette.text.disabled},(0,a.Z)(t,"&.".concat(S.completed),{color:(r.vars||r).palette.primary.main}),(0,a.Z)(t,"&.".concat(S.active),{color:(r.vars||r).palette.primary.main}),(0,a.Z)(t,"&.".concat(S.error),{color:(r.vars||r).palette.error.main}),t})),L=(0,s.ZP)("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:function(e,t){return t.text}})((function(e){var t=e.theme;return{fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily}})),C=i.forwardRef((function(e,t){var r=(0,d.Z)({props:e,name:"MuiStepIcon"}),a=r.active,i=void 0!==a&&a,s=r.className,u=r.completed,f=void 0!==u&&u,Z=r.error,b=void 0!==Z&&Z,S=r.icon,C=(0,o.Z)(r,g),M=(0,n.Z)({},r,{active:i,completed:f,error:b}),w=function(e){var t=e.classes,r={root:["root",e.active&&"active",e.completed&&"completed",e.error&&"error"],text:["text"]};return(0,c.Z)(r,h,t)}(M);if("number"===typeof S||"string"===typeof S){var R=(0,l.Z)(s,w.root);return b?(0,p.jsx)(y,(0,n.Z)({as:m,className:R,ref:t,ownerState:M},C)):f?(0,p.jsx)(y,(0,n.Z)({as:v,className:R,ref:t,ownerState:M},C)):(0,p.jsxs)(y,(0,n.Z)({className:R,ref:t,ownerState:M},C,{children:[x||(x=(0,p.jsx)("circle",{cx:"12",cy:"12",r:"12"})),(0,p.jsx)(L,{className:w.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:M,children:S})]}))}return S})),M=r(23054),w=r(70984);function R(e){return(0,b.Z)("MuiStepLabel",e)}var N=(0,Z.Z)("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),j=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],P=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation]]}})((function(e){var t,r=e.ownerState;return(0,n.Z)((t={display:"flex",alignItems:"center"},(0,a.Z)(t,"&.".concat(N.alternativeLabel),{flexDirection:"column"}),(0,a.Z)(t,"&.".concat(N.disabled),{cursor:"default"}),t),"vertical"===r.orientation&&{textAlign:"left",padding:"8px 0"})})),z=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:function(e,t){return t.label}})((function(e){var t,r=e.theme;return(0,n.Z)({},r.typography.body2,(t={display:"block",transition:r.transitions.create("color",{duration:r.transitions.duration.shortest})},(0,a.Z)(t,"&.".concat(N.active),{color:(r.vars||r).palette.text.primary,fontWeight:500}),(0,a.Z)(t,"&.".concat(N.completed),{color:(r.vars||r).palette.text.primary,fontWeight:500}),(0,a.Z)(t,"&.".concat(N.alternativeLabel),{marginTop:16}),(0,a.Z)(t,"&.".concat(N.error),{color:(r.vars||r).palette.error.main}),t))})),k=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:function(e,t){return t.iconContainer}})((function(){return(0,a.Z)({flexShrink:0,display:"flex",paddingRight:8},"&.".concat(N.alternativeLabel),{paddingRight:0})})),I=(0,s.ZP)("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:function(e,t){return t.labelContainer}})((function(e){var t=e.theme;return(0,a.Z)({width:"100%",color:(t.vars||t).palette.text.secondary},"&.".concat(N.alternativeLabel),{textAlign:"center"})})),T=i.forwardRef((function(e,t){var r,a=(0,d.Z)({props:e,name:"MuiStepLabel"}),s=a.children,u=a.className,v=a.componentsProps,m=void 0===v?{}:v,f=a.error,Z=void 0!==f&&f,b=a.icon,h=a.optional,x=a.slotProps,S=void 0===x?{}:x,g=a.StepIconComponent,y=a.StepIconProps,L=(0,o.Z)(a,j),N=i.useContext(M.Z),T=N.alternativeLabel,B=N.orientation,A=i.useContext(w.Z),H=A.active,W=A.disabled,_=A.completed,F=A.icon,D=b||F,E=g;D&&!E&&(E=C);var V=(0,n.Z)({},a,{active:H,alternativeLabel:T,completed:_,disabled:W,error:Z,orientation:B}),q=function(e){var t=e.classes,r=e.orientation,a=e.active,o=e.completed,n=e.error,i=e.disabled,l=e.alternativeLabel,s={root:["root",r,n&&"error",i&&"disabled",l&&"alternativeLabel"],label:["label",a&&"active",o&&"completed",n&&"error",i&&"disabled",l&&"alternativeLabel"],iconContainer:["iconContainer",a&&"active",o&&"completed",n&&"error",i&&"disabled",l&&"alternativeLabel"],labelContainer:["labelContainer",l&&"alternativeLabel"]};return(0,c.Z)(s,R,t)}(V),O=null!=(r=S.label)?r:m.label;return(0,p.jsxs)(P,(0,n.Z)({className:(0,l.Z)(q.root,u),ref:t,ownerState:V},L,{children:[D||E?(0,p.jsx)(k,{className:q.iconContainer,ownerState:V,children:(0,p.jsx)(E,(0,n.Z)({completed:_,active:H,error:Z,icon:D},y))}):null,(0,p.jsxs)(I,{className:q.labelContainer,ownerState:V,children:[s?(0,p.jsx)(z,(0,n.Z)({ownerState:V},O,{className:(0,l.Z)(q.label,null==O?void 0:O.className),children:s})):null,h]})]}))}));T.muiName="StepLabel";var B=T},54982:function(e,t,r){r.d(t,{Z:function(){return x}});var a=r(63366),o=r(87462),n=r(47313),i=r(83061),l=r(21921),c=r(77342),s=r(17592),d=r(77430),u=r(32298);function p(e){return(0,u.Z)("MuiStepper",e)}(0,d.Z)("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);var v=r(80123),m=r(23054),f=r(46417),Z=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],b=(0,s.ZP)("div",{name:"MuiStepper",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.orientation],r.alternativeLabel&&t.alternativeLabel]}})((function(e){var t=e.ownerState;return(0,o.Z)({display:"flex"},"horizontal"===t.orientation&&{flexDirection:"row",alignItems:"center"},"vertical"===t.orientation&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})})),h=(0,f.jsx)(v.Z,{}),x=n.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiStepper"}),s=r.activeStep,d=void 0===s?0:s,u=r.alternativeLabel,v=void 0!==u&&u,x=r.children,S=r.className,g=r.component,y=void 0===g?"div":g,L=r.connector,C=void 0===L?h:L,M=r.nonLinear,w=void 0!==M&&M,R=r.orientation,N=void 0===R?"horizontal":R,j=(0,a.Z)(r,Z),P=(0,o.Z)({},r,{alternativeLabel:v,orientation:N,component:y}),z=function(e){var t=e.orientation,r=e.alternativeLabel,a=e.classes,o={root:["root",t,r&&"alternativeLabel"]};return(0,l.Z)(o,p,a)}(P),k=n.Children.toArray(x).filter(Boolean),I=k.map((function(e,t){return n.cloneElement(e,(0,o.Z)({index:t,last:t+1===k.length},e.props))})),T=n.useMemo((function(){return{activeStep:d,alternativeLabel:v,connector:C,nonLinear:w,orientation:N}}),[d,v,C,w,N]);return(0,f.jsx)(m.Z.Provider,{value:T,children:(0,f.jsx)(b,(0,o.Z)({as:y,ownerState:P,className:(0,i.Z)(z.root,S),ref:t},j,{children:I}))})}))},23054:function(e,t,r){var a=r(47313).createContext({});t.Z=a}}]);
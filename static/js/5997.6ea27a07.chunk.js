"use strict";(self.webpackChunkMiguel_Sarmiento_FullStack=self.webpackChunkMiguel_Sarmiento_FullStack||[]).push([[5997],{38875:function(e,r,t){t.d(r,{Z:function(){return h}});var n=t(1413),a=t(45987),o=t(57829),i=t(35898),s=t(61113),l=t(3404),c=t(90891),d=t(2135),u=t(46417);function p(e){var r=e.link,t=e.activeLast,a=e.disabled,i=r.name,s=r.href,l=r.icon,p=(0,n.Z)({typography:"body2",alignItems:"center",color:"text.primary",display:"inline-flex"},a&&!t&&{cursor:"default",pointerEvents:"none",color:"text.disabled"}),m=(0,u.jsxs)(u.Fragment,{children:[l&&(0,u.jsx)(o.Z,{component:"span",sx:{mr:1,display:"inherit","& svg":{width:20,height:20}},children:l}),i]});return s?(0,u.jsx)(c.Z,{component:d.rU,to:s,sx:p,children:m}):(0,u.jsxs)(o.Z,{sx:p,children:[" ",m," "]})}var m=["links","action","heading","moreLink","activeLast","sx"];function h(e){var r=e.links,t=e.action,d=e.heading,h=e.moreLink,f=e.activeLast,Z=e.sx,v=(0,a.Z)(e,m),g=r[r.length-1].name;return(0,u.jsxs)(o.Z,{sx:(0,n.Z)({mb:5},Z),children:[(0,u.jsxs)(i.Z,{direction:"row",alignItems:"center",children:[(0,u.jsxs)(o.Z,{sx:{flexGrow:1},children:[d&&(0,u.jsx)(s.Z,{variant:"h4",gutterBottom:!0,children:d}),!!r.length&&(0,u.jsx)(l.Z,(0,n.Z)((0,n.Z)({separator:(0,u.jsx)(x,{})},v),{},{children:r.map((function(e){return(0,u.jsx)(p,{link:e,activeLast:f,disabled:e.name===g},e.name||"")}))}))]}),t&&(0,u.jsxs)(o.Z,{sx:{flexShrink:0},children:[" ",t," "]})]}),!!h&&(0,u.jsx)(o.Z,{sx:{mt:2},children:h.map((function(e){return(0,u.jsx)(c.Z,{noWrap:!0,href:e,variant:"body2",target:"_blank",rel:"noopener",sx:{display:"table"},children:e},e)}))})]})}function x(){return(0,u.jsx)(o.Z,{component:"span",sx:{width:4,height:4,borderRadius:"50%",bgcolor:"text.disabled"}})}},35997:function(e,r,t){t.r(r),t.d(r,{default:function(){return y}});var n=t(93433),a=t(29439),o=t(47313),i=t(65964),s=t(57829),l=t(70178),c=t(35898),d=t(73428),u=t(54641),p=t(83929),m=t(67426),h=t(93405),x=t(61113),f=t(48175),Z=t(76221),v=t(8730),g=t(38875),j=t(38789),b=t(46417);function y(){var e=(0,o.useState)(!1),r=(0,a.Z)(e,2),t=r[0],y=r[1],C=(0,o.useState)([]),w=(0,a.Z)(C,2),R=w[0],k=w[1],S=(0,o.useState)(null),M=(0,a.Z)(S,2),N=M[0],U=M[1],L=(0,o.useState)(null),P=(0,a.Z)(L,2),B=P[0],T=P[1],A=(0,o.useCallback)((function(e){var r=e[0];r&&U(Object.assign(r,{preview:URL.createObjectURL(r)}))}),[]),I=(0,o.useCallback)((function(e){var r=e[0];r&&T(Object.assign(r,{preview:URL.createObjectURL(r)}))}),[]),O=(0,o.useCallback)((function(e){k([].concat((0,n.Z)(R),(0,n.Z)(e.map((function(e){return Object.assign(e,{preview:URL.createObjectURL(e)})})))))}),[R]);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(i.ql,{children:(0,b.jsx)("title",{children:" Extra Components: Upload | Minimal UI"})}),(0,b.jsx)(s.Z,{sx:{pt:6,pb:1,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:(0,b.jsx)(l.Z,{children:(0,b.jsx)(g.Z,{heading:"Upload",links:[{name:"Components",href:f.ko.components},{name:"Upload"}],moreLink:["https://react-dropzone.js.org/#section-basic-example"]})})}),(0,b.jsx)(l.Z,{sx:{my:10},children:(0,b.jsxs)(c.Z,{spacing:5,children:[(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Multi File",action:(0,b.jsx)(p.Z,{control:(0,b.jsx)(m.Z,{checked:t,onChange:function(e){return y(e.target.checked)}}),label:"Show Thumbnail"})}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.gq,{multiple:!0,thumbnail:t,files:R,onDrop:O,onRemove:function(e){var r=R.filter((function(r){return r!==e}));k(r)},onRemoveAll:function(){k([])},onUpload:function(){return console.log("ON UPLOAD")}})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Single File"}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.gq,{file:N,onDrop:A,onDelete:function(){return U(null)}})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Avatar"}),(0,b.jsx)(h.Z,{children:(0,b.jsx)(j.ab,{file:B,onDrop:I,helperText:(0,b.jsxs)(x.Z,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",(0,b.jsx)("br",{})," max size of ",(0,Z.oe)(3145728)]})})})]}),(0,b.jsxs)(d.Z,{children:[(0,b.jsx)(u.Z,{title:"Upload Box"}),(0,b.jsx)(h.Z,{children:(0,b.jsxs)(c.Z,{direction:"row",spacing:2,children:[(0,b.jsx)(j.un,{}),(0,b.jsx)(j.un,{placeholder:(0,b.jsxs)(c.Z,{spacing:.5,alignItems:"center",children:[(0,b.jsx)(v.Z,{icon:"eva:cloud-upload-fill",width:40}),(0,b.jsx)(x.Z,{variant:"body2",children:"Upload file"})]}),sx:{flexGrow:1,height:"auto",py:2.5,mb:3}})]})})]})]})})]})}},3404:function(e,r,t){t.d(r,{Z:function(){return L}});var n=t(93433),a=t(29439),o=t(4942),i=t(87462),s=t(63366),l=t(47313),c=(t(20478),t(83061)),d=t(21921),u=t(17592),p=t(77342),m=t(61113),h=t(17551),x=t(54750),f=t(46417),Z=(0,x.Z)((0,f.jsx)("path",{d:"M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}),"MoreHoriz"),v=t(38743),g=(0,u.ZP)(v.Z)((function(e){var r=e.theme;return(0,i.Z)({display:"flex",marginLeft:"calc(".concat(r.spacing(1)," * 0.5)"),marginRight:"calc(".concat(r.spacing(1)," * 0.5)")},"light"===r.palette.mode?{backgroundColor:r.palette.grey[100],color:r.palette.grey[700]}:{backgroundColor:r.palette.grey[700],color:r.palette.grey[100]},{borderRadius:2,"&:hover, &:focus":(0,i.Z)({},"light"===r.palette.mode?{backgroundColor:r.palette.grey[200]}:{backgroundColor:r.palette.grey[600]}),"&:active":(0,i.Z)({boxShadow:r.shadows[0]},"light"===r.palette.mode?{backgroundColor:(0,h._4)(r.palette.grey[200],.12)}:{backgroundColor:(0,h._4)(r.palette.grey[600],.12)})})})),j=(0,u.ZP)(Z)({width:24,height:16});var b=function(e){var r=e;return(0,f.jsx)("li",{children:(0,f.jsx)(g,(0,i.Z)({focusRipple:!0},e,{ownerState:r,children:(0,f.jsx)(j,{ownerState:r})}))})},y=t(77430),C=t(32298);function w(e){return(0,C.Z)("MuiBreadcrumbs",e)}var R=(0,y.Z)("MuiBreadcrumbs",["root","ol","li","separator"]),k=["children","className","component","expandText","itemsAfterCollapse","itemsBeforeCollapse","maxItems","separator"],S=(0,u.ZP)(m.Z,{name:"MuiBreadcrumbs",slot:"Root",overridesResolver:function(e,r){return[(0,o.Z)({},"& .".concat(R.li),r.li),r.root]}})({}),M=(0,u.ZP)("ol",{name:"MuiBreadcrumbs",slot:"Ol",overridesResolver:function(e,r){return r.ol}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"}),N=(0,u.ZP)("li",{name:"MuiBreadcrumbs",slot:"Separator",overridesResolver:function(e,r){return r.separator}})({display:"flex",userSelect:"none",marginLeft:8,marginRight:8});function U(e,r,t,n){return e.reduce((function(a,o,i){return i<e.length-1?a=a.concat(o,(0,f.jsx)(N,{"aria-hidden":!0,className:r,ownerState:n,children:t},"separator-".concat(i))):a.push(o),a}),[])}var L=l.forwardRef((function(e,r){var t=(0,p.Z)({props:e,name:"MuiBreadcrumbs"}),o=t.children,u=t.className,m=t.component,h=void 0===m?"nav":m,x=t.expandText,Z=void 0===x?"Show path":x,v=t.itemsAfterCollapse,g=void 0===v?1:v,j=t.itemsBeforeCollapse,y=void 0===j?1:j,C=t.maxItems,R=void 0===C?8:C,N=t.separator,L=void 0===N?"/":N,P=(0,s.Z)(t,k),B=l.useState(!1),T=(0,a.Z)(B,2),A=T[0],I=T[1],O=(0,i.Z)({},t,{component:h,expanded:A,expandText:Z,itemsAfterCollapse:g,itemsBeforeCollapse:y,maxItems:R,separator:L}),H=function(e){var r=e.classes;return(0,d.Z)({root:["root"],li:["li"],ol:["ol"],separator:["separator"]},w,r)}(O),_=l.useRef(null),z=l.Children.toArray(o).filter((function(e){return l.isValidElement(e)})).map((function(e,r){return(0,f.jsx)("li",{className:H.li,children:e},"child-".concat(r))}));return(0,f.jsx)(S,(0,i.Z)({ref:r,component:h,color:"text.secondary",className:(0,c.Z)(H.root,u),ownerState:O},P,{children:(0,f.jsx)(M,{className:H.ol,ref:_,ownerState:O,children:U(A||R&&z.length<=R?z:function(e){return y+g>=e.length?e:[].concat((0,n.Z)(e.slice(0,y)),[(0,f.jsx)(b,{"aria-label":Z,onClick:function(){I(!0);var e=_.current.querySelector("a[href],button,[tabindex]");e&&e.focus()}},"ellipsis")],(0,n.Z)(e.slice(e.length-g,e.length)))}(z),H.separator,L,O)})}))}))},73428:function(e,r,t){t.d(r,{Z:function(){return Z}});var n=t(87462),a=t(63366),o=t(47313),i=t(83061),s=t(21921),l=t(17592),c=t(77342),d=t(70501),u=t(77430),p=t(32298);function m(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var h=t(46417),x=["className","raised"],f=(0,l.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{overflow:"hidden"}})),Z=o.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCard"}),o=t.className,l=t.raised,d=void 0!==l&&l,u=(0,a.Z)(t,x),p=(0,n.Z)({},t,{raised:d}),Z=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},m,r)}(p);return(0,h.jsx)(f,(0,n.Z)({className:(0,i.Z)(Z.root,o),elevation:d?8:void 0,ref:r,ownerState:p},u))}))},93405:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(87462),a=t(63366),o=t(47313),i=t(83061),s=t(21921),l=t(17592),c=t(77342),d=t(77430),u=t(32298);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var m=t(46417),h=["className","component"],x=(0,l.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,r){return r.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=o.forwardRef((function(e,r){var t=(0,c.Z)({props:e,name:"MuiCardContent"}),o=t.className,l=t.component,d=void 0===l?"div":l,u=(0,a.Z)(t,h),f=(0,n.Z)({},t,{component:d}),Z=function(e){var r=e.classes;return(0,s.Z)({root:["root"]},p,r)}(f);return(0,m.jsx)(x,(0,n.Z)({as:d,className:(0,i.Z)(Z.root,o),ownerState:f,ref:r},u))}))},54641:function(e,r,t){t.d(r,{Z:function(){return y}});var n=t(4942),a=t(63366),o=t(87462),i=t(47313),s=t(83061),l=t(21921),c=t(61113),d=t(77342),u=t(17592),p=t(77430),m=t(32298);function h(e){return(0,m.Z)("MuiCardHeader",e)}var x=(0,p.Z)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),f=t(46417),Z=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,r){var t;return(0,o.Z)((t={},(0,n.Z)(t,"& .".concat(x.title),r.title),(0,n.Z)(t,"& .".concat(x.subheader),r.subheader),t),r.root)}})({display:"flex",alignItems:"center",padding:16}),g=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,r){return r.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),j=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,r){return r.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),b=(0,u.ZP)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,r){return r.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,r){var t=(0,d.Z)({props:e,name:"MuiCardHeader"}),n=t.action,i=t.avatar,u=t.className,p=t.component,m=void 0===p?"div":p,x=t.disableTypography,y=void 0!==x&&x,C=t.subheader,w=t.subheaderTypographyProps,R=t.title,k=t.titleTypographyProps,S=(0,a.Z)(t,Z),M=(0,o.Z)({},t,{component:m,disableTypography:y}),N=function(e){var r=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,r)}(M),U=R;null==U||U.type===c.Z||y||(U=(0,f.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"h5",className:N.title,component:"span",display:"block"},k,{children:U})));var L=C;return null==L||L.type===c.Z||y||(L=(0,f.jsx)(c.Z,(0,o.Z)({variant:i?"body2":"body1",className:N.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:L}))),(0,f.jsxs)(v,(0,o.Z)({className:(0,s.Z)(N.root,u),as:m,ref:r,ownerState:M},S,{children:[i&&(0,f.jsx)(g,{className:N.avatar,ownerState:M,children:i}),(0,f.jsxs)(b,{className:N.content,ownerState:M,children:[U,L]}),n&&(0,f.jsx)(j,{className:N.action,ownerState:M,children:n})]}))}))}}]);
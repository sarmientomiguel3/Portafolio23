"use strict";(self.webpackChunkMiguel_Sarmiento_FullStack=self.webpackChunkMiguel_Sarmiento_FullStack||[]).push([[3815],{63815:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ze}});var i=r(65964),n=r(19860),a=r(70178),l=r(61113),s=r(9019),o=r(69904),c=r(50152),d=r(1413),h=r(93433),u=r(29439),x=r(45987),Z=r(73428),p=r(54641),m=r(35898),f=r(83929),j=r(44758),v=r(47131),g=r(51405),b=r(19536),y=r(47313),C=r(8730),k=r(22608),w=r(46417),S=["title","subheader","list"];function P(e){var t=e.title,r=e.subheader,i=e.list,n=(0,x.Z)(e,S),a=(0,y.useState)(["2"]),l=(0,u.Z)(a,2),s=l[0],o=l[1];return(0,w.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},n),{},{children:[(0,w.jsx)(p.Z,{title:t,subheader:r}),i.map((function(e){return(0,w.jsx)(M,{task:e,checked:s.includes(e.id),onChange:function(){return function(e){var t=s.includes(e)?s.filter((function(t){return t!==e})):[].concat((0,h.Z)(s),[e]);o(t)}(e.id)}},e.id)}))]}))}function M(e){var t=e.task,r=e.checked,i=e.onChange,n=(0,y.useState)(null),a=(0,u.Z)(n,2),l=a[0],s=a[1],o=function(){s(null)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(m.Z,{direction:"row",sx:(0,d.Z)({px:2,py:.75},r&&{color:"text.disabled",textDecoration:"line-through"}),children:[(0,w.jsx)(f.Z,{control:(0,w.jsx)(j.Z,{checked:r,onChange:i}),label:t.label,sx:{flexGrow:1,m:0}}),(0,w.jsx)(v.Z,{size:"large",color:l?"inherit":"default",onClick:function(e){s(e.currentTarget)},children:(0,w.jsx)(C.Z,{icon:"eva:more-vertical-fill"})})]}),(0,w.jsxs)(k.Z,{open:l,onClose:o,arrow:"right-top",children:[(0,w.jsxs)(g.Z,{onClick:function(){o(),console.log("MARK COMPLETE",t.id)},children:[(0,w.jsx)(C.Z,{icon:"eva:checkmark-circle-2-fill"}),"Mark Complete"]}),(0,w.jsxs)(g.Z,{onClick:function(){o(),console.log("EDIT",t.id)},children:[(0,w.jsx)(C.Z,{icon:"eva:edit-fill"}),"Edit"]}),(0,w.jsxs)(g.Z,{onClick:function(){o(),console.log("SHARE",t.id)},children:[(0,w.jsx)(C.Z,{icon:"eva:share-fill"}),"Share"]}),(0,w.jsx)(b.Z,{sx:{borderStyle:"dashed"}}),(0,w.jsxs)(g.Z,{onClick:function(){o(),console.log("DELETE",t.id)},sx:{color:"error.main"},children:[(0,w.jsx)(C.Z,{icon:"eva:trash-2-outline"}),"Delete"]})]})]})}var A=r(57829),T=r(24193),E=r(90891),F=r(14322),R=r(59063),O=r(53261),N=["title","subheader","list"];function W(e){var t=e.title,r=e.subheader,i=e.list,n=(0,x.Z)(e,N);return(0,w.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},n),{},{children:[(0,w.jsx)(p.Z,{title:t,subheader:r}),(0,w.jsx)(O.Z,{children:(0,w.jsx)(m.Z,{spacing:3,sx:{p:3,pr:0},children:i.map((function(e){return(0,w.jsx)(I,{news:e},e.id)}))})}),(0,w.jsx)(b.Z,{}),(0,w.jsx)(A.Z,{sx:{p:2,textAlign:"right"},children:(0,w.jsx)(T.Z,{size:"small",color:"inherit",endIcon:(0,w.jsx)(C.Z,{icon:"eva:arrow-ios-forward-fill"}),children:"View all"})})]}))}function I(e){var t=e.news,r=t.image,i=t.title,n=t.description,a=t.postedAt;return(0,w.jsxs)(m.Z,{direction:"row",alignItems:"center",spacing:2,children:[(0,w.jsx)(R.Z,{alt:i,src:r,sx:{width:48,height:48,borderRadius:1.5,flexShrink:0}}),(0,w.jsxs)(A.Z,{sx:{minWidth:240},children:[(0,w.jsx)(E.Z,{color:"inherit",variant:"subtitle2",noWrap:!0,children:i}),(0,w.jsx)(l.Z,{variant:"body2",sx:{color:"text.secondary"},noWrap:!0,children:n})]}),(0,w.jsx)(l.Z,{variant:"caption",sx:{pr:3,flexShrink:0,color:"text.secondary"},children:(0,F.DY)(a)})]})}var z=r(17592),D=r(76221),K=r(47284),L=["title","subheader","chart"],H=(0,z.ZP)("div")((function(e){var t=e.theme;return{height:400,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:400},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(328,"px) !important")}}}));function U(e){var t=e.title,r=e.subheader,i=e.chart,a=(0,x.Z)(e,L),l=(0,n.Z)(),s=i.colors,o=i.series,c=i.options,h=o.map((function(e){return e.value})),u=(0,K.Q8)((0,d.Z)({chart:{sparkline:{enabled:!0}},colors:s,labels:o.map((function(e){return e.label})),stroke:{colors:[l.palette.background.paper]},legend:{floating:!0,horizontalAlign:"center"},dataLabels:{enabled:!0,dropShadow:{enabled:!1}},tooltip:{fillSeriesColor:!1,y:{formatter:function(e){return(0,D.FK)(e)},title:{formatter:function(e){return"".concat(e)}}}},plotOptions:{pie:{donut:{labels:{show:!1}}}}},c));return(0,w.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},a),{},{children:[(0,w.jsx)(p.Z,{title:t,subheader:r}),(0,w.jsx)(H,{dir:"ltr",children:(0,w.jsx)(K.ZP,{type:"pie",series:h,options:u,height:280})})]}))}var q=r(93405),G=r(48571),Q=r(25234),_=r(83922),B=r(61414),V=r(17945),J=r(88221),$=["title","subheader","list"];function Y(e){var t=e.title,r=e.subheader,i=e.list,n=(0,x.Z)(e,$);return(0,w.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},n),{},{children:[(0,w.jsx)(p.Z,{title:t,subheader:r}),(0,w.jsx)(q.Z,{sx:{"& .MuiTimelineItem-missingOppositeContent:before":{display:"none"}},children:(0,w.jsx)(G.Z,{children:i.map((function(e,t){return(0,w.jsx)(X,{item:e,isLast:t===i.length-1},e.id)}))})})]}))}function X(e){var t=e.item,r=e.isLast,i=t.type,n=t.title,a=t.time;return(0,w.jsxs)(Q.Z,{children:[(0,w.jsxs)(_.Z,{children:[(0,w.jsx)(B.Z,{color:("order1"===i?"primary":"order2"===i&&"success")||"order3"===i&&"info"||"order4"===i&&"warning"||"error"}),r?null:(0,w.jsx)(V.Z,{})]}),(0,w.jsxs)(J.Z,{children:[(0,w.jsx)(l.Z,{variant:"subtitle2",children:n}),(0,w.jsx)(l.Z,{variant:"caption",sx:{color:"text.secondary"},children:(0,F.zM)(a)})]})]})}var ee=r(70501),te=["title","subheader","list"];function re(e){var t=e.title,r=e.subheader,i=e.list,n=(0,x.Z)(e,te);return(0,w.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},n),{},{children:[(0,w.jsx)(p.Z,{title:t,subheader:r}),(0,w.jsx)(q.Z,{children:(0,w.jsx)(A.Z,{display:"grid",gap:2,gridTemplateColumns:"repeat(2, 1fr)",children:i.map((function(e){return(0,w.jsxs)(ee.Z,{variant:"outlined",sx:{py:2.5,textAlign:"center"},children:["facebook"===e.value&&(0,w.jsx)(C.Z,{icon:"eva:facebook-fill",color:"#1877F2",width:32})||"google"===e.value&&(0,w.jsx)(C.Z,{icon:"eva:google-fill",color:"#DF3E30",width:32})||"linkedin"===e.value&&(0,w.jsx)(C.Z,{icon:"eva:linkedin-fill",color:"#006097",width:32})||(0,w.jsx)(C.Z,{icon:"eva:twitter-fill",color:"#1C9CEA",width:32}),(0,w.jsx)(l.Z,{variant:"h6",sx:{mt:.5},children:(0,D.v1)(e.total)}),(0,w.jsx)(l.Z,{variant:"body2",sx:{color:"text.secondary"},children:e.label})]},e.label)}))})})]}))}var ie=["title","subheader","chart"];function ne(e){var t=e.title,r=e.subheader,i=e.chart,n=(0,x.Z)(e,ie),a=i.labels,l=i.colors,s=i.series,o=i.options,c=(0,K.Q8)((0,d.Z)({colors:l,plotOptions:{bar:{columnWidth:"16%"}},fill:{type:s.map((function(e){return e.fill}))},labels:a,xaxis:{type:"datetime"},tooltip:{shared:!0,intersect:!1,y:{formatter:function(e){return"undefined"!==typeof e?"".concat(e.toFixed(0)," visits"):e}}}},o));return(0,w.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},n),{},{children:[(0,w.jsx)(p.Z,{title:t,subheader:r}),(0,w.jsx)(A.Z,{sx:{p:3,pb:1},dir:"ltr",children:(0,w.jsx)(K.ZP,{type:"line",series:s,options:c,height:364})})]}))}var ae=r(17551),le=r(50769),se=["title","total","icon","color","sx"];function oe(e){var t=e.title,r=e.total,i=e.icon,a=e.color,s=void 0===a?"primary":a,o=e.sx,c=(0,x.Z)(e,se),h=(0,n.Z)();return(0,w.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({sx:(0,d.Z)({py:5,boxShadow:0,textAlign:"center",color:h.palette[s].darker,bgcolor:h.palette[s].lighter},o)},c),{},{children:[(0,w.jsx)(C.Z,{icon:i,sx:(0,d.Z)({mb:3,p:2.5,width:64,height:64,borderRadius:"50%",color:h.palette[s].dark},(0,le.v3)({direction:"135deg",startColor:"".concat((0,ae.Fq)(h.palette[s].dark,0)," 0%"),endColor:"".concat((0,ae.Fq)(h.palette[s].dark,.24)," 100%")}))}),(0,w.jsx)(l.Z,{variant:"h3",children:(0,D.v1)(r)}),(0,w.jsx)(l.Z,{variant:"subtitle2",sx:{opacity:.64},children:t})]}))}var ce=["title","subheader","chart"],de=(0,z.ZP)("div")((function(e){var t=e.theme;return{height:400,marginTop:t.spacing(5),"& .apexcharts-canvas svg":{height:400},"& .apexcharts-canvas svg,.apexcharts-canvas foreignObject":{overflow:"visible"},"& .apexcharts-legend":{height:72,alignContent:"center",position:"relative !important",borderTop:"solid 1px ".concat(t.palette.divider),top:"calc(".concat(328,"px) !important")}}}));function he(e){var t=e.title,r=e.subheader,i=e.chart,a=(0,x.Z)(e,ce),l=(0,n.Z)(),s=i.series,o=i.colors,c=i.categories,u=i.options,m=(0,K.Q8)((0,d.Z)({colors:o,stroke:{width:2},fill:{opacity:.48},legend:{floating:!0,horizontalAlign:"center"},xaxis:{categories:c,labels:{style:{colors:(0,h.Z)(Array(6)).map((function(){return l.palette.text.secondary}))}}}},u));return(0,w.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},a),{},{children:[(0,w.jsx)(p.Z,{title:t,subheader:r}),(0,w.jsx)(de,{dir:"ltr",children:(0,w.jsx)(K.ZP,{type:"radar",series:s,options:m,height:340})})]}))}var ue=["title","subheader","chart"];function xe(e){var t=e.title,r=e.subheader,i=e.chart,n=(0,x.Z)(e,ue),a=i.colors,l=i.series,s=i.options,o=l.map((function(e){return e.value})),c=(0,K.Q8)((0,d.Z)({colors:a,tooltip:{marker:{show:!1},y:{formatter:function(e){return(0,D.FK)(e)},title:{formatter:function(){return""}}}},plotOptions:{bar:{horizontal:!0,barHeight:"28%",borderRadius:2}},xaxis:{categories:l.map((function(e){return e.label}))}},s));return(0,w.jsxs)(Z.Z,(0,d.Z)((0,d.Z)({},n),{},{children:[(0,w.jsx)(p.Z,{title:t,subheader:r}),(0,w.jsx)(A.Z,{sx:{mx:3},dir:"ltr",children:(0,w.jsx)(K.ZP,{type:"bar",series:[{data:o}],options:c,height:364})})]}))}function Ze(){var e=(0,n.Z)(),t=(0,c.K$)().themeStretch;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i.ql,{children:(0,w.jsx)("title",{children:" General: Analytics | Minimal UI"})}),(0,w.jsxs)(a.Z,{maxWidth:!t&&"xl",children:[(0,w.jsx)(l.Z,{variant:"h4",sx:{mb:5},children:"Hi, Welcome back"}),(0,w.jsxs)(s.ZP,{container:!0,spacing:3,children:[(0,w.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,w.jsx)(oe,{title:"Weekly Sales",total:714e3,icon:"ant-design:android-filled"})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,w.jsx)(oe,{title:"New Users",total:1352831,color:"info",icon:"ant-design:apple-filled"})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,w.jsx)(oe,{title:"Item Orders",total:1723315,color:"warning",icon:"ant-design:windows-filled"})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,sm:6,md:3,children:(0,w.jsx)(oe,{title:"Bug Reports",total:234,color:"error",icon:"ant-design:bug-filled"})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(ne,{title:"Website Visits",subheader:"(+43%) than last year",chart:{labels:["01/01/2003","02/01/2003","03/01/2003","04/01/2003","05/01/2003","06/01/2003","07/01/2003","08/01/2003","09/01/2003","10/01/2003","11/01/2003"],series:[{name:"Team A",type:"column",fill:"solid",data:[23,11,22,27,13,22,37,21,44,22,30]},{name:"Team B",type:"area",fill:"gradient",data:[44,55,41,67,22,43,21,41,56,27,43]},{name:"Team C",type:"line",fill:"solid",data:[30,25,36,30,45,35,64,52,59,36,39]}]}})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(U,{title:"Current Visits",chart:{series:[{label:"America",value:4344},{label:"Asia",value:5435},{label:"Europe",value:1443},{label:"Africa",value:4443}],colors:[e.palette.primary.main,e.palette.info.main,e.palette.error.main,e.palette.warning.main]}})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(xe,{title:"Conversion Rates",subheader:"(+43%) than last year",chart:{series:[{label:"Italy",value:400},{label:"Japan",value:430},{label:"China",value:448},{label:"Canada",value:470},{label:"France",value:540},{label:"Germany",value:580},{label:"South Korea",value:690},{label:"Netherlands",value:1100},{label:"United States",value:1200},{label:"United Kingdom",value:1380}]}})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(he,{title:"Current Subject",chart:{categories:["English","History","Physics","Geography","Chinese","Math"],series:[{name:"Series 1",data:[80,50,30,40,100,20]},{name:"Series 2",data:[20,30,40,80,20,80]},{name:"Series 3",data:[44,76,78,13,43,10]}]}})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(W,{title:"News Update",list:o.SH})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(Y,{title:"Order Timeline",list:o.ZP})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:4,children:(0,w.jsx)(re,{title:"Traffic by Site",list:o.$O})}),(0,w.jsx)(s.ZP,{item:!0,xs:12,md:6,lg:8,children:(0,w.jsx)(P,{title:"Tasks",list:[{id:"1",label:"Create FireStone Logo"},{id:"2",label:"Add SCSS and JS files if required"},{id:"3",label:"Stakeholder Meeting"},{id:"4",label:"Scoping & Estimations"},{id:"5",label:"Sprint Showcase"}]})})]})]})]})}},73428:function(e,t,r){r.d(t,{Z:function(){return f}});var i=r(87462),n=r(63366),a=r(47313),l=r(83061),s=r(21921),o=r(17592),c=r(77342),d=r(70501),h=r(77430),u=r(32298);function x(e){return(0,u.Z)("MuiCard",e)}(0,h.Z)("MuiCard",["root"]);var Z=r(46417),p=["className","raised"],m=(0,o.ZP)(d.Z,{name:"MuiCard",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{overflow:"hidden"}})),f=a.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCard"}),a=r.className,o=r.raised,d=void 0!==o&&o,h=(0,n.Z)(r,p),u=(0,i.Z)({},r,{raised:d}),f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},x,t)}(u);return(0,Z.jsx)(m,(0,i.Z)({className:(0,l.Z)(f.root,a),elevation:d?8:void 0,ref:t,ownerState:u},h))}))},93405:function(e,t,r){r.d(t,{Z:function(){return m}});var i=r(87462),n=r(63366),a=r(47313),l=r(83061),s=r(21921),o=r(17592),c=r(77342),d=r(77430),h=r(32298);function u(e){return(0,h.Z)("MuiCardContent",e)}(0,d.Z)("MuiCardContent",["root"]);var x=r(46417),Z=["className","component"],p=(0,o.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:function(e,t){return t.root}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),m=a.forwardRef((function(e,t){var r=(0,c.Z)({props:e,name:"MuiCardContent"}),a=r.className,o=r.component,d=void 0===o?"div":o,h=(0,n.Z)(r,Z),m=(0,i.Z)({},r,{component:d}),f=function(e){var t=e.classes;return(0,s.Z)({root:["root"]},u,t)}(m);return(0,x.jsx)(p,(0,i.Z)({as:d,className:(0,l.Z)(f.root,a),ownerState:m,ref:t},h))}))}}]);
"use strict";(self.webpackChunkMiguel_Sarmiento_FullStack=self.webpackChunkMiguel_Sarmiento_FullStack||[]).push([[4658],{54658:function(n,r,t){t.d(r,{jt:function(){return mn}});var e=t(1413),a=t(45987),u=t(93433),o=t(48438),i=t(91924),s=function(n){return n*n},f=(0,i.M)(s),c=(0,o.o)(s),v=t(42461),l=t(73857),p=t(93560),d=t(884);function h(n,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+6*(r-n)*t:t<.5?r:t<2/3?n+(r-n)*(2/3-t)*6:n}var m=t(81327),g=t(85118),y=t(87726),b=function(n,r,t){var e=n*n;return Math.sqrt(Math.max(0,t*(r*r-e)+e))},M=[m.$,g.m,y.J],Z=function(n){return M.find((function(r){return r.test(n)}))};function k(n){var r=Z(n);(0,v.k)(Boolean(r),"'".concat(n,"' is not an animatable color. Use the equivalent color code instead."));var t=r.parse(n);return r===y.J&&(t=function(n){var r=n.hue,t=n.saturation,e=n.lightness,a=n.alpha;r/=360,e/=100;var u=0,o=0,i=0;if(t/=100){var s=e<.5?e*(1+t):e+t-e*t,f=2*e-s;u=h(f,s,r+1/3),o=h(f,s,r),i=h(f,s,r-1/3)}else u=o=i=e;return{red:Math.round(255*u),green:Math.round(255*o),blue:Math.round(255*i),alpha:a}}(t)),t}var x=function(n,r){var t=k(n),a=k(r),u=(0,e.Z)({},t);return function(n){return u.red=b(t.red,a.red,n),u.green=b(t.green,a.green,n),u.blue=b(t.blue,a.blue,n),u.alpha=(0,d.C)(t.alpha,a.alpha,n),g.m.transform(u)}},w=t(85800),A=t(91658);function C(n,r){return"number"===typeof n?function(t){return(0,d.C)(n,r,t)}:l.$.test(n)?x(n,r):D(n,r)}var I=function(n,r){var t=(0,u.Z)(n),e=t.length,a=n.map((function(n,t){return C(n,r[t])}));return function(n){for(var r=0;r<e;r++)t[r]=a[r](n);return t}},N=function(n,r){var t=(0,e.Z)((0,e.Z)({},n),r),a={};for(var u in t)void 0!==n[u]&&void 0!==r[u]&&(a[u]=C(n[u],r[u]));return function(n){for(var r in a)t[r]=a[r](n);return t}},D=function(n,r){var t=A.P.createTransformer(r),e=(0,A.V)(n),a=(0,A.V)(r);return e.numColors===a.numColors&&e.numNumbers>=a.numNumbers?(0,w.z)(I(e.values,a.values),t):((0,v.K)(!0,"Complex values '".concat(n,"' and '").concat(r,"' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.")),function(t){return"".concat(t>0?r:n)})},F=t(16964),q=function(n,r){return function(t){return(0,d.C)(n,r,t)}};function $(n,r,t){for(var e,a=[],u=t||("number"===typeof(e=n[0])?q:"string"===typeof e?l.$.test(e)?x:D:Array.isArray(e)?I:"object"===typeof e?N:q),o=n.length-1,i=0;i<o;i++){var s=u(n[i],n[i+1]);if(r){var f=Array.isArray(r)?r[i]:r;s=(0,w.z)(f,s)}a.push(s)}return a}function P(n,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},e=t.clamp,a=void 0===e||e,o=t.ease,i=t.mixer,s=n.length;(0,v.k)(s===r.length,"Both input and output ranges must be the same length"),(0,v.k)(!o||!Array.isArray(o)||o.length===s-1,"Array of easing functions must be of length `input.length - 1`, as it applies to the transitions **between** the defined values."),n[0]>n[s-1]&&(n=(0,u.Z)(n).reverse(),r=(0,u.Z)(r).reverse());var f=$(r,o,i),c=f.length,l=function(r){var t=0;if(c>1)for(;t<n.length-2&&!(r<n[t+1]);t++);var e=(0,F.Y)(n[t],n[t+1],r);return f[t](e)};return a?function(r){return l((0,p.u)(n[0],n[s-1],r))}:l}var T=t(29439),O=t(59979),S=function(n,r,t){return(((1-3*t+3*r)*n+(3*t-6*r))*n+3*r)*n},R=1e-7,J=12;function K(n,r,t,e){if(n===r&&t===e)return O.Z;var a=function(r){return function(n,r,t,e,a){var u,o,i=0;do{(u=S(o=r+(t-r)/2,e,a)-n)>0?t=o:r=o}while(Math.abs(u)>R&&++i<J);return o}(r,0,1,n,t)};return function(n){return 0===n||1===n?n:S(a(n),r,e)}}var B=t(63133),_=K(.33,1.53,.69,.99),j=(0,i.M)(_),z=(0,o.o)(j),H={linear:O.Z,easeIn:s,easeInOut:c,easeOut:f,circIn:B.Z7,circInOut:B.X7,circOut:B.Bn,backIn:j,backInOut:z,backOut:_,anticipate:function(n){return(n*=2)<1?.5*j(n):.5*(2-Math.pow(2,-10*(n-1)))}},U=function(n){if(Array.isArray(n)){(0,v.k)(4===n.length,"Cubic bezier arrays must contain four numerical values.");var r=(0,T.Z)(n,4);return K(r[0],r[1],r[2],r[3])}return"string"===typeof n?((0,v.k)(void 0!==H[n],"Invalid easing type '".concat(n,"'")),H[n]):n},V=function(n){return Array.isArray(n)&&"number"!==typeof n[0]};function Y(n){var r=n.keyframes,t=n.ease,e=void 0===t?c:t,a=n.times,o=n.duration,i=void 0===o?300:o;r=(0,u.Z)(r);var s=V(e)?e.map(U):U(e),f={done:!1,value:r[0]},v=function(n,r){return n.map((function(n){return n*r}))}(a&&a.length===r.length?a:function(n){var r=n.length;return n.map((function(n,t){return 0!==t?t/(r-1):0}))}(r),i);function l(){return P(v,r,{ease:Array.isArray(s)?s:(n=r,t=s,n.map((function(){return t||c})).splice(0,n.length-1))});var n,t}var p=l();return{next:function(n){return f.value=p(n),f.done=n>=i,f},flipTarget:function(){r.reverse(),p=l()}}}var Q=.001,X=.01,E=10,W=.05,G=1;function L(n){var r,t,e=n.duration,a=void 0===e?800:e,u=n.bounce,o=void 0===u?.25:u,i=n.velocity,s=void 0===i?0:i,f=n.mass,c=void 0===f?1:f;(0,v.K)(a<=1e3*E,"Spring duration must be 10 seconds or less");var l=1-o;l=(0,p.u)(W,G,l),a=(0,p.u)(X,E,a/1e3),l<1?(r=function(n){var r=n*l,t=r*a,e=r-s,u=rn(n,l),o=Math.exp(-t);return Q-e/u*o},t=function(n){var t=n*l*a,e=t*s+s,u=Math.pow(l,2)*Math.pow(n,2)*a,o=Math.exp(-t),i=rn(Math.pow(n,2),l);return(-r(n)+Q>0?-1:1)*((e-u)*o)/i}):(r=function(n){return Math.exp(-n*a)*((n-s)*a+1)-Q},t=function(n){return Math.exp(-n*a)*(a*a*(s-n))});var d=function(n,r,t){for(var e=t,a=1;a<nn;a++)e-=n(e)/r(e);return e}(r,t,5/a);if(a*=1e3,isNaN(d))return{stiffness:100,damping:10,duration:a};var h=Math.pow(d,2)*c;return{stiffness:h,damping:2*l*Math.sqrt(c*h),duration:a}}var nn=12;function rn(n,r){return n*Math.sqrt(1-r*r)}var tn=t(11622),en=["keyframes","restDelta","restSpeed"],an=["duration","bounce"],un=["stiffness","damping","mass"];function on(n,r){return r.some((function(r){return void 0!==n[r]}))}var sn=5;function fn(n){var r=n.keyframes,t=n.restDelta,u=n.restSpeed,o=(0,a.Z)(n,en),i=r[0],s=r[r.length-1],f={done:!1,value:i},c=function(n){var r=(0,e.Z)({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},n);if(!on(n,un)&&on(n,an)){var t=L(n);(r=(0,e.Z)((0,e.Z)((0,e.Z)({},r),t),{},{velocity:0,mass:1})).isResolvedFromDuration=!0}return r}(o),v=c.stiffness,l=c.damping,p=c.mass,d=c.velocity,h=c.duration,m=c.isResolvedFromDuration,g=cn,y=d?-d/1e3:0,b=l/(2*Math.sqrt(v*p));function M(){var n=s-i,r=Math.sqrt(v/p)/1e3,e=Math.abs(n)<5;if(u||(u=e?.01:2),t||(t=e?.005:.5),b<1){var a=rn(r,b);g=function(t){var e=Math.exp(-b*r*t);return s-e*((y+b*r*n)/a*Math.sin(a*t)+n*Math.cos(a*t))}}else if(1===b)g=function(t){return s-Math.exp(-r*t)*(n+(y+r*n)*t)};else{var o=r*Math.sqrt(b*b-1);g=function(t){var e=Math.exp(-b*r*t),a=Math.min(o*t,300);return s-e*((y+b*r*n)*Math.sinh(a)+o*n*Math.cosh(a))/o}}}return M(),{next:function(n){var r=g(n);if(m)f.done=n>=h;else{var e=y;if(0!==n)if(b<1){var a=Math.max(0,n-sn);e=(0,tn.R)(r-g(a),n-a)}else e=0;var o=Math.abs(e)<=u,i=Math.abs(s-r)<=t;f.done=o&&i}return f.value=f.done?s:r,f},flipTarget:function(){y=-y;var n=[s,i];i=n[0],s=n[1],M()}}}fn.needsInterpolation=function(n,r){return"string"===typeof n||"string"===typeof r};var cn=function(n){return 0};var vn=t(10512),ln=["duration","driver","elapsed","repeat","repeatType","repeatDelay","keyframes","autoplay","onPlay","onStop","onComplete","onRepeat","onUpdate","type"],pn={decay:function(n){var r=n.keyframes,t=void 0===r?[0]:r,e=n.velocity,a=void 0===e?0:e,u=n.power,o=void 0===u?.8:u,i=n.timeConstant,s=void 0===i?350:i,f=n.restDelta,c=void 0===f?.5:f,v=n.modifyTarget,l=t[0],p={done:!1,value:l},d=o*a,h=l+d,m=void 0===v?h:v(h);return m!==h&&(d=m-l),{next:function(n){var r=-d*Math.exp(-n/s);return p.done=!(r>c||r<-c),p.value=p.done?m:m+r,p},flipTarget:function(){}}},keyframes:Y,tween:Y,spring:fn};function dn(n,r){return n-r-(arguments.length>2&&void 0!==arguments[2]?arguments[2]:0)}var hn=function(n){var r=function(r){var t=r.delta;return n(t)};return{start:function(){return vn.Z_.update(r,!0)},stop:function(){return vn.qY.update(r)}}};function mn(n){var r,t,u,o,i=n.duration,s=n.driver,f=void 0===s?hn:s,c=n.elapsed,v=void 0===c?0:c,l=n.repeat,p=void 0===l?0:l,d=n.repeatType,h=void 0===d?"loop":d,m=n.repeatDelay,g=void 0===m?0:m,y=n.keyframes,b=n.autoplay,M=void 0===b||b,Z=n.onPlay,k=n.onStop,x=n.onComplete,w=n.onRepeat,A=n.onUpdate,C=n.type,I=void 0===C?"keyframes":C,N=(0,a.Z)(n,ln),D=v,F=0,q=i,$=!1,T=!0,O=pn[y.length>2?"keyframes":I]||Y,S=y[0],R=y[y.length-1],J={done:!1,value:S};(null===(t=(r=O).needsInterpolation)||void 0===t?void 0:t.call(r,S,R))&&(o=P([0,100],[S,R],{clamp:!1}),y=[0,100]);var K=O((0,e.Z)((0,e.Z)({},N),{},{duration:i,keyframes:y}));function B(){F++,"reverse"===h?v=function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return arguments.length>3&&void 0!==arguments[3]&&!arguments[3]?r-(n-r)+t:dn(r+-n,r,t)}(v,q,g,T=F%2===0):(v=dn(v,q,g),"mirror"===h&&K.flipTarget()),$=!1,w&&w()}function _(n){T||(n=-n),v+=n,$||(J=K.next(Math.max(0,v)),o&&(J.value=o(J.value)),$=T?J.done:v<=0),A&&A(J.value),$&&(0===F&&(q=void 0!==q?q:v),F<p?function(n,r,t,e){return e?n>=r+t:n<=-t}(v,q,g,T)&&B():(u&&u.stop(),x&&x()))}return M&&(Z&&Z(),(u=f(_)).start()),{stop:function(){k&&k(),u&&u.stop()},set currentTime(n){v=D,_(n)},sample:function(n){v=D;var r=i&&"number"===typeof i?Math.max(.5*i,50):50,t=0;for(_(0);t<=n;){var e=n-t;_(Math.min(e,r)),t+=r}return J}}}},63133:function(n,r,t){t.d(r,{Bn:function(){return o},X7:function(){return i},Z7:function(){return u}});var e=t(48438),a=t(91924),u=function(n){return 1-Math.sin(Math.acos(n))},o=(0,a.M)(u),i=(0,e.o)(o)},48438:function(n,r,t){t.d(r,{o:function(){return e}});var e=function(n){return function(r){return r<=.5?n(2*r)/2:(2-n(2*(1-r)))/2}}},91924:function(n,r,t){t.d(r,{M:function(){return e}});var e=function(n){return function(r){return 1-n(1-r)}}},884:function(n,r,t){t.d(r,{C:function(){return e}});var e=function(n,r,t){return-t*n+t*r+n}},59979:function(n,r,t){t.d(r,{Z:function(){return e}});var e=function(n){return n}},85800:function(n,r,t){t.d(r,{z:function(){return a}});var e=function(n,r){return function(t){return r(n(t))}},a=function(){for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return r.reduce(e)}},16964:function(n,r,t){t.d(r,{Y:function(){return e}});var e=function(n,r,t){var e=r-n;return 0===e?1:(t-n)/e}},81327:function(n,r,t){t.d(r,{$:function(){return a}});var e=t(85118);var a={test:(0,t(2914).i)("#"),parse:function(n){var r="",t="",e="",a="";return n.length>5?(r=n.substring(1,3),t=n.substring(3,5),e=n.substring(5,7),a=n.substring(7,9)):(r=n.substring(1,2),t=n.substring(2,3),e=n.substring(3,4),a=n.substring(4,5),r+=r,t+=t,e+=e,a+=a),{red:parseInt(r,16),green:parseInt(t,16),blue:parseInt(e,16),alpha:a?parseInt(a,16)/255:1}},transform:e.m.transform}},87726:function(n,r,t){t.d(r,{J:function(){return i}});var e=t(14337),a=t(55451),u=t(90199),o=t(2914),i={test:(0,o.i)("hsl","hue"),parse:(0,o.d)("hue","saturation","lightness"),transform:function(n){var r=n.hue,t=n.saturation,o=n.lightness,i=n.alpha,s=void 0===i?1:i;return"hsla("+Math.round(r)+", "+a.aQ.transform((0,u.Nw)(t))+", "+a.aQ.transform((0,u.Nw)(o))+", "+(0,u.Nw)(e.Fq.transform(s))+")"}}},73857:function(n,r,t){t.d(r,{$:function(){return i}});var e=t(90199),a=t(81327),u=t(87726),o=t(85118),i={test:function(n){return o.m.test(n)||a.$.test(n)||u.J.test(n)},parse:function(n){return o.m.test(n)?o.m.parse(n):u.J.test(n)?u.J.parse(n):a.$.parse(n)},transform:function(n){return(0,e.HD)(n)?n:n.hasOwnProperty("red")?o.m.transform(n):u.J.transform(n)}}},85118:function(n,r,t){t.d(r,{m:function(){return f}});var e=t(1413),a=t(93560),u=t(14337),o=t(90199),i=t(2914),s=(0,e.Z)((0,e.Z)({},u.Rx),{},{transform:function(n){return Math.round(function(n){return(0,a.u)(0,255,n)}(n))}}),f={test:(0,i.i)("rgb","red"),parse:(0,i.d)("red","green","blue"),transform:function(n){var r=n.red,t=n.green,e=n.blue,a=n.alpha,i=void 0===a?1:a;return"rgba("+s.transform(r)+", "+s.transform(t)+", "+s.transform(e)+", "+(0,o.Nw)(u.Fq.transform(i))+")"}}},2914:function(n,r,t){t.d(r,{d:function(){return i},i:function(){return o}});var e=t(4942),a=t(29439),u=t(90199),o=function(n,r){return function(t){return Boolean((0,u.HD)(t)&&u.mj.test(t)&&t.startsWith(n)||r&&Object.prototype.hasOwnProperty.call(t,r))}},i=function(n,r,t){return function(o){var i;if(!(0,u.HD)(o))return o;var s=o.match(u.KP),f=(0,a.Z)(s,4),c=f[0],v=f[1],l=f[2],p=f[3];return i={},(0,e.Z)(i,n,parseFloat(c)),(0,e.Z)(i,r,parseFloat(v)),(0,e.Z)(i,t,parseFloat(l)),(0,e.Z)(i,"alpha",void 0!==p?parseFloat(p):1),i}}},91658:function(n,r,t){t.d(r,{P:function(){return p},V:function(){return f}});var e=t(93433),a=t(73857),u=t(14337),o=t(90199),i="${c}",s="${n}";function f(n){"number"===typeof n&&(n="".concat(n));var r=[],t=0,f=0,c=n.match(o.dA);c&&(t=c.length,n=n.replace(o.dA,i),r.push.apply(r,(0,e.Z)(c.map(a.$.parse))));var v=n.match(o.KP);return v&&(f=v.length,n=n.replace(o.KP,s),r.push.apply(r,(0,e.Z)(v.map(u.Rx.parse)))),{values:r,numColors:t,numNumbers:f,tokenised:n}}function c(n){return f(n).values}function v(n){var r=f(n),t=r.values,e=r.numColors,u=r.tokenised,c=t.length;return function(n){for(var r=u,t=0;t<c;t++)r=r.replace(t<e?i:s,t<e?a.$.transform(n[t]):(0,o.Nw)(n[t]));return r}}var l=function(n){return"number"===typeof n?0:n};var p={test:function(n){var r,t;return isNaN(n)&&(0,o.HD)(n)&&((null===(r=n.match(o.KP))||void 0===r?void 0:r.length)||0)+((null===(t=n.match(o.dA))||void 0===t?void 0:t.length)||0)>0},parse:c,createTransformer:v,getAnimatableNone:function(n){var r=c(n);return v(n)(r.map(l))}}}}]);
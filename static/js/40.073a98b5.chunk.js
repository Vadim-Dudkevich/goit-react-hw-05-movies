"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[40],{1893:function(e,t,n){n.d(t,{O:function(){return E}});var r,o,a,i,s,c,u=n(168),l=n(6031),d=l.ZP.ul(r||(r=(0,u.Z)(["\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n  padding: 50px 80px 50px;\n"]))),p=n(501),f=n(6871),m=l.ZP.li(o||(o=(0,u.Z)(["\n  padding: 10px;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]))),g=l.ZP.div(a||(a=(0,u.Z)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 10px;\n"]))),v=l.ZP.img(i||(i=(0,u.Z)(["\n  width: 300px;\n  height: 440px;\n  margin-bottom: 10px;\n  object-fit: cover;\n"]))),h=l.ZP.h2(s||(s=(0,u.Z)(["\n  font-size: 12px;\n  font-weight: 700;\n  color: #585858;\n"]))),y=l.ZP.p(c||(c=(0,u.Z)(["\n  font-size: 12px;\n  font-weight: 700;\n  color: #e73c37;\n"]))),b=n(9348),x=n(184);var T=function(e){var t=e.id,n=e.title,r=e.poster,o=e.vote,a=(0,f.TH)();return(0,x.jsx)(m,{children:(0,x.jsxs)(p.rU,{to:"/movies/".concat(t),state:{from:a.pathname+a.search},children:[(0,x.jsx)(v,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):b,alt:n}),(0,x.jsxs)(g,{children:[(0,x.jsx)(h,{children:n||"No Title"}),(0,x.jsxs)(y,{children:["Vote: ",o]})]})]})})},E=function(e){var t=e.movies;return(0,x.jsx)(d,{children:t.map((function(e){var t=e.id,n=e.original_title,r=e.poster_path,o=e.vote_average;return(0,x.jsx)(T,{id:t,title:n,poster:r,vote:o},t)}))})}},40:function(e,t,n){n.r(t),n.d(t,{default:function(){return le}});var r,o,a,i,s=n(885),c=n(2791),u=n(501),l=n(4390),d=n(168),p=n(6031),f=n(9983);var m=p.ZP.form(r||(r=(0,d.Z)(["\n  margin: 0 auto;\n  padding-top: 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  max-width: 500px;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),g=p.ZP.button(o||(o=(0,d.Z)(["\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  border: 0;\n  background-color: transparent;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n"]))),v=(0,p.ZP)((function(e){return(0,f.w_)({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"g",attr:{fill:"#616161"},child:[{tag:"rect",attr:{x:"34.6",y:"28.1",transform:"matrix(.707 -.707 .707 .707 -15.154 36.586)",width:"4",height:"17"}},{tag:"circle",attr:{cx:"20",cy:"20",r:"16"}}]},{tag:"rect",attr:{x:"36.2",y:"32.1",transform:"matrix(.707 -.707 .707 .707 -15.839 38.239)",fill:"#37474F",width:"4",height:"12.3"}},{tag:"circle",attr:{fill:"#64B5F6",cx:"20",cy:"20",r:"13"}},{tag:"path",attr:{fill:"#BBDEFB",d:"M26.9,14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2,1.2-6.9,3.2c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1 C16,13.9,17.9,13,20,13s4,0.9,5.4,2.5c0.2,0.2,0.5,0.4,0.8,0.4c0.2,0,0.5-0.1,0.6-0.2C27.2,15.3,27.2,14.6,26.9,14.2z"}}]})(e)}))(a||(a=(0,d.Z)(["\n  width: 20px;\n  height: 20px;\n"]))),h=p.ZP.input(i||(i=(0,d.Z)(["\n  width: 300px;\n  height: 25px;\n  padding: 0 10px 0 10px;\n  padding: 0 10px 0 10px;\n  background-color: transparent;\n  font-size: 20px;\n  border: none;\n  border-bottom: 0.5px solid #00000073;\n  font: inherit;\n  font-size: inherit;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n  }\n"])));function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function T(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var E=n(907);var _=n(181);function O(e){return function(e){if(Array.isArray(e))return(0,E.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,_.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){var t,n,r="";if("string"===typeof e||"number"===typeof e)r+=e;else if("object"===typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=w(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function C(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=w(e))&&(r&&(r+=" "),r+=t);return r}var I=["delay","staleId"],P=["theme","type"];function L(e){return"number"==typeof e&&!isNaN(e)}function k(e){return"boolean"==typeof e}function N(e){return"string"==typeof e}function R(e){return"function"==typeof e}function j(e){return N(e)||R(e)?e:null}function B(e){return 0===e||e}function S(e){return(0,c.isValidElement)(e)||N(e)||R(e)||L(e)}var Z={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},D={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function A(e){var t=e.enter,n=e.exit,r=e.appendPosition,o=void 0!==r&&r,a=e.collapse,i=void 0===a||a,s=e.collapseDuration,u=void 0===s?300:s;return function(e){var r=e.children,a=e.position,s=e.preventExitTransition,l=e.done,d=e.nodeRef,p=e.isIn,f=o?t+"--"+a:t,m=o?n+"--"+a:n,g=(0,c.useRef)(),v=(0,c.useRef)(0);function h(e){if(e.target===d.current){var t=d.current;t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",h),t.removeEventListener("animationcancel",h),0===v.current&&"animationcancel"!==e.type&&(t.className=g.current)}}function y(){var e=d.current;e.removeEventListener("animationend",y),i?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,l,u):l()}return(0,c.useLayoutEffect)((function(){!function(){var e=d.current;g.current=e.className,e.className+=" "+f,e.addEventListener("animationend",h),e.addEventListener("animationcancel",h)}()}),[]),(0,c.useEffect)((function(){p||(s?y():function(){v.current=1;var e=d.current;e.className+=" "+m,e.addEventListener("animationend",y)}())}),[p]),c.createElement(c.Fragment,null,r)}}function M(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var F={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(r){var o=setTimeout((function(){r.apply(void 0,O([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}};function z(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,s.Z)(t,2)[1],r=(0,c.useState)([]),o=(0,s.Z)(r,2),a=o[0],i=o[1],u=(0,c.useRef)(null),l=(0,c.useRef)(new Map).current,d=function(e){return-1!==a.indexOf(e)},p=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return l.get(e)}}).current;function f(e){var t=e.containerId;!p.props.limit||t&&p.containerId!==t||(p.count-=p.queue.length,p.queue=[])}function m(e){i((function(t){return B(e)?t.filter((function(t){return t!==e})):[]}))}function g(){var e=p.queue.shift();h(e.toastContent,e.toastProps,e.staleId)}function v(e,t){var r=t.delay,o=t.staleId,a=T(t,I);if(S(e)&&!function(e){return!u.current||p.props.enableMultiContainer&&e.containerId!==p.props.containerId||l.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,s=a.updateId,d=a.data,f=p.props,v=function(){return m(i)},y=null==s;y&&p.count++;var b,x,E={toastId:i,updateId:s,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||f.theme,icon:null!=a.icon?a.icon:f.icon,isIn:!1,key:a.key||p.toastKey++,type:a.type,closeToast:v,closeButton:a.closeButton,rtl:f.rtl,position:a.position||f.position,transition:a.transition||f.transition,className:j(a.className||f.toastClassName),bodyClassName:j(a.bodyClassName||f.bodyClassName),style:a.style||f.toastStyle,bodyStyle:a.bodyStyle||f.bodyStyle,onClick:a.onClick||f.onClick,pauseOnHover:k(a.pauseOnHover)?a.pauseOnHover:f.pauseOnHover,pauseOnFocusLoss:k(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:f.pauseOnFocusLoss,draggable:k(a.draggable)?a.draggable:f.draggable,draggablePercent:a.draggablePercent||f.draggablePercent,draggableDirection:a.draggableDirection||f.draggableDirection,closeOnClick:k(a.closeOnClick)?a.closeOnClick:f.closeOnClick,progressClassName:j(a.progressClassName||f.progressClassName),progressStyle:a.progressStyle||f.progressStyle,autoClose:!a.isLoading&&(b=a.autoClose,x=f.autoClose,!1===b||L(b)&&b>0?b:x),hideProgressBar:k(a.hideProgressBar)?a.hideProgressBar:f.hideProgressBar,progress:a.progress,role:a.role||f.role,deleteToast:function(){var e=M(l.get(i),"removed");l.delete(i),F.emit(4,e);var t=p.queue.length;if(p.count=B(i)?p.count-1:p.count-p.displayedToast,p.count<0&&(p.count=0),t>0){var r=B(i)?1:p.props.limit;if(1===t||1===r)p.displayedToast++,g();else{var o=r>t?t:r;p.displayedToast=o;for(var a=0;a<o;a++)g()}}else n()}};R(a.onOpen)&&(E.onOpen=a.onOpen),R(a.onClose)&&(E.onClose=a.onClose),E.closeButton=f.closeButton,!1===a.closeButton||S(a.closeButton)?E.closeButton=a.closeButton:!0===a.closeButton&&(E.closeButton=!S(f.closeButton)||f.closeButton);var _=e;(0,c.isValidElement)(e)&&!N(e.type)?_=(0,c.cloneElement)(e,{closeToast:v,toastProps:E,data:d}):R(e)&&(_=e({closeToast:v,toastProps:E,data:d})),f.limit&&f.limit>0&&p.count>f.limit&&y?p.queue.push({toastContent:_,toastProps:E,staleId:o}):L(r)?setTimeout((function(){h(_,E,o)}),r):h(_,E,o)}}function h(e,t,n){var r=t.toastId;n&&l.delete(n);var o={content:e,props:t};l.set(r,o),i((function(e){return[].concat(O(e),[r]).filter((function(e){return e!==n}))})),F.emit(4,M(o,null==o.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return p.containerId=e.containerId,F.cancelEmit(3).on(0,v).on(1,(function(e){return u.current&&m(e)})).on(5,f).emit(2,p),function(){return F.emit(3,p)}}),[]),(0,c.useEffect)((function(){p.props=e,p.isToastActive=d,p.displayedToast=a.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(l.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:u,isToastActive:d}}function H(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function q(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function U(e){var t=(0,c.useState)(!1),n=(0,s.Z)(t,2),r=n[0],o=n[1],a=(0,c.useState)(!1),i=(0,s.Z)(a,2),u=i[0],l=i[1],d=(0,c.useRef)(null),p=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,f=(0,c.useRef)(e),m=e.autoClose,g=e.pauseOnHover,v=e.closeToast,h=e.onClick,y=e.closeOnClick;function b(t){if(e.draggable){p.didMove=!1,document.addEventListener("mousemove",_),document.addEventListener("mouseup",O),document.addEventListener("touchmove",_),document.addEventListener("touchend",O);var n=d.current;p.canCloseOnClick=!0,p.canDrag=!0,p.boundingRect=n.getBoundingClientRect(),n.style.transition="",p.x=H(t.nativeEvent),p.y=q(t.nativeEvent),"x"===e.draggableDirection?(p.start=p.x,p.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(p.start=p.y,p.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function x(){if(p.boundingRect){var t=p.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&p.x>=o&&p.x<=a&&p.y>=n&&p.y<=r?E():T()}}function T(){o(!0)}function E(){o(!1)}function _(t){var n=d.current;p.canDrag&&n&&(p.didMove=!0,r&&E(),p.x=H(t),p.y=q(t),p.delta="x"===e.draggableDirection?p.x-p.start:p.y-p.start,p.start!==p.x&&(p.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+p.delta+"px)",n.style.opacity=""+(1-Math.abs(p.delta/p.removalDistance)))}function O(){document.removeEventListener("mousemove",_),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",_),document.removeEventListener("touchend",O);var t=d.current;if(p.canDrag&&p.didMove&&t){if(p.canDrag=!1,Math.abs(p.delta)>p.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,c.useEffect)((function(){f.current=e})),(0,c.useEffect)((function(){return d.current&&d.current.addEventListener("d",T,{once:!0}),R(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=f.current;R(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||E(),window.addEventListener("focus",T),window.addEventListener("blur",E)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",T),window.removeEventListener("blur",E))}}),[e.pauseOnFocusLoss]);var w={onMouseDown:b,onTouchStart:b,onMouseUp:x,onTouchEnd:x};return m&&g&&(w.onMouseEnter=E,w.onMouseLeave=T),y&&(w.onClick=function(e){h&&h(e),p.canCloseOnClick&&v()}),{playToast:T,pauseToast:E,isRunning:r,preventExitTransition:u,toastRef:d,eventHandlers:w}}function V(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function Q(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=e.hide,i=e.className,s=e.style,u=e.controlledProgress,l=e.progress,d=e.rtl,p=e.isIn,f=e.theme,m=x(x({},s),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});u&&(m.transform="scaleX("+l+")");var g=C("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+f,"Toastify__progress-bar--"+o,{"Toastify__progress-bar--rtl":d}),v=R(i)?i({rtl:d,type:o,defaultClassName:g}):C(g,i);return c.createElement("div",y({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:v,style:m},u&&l>=1?"onTransitionEnd":"onAnimationEnd",u&&l<1?null:function(){p&&r()}))}Q.defaultProps={type:D.DEFAULT,hide:!1};var G=function(e){var t=e.theme,n=e.type,r=T(e,P);return c.createElement("svg",x({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))},W={info:function(e){return c.createElement(G,x({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(G,x({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(G,x({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(G,x({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}},Y=function(e){var t=U(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,u=e.autoClose,l=e.onClick,d=e.type,p=e.hideProgressBar,f=e.closeToast,m=e.transition,g=e.position,v=e.className,h=e.style,y=e.bodyClassName,b=e.bodyStyle,T=e.progressClassName,E=e.progressStyle,_=e.updateId,O=e.role,w=e.progress,I=e.rtl,P=e.toastId,L=e.deleteToast,k=e.isIn,j=e.isLoading,B=e.icon,S=e.theme,Z=C("Toastify__toast","Toastify__toast-theme--"+S,"Toastify__toast--"+d,{"Toastify__toast--rtl":I}),D=R(v)?v({rtl:I,position:g,type:d,defaultClassName:Z}):C(Z,v),A=!!w,M=W[d],F={theme:S,type:d},z=M&&M(F);return!1===B?z=void 0:R(B)?z=B(F):c.isValidElement(B)?z=c.cloneElement(B,F):N(B)?z=B:j&&(z=W.spinner()),c.createElement(m,{isIn:k,done:L,position:g,preventExitTransition:r,nodeRef:o},c.createElement("div",x(x({id:P,onClick:l,className:D},a),{},{style:h,ref:o}),c.createElement("div",x(x({},k&&{role:O}),{},{className:R(y)?y({type:d}):C("Toastify__toast-body",y),style:b}),z&&c.createElement("div",{className:C("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!j})},z),c.createElement("div",null,s)),function(e){if(e){var t={closeToast:f,type:d,theme:S};return R(e)?e(t):c.isValidElement(e)?c.cloneElement(e,t):void 0}}(i),(u||A)&&c.createElement(Q,x(x({},_&&!A?{key:"pb-"+_}:{}),{},{rtl:I,theme:S,delay:u,isRunning:n,isIn:k,closeToast:f,hide:p,type:d,style:E,className:T,controlledProgress:A,progress:w}))))},X=A({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),K=(A({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),A({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),A({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,c.forwardRef)((function(e,t){var n=z(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,u=e.rtl,l=e.containerId;function d(e){var t=C("Toastify__toast-container","Toastify__toast-container--"+e,{"Toastify__toast-container--rtl":u});return R(i)?i({position:e,rtl:u,defaultClassName:t}):C(t,j(i))}return(0,c.useEffect)((function(){t&&(t.current=o.current)}),[]),c.createElement("div",{ref:o,className:"Toastify",id:l},r((function(e,t){var n=t.length?x({},s):x(x({},s),{},{pointerEvents:"none"});return c.createElement("div",{className:d(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,o=e.props;return c.createElement(Y,x(x({},o),{},{isIn:a(o.toastId),style:{"--nth":n+1,"--len":t.length},key:"toast-"+o.key,closeButton:!0===o.closeButton?V:o.closeButton}),r)})))})))})));K.displayName="ToastContainer",K.defaultProps={position:Z.TOP_RIGHT,transition:X,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:V,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var J,$=new Map,ee=[];function te(){return Math.random().toString(36).substring(2,9)}function ne(e){return e&&(N(e.toastId)||L(e.toastId))?e.toastId:te()}function re(e,t){return $.size>0?F.emit(0,e,t):ee.push({content:e,options:t}),t.toastId}function oe(e,t){return x(x({},t),{},{type:t&&t.type||e,toastId:ne(t)})}function ae(e){return function(t,n){return re(t,oe(e,n))}}function ie(e,t){return re(e,oe(D.DEFAULT,t))}ie.loading=function(e,t){return re(e,oe(D.DEFAULT,x({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},ie.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=N(o)?ie.loading(o,n):ie.loading(o.render,x(x({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=x(x(x({type:e},s),n),{},{data:o}),i=N(t)?{render:t}:t;return r?ie.update(r,x(x({},a),i)):ie(i.render,x(x({},a),i)),o}ie.dismiss(r)},u=R(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},ie.success=ae(D.SUCCESS),ie.info=ae(D.INFO),ie.error=ae(D.ERROR),ie.warning=ae(D.WARNING),ie.warn=ie.warning,ie.dark=function(e,t){return re(e,oe(D.DEFAULT,x({theme:"dark"},t)))},ie.dismiss=function(e){return F.emit(1,e)},ie.clearWaitingQueue=function(e){return void 0===e&&(e={}),F.emit(5,e)},ie.isActive=function(e){var t=!1;return $.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},ie.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=$.get(n||J);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=x(x(x({},r),t),{},{toastId:t.toastId||e,updateId:te()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,re(i,a)}}),0)},ie.done=function(e){ie.update(e,{progress:1})},ie.onChange=function(e){return F.on(4,e),function(){F.off(4,e)}},ie.POSITION=Z,ie.TYPE=D,F.on(2,(function(e){J=e.containerId||e,$.set(J,e),ee.forEach((function(e){F.emit(0,e.content,e.options)})),ee=[]})).on(3,(function(e){$.delete(e.containerId||e),0===$.size&&F.off(0).off(1).off(5)}));var se=n(1893),ce=n(5590),ue=n(184);function le(){var e=(0,c.useState)(""),t=(0,s.Z)(e,2),n=t[0],r=t[1],o=(0,u.lr)(),a=(0,s.Z)(o,2),i=a[0],d=a[1],p=(0,c.useState)(null),f=(0,s.Z)(p,2),y=f[0],b=f[1];return(0,c.useEffect)((function(){if(null!==i.get("query")){var e=i.get("query");(0,l.FE)(e).then((function(e){var t=(0,ce.P)(e.results);b(t),r("")}))}}),[i]),(0,ue.jsxs)(ue.Fragment,{children:[(0,ue.jsx)(K,{}),(0,ue.jsxs)(m,{onSubmit:function(e){e.preventDefault();var t=e.target.elements.query.value.toLowerCase();""!==t.trim()?d({query:t}):ie.error("Please, enter correct movie's name")},children:[(0,ue.jsx)(g,{type:"submit",children:(0,ue.jsx)("span",{children:(0,ue.jsx)(v,{})})}),(0,ue.jsx)(h,{type:"text",name:"query",value:n,onChange:function(e){r(e.target.value)}})]}),y&&(0,ue.jsx)(se.O,{movies:y})]})}},4390:function(e,t,n){n.d(t,{FE:function(){return l},Y5:function(){return m},sv:function(){return y},uV:function(){return v},wr:function(){return p}});var r=n(5861),o=n(7757),a=n.n(o),i=n(4569),s=n.n(i),c="https://api.themoviedb.org/3",u="80905ac5224611f92fb2e3e958ee9afc";function l(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(c,"/search/movie?api_key=").concat(u,"&query=").concat(t,"&page=1"),e.next=3,s().get("".concat(n)).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(c,"/trending/movie/day?api_key=").concat(u,"&page=",1),e.next=3,s().get("".concat(t)).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(c,"/movie/").concat(t,"?api_key=").concat(u,"&language=en-US"),e.next=3,s().get("".concat(n)).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(c,"/movie/").concat(t,"/credits?api_key=").concat(u),e.next=3,s().get("".concat(n)).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(c,"/movie/").concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"),e.next=3,s().get("".concat(n)).then((function(e){return e.data}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},5590:function(e,t,n){n.d(t,{P:function(){return r}});var r=function(e){return e.map((function(e){return{poster_path:e.poster_path,id:e.id,original_title:e.original_title,vote_average:e.vote_average}}))}},9348:function(e,t,n){e.exports=n.p+"static/media/imdbnoimage.d7e60210de6e7d4fcc19.jpg"}}]);
//# sourceMappingURL=40.073a98b5.chunk.js.map
(this.webpackJsonpnewapp=this.webpackJsonpnewapp||[]).push([[0],{10:function(e,n,a){"use strict";a.r(n);var t=a(0),o=a.n(t),r=a(3),c=a.n(r),i=a(1),l=(a(9),function(e){var n=e.type,a=e.id,t=e.title,r=void 0===t?n:t,c=e.placeholder,i=void 0===c?"Enter ".concat(n):c,l=e.description,s=void 0===l?"We'll never share your ".concat(n," with anyone else."):l,u=e.onFocus,m=e.onBlur;return o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:a},r),o.a.createElement("input",{type:n,className:"form-control",id:a,"aria-describedby":"".concat(n,"Help"),placeholder:i,onFocus:u,onBlur:m}),o.a.createElement("small",{id:"".concat(n,"Help"),className:"form-text text-muted"},s))});var s=function(e){var n=e.setIsShowFooter;return o.a.createElement("form",null,o.a.createElement(l,{type:"email",id:"email1",onFocus:function(e){n(!1)},onBlur:function(e){n(!0)}}),o.a.createElement(l,{type:"password",id:"password1",onFocus:function(e){n(!1)},onBlur:function(e){n(!0)}}),["","","",""].map((function(e,a){return o.a.createElement(l,{key:a,type:"number",id:"num".concat(a),title:"Amount of sugar",placeholder:"Enter number of sugar bags",onFocus:function(e){n(!1)},onBlur:function(e){n(!0)},description:"The number of sugar bags that needed to make a cake"})})),o.a.createElement("button",{type:"button",className:"btn btn-primary"},"Submit"))};var u=function(){var e=Object(t.useState)(!0),n=Object(i.a)(e,2),a=n[0],r=n[1],c=Object(t.useState)("Application"),l=Object(i.a)(c,2),u=l[0],m=l[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("nav",{className:"navbar navbar-light bg-light"},o.a.createElement("span",{className:"navbar-brand"},u)),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col"},o.a.createElement("br",null)),o.a.createElement("div",{className:"col"}),o.a.createElement("div",{className:"w-100"}),o.a.createElement("div",{className:"col-12"},o.a.createElement(s,{setIsShowFooter:r}))),a?o.a.createElement(o.a.Fragment,null,[1,1,1,1].map((function(e,n){return o.a.createElement("br",{key:n})})),o.a.createElement("nav",{className:"footer navbar navbar-default fixed-bottom navbar-light bg-light"},o.a.createElement("span",{className:"navbar-brand",onClick:function(){m("Home Page")}},"Home")," |",o.a.createElement("span",{className:"navbar-brand",onClick:function(){m("Album")}},"Album")," |",o.a.createElement("span",{className:"navbar-brand",onClick:function(){m("New Item")}},"New")," |",o.a.createElement("span",{className:"navbar-brand",onClick:function(){m("Activity")}},"Activity")," |",o.a.createElement("span",{className:"navbar-brand",onClick:function(){m("Profile")}},"Profile"))):o.a.createElement("br",null)))};var m=function(){return o.a.createElement(u,null)},d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function f(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(m,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/form_pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/form_pwa","/service-worker.js");d?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var t=a.headers.get("content-type");404===a.status||null!=t&&-1===t.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):f(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):f(n,e)}))}}()},4:function(e,n,a){e.exports=a(10)}},[[4,1,2]]]);
//# sourceMappingURL=main.15ce191a.chunk.js.map
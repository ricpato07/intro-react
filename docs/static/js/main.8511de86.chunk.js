(this["webpackJsonpintro-javascript"]=this["webpackJsonpintro-javascript"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),i=a.n(c),u=a(1),l=a(8),o=function(e){var t=e.setCategories,a=Object(n.useState)(""),c=Object(u.a)(a,2),i=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>0&&(t((function(e){return[i].concat(Object(l.a)(e))})),o(""))}},r.a.createElement("input",{type:"text",value:i,onChange:function(e){o(e.target.value)}}))},m=a(4),s=a.n(m),d=a(7),f=function(){var e=Object(d.a)(s.a.mark((function e(t){var a,n,r,c,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"Ef2Qj1QKRQpwvBTkyW5EDFk8xZgeERqM",a="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&api_key=").concat("Ef2Qj1QKRQpwvBTkyW5EDFk8xZgeERqM","&limit=10"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,c=r.data,i=c.map((function(e){var t;return{id:e.id,title:e.title,url:null===(t=e.images)||void 0===t?void 0:t.downsized_medium.url}})),e.abrupt("return",i);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(e){var t=e.img;return r.a.createElement("div",{className:"card animate__animated animate__fadeIn"},r.a.createElement("img",{alt:t.title,src:t.url}),r.a.createElement("p",null,t.title))},E=function(e){var t=e.category,a=function(e){var t=Object(n.useState)({data:[],loading:!0}),a=Object(u.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){f(e).then((function(e){c({data:e,loading:!1})}))}),[e]),r}(t),c=a.data,i=a.loading;return console.log(c),console.log(i),r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",{className:"card animate__animated animate__fadeIn"},t),r.a.createElement("div",{className:"card-grid"},i&&"Cargando",c.map((function(e){return r.a.createElement(p,{key:e.id,img:e})}))))},g=function(){var e=Object(n.useState)(["Samurai X"]),t=Object(u.a)(e,2),a=t[0],c=t[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"GitExpertApp"),r.a.createElement("hr",null),r.a.createElement(o,{setCategories:c}),r.a.createElement("ol",null,a.map((function(e){return r.a.createElement(E,{key:e,category:e})}))))};a(15);i.a.render(r.a.createElement(g,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.8511de86.chunk.js.map
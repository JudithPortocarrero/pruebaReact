(this.webpackJsonppruebareact=this.webpackJsonppruebareact||[]).push([[0],{4:function(e,t,n){e.exports=n(9)},9:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(3),r=n.n(o),u=n(1),s=function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],o=t[1],r=Object(c.useState)(""),s=Object(u.a)(r,2),i=s[0],b=s[1];return Object(c.useEffect)((function(){fetch("https://api.github.com/users/workshopsjsmvd").then((function(e){return e.json()})).then((function(e){o(e.name),b(e.location)}))})),[a.a.createElement("h1",{key:"name"},"Nombre: ".concat(n)),a.a.createElement("h2",{key:"location"},"Pa\xeds: ".concat(i))]};r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root"))}},[[4,1,2]]]);
//# sourceMappingURL=main.4ace11ef.chunk.js.map
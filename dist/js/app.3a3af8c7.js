webpackJsonp([0],{0:function(t,a,n){t.exports=n("NHnr")},"4+hh":function(t,a){},AnE8:function(t,a){},NHnr:function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=n("/5sW"),i=n("Lgyv"),c=n.n(i),s=(n("4+hh"),n("AnE8"),{name:"cats",data:function(){return{cats:[]}},created:function(){this.getCats()},methods:{getCats:function(){var t=this;fetch("https://api.giphy.com/v1/gifs/search?api_key=xWw0i2Ch0K5rqrUkBc7sCOAS4OKcILIc&q=cat&limit=25&offset=0&rating=G&lang=en").then(function(t){return t.json()}).then(function(a){t.cats=a.data}).catch(function(t){console.log(t)})}}}),r=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"cat-container"},t._l(t.cats,function(a){return a.images.original.url?n("md-card",{key:a.id},[n("md-card-media-cover",{attrs:{"md-solid":""}},[n("md-card-media",[n("img",{attrs:{src:a.images.fixed_width.url,alt:a.title}})]),n("md-card-area",[n("md-card-header",{staticStyle:{"min-height":"50px"}},[n("span",{staticClass:"md-title"},[t._v(t._s(a.title))])])],1)],1)],1):t._e()}))},o=[],l=n("XyMi");function d(t){n("jvAv")}var u=!1,p=d,f=null,m=null,h=Object(l["a"])(s,r,o,u,p,f,m),v=h.exports;e["default"].use(c.a);var g={name:"app",components:{Cats:v}},_=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{attrs:{id:"app"}},[n("md-app",[n("md-app-toolbar",{staticClass:"md-primary"},[n("span",{staticClass:"md-title"},[t._v("Cats To Go")])]),n("md-app-content",[n("Cats")],1)],1)],1)},C=[],y=!1,j=null,x=null,b=null,A=Object(l["a"])(g,_,C,y,j,x,b),O=A.exports;e["default"].config.productionTip=!1,new e["default"]({render:function(t){return t(O)}}).$mount("#app")},jvAv:function(t,a){}},[0]);
//# sourceMappingURL=app.3a3af8c7.js.map
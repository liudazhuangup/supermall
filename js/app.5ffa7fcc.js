(function(t){function e(e){for(var r,a,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);d&&d(e);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return u.p+"js/"+({}[t]||t)+"."+{"chunk-2d0c4643":"05066b85","chunk-2d21a3d2":"9af31f5b","chunk-512f8a4c":"e90032a2","chunk-6654ef4c":"52f3e65f","chunk-744c4a08":"b05fa6c9","chunk-2d6d8ee7":"e8f48d35","chunk-32a72c38":"56651f01"}[t]+".js"}function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-512f8a4c":1,"chunk-6654ef4c":1,"chunk-744c4a08":1,"chunk-2d6d8ee7":1,"chunk-32a72c38":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0c4643":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-512f8a4c":"8818ae1e","chunk-6654ef4c":"34cea861","chunk-744c4a08":"ff9306c9","chunk-2d6d8ee7":"f85a1a46","chunk-32a72c38":"802bc1e6"}[t]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],d.parentNode.removeChild(d),n(c)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(t);var f=new Error;s=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/",u.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0744":function(t,e,n){"use strict";n("7fc4")},3704:function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("keep-alive",{attrs:{exclude:"Detail"}},[n("router-view")],1),t.$route.meta.showTab?n("main-tab-bar"):t._e()],1)},o=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tab-bar",[n("tab-bar-item",{attrs:{path:"/home"}},[n("div",{attrs:{slot:"item-icon"},slot:"item-icon"},[t._v("")]),n("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),n("tab-bar-item",{attrs:{path:"/category"}},[n("div",{attrs:{slot:"item-icon"},slot:"item-icon"},[t._v("")]),n("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),n("tab-bar-item",{attrs:{path:"/cart"}},[n("div",{attrs:{slot:"item-icon"},slot:"item-icon"},[t._v("")]),n("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),n("tab-bar-item",{attrs:{path:"/profile"}},[n("div",{attrs:{slot:"item-icon"},slot:"item-icon"},[t._v("")]),n("span",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},i=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"tab-bar"},on:{scroll:function(t){t.preventDefault()}}},[t._t("default")],2)},s=[],l={},f=l,d=(n("c66f"),n("2877")),h=Object(d["a"])(f,u,s,!1,null,"033e1ce1",null),p=h.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tab-bar-item iconfont",on:{click:t.itemClick}},[n("div",{style:t.activeStyle},[t._t("item-icon")],2),n("div",{style:t.activeStyle},[t._t("item-text")],2)])},v=[],b={props:{path:String,activeColor:{type:String,default:"#c04851"}},data:function(){return{}},computed:{isActive:function(){return-1!==this.$route.path.indexOf(this.path)},activeStyle:function(){return this.isActive?{color:this.activeColor}:{}}},methods:{itemClick:function(){this.$router.push(this.path)}}},k=b,g=(n("6721"),Object(d["a"])(k,m,v,!1,null,null,null)),y=g.exports,_={components:{TabBar:p,TabBarItem:y}},w=_,x=Object(d["a"])(w,c,i,!1,null,null,null),S=x.exports,T={name:"App",components:{MainTabBar:S}},O=T,E=(n("0744"),Object(d["a"])(O,a,o,!1,null,"4126d30a",null)),j=E.exports,C=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),L=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-744c4a08"),n.e("chunk-2d6d8ee7")]).then(n.bind(null,"b3d7"))},P=function(){return n.e("chunk-2d21a3d2").then(n.bind(null,"bb51"))},$=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-6654ef4c")]).then(n.bind(null,"c228"))},A=function(){return n.e("chunk-2d0c4643").then(n.bind(null,"3b42"))},B=function(){return Promise.all([n.e("chunk-512f8a4c"),n.e("chunk-744c4a08"),n.e("chunk-32a72c38")]).then(n.bind(null,"6ab7"))};r["a"].use(C["a"]);var N=C["a"].prototype.push;C["a"].prototype.push=function(t){return N.call(this,t).catch((function(t){return t}))};var M=[{path:"/",redirect:"/home"},{path:"/home",component:L,meta:{showTab:!0}},{path:"/category",component:P,meta:{showTab:!0}},{path:"/cart",component:$,meta:{showTab:!0}},{path:"/profile",component:A,meta:{showTab:!0}},{path:"/detail/:iid",component:B,meta:{showTab:!1}}],D=new C["a"]({mode:"history",base:"/",routes:M}),q=D,F=n("2f62"),I=(n("7db0"),"add_counter"),J="add_to_cart",H={addCart:function(t,e){return new Promise((function(n,r){var a=t.state.cartList.find((function(t){return t.iid===e.iid}));a?(t.commit(I,a),n("商品数量+1")):(e.count=1,t.commit(J,e),n("添加到购物车成功~"))}))}},K=(n("159b"),{add_counter:function(t,e){e.count++},add_to_cart:function(t,e){e.checked=!0,t.cartList.push(e)},checkFalse:function(t,e){t.cartList.forEach((function(t){return t.checked=!1}))},checkTrue:function(t,e){t.cartList.forEach((function(t){return t.checked=!0}))}}),U={cartLength:function(t){return t.cartList.length},cartList:function(t){return t.cartList}};r["a"].use(F["a"]);var z={cartList:[]},G=new F["a"].Store({state:z,mutations:K,actions:H,getters:U,modules:{}}),Q=n("fe3c"),R=n.n(Q),V=n("caf9"),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"toast"},[n("div",[t._v(t._s(t.message))])])},X=[],Y={data:function(){return{message:"ahhaha",isShow:!1}},methods:{show:function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;this.isShow=!0,this.message=t,setTimeout((function(){e.isShow=!1,e.message=""}),n)}}},Z=Y,tt=(n("8d1d"),Object(d["a"])(Z,W,X,!1,null,"e6e136d4",null)),et=tt.exports,nt={install:function(t){var e=t.extend(et),n=new e;n.$mount(document.createElement("div")),document.body.appendChild(n.$el),t.prototype.$toast=n}},rt=nt;r["a"].config.productionTip=!1,r["a"].prototype.$bus=new r["a"],r["a"].use(rt),R.a.attach(document.body),r["a"].use(V["a"],{}),new r["a"]({router:q,store:G,render:function(t){return t(j)}}).$mount("#app")},6721:function(t,e,n){"use strict";n("3704")},"7fc4":function(t,e,n){},"8d1d":function(t,e,n){"use strict";n("eea5")},b8a1:function(t,e,n){},c66f:function(t,e,n){"use strict";n("b8a1")},eea5:function(t,e,n){}});
//# sourceMappingURL=app.5ffa7fcc.js.map
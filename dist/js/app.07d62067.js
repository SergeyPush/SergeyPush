(function(e){function t(t){for(var o,i,c=t[0],s=t[1],u=t[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);l&&l(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(o=!1)}o&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},a=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"398f":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("app-home")],1)},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[e._m(0),n("md-field",[n("label",[e._v("Click to copy in clipboard")]),n("md-textarea",{attrs:{"md-counter":"500",id:"textarea"},on:{click:e.copyText},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),n("md-button",{on:{click:e.generateRandomDescription}},[e._v("Generate new description")])],1)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("span",{staticClass:"md-display-1"},[e._v("Work description generator")])])}],s=(n("a15b"),n("b35b")),u=n("2ef0"),l=n.n(u),f={data:function(){return{data:s,textarea:""}},methods:{generateRandomDescription:function(){this.textarea=l.a.sampleSize(s["qa"],5).join("\n")},copyText:function(){var e=document.getElementById("textarea");e.select(),document.execCommand("copy"),this.$toast.open({message:"Copied to clipboard",type:"success",position:"top-right"})}},mounted:function(){this.generateRandomDescription()}},p=f,d=(n("f505"),n("2877")),v=Object(d["a"])(p,i,c,!1,null,"2481b50f",null),b=v.exports,m={components:{AppHome:b}},h=m,g=(n("5c0b"),Object(d["a"])(h,r,a,!1,null,null,null)),y=g.exports,w=n("9483");Object(w["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var x=n("8c4f");o["default"].use(x["a"]);var _=[{path:"/",name:"Home",component:b}],O=new x["a"]({mode:"history",base:"/",routes:_}),j=O,k=n("2f62");o["default"].use(k["a"]);var S=new k["a"].Store({state:{},mutations:{},actions:{},modules:{}}),P=n("43f9"),C=n.n(P),E=n("b079"),T=n.n(E);n("51de"),n("e094"),n("ce8c");o["default"].use(C.a),o["default"].use(T.a),o["default"].config.productionTip=!1,new o["default"]({router:j,store:S,render:function(e){return e(y)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("9c0c"),r=n.n(o);r.a},"9c0c":function(e,t,n){},b35b:function(e){e.exports=JSON.parse('{"qa":["one","two","three","four","five","six","seven","eight","nine","ten"],"dev":["1","2","3","4","5","6","7","8","9"]}')},f505:function(e,t,n){"use strict";var o=n("398f"),r=n.n(o);r.a}});
//# sourceMappingURL=app.07d62067.js.map
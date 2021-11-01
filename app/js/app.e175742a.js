(function(t){function e(e){for(var n,o,c=e[0],i=e[1],l=e[2],d=0,p=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&p.push(s[o][0]),s[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var i=a[c];0!==s[i]&&(n=!1)}n&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},s={app:0},r=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=i;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0032":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",t._b({class:t.className,domProps:{innerHTML:t._s(t.svgInner)}},"svg",t.attributes,!1))},s=[],r=(a("d3b7"),a("fb6a"),a("e716")),o={name:"SvgIcon",props:{iconName:{type:String,required:!0},className:{type:String}},data:function(){return{svgString:"",attributes:{},svgInner:""}},computed:{filepath:function(){return a("6f32")("./".concat(this.iconName,".svg"))}},created:function(){this.loadFile()},methods:{loadFile:function(){var t=this;fetch(this.filepath).then((function(t){return t.text()})).then((function(e){t.svgString=e,t.getSvgAttrs(),t.getSvgInner()}))},getSvgAttrs:function(){var t=Object(r["a"])(this.svgString),e=t.children[0].properties;for(var a in e)this.attributes[a]=e[a]},getSvgInner:function(){var t=this.svgString.indexOf(">"),e=this.svgString.indexOf("</svg");this.svgInner=this.svgString.slice(t+1,e)}}},c=o,i=a("2877"),l=Object(i["a"])(c,n,s,!1,null,null,null);e["default"]=l.exports},"0374":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",attrs:{"data-id":"lpc-header-2"}},[a("div",{staticClass:"header__title-box"},[a("h1",{staticClass:"header__title"},[t._v("Музыкальная волна")]),a("h2",{staticClass:"header__subtitle"},[t._v("Сборник видеоклипов")])]),a("div",{staticClass:"header__age"},[t._v("18+")])])}],r={name:"lpc-header-2"},o=r,c=(a("146b"),a("2877")),i=Object(c["a"])(o,n,s,!1,null,"069768bb",null);e["default"]=i.exports},"03b3":function(t,e,a){},"0970":function(t,e,a){"use strict";a("1822")},"0ee5":function(t,e,a){"use strict";a("4d25")},"11d2":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-wrapper",attrs:{"data-id":"lpc-button-1"}},[a("button",{staticClass:"activation-button",attrs:{id:"activation-btn",type:"submit"}},[a("span",{staticClass:"activation-btn-text"},[t._v("Подключить")])]),a("div",{staticClass:"price"},[t._v("Доступ: 20 руб./сут.")])])}],r={name:"lpc-button-1"},o=r,c=(a("31a5"),a("2877")),i=Object(c["a"])(o,n,s,!1,null,"df5b179a",null);e["default"]=i.exports},1292:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-export"},[a("button",{staticClass:"btn export__btn",on:{click:t.exportLp}},[t._v("Экспорт")]),a("a",{ref:"downloadLink",staticClass:"download-link",attrs:{href:"#",hidden:""}})])},s=[],r=a("2909"),o=(a("99af"),a("c75e")),c=a("bc3a"),i={name:"TabExport",methods:{exportLp:function(){var t=this,e=document.querySelector(".list-group__header").innerHTML,a=document.querySelector(".list-group__main").innerHTML,n=document.querySelector(".list-group__footer").innerHTML,s=[].concat(Object(r["a"])(this.$store.state.headerList),Object(r["a"])(this.$store.state.mainList),Object(r["a"])(this.$store.state.footerList));o["a"].$emit("toggleEditable"),c.get("/download",{params:{headerHtml:e,mainHtml:a,footerHtml:n,lpCssList:s}}).then((function(e){t.$refs.downloadLink.href=e.data,t.$refs.downloadLink.click()})).catch((function(t){console.log(t)}))}}},l=i,u=a("2877"),d=Object(u["a"])(l,n,s,!1,null,"0f8a7286",null);e["default"]=d.exports},"146b":function(t,e,a){"use strict";a("7751")},1606:function(t,e,a){"use strict";a("5181")},"17d7":function(t,e,a){"use strict";a("cde7")},1822:function(t,e,a){},"199c":function(t,e){},"1cff":function(t,e,a){"use strict";a("9b2c")},"1eff":function(t){t.exports=JSON.parse('{"headers":["lpc-header-1","lpc-header-2","lpc-header-3"],"main":["lpc-button-1","lpc-button-2"],"footers":["lpc-footer-1"]}')},"1f24":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"tabs"},t._l(t.tabs,(function(e,n){return a("li",{key:Math.random()*e.length,staticClass:"tabs__item"},[a("label",{class:["tabs__item-btn",t.checkedTab===n?"tabs__item-btn--active":""],attrs:{for:"tab-"+n}},[t._v(" "+t._s(e)+" ")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.checkedTab,expression:"checkedTab"}],staticClass:"visuallyhidden",attrs:{type:"radio",id:"tab-"+n},domProps:{value:n,checked:t._q(t.checkedTab,n)},on:{change:[function(e){t.checkedTab=n},t.updateStructure]}})])})),0)},s=[],r=a("c75e"),o={name:"Tabs",data:function(){return{checkedTab:this.$store.state.activeTab,tabs:{components:"Компоненты",styles:"Стили",export:"Экспорт"}}},watch:{checkedTab:function(){this.$emit("toggleComponent",this.checkedTab),this.$store.commit("setActiveTab",this.checkedTab)}},methods:{updateStructure:function(){var t=this;this.$nextTick((function(){"styles"===t.checkedTab&&r["a"].$emit("updateStructure")}))}}},c=o,i=(a("b614"),a("2877")),l=Object(i["a"])(c,n,s,!1,null,"46204e3e",null);e["default"]=l.exports},"23be":function(t,e,a){"use strict";var n=a("199c"),s=a.n(n);e["default"]=s.a},2865:function(t,e,a){"use strict";a("03b3")},"2e02":function(t,e,a){},"31a5":function(t,e,a){"use strict";a("9638")},"36fa":function(t,e,a){},"3dfd":function(t,e,a){"use strict";var n=a("de99"),s=a("23be"),r=(a("5c0b"),a("2877")),o=Object(r["a"])(s["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},4360:function(t,e,a){"use strict";var n=a("2909"),s=(a("07ac"),a("a434"),a("b0c0"),a("2b0e")),r=a("2f62"),o=a("1eff"),c=a("7f6d");s["a"].use(r["a"]),e["a"]=new r["a"].Store({state:{components:Object(n["a"])(Object.values(o)),activeTab:"components",chosenOss:"beeline",chosenService:"",activeElemSelector:null,activeElemStyles:null,colorPickers:{},oss:[{name:"Билайн",value:"beeline",id:1e3},{name:"Темафон",value:"temafon",id:2e3},{name:"Теле2",value:"tele2",id:3e3},{name:"Теле2(ТМедиа)",value:"tMedia",id:5e3}],services:{beeline:[{name:"Музыкальная Волна",value:"muzvolna",id:1001},{name:"Караоке",value:"karaoke",id:1002}],temafon:[{name:"Обучающие Курсы",value:"courses",id:2001},{name:"Эролайф, Эромикс, Видеомир",value:"adult",id:2002}]},mainList:[],headerList:[],footerList:[]},mutations:{setOss:function(t,e){t.chosenOss=e},setService:function(t,e){t.chosenService=e},removeItemFromList:function(t,e){t[e.list].splice([e.index],1)},refreshPreview:function(t){for(var e=0,a=[t.headerList,t.mainList,t.footerList];e<a.length;e++){var n=a[e];n.splice(0,n.length)}},updateLpStructure:function(t){"styles"===t.activeTab&&s["a"].nextTick((function(){Object(c["a"])(document.querySelector(".preview-window"),document.querySelector(".structure"),!0)}))},setActiveTab:function(t,e){t.activeTab=e},setComponentStyles:function(t,e){t.activeElemStyles=e.compStyles,t.activeElemSelector=e.dataSelector},addColorPicker:function(t,e){s["a"].set(t.colorPickers,e.name,e.obj)}},actions:{},modules:{}})},"46bb":function(t,e,a){"use strict";a("7d5a")},"4a24":function(t,e,a){"use strict";a("2e02")},"4d25":function(t,e,a){},5181:function(t,e,a){},"53fa":function(t,e,a){t.exports=a.p+"img/refresh.51234a4f.svg"},5518:function(t){t.exports=JSON.parse('{"color":"color","text-align":["start","end","left","right","center","justify","justify-all","match-parent"],"letter-spacing":1,"text-transform":["none","uppercase","lowercase"],"fill":"color","background-color":"color","background-image":"","background-position":"","background-size":""}')},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=a("3dfd"),r=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"main-menu"},[a("div",{staticClass:"main-menu__container"},[a("h1",{staticClass:"main-menu__heading"},[t._v("Новый проект")]),a("ul",{staticClass:"main-menu__list"},[a("li",{staticClass:"main-menu__item"},[a("label",{staticClass:"main-menu__item-label",attrs:{for:"oss"}},[t._v("Оператор:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.chosenOss,expression:"chosenOss"}],staticClass:"main-menu__item-input input",attrs:{name:"oss",id:"oss"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.chosenOss=e.target.multiple?a:a[0]}}},t._l(t.oss,(function(e){return a("option",{key:e.id,domProps:{value:e.value}},[t._v(" "+t._s(e.name)+" ")])})),0)]),a("li",{staticClass:"main-menu__item"},[a("label",{staticClass:"main-menu__item-label",attrs:{for:"service-name"}},[t._v("Сервис:")]),a("select",{directives:[{name:"model",rawName:"v-model",value:t.chosenService,expression:"chosenService"}],staticClass:"main-menu__item-input input",attrs:{name:"service-name",id:"service-name"},on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.chosenService=e.target.multiple?a:a[0]}}},t._l(t.services[t.chosenOss],(function(e){return a("option",{key:e.id,domProps:{value:e.value}},[t._v(" "+t._s(e.name)+" ")])})),0)])]),a("button",{staticClass:"main-menu__start-btn btn btn--wide",attrs:{type:"button",disabled:!t.chosenOss||!t.chosenService},on:{click:t.startBuild}},[t._v(" Начать ")])])])},c=[],i={name:"MainMenu",data:function(){return{chosenOss:"beeline",chosenService:"",oss:this.$store.state.oss,services:this.$store.state.services}},methods:{startBuild:function(){this.$store.commit("setOss",this.chosenOss),this.$store.commit("setService",this.chosenService),this.$router.push("/workspace")}},watch:{chosenOss:function(){this.chosenService=""}}},l=i,u=(a("46bb"),a("2877")),d=Object(u["a"])(l,o,c,!1,null,"6495e3e7",null),p=d.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"constructor"},[a("v-preview"),a("v-controls")],1)},m=[],v=a("e6c4"),h=a("c75a"),b={name:"Workspace",components:{"v-preview":v["default"],"v-controls":h["default"]}},_=b,g=(a("67af"),Object(u["a"])(_,f,m,!1,null,"2bbf3166",null)),y=g.exports;n["a"].use(r["a"]);var C=[{path:"/",name:"StartPage",component:p},{path:"/workspace",name:"Workspace",component:y}],S=new r["a"]({mode:"history",base:"/",routes:C}),x=S,w=a("4360"),$=(a("d81d"),a("d3b7"),a("ddb0"),a("b0c0"),a("ac1f"),a("1276"),a("6ae9"));$.keys().map((function(t){var e;n["a"].component(null!==(e=$(t).default.name)&&void 0!==e?e:t.split("/").pop().split(".")[0],$(t).default)})),n["a"].config.productionTip=!1,new n["a"]({router:x,store:w["a"],render:function(t){return t(s["default"])}}).$mount("#app")},"5ac0":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"btn-wrapper",attrs:{"data-id":"lpc-button-2"}},[a("button",{staticClass:"activation-button",attrs:{id:"activation-btn",type:"submit"}},[a("span",{staticClass:"activation-button__inner-wrap"},[a("span",{staticClass:"activation-btn__text-wrapper--left activation-btn__text-wrapper"},[a("span",{staticClass:"activation-btn__text--left activation-btn__text"},[t._v("Слушать")])]),a("span",{staticClass:"activation-btn__text-wrapper--right activation-btn__text-wrapper"},[a("span",{staticClass:"activation-btn__text--right activation-btn__text"},[t._v("Скачать")])])])]),a("div",{staticClass:"price"},[t._v("Доступ: 20 руб./сут.")])])}],r={name:"lpc-button-2"},o=r,c=(a("7946"),a("2877")),i=Object(c["a"])(o,n,s,!1,null,"aa9d0268",null);e["default"]=i.exports},"5c0b":function(t,e,a){"use strict";a("9c0c")},6421:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",attrs:{"data-id":"lpc-header-3"}},[a("div",{staticClass:"header__title-box"},[a("h1",{staticClass:"header__title"},[t._v("Караоке")]),a("h2",{staticClass:"header__subtitle"},[t._v("Музыкальный сервис")])]),a("div",{staticClass:"header__age"},[t._v("18+")])])}],r={name:"lpc-header-3"},o=r,c=(a("1cff"),a("2877")),i=Object(c["a"])(o,n,s,!1,null,"57df03ec",null);e["default"]=i.exports},"67af":function(t,e,a){"use strict";a("36fa")},"6ae9":function(t,e,a){var n={"./Controls.vue":"c75a","./Preview.vue":"e6c4","./SvgIcon.vue":"0032","./htmlcomps/lpc-button-1.vue":"11d2","./htmlcomps/lpc-button-2.vue":"5ac0","./htmlcomps/lpc-footer-1.vue":"9511","./htmlcomps/lpc-header-1.vue":"89e5","./htmlcomps/lpc-header-2.vue":"0374","./htmlcomps/lpc-header-3.vue":"6421","./tabs/TabComponents.vue":"e6e3","./tabs/TabExport.vue":"1292","./tabs/TabStyles.vue":"befb","./tabs/Tabs.vue":"1f24"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="6ae9"},"6f32":function(t,e,a){var n={"./chain.svg":"ca9a","./refresh.svg":"53fa"};function s(t){var e=r(t);return a(e)}function r(t){if(!a.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}s.keys=function(){return Object.keys(n)},s.resolve=r,t.exports=s,s.id="6f32"},7751:function(t,e,a){},7946:function(t,e,a){"use strict";a("ceb9")},"7d5a":function(t,e,a){},"7f6d":function(t,e,a){"use strict";a.d(e,"a",(function(){return d}));var n=a("b85c"),s=a("2909");a("159b"),a("caad"),a("2532"),a("a630"),a("3ca3"),a("ac1f"),a("1276"),a("99af"),a("2ca0");function r(t,e){var a,n;if(t.split(" ").length>1?(a="".concat(t.split(" ")[0]),n=".".concat(t.split(" ")[1]),t="".concat(a," ").concat(n)):t.startsWith("[")||(t=".".concat(t)),"add"===e){var s=document.querySelector(t),r=s.getBoundingClientRect().y,o=s.getBoundingClientRect().x,c=s.clientWidth,i=s.clientHeight,l=document.createElement("div");l.id="highlighter",l.style.width="".concat(c,"px"),l.style.height="".concat(i,"px"),".preview-window"===t?(l.style.top="".concat(r+3,"px"),l.style.left="".concat(o+3,"px")):(l.style.top="".concat(r,"px"),l.style.left="".concat(o,"px")),document.body.append(l)}else document.getElementById("highlighter").remove()}function o(t){return t=t.startsWith("[")?t.startsWith("[")&&1===t.split(" ").length?"".concat(t):"".concat(t.split(" ")[0]," .").concat(t.split(" ")[1]):".".concat(t),t}a("b64b");var c=a("5518"),i=a("4360");function l(t){for(var e={},a=Object.keys(c),n=0;n<a.length;n++){var s=a[n],r=getComputedStyle(document.querySelector(t))[s];e[s]=r}i["a"].commit("setComponentStyles",{compStyles:e,dataSelector:t})}var u="";function d(t,e,a){a&&Object(s["a"])(e.children).forEach((function(t){Array.from(t.classList).includes("structure__list")&&t.remove()}));var c=document.createElement("ul");c.classList.add("structure__list");var i,p=document.createElement("li");p.classList.add("structure__item"),u=t.dataset.id||u,i=Array.from(t.classList).includes("preview-window")?"".concat(t.className.split(" ")[0].toLowerCase()):t.dataset.id?'[data-id="'.concat(u,'"]'):'[data-id="'.concat(u,'"] ').concat(t.className.split(" ")[0]).toLowerCase();var f="".concat(t.className.split(" ")[0]).toLowerCase(),m=document.createElement("label");m.classList.add("structure__label"),m.setAttribute("for",f);var v=document.createElement("input");v.classList.add("visuallyhidden"),v.classList.add("structure__radiobtn"),v.setAttribute("type","radio"),v.setAttribute("name","structure__radiobtn");var h=o(i);v.setAttribute("data-selector",h),v.id=f,v.addEventListener("change",(function(){l(h)})),m.append(t.className.split(" ")[0].toLowerCase()),p.append(v),p.append(m),p.addEventListener("mouseenter",(function(){r(i,"add")})),p.addEventListener("mouseleave",(function(){r(i,"remove")})),i.split(" ").includes("list-group")?c.classList.add("structure__list--nopadding"):c.append(p),e.append(c);var b,_=Object(n["a"])(t.children);try{for(_.s();!(b=_.n()).done;){var g=b.value;g.className.baseVal||"resizer"===g.className.split(" ")[0].toLowerCase()||d(g,e.lastElementChild,!1)}}catch(y){_.e(y)}finally{_.f()}}},"89e5":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",attrs:{"data-id":"lpc-header-1"}},[a("div",{staticClass:"header__menu"}),a("div",{staticClass:"header__title"},[t._v("Музыкальная волна")]),a("div",{staticClass:"header__age"})])}],r={name:"lpc-header-1"},o=r,c=(a("4a24"),a("2877")),i=Object(c["a"])(o,n,s,!1,null,"4a2c7cd1",null);e["default"]=i.exports},9511:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"rules",attrs:{id:"footer-block","data-id":"lpc-footer-1"}},[a("div",{staticClass:"rules__provider footer-text"},[t._v("Провайдер: ООО «Телеком Клуб»")]),a("div",{staticClass:"rules__contacts footer-text"},[a("a",{staticClass:"rules__phone footer-text tel"},[t._v("88007700431")]),a("span",{staticClass:"rules__mail footer-text"},[t._v("claim@telecom-club.com")])]),a("a",{staticClass:"rules__agreement footer-text",attrs:{href:"http://muzvolna.beeline.ru/rules",target:"_blank"}},[t._v("Пользовательское соглашение")])])}],r={name:"lpc-footer-1"},o=r,c=(a("17d7"),a("2877")),i=Object(c["a"])(o,n,s,!1,null,"0e0a0740",null);e["default"]=i.exports},9638:function(t,e,a){},"9a43":function(t,e,a){},"9b2c":function(t,e,a){},"9c0c":function(t,e,a){},b614:function(t,e,a){"use strict";a("9a43")},befb:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-styles"},[t._m(0),a("div",{staticClass:"styles"},[a("h2",{staticClass:"tab__heading"},[t._v("Стили")]),a("table",{staticClass:"styles__table"},t._l(t.cssGroup,(function(e,n){return a("tr",{key:Math.random()*n.length,staticClass:"styles__row"},[a("td",{staticClass:"styles__prop"},[t._v(t._s(n))]),a("td",{staticClass:"styles__prop-value"},["string"===typeof e&&"color"!==e?a("input",{staticClass:"styles__input",attrs:{type:"text"}}):t._e(),"color"===e?a("button",{staticClass:"color-picker",attrs:{type:"button"}},[t._v("Выбрать цвет")]):t._e(),0===e?a("input",{staticClass:"styles__input",attrs:{type:"number"}}):t._e(),1===e?a("div",{staticClass:"styles__number-input-wrap"},[a("input",{staticClass:"styles__input styles__number-input",attrs:{type:"number"}}),t._m(1,!0)]):t._e(),"object"===typeof e?a("select",t._l(e,(function(e,n){return a("option",{key:n,domProps:{value:e}},[t._v(t._s(e))])})),0):t._e()])])})),0)])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"structure"},[a("h2",{staticClass:"tab__heading"},[t._v("Структура LP")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("select",{staticClass:"styles__unit-select styles__number-input"},[a("option",{attrs:{value:"px"}},[t._v("px")]),a("option",{attrs:{value:"%"}},[t._v("%")]),a("option",{attrs:{value:"vw"}},[t._v("vw")]),a("option",{attrs:{value:"vh"}},[t._v("vh")])])}],r=a("7f6d"),o=(a("a630"),a("3ca3"),a("498a"),a("d3b7"),a("25f0"),a("cc7f"),a("eae0")),c=a.n(o),i=a("4360");function l(){for(var t=Array.from(document.querySelectorAll(".color-picker")),e=function(e){var a=t[e].parentElement.parentElement.children[0].innerHTML.trim(),n=c.a.create({el:".color-picker",theme:"monolith",components:{preview:!0,opacity:!0,hue:!0,interaction:{hex:!0,rgba:!0,input:!0,cancel:!0,save:!0}}});n.on("change",(function(t){if(i["a"].state.activeElemSelector){var e=document.querySelector(i["a"].state.activeElemSelector);e.style[a]=t.toRGBA().toString(0)}})),n.on("save",(function(t){if(i["a"].state.activeElemSelector){var e=document.querySelector(i["a"].state.activeElemSelector);e.style[a]=t.toRGBA().toString(0)}n.hide()})),n.on("cancel",(function(){var t=document.querySelector(i["a"].state.activeElemSelector);t.style[a]=n.getSelectedColor().toRGBA().toString(0),n.hide()})),n.on("hide",(function(){var t=document.querySelector(i["a"].state.activeElemSelector);t.style[a]=n.getSelectedColor().toRGBA().toString(0),n.hide()})),i["a"].commit("addColorPicker",{name:a,obj:n})},a=0;a<t.length;a++)e(a)}function u(t,e){for(var a=0;a<t.rows.length;a++){var n=t.rows[a],s=n.cells[0].innerHTML.trim();switch(s){case"color":case"fill":case"background-color":case"border-top-color":case"border-left-color":case"border-right-color":case"border-bottom-color":i["a"].state.colorPickers[s].setColor(e[s]);break;case"text-align":case"text-transform":case"border-top-style":case"border-left-style":case"border-right-style":case"border-bottom-style":n.cells[1].children[0].value=e[s];break;case"background-image":case"background-position":case"background-size":n.cells[1].children[0].value=e[s];break;case"letter-spacing":case"border-top-width":case"border-left-width":case"border-right-width":case"border-bottom-width":case"border-top-left-radius":case"border-top-right-radius":case"border-bottom-left-radius":case"border-bottom-right-radius":parseFloat(e[s])||0===parseFloat(e[s])?(n.cells[1].children[0].children[0].type="number",n.cells[1].children[0].children[0].value=parseFloat(e[s])):(n.cells[1].children[0].children[0].type="text",n.cells[1].children[0].children[1].disabled=!0,n.cells[1].children[0].children[0].value=e[s]);break}}}var d=a("c75e"),p=a("5518"),f={name:"TabStyles",data:function(){return{cssGroup:p}},methods:{updateStructure:function(){document.querySelector(".structure__list")&&document.querySelector(".structure__list").remove(),Object(r["a"])(document.querySelector(".preview-window"),document.querySelector(".structure"),!0)}},computed:{activeElemStyles:function(){return this.$store.state.activeElemStyles}},watch:{activeElemStyles:function(){u(document.querySelector(".styles__table"),this.activeElemStyles)}},mounted:function(){this.updateStructure(),d["a"].$on("updateStructure",this.updateStructure),l()}},m=f,v=(a("2865"),a("2877")),h=Object(v["a"])(m,n,s,!1,null,null,null);e["default"]=h.exports},c75a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"controls"},[a("v-tabs",{on:{toggleComponent:function(e){return t.setActiveComp(e)}}}),a("div",{staticClass:"controls__content"},[a("keep-alive",[a(t.activeComp,{tag:"component"})],1)],1)],1)},s=[],r=a("1f24"),o=a("e6e3"),c=a("befb"),i=a("1292"),l={name:"Controls",data:function(){return{activeComp:"v-tab-components"}},components:{"v-tabs":r["default"],"v-tab-components":o["default"],"v-tab-styles":c["default"],"v-tab-export":i["default"]},methods:{setActiveComp:function(t){this.activeComp="v-tab-".concat(t)}}},u=l,d=(a("0970"),a("2877")),p=Object(d["a"])(u,n,s,!1,null,"aeabedd0",null);e["default"]=p.exports},c75e:function(t,e,a){"use strict";var n=a("2b0e");e["a"]=new n["a"]},ca9a:function(t,e,a){t.exports=a.p+"img/chain.3ca2cc9a.svg"},cde7:function(t,e,a){},ceb9:function(t,e,a){},de99:function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"b",(function(){return s}));var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},s=[]},e6c4:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"preview"},[a("div",{staticClass:"preview__controls"},[a("button",{staticClass:"preview__refresh-btn",on:{click:t.refreshPreview}},[a("svg-icon",{attrs:{className:"preview__refresh-btn-icon",iconName:"refresh"}}),t._v(" Отчистить ")],1)]),a("div",{staticClass:"preview-window"},[a("draggable",{staticClass:"list-group list-group__header",class:{"placeholder placeholder--header":!t.placeholders.header},attrs:{group:"components"},on:{change:t.updateLpStructure},model:{value:t.$store.state.headerList,callback:function(e){t.$set(t.$store.state,"headerList",e)},expression:"$store.state.headerList"}},t._l(t.$store.state.headerList,(function(e,n){return a(""+e,t._b({key:Math.random()*e.length,tag:"component",nativeOn:{click:function(e){return e.ctrlKey?t.removeComp(n,"headerList"):null}}},"component",{index:n,list:"headerList"},!1))})),1),a("draggable",{staticClass:"list-group list-group__main main",class:{"placeholder placeholder--main":!t.placeholders.main},attrs:{group:"components"},on:{change:t.updateLpStructure},model:{value:t.$store.state.mainList,callback:function(e){t.$set(t.$store.state,"mainList",e)},expression:"$store.state.mainList"}},t._l(t.$store.state.mainList,(function(e,n){return a(""+e,t._b({key:Math.random()*e.length,tag:"component",nativeOn:{click:function(e){return e.ctrlKey?t.removeComp(n,"mainList"):null}}},"component",{index:n,list:"mainList"},!1))})),1),a("draggable",{staticClass:"list-group list-group__footer",class:{"placeholder placeholder--footer":!t.placeholders.footer},attrs:{group:"components"},on:{change:t.updateLpStructure},model:{value:t.$store.state.footerList,callback:function(e){t.$set(t.$store.state,"footerList",e)},expression:"$store.state.footerList"}},t._l(t.$store.state.footerList,(function(e,n){return a(""+e,t._b({key:Math.random()*e.length,tag:"component",nativeOn:{click:function(e){return e.ctrlKey?t.removeComp(n,"footerList"):null}}},"component",{index:n,list:"footerList"},!1))})),1)],1)])},s=[],r=(a("159b"),a("99af"),a("c75e")),o=a("b76a"),c=a.n(o),i=a("0032"),l={name:"Preview",computed:{placeholders:function(){return{header:this.$store.state.headerList.length,main:this.$store.state.mainList.length,footer:this.$store.state.footerList.length}}},methods:{removeAt:function(t){this.$store.commit("removeItemFromList",t)},refreshPreview:function(){this.$store.commit("refreshPreview"),this.$store.commit("updateLpStructure")},removeComp:function(t,e){this.$store.commit("removeItemFromList",{index:t,list:e}),"styles"===this.$store.state.activeTab&&this.$store.commit("updateLpStructure")},toggleTextEditable:function(t){var e=this.getAllTextNodes(document.querySelector(".preview-window"));e.forEach((function(e){e.setAttribute("contenteditable",t)}))},getAllTextNodes:function(t){var e=[];for(t=t.firstChild;t;t=t.nextSibling)3===t.nodeType?e.push(t.parentNode):e=e.concat(this.getAllTextNodes(t));return e},updateLpStructure:function(){this.toggleTextEditable("true"),this.$store.commit("updateLpStructure")}},mounted:function(){var t=this;r["a"].$on("toggleEditable",(function(){t.toggleTextEditable("false")}))},components:{draggable:c.a,"svg-icon":i["default"]}},u=l,d=(a("1606"),a("2877")),p=Object(d["a"])(u,n,s,!1,null,"ccc2e014",null);e["default"]=p.exports},e6e3:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"tab-components"},[a("h2",{staticClass:"list-group__heading"},[t._v("Headers")]),a("draggable",{staticClass:"list-group",attrs:{group:{name:"components",put:!1,pull:"clone"}},model:{value:t.$store.state.components[0],callback:function(e){t.$set(t.$store.state.components,0,e)},expression:"$store.state.components[0]"}},t._l(t.$store.state.components[0],(function(t){return a(""+t,{key:Math.random()*t.length,tag:"component"})})),1),a("h2",{staticClass:"list-group__heading"},[t._v("Mains")]),a("draggable",{staticClass:"list-group",attrs:{group:{name:"components",put:!1,pull:"clone"}},model:{value:t.$store.state.components[1],callback:function(e){t.$set(t.$store.state.components,1,e)},expression:"$store.state.components[1]"}},t._l(t.$store.state.components[1],(function(t){return a(""+t,{key:Math.random()*t.length,tag:"component"})})),1),a("h2",{staticClass:"list-group__heading"},[t._v("Footers")]),a("draggable",{staticClass:"list-group",attrs:{group:{name:"components",put:!1,pull:"clone"}},model:{value:t.$store.state.components[2],callback:function(e){t.$set(t.$store.state.components,2,e)},expression:"$store.state.components[2]"}},t._l(t.$store.state.components[2],(function(t){return a(""+t,{key:Math.random()*t.length,tag:"component"})})),1)],1)},s=[],r=a("b76a"),o=a.n(r),c={name:"TabComponents",components:{draggable:o.a}},i=c,l=(a("0ee5"),a("2877")),u=Object(l["a"])(i,n,s,!1,null,"4eefe1d8",null);e["default"]=u.exports}});
//# sourceMappingURL=app.e175742a.js.map
(function(a){function t(t){for(var r,n,c=t[0],o=t[1],l=t[2],d=0,u=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&u.push(i[n][0]),i[n]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(a[r]=o[r]);p&&p(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var a,t=0;t<s.length;t++){for(var e=s[t],r=!0,c=1;c<e.length;c++){var o=e[c];0!==i[o]&&(r=!1)}r&&(s.splice(t--,1),a=n(n.s=e[0]))}return a}var r={},i={app:0},s=[];function n(t){if(r[t])return r[t].exports;var e=r[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,n),e.l=!0,e.exports}n.m=a,n.c=r,n.d=function(a,t,e){n.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},n.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,t){if(1&t&&(a=n(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(n.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var r in a)n.d(e,r,function(t){return a[t]}.bind(null,r));return e},n.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return n.d(t,"a",t),t},n.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},n.p="/weatherapp-vue/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var p=o;s.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"0250":function(a,t,e){},"034f":function(a,t,e){"use strict";var r=e("64a9"),i=e.n(r);i.a},"1f24":function(a,t,e){},2024:function(a,t,e){"use strict";var r=e("0250"),i=e.n(r);i.a},"56d7":function(a,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("weatherwrapper")],1)},s=[],n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"weatherApp"},[e("div",{staticClass:"searchbar"},[a._m(0),e("button",{staticClass:"locateBtn",on:{click:a.getLocation}},[e("font-awesome-icon",{attrs:{icon:"map-marker-alt"}})],1)]),e("h2",{staticClass:"align-center"},[a._v("Weather")]),a._m(1),e("div",{staticClass:"weather-wrapper"},[e("header",[e("div",{staticClass:"date-wrapper"},[e("p",[a._v("Today, "+a._s(a.date))])]),e("div",{staticClass:"container"},[a.notClicked?e("div",{staticClass:"loader"},[a._m(2)]):a._e(),a.notShow?e("div",[e("h2",{staticClass:"nation-wrapper"},[e("font-awesome-icon",{attrs:{icon:"map-marker-alt"}}),a._v("\n            "+a._s(a.location)+", "+a._s(a.country)+"\n            "),e("img",{staticClass:"country-flag",attrs:{src:a.countryflag}})],1),e("div",{staticClass:"info-wrapper"},[e("img",{attrs:{src:a.icon,alt:"image"}}),e("h1",[a._v(a._s(a.temp)+" ºC")])]),e("p",[a._v(a._s(a.description))])]):a._e()])])]),e("imagewrapper")],1)},c=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"form-group"},[e("input",{attrs:{type:"text",placeholder:"Search for a location"}})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"para"},[e("p",{staticClass:"align-center"},[a._v("Click on the GPS icon above to get current location.")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"lds-roller"},[e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div"),e("div")])}],o=(e("7f7f"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"imageApp"}},[e("h2",{staticClass:"align-center"},[a._v("Wallpapers Today")]),e("p",{staticClass:"align-center"},[a._v("New Downloadable wallpapers")]),e("div",{staticClass:"container"},[e("div",{staticClass:"scroll-slider"},[e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image1}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image2}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image3}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image4}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image5}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image6}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image7}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image8}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image9}})])]),e("div",{staticClass:"card"},[e("div",{staticClass:"image-wrapper"},[e("img",{staticClass:"image-preview",attrs:{src:a.image10}})])])])])])}),l=[],p={data:function(){return{image1:"",image2:"",image3:"",image4:"",image5:"",image6:"",image7:"",image8:"",image9:"",image10:""}},methods:{},mounted:function(){var a=this,t="https://picsum.photos/v2/list?page=2&limit=100";fetch(t).then((function(a){return a.json()})).then((function(t){a.image1=t[0].download_url,a.image2=t[1].download_url,a.image3=t[2].download_url,a.image4=t[3].download_url,a.image5=t[4].download_url,a.image6=t[5].download_url,a.image7=t[6].download_url,a.image8=t[7].download_url,a.image9=t[8].download_url,a.image10=t[9].download_url}))}},d=p,u=(e("7d3c"),e("2877")),m=Object(u["a"])(d,o,l,!1,null,"0686df14",null),g=m.exports,v=(document.querySelector(".date-wrapper"),new Date),f=v.getDate(),w=v.getMonth(),h=v.getFullYear();switch(w){case 0:w="January";break;case 1:w="February";break;case 2:w="March";break;case 3:w="April";break;case 4:w="May";break;case 5:w="June";break;case 6:w="July";break;case 7:w="August";break;case 8:w="September";break;case 9:w="October";break;case 10:w="November";break;case 11:w="December";break}var C={name:"date",components:{Imagewrapper:g},data:function(){return{date:"".concat(f," ").concat(w," , ").concat(h),location:"city",status:"",country:"country",temp:"",description:"...",icon:"",notClicked:!1,notShow:!1,countryflag:""}},methods:{getLocation:function(){var a=this;this.notClicked="true",this.notShow=!1;var t=document.querySelector(".para");t.style.display="none",window.navigator.geolocation?window.navigator.geolocation.getCurrentPosition((function(t){var e="https://api.ipgeolocation.io/ipgeo?apiKey=8e9ac53ddfa4483090ebea86eea0ad9e";fetch(e).then((function(a){return a.json()})).then((function(t){var e=t.latitude,r=t.longitude,i=t.country_flag,s="https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(r,"&APPID=8ba5f95c0efb1a0ddabb8595701ac9ec");fetch(s).then((function(a){return a.json()})).then((function(t){a.icon="https://openweathermap.org/img/w/"+t.weather[0].icon+".png",console.log(t),a.location=t.name,a.country=t.sys["country"],a.temp=Math.floor(t.main["temp"]-273.15),a.status=t.weather["description"],a.description=t.weather[0]["description"],a.countryflag=i,a.notClicked=!1,a.notShow=!0}))}))})):alert("Your browser does not support geolocation")}}},b=C,_=(e("2024"),Object(u["a"])(b,n,c,!1,null,"ae744f72",null)),y=_.exports,k={name:"app",components:{Weatherwrapper:y},data:function(){return{message:"Hello World"}}},j=k,O=(e("034f"),Object(u["a"])(j,i,s,!1,null,null,null)),S=O.exports,P=e("ecee"),x=e("c074"),M=e("ad3d");P["c"].add(x["a"]),r["a"].component("font-awesome-icon",M["a"]),r["a"].config.productionTip=!1,new r["a"]({render:function(a){return a(S)}}).$mount("#app")},"64a9":function(a,t,e){},"7d3c":function(a,t,e){"use strict";var r=e("1f24"),i=e.n(r);i.a}});
//# sourceMappingURL=app.adee178f.js.map
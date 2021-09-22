(this["webpackJsonpcrypto-market-cap-app"]=this["webpackJsonpcrypto-market-cap-app"]||[]).push([[0],{62:function(e,c,t){},68:function(e,c,t){"use strict";t.r(c);var r=t(2),n=t.n(r),a=t(14),i=t.n(a),s=t(4),l=t(15),j=t(31),o=t(7),d=t(19),u=t.n(d),b="GET_CURRENCY_REQUEST",h="GET_CURRENCY_SUCCESS",O="GET_CURRENCY_FAILURE",p="HOMEPAGE_SUCCESS",x="FILTER_CURRENCY",m="STATPAGE_SUCCESS",f=function(){return{type:b}},v=function(e){return{type:h,payload:e}},C=function(e){return{type:O,payload:e}},y=function(e){return{type:m,payload:e}},N=function(){return function(e){e(f),u.a.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false").then((function(c){var t=c.data.map((function(e){return{id:e.id,symbol:e.symbol,name:e.name,image:e.image,price:e.current_price,marketCap:e.market_cap,rank:e.market_cap_rank,totalVolume:e.total_volume,high:e.high_24h,low:e.low_24h}}));e(v(t))})).catch((function(c){var t=c.message;e(C(t))}))}},k=function(e,c){return"all"===c?e:"20000000000"===c?e.filter((function(e){return e.marketCap>=2e10&&e.marketCap<3e10})):"30000000000"===c?e.filter((function(e){return e.marketCap>=3e10&&e.marketCap<4e10})):"40000000000"===c?e.filter((function(e){return e.marketCap>=4e10&&e.marketCap<5e10})):"50000000000"===c?e.filter((function(e){return e.marketCap>=5e10&&e.marketCap<6e10})):"60000000000"===c?e.filter((function(e){return e.marketCap>=6e10&&e.marketCap<7e10})):"70000000000"===c?e.filter((function(e){return e.marketCap>=7e10&&e.marketCap<8e10})):"80000000000"===c?e.filter((function(e){return e.marketCap>=8e10&&e.marketCap<9e10})):e.filter((function(e){return e.marketCap>=9e12}))},g={loading:!1,currency:[],error:"",home:!0,value:"all",filtered:[],data:[]},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,c=arguments.length>1?arguments[1]:void 0;switch(c.type){case b:return Object(o.a)(Object(o.a)({},e),{},{loading:!0});case h:return Object(o.a)(Object(o.a)({},e),{},{loading:!0,currency:c.payload,error:""});case x:return Object(o.a)(Object(o.a)({},e),{},{value:c.payload.value,data:c.payload.data,filtered:k(c.payload.data,c.payload.value)});case O:return{loading:!1,currency:[],error:c.payload};case p:return Object(o.a)(Object(o.a)({},e),{},{home:!0});case m:return Object(o.a)(Object(o.a)({},e),{},{home:c.payload});default:return e}},E=Object(l.b)({currency:S}),_=Object(l.c)(E,Object(l.a)(j.a)),R=t(11),T=t(3),B=(t(62),t(12)),U=t(1),H=function(e){return e.home?Object(U.jsxs)("div",{className:"NavBar-Container",children:[Object(U.jsx)("p",{children:Object(U.jsx)(R.c,{to:"/",children:Object(U.jsx)(B.a,{})})}),Object(U.jsx)("p",{children:"Currency Stats"}),Object(U.jsxs)("div",{children:[Object(U.jsx)("i",{className:"Mic",children:Object(U.jsx)(B.c,{})}),Object(U.jsx)("i",{children:Object(U.jsx)(B.b,{})})]})]}):Object(U.jsxs)("div",{className:"NavBar-Container",children:[Object(U.jsx)("p",{children:"2021"}),Object(U.jsx)("p",{className:"NavBar-Title",children:"Top 10 CryptoCurrencies"}),Object(U.jsxs)("div",{children:[Object(U.jsx)("i",{className:"Mic",children:Object(U.jsx)(B.c,{})}),Object(U.jsx)("i",{children:Object(U.jsx)(B.b,{})})]})]})},w=function(){var e=Object(s.c)((function(e){return e.currency.home}));return Object(U.jsx)("div",{className:"NavBar-Container",children:Object(U.jsx)(H,{home:e})})},A=t.p+"static/media/crypto1.d5c3a47f.svg",Y=t(33),L=function(e){var c=e.currency,t=Object(s.b)(),r=c.id,n=c.symbol,a=c.name,i=c.marketCap;return Object(U.jsx)("li",{className:"Currency",children:Object(U.jsx)(R.b,{to:"/details/".concat(r),onClick:function(){t(y(!0))},value:r,children:Object(U.jsxs)("div",{className:"Currency-Container",children:[Object(U.jsxs)("div",{className:"Currency-Picture",children:[Object(U.jsx)(Y.a,{className:"Arrow"}),Object(U.jsx)("div",{className:"Symbol",children:Object(U.jsx)("p",{children:n.toUpperCase()})})]}),Object(U.jsxs)("div",{className:"Currency-Name",children:[Object(U.jsx)("h2",{children:a}),Object(U.jsx)("p",{children:"$".concat(i)})]})]})},r)})},M=function(e){var c=e.handleSelection;return Object(U.jsxs)("select",{onChange:function(e){return c(e)},className:"Filter",children:[Object(U.jsx)("option",{value:"all",children:"All"}),Object(U.jsx)("option",{value:"20000000000",children:"2 Billion+"}),Object(U.jsx)("option",{value:"30000000000",children:"3 Billion+"}),Object(U.jsx)("option",{value:"40000000000",children:"4 Billion+"}),Object(U.jsx)("option",{value:"50000000000",children:"5 Billion+"}),Object(U.jsx)("option",{value:"60000000000",children:"6 Billion+"}),Object(U.jsx)("option",{value:"70000000000",children:"7 Billion+"}),Object(U.jsx)("option",{value:"80000000000",children:"8 Billion+"})]})};var P=function(){var e=Object(s.c)((function(e){return e.currency.currency})),c=Object(s.c)((function(e){return e.currency.filtered})),t=Object(s.c)((function(e){return e.currency.data})),n=Object(s.c)((function(e){return e.currency.loading})),a=Object(s.b)();Object(r.useEffect)((function(){!1===n&&a(N()),a(y(!1))}),[]);var i=0===c.length&&0===t.length?e:c;return Object(U.jsxs)("div",{className:"Home",children:[Object(U.jsxs)("div",{className:"Header-Container",children:[Object(U.jsx)("div",{className:"Header-Picture",children:Object(U.jsx)("img",{src:A,alt:"Logo"})}),Object(U.jsxs)("div",{className:"Header-Name",children:[Object(U.jsx)("h2",{children:"CryptoCurrencies"}),Object(U.jsxs)("p",{children:["$".concat(function(){for(var c=0,t=0;t<e.length;t+=1)c+=e[t].marketCap;return c}())," ",Object(U.jsx)("br",{})," ","Market Capitalization"]})]})]}),Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{className:"Currency-Stats",children:[Object(U.jsx)("h4",{className:"Currency-Stats1",children:"STATS BY CURRENCY"}),Object(U.jsx)(M,{handleSelection:function(c){var t;a((t={value:c.target.value,data:e},{type:x,payload:t}))}})]}),n,Object(U.jsx)("ul",{className:"Currencies",children:i.map((function(e){return Object(U.jsx)(L,{currency:e},e.id)}))})]})]})},G=function(e){var c=e.currency,t=c.rank,r=c.low,n=c.high,a=c.price,i=c.totalVolume;return Object(U.jsxs)("ul",{className:"Stat-Container",children:[Object(U.jsxs)("li",{children:[Object(U.jsx)("h2",{children:"Rank"}),Object(U.jsx)("p",{children:t})]}),Object(U.jsxs)("li",{children:[Object(U.jsx)("h2",{children:"Price"}),Object(U.jsx)("p",{children:"$".concat(a)})]}),Object(U.jsxs)("li",{children:[Object(U.jsx)("h2",{children:"24 Hour Low"}),Object(U.jsx)("p",{children:"$".concat(r)})]}),Object(U.jsxs)("li",{children:[Object(U.jsx)("h2",{children:"24 Hour High"}),Object(U.jsx)("p",{children:"$".concat(n)})]}),Object(U.jsxs)("li",{children:[Object(U.jsx)("h2",{children:"Total Volume"}),Object(U.jsx)("p",{children:i})]})]})},$=function(e){var c=e.match,t=Object(s.c)((function(e){return e.currency.currency})),n=Object(s.b)();Object(r.useEffect)((function(){window.scrollTo(0,0)}),[]),Object(r.useEffect)((function(){0===t.length&&n(N()),n(y(!0))}),[]);var a=t.find((function(e){return e.id.toString()===c.params.id.toString()}));return 0===t.length?Object(U.jsx)("div",{children:"Loading..."}):Object(U.jsxs)("div",{children:[Object(U.jsxs)("div",{className:"Header-Container",children:[Object(U.jsx)("div",{className:"Header-Picture",children:Object(U.jsx)("img",{src:a.image,alt:"Logo"})}),Object(U.jsxs)("div",{className:"Header-Name",children:[Object(U.jsx)("h2",{children:a.name.toUpperCase()}),Object(U.jsxs)("p",{children:[a.marketCap," ",Object(U.jsx)("br",{})," ","Market Capitalization"]})]})]}),Object(U.jsxs)("div",{className:"All-Stats",children:[Object(U.jsx)("h3",{className:"Currency-Stats",children:"STATS BY CURRENCY"}),Object(U.jsx)(G,{currency:a})]})]})};var F=function(){return Object(U.jsx)("div",{className:"App",children:Object(U.jsxs)(R.a,{children:[Object(U.jsx)(w,{}),Object(U.jsxs)(T.d,{children:[Object(U.jsx)(T.b,{path:"/currencies",children:Object(U.jsx)(P,{})}),Object(U.jsx)(T.b,{path:"/details/:id",component:$}),Object(U.jsx)(T.a,{from:"/",to:"/currencies"})]})]})})};i.a.render(Object(U.jsx)(n.a.StrictMode,{children:Object(U.jsx)(s.a,{store:_,children:Object(U.jsx)(F,{})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.cac8d70f.chunk.js.map
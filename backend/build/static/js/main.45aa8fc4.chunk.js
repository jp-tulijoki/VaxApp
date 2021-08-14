(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{417:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a(27),c=a.n(i),r=a(91),s=a.n(r),l=a(217),o=a(17),j=a(446),d=a(239),b=a(29),u=a(450),h=a(462),x=a(11),O=function(e){var t=e.getStats,a=Object(n.useState)(null),i=Object(o.a)(a,2),c=i[0],r=i[1],s=function(e){r(e);var a=e.toTimeString().substring(0,8),n=e.toISOString().substring(0,11),i="".concat(n).concat(a);t(i)};return Object(x.jsx)(b.a,{utils:d.a,children:Object(x.jsxs)(j.a,{container:!0,justifyContent:"flex-start",children:[Object(x.jsx)(u.a,{disableToolbar:!0,variant:"inline",format:"dd/MM/yyyy",views:["year","month","date"],margin:"normal",id:"date-picker-inline",label:"Select date",value:c,onChange:s,KeyboardButtonProps:{"aria-label":"change date"}}),Object(x.jsx)(h.a,{margin:"normal",id:"time-picker",label:"Select time",value:c,onChange:s,KeyboardButtonProps:{"aria-label":"change time"}})]})})},v=a(454),f=a(458),p=a(232),m=a(233),y=a(112),g=a(109),C=a(242),S=function(e){for(var t=e.stats,a=[],n=0;n<t.dailyCount.length;n++)a.push({name:t.dailyCount[n].vaccine,orders:t.dailyCount[n].orderCount,injections:t.dailyCount[n].injectionCount});return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Daily order stats by producer"}),Object(x.jsxs)(v.a,{width:500,height:300,data:a,margin:{top:5,right:30,left:20,bottom:5},children:[Object(x.jsx)(f.a,{strokeDasharray:"3 3"}),Object(x.jsx)(p.a,{dataKey:"name"}),Object(x.jsx)(m.a,{}),Object(x.jsx)(y.a,{}),Object(x.jsx)(g.a,{}),Object(x.jsx)(C.a,{dataKey:"orders",fill:"#8884d8"}),Object(x.jsx)(C.a,{dataKey:"injections",fill:"#82ca9d"})]})]})},B=a(461),w=a(234),k=function(e){var t=e.stats;if(null===t.vaccinesInExpiredBottles)return Object(x.jsx)(x.Fragment,{});var a=[{name:"Vaccinations before expiration",value:t.vaccinationsBeforeExpiration,fill:"#0ee327"},{name:"Spoiled vaccines",value:t.vaccinesInExpiredBottles-t.vaccinationsBeforeExpiration,fill:"#e30e0e"}];return Object(x.jsxs)("div",{children:[Object(x.jsx)("h2",{children:"Vaccine use efficiency"}),Object(x.jsxs)(B.a,{width:400,height:300,children:[Object(x.jsx)(w.a,{dataKey:"value",data:a,cx:"50%",cy:"50%",outerRadius:80,fill:a.fill,label:!0}),Object(x.jsx)(g.a,{})]})]})},K=function(e){var t=e.stats;if(null===t)return Object(x.jsx)(x.Fragment,{});if("unavailable"===t)return Object(x.jsx)("div",{children:"Unable to fetch stats from the database at the moment."});for(var a=0,n=0,i=0;i<t.dailyCount.length;i++)a+=Number(t.dailyCount[i].orderCount),n+=Number(t.dailyCount[i].injectionCount);return Object(x.jsxs)("div",{children:[Object(x.jsxs)("p",{children:["On the selected day arrived ",Object(x.jsx)("b",{children:a})," orders and"," ",Object(x.jsx)("b",{children:n})," injections."]}),t.dailyCount.length>0?Object(x.jsx)(S,{stats:t}):Object(x.jsx)(x.Fragment,{}),Object(x.jsxs)("p",{children:["By the given time, ",Object(x.jsx)("b",{children:t.expiredBottlesCount})," vaccine bottles have been expired."]}),Object(x.jsx)(k,{stats:t}),Object(x.jsxs)("p",{children:["At the moment, there are ",Object(x.jsx)("b",{children:t.vaccinesLeftToUse})," vaccines available to be used. ",Object(x.jsx)("b",{children:t.expiringVaccines})," of them will expire in 10 days."]})]})},E=a(238),I=a.n(E),V=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],i=t[1],c=function(){var e=Object(l.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.post("http://localhost:5000/api/vaccines",{time:t});case 3:a=e.sent,i(a.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i("unavailable");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)("h1",{children:"Welcome to Vax App!"}),Object(x.jsx)("p",{children:"Please select date and time to see statistics."}),Object(x.jsx)(O,{getStats:c}),Object(x.jsx)(K,{stats:a})]})};c.a.render(Object(x.jsx)(V,{}),document.getElementById("root"))}},[[417,1,2]]]);
//# sourceMappingURL=main.45aa8fc4.chunk.js.map
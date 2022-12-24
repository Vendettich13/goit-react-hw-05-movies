"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[758],{758:function(n,t,e){e.r(t),e.d(t,{default:function(){return v}});var r,a,c,i,o=e(439),u=e(791),s=e(215),p=e(689),f=e(168),d=e(934),h=d.Z.li(r||(r=(0,f.Z)(["\n    border-radius: 10px;\n    overflow: hidden;\n\n    box-shadow: 0px 10px 15px 2px rgba(0,0,0,0.5);\n"]))),l=d.Z.img(a||(a=(0,f.Z)(["\n    width: 100%;\n"]))),g=d.Z.p(c||(c=(0,f.Z)(["\n    font-weight: 500;\n    padding: 5px 10px;\n    display: flex;\n    align-items: center;\n"]))),x=e(184);function m(n){var t=n.actor,e=t.profile_path,r=t.name,a=t.character;return(0,x.jsx)(x.Fragment,{children:e&&(0,x.jsxs)(h,{children:[(0,x.jsx)(l,{src:"".concat("https://image.tmdb.org/t/p/w500")+e,alt:r}),(0,x.jsx)(g,{style:{fontSize:"20px"},children:r}),(0,x.jsxs)(g,{children:["Character: ",a]})]})})}var b=d.Z.ul(i||(i=(0,f.Z)(["\n    padding: 30px 0;\n    text-decoration: none;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    grid-gap: 20px;\n    border-bottom: 3px solid;\n    border-image: linear-gradient(45deg, rgb(30, 1, 252), rgb(255, 255, 12)) 1;\n"])));function v(){var n=(0,u.useState)([]),t=(0,o.Z)(n,2),e=t[0],r=t[1],a=(0,p.UO)().movieId,c=(0,u.useState)(null),i=(0,o.Z)(c,2),f=i[0],d=i[1];return(0,u.useEffect)((function(){(0,s.Wd)(Number(a)).then((function(n){return r(n.data.cast)})).catch((function(n){return d(n.message)}))}),[a]),(0,x.jsxs)(x.Fragment,{children:[f&&"Something wrong, reload the page...",(0,x.jsx)(b,{children:e.map((function(n){return(0,x.jsx)(m,{actor:n},n.id)}))})]})}},215:function(n,t,e){e.d(t,{Df:function(){return l},TP:function(){return b},UN:function(){return x},Wd:function(){return w},tx:function(){return Z}});var r=e(861),a=e(687),c=e.n(a),i=e(388),o="db88cb17e110bf96da2b8bba1fcb8edb",u="https://api.themoviedb.org/3/",s="trending/movie/day",p="search/movie",f="movie/",d="movie/",h="movie/";function l(){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u).concat(s,"?api_key=").concat(o));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u).concat(p,"?api_key=").concat(o,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u).concat(f).concat(t,"?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u).concat(d).concat(t,"/credits?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u).concat(h).concat(t,"/reviews?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=758.6180634a.chunk.js.map
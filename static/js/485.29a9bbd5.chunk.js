"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[485],{554:function(n,t,e){e.d(t,{Y:function(){return x},H:function(){return v}});var r,c,a,o,i=e(168),u=e(934),s=e(87),p=u.Z.img(r||(r=(0,i.Z)(["\n    width: 100%;\n    height: auto;\n"]))),f=u.Z.div(c||(c=(0,i.Z)(["\n    border-radius: 10px;\n    overflow: hidden;\n\n    box-shadow: 0px 10px 15px 2px rgba(0,0,0,0.5);\n    transition: transform cubic-bezier(0.165, 0.84, 0.44, 1) 500ms;\n\n    &:hover,\n    &:focus {\n        transform: scale(1.01);\n    }\n"]))),d=u.Z.p(a||(a=(0,i.Z)(["\n    height: 30px;\n    font-weight: 500;\n    padding: 10px 10px 5px;\n    display: flex;\n    align-items: center;\n"]))),h=(0,u.Z)(s.rU)(o||(o=(0,i.Z)(["\n    text-decoration: none;\n    color: black;\n"]))),l=e(184),x="https://image.tmdb.org/t/p/w500";function v(n){var t=n.movie,e=t.poster_path,r=t.title,c=t.name,a=t.id,o=t.vote_average,i=n.location;return(0,l.jsx)("li",{children:(0,l.jsx)(h,{to:"/movies/".concat(a),state:{from:i},children:(0,l.jsxs)(f,{children:[(0,l.jsx)(p,{src:"".concat(x)+e,alt:r||c}),(0,l.jsx)(d,{style:{fontSize:"20px"},children:r||c}),(0,l.jsxs)(d,{children:["Rate: ",o.toFixed(1)," / 10"]})]})})})}},146:function(n,t,e){e.d(t,{e:function(){return s}});var r,c=e(689),a=e(554),o=e(168),i=e(934).Z.ul(r||(r=(0,o.Z)(["\n    text-decoration: none;\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(4, 1fr);\n    grid-gap: 30px;\n    margin: 30px auto;\n"]))),u=e(184);function s(n){var t=n.movies,e=(0,c.TH)();return(0,u.jsx)(i,{children:t.map((function(n){return(0,u.jsx)(a.H,{movie:n,location:e},n.id)}))})}},485:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var r,c,a=e(439),o=e(215),i=e(791),u=e(146),s=e(168),p=e(87),f=e(934),d=((0,f.Z)(p.OL)(r||(r=(0,s.Z)(["\n    text-decoration: none;\n    font-size: 20px;\n    color: black;\n"]))),f.Z.h1(c||(c=(0,s.Z)(["\n    display: flex;\n     justify-content: center;\n      font-size: 40px;\n"])))),h=e(184);function l(){var n=(0,i.useState)([]),t=(0,a.Z)(n,2),e=t[0],r=t[1],c=(0,i.useState)(null),s=(0,a.Z)(c,2),p=s[0],f=s[1];return(0,i.useEffect)((function(){(0,o.Df)().then((function(n){return r(n.data.results)})).catch((function(n){return f(n.message)}))}),[]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d,{children:"Trending today"}),p&&"Something wrong, reload the page",(0,h.jsx)(u.e,{movies:e})]})}},215:function(n,t,e){e.d(t,{Df:function(){return l},TP:function(){return g},UN:function(){return v},Wd:function(){return b},tx:function(){return w}});var r=e(861),c=e(687),a=e.n(c),o=e(388),i="db88cb17e110bf96da2b8bba1fcb8edb",u="https://api.themoviedb.org/3/",s="trending/movie/day",p="search/movie",f="movie/",d="movie/",h="movie/";function l(){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(s,"?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(p,"?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(f).concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(n){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(d).concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(a().mark((function n(t){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.Z.get("".concat(u).concat(h).concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=485.29a9bbd5.chunk.js.map
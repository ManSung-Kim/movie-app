(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},46:function(e,t){},48:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n.n(i),s=n(15),c=n.n(s),r=(n(25),n.p,n(26),n(5)),a=n.n(r),l=n(6),u=n.n(l),d=n(16),p=n(17),v=n(18),h=n(20),b=n(19),j=(n(46),n(0));var m=function(e){Object(h.a)(n,e);var t=Object(b.a)(n);function n(e){var i;return Object(p.a)(this,n),(i=t.call(this,e)).state={data:[]},i.getMyData=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 3:t=(t=e.sent).data.data.movies,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:return e.prev=10,console.log("data is "+JSON.stringify(t)),i.setState({data:t}),e.finish(10);case 14:case"end":return e.stop()}}),e,null,[[0,7,10,14]])}))),console.log("device ctor"),console.log(e.isMobile),i}return Object(v.a)(n,[{key:"componentDidMount",value:function(){console.log("in componentDidMount"),this.getMyData()}},{key:"componentDidUpdate",value:function(){console.log("in componentDidUpdate")}},{key:"componentWillUnmount",value:function(){console.log("in componentWillUnmount")}},{key:"getYutubeUrl",value:function(e){return"https://www.youtube.com/results?search_query=movie+"+e}},{key:"getRateString",value:function(e){var t,n,i=parseInt(e/2);for(t=0;t<i;t++)n+="\u2b50";return n+="\u2606"}},{key:"handleScroll",value:function(){document.querySelectorAll(".up-on-scroll").forEach((function(e){!function(e,t){return e.getBoundingClientRect().top>window.innerHeight+(t||0)}(e,-20)?(e.style.opacity=1,e.style.transform="translateY(0px)"):(e.style.opacity="0",e.style.transform="translateY(70px)")}))}},{key:"render",value:function(){var e=this;return console.log("is "+JSON.stringify(this.state.data)),console.log("ismobile? "+this.props.isMobile),window.addEventListener("scroll",this.handleScroll),Object(j.jsx)("div",{class:"movies",children:this.state.data.map((function(t){return Object(j.jsxs)("div",{class:(e.props.isMobile?"movie_mobile":"movie")+" up-on-scroll",children:[Object(j.jsx)("a",{class:"movielink",href:e.getYutubeUrl(t.title),target:"_blink",children:Object(j.jsx)("img",{class:"movieposter",src:t.medium_cover_image,loading:"lazy",alt:t.title,title:t.title})}),Object(j.jsxs)("div",{class:"moviesummary",children:[Object(j.jsx)("h1",{children:t.title}),Object(j.jsx)("h4",{children:e.getRateString(t.rating)}),Object(j.jsx)("h4",{children:t.year}),Object(j.jsx)("div",{class:"moviesynopsis",children:Object(j.jsx)("p",{children:t.synopsis})})]})]})}))})}}]),n}(i.Component),g=n(3);var y=function(){var e=Object(g.useMediaQuery)({query:"(min-width:1024px)"}),t=Object(g.useMediaQuery)({query:"(min-width:768px) and (max-width:1023px)"}),n=Object(g.useMediaQuery)({query:"(max-width:767px)"});return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{class:"responsivestate",children:function(){var i="Device is ";return i+=e?"PC":t?"Tablet":n?"Mobile":"unknown"}()}),Object(j.jsx)("div",{class:"container",children:Object(j.jsx)(m,{isMobile:n})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),o(e),s(e),c(e)}))};c.a.render(Object(j.jsx)(o.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),f()}},[[48,1,2]]]);
//# sourceMappingURL=main.c208e242.chunk.js.map
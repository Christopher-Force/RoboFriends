(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{136:function(e,t,n){},440:function(e,t,n){},442:function(e,t,n){"use strict";n.r(t);var r=n(6),c=n.n(r),s=n(17),a=n.n(s),o=(n(136),n(54)),i=n(55),h=n(57),l=n(56),d=n(1),b=function(e){var t=e.name,n=e.email,r=e.id;return Object(d.jsxs)("div",{className:"tc bg-light-green dib dr3 pa3 ma2 grow bw2 shadow-5",children:[Object(d.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"?200x200")}),Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{children:t}),Object(d.jsx)("p",{children:n})]})]})},u=function(e){var t=e.robots;return Object(d.jsx)(c.a.Fragment,{children:t.map((function(e,n){return Object(d.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},t.id)}))})},j=function(e){e.searchfield;var t=e.searchChange;return Object(d.jsx)("div",{className:"pa2",children:Object(d.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t})})},f=function(e){return Object(d.jsx)("div",{style:{overflowY:"scroll",border:"1px solid black",height:"1000px"},children:e.children})},O=(n(138),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={hasError:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(d.jsx)("h1",{children:"Ooops.. That is not good"}):this.props.children}}]),n}(r.Component)),g=(n(440),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{className:"f1",children:"RoboFriends"}),Object(d.jsx)(j,{searchChange:this.onSearchChange}),Object(d.jsx)(f,{children:Object(d.jsx)(O,{children:Object(d.jsx)(u,{robots:r})})})]}):Object(d.jsx)("h1",{children:"Loading..."})}}]),n}(r.Component)),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,443)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),s(e),a(e)}))};n(441);a.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(g,{})}),document.getElementById("root")),p()}},[[442,1,2]]]);
//# sourceMappingURL=main.839f4538.chunk.js.map
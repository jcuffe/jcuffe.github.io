(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{141:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(146),i=(n(153),n(154)),u=n.n(i),s=function(e){var t=e.name,n=e.url,a=e.description;return r.a.createElement("div",{className:u.a.repository},r.a.createElement("h3",null,t),r.a.createElement("p",null,a),r.a.createElement("a",{href:n},"View source"))};n.d(t,"query",function(){return l});t.default=function(e){var t=function(e){return e.githubData.data.viewer.pinnedRepositories.edges.map(function(e){return Object.assign({},e.node)})}(e.data);return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Portfolio pieces"),r.a.createElement("div",null,t.map(function(e,t){return r.a.createElement(s,Object.assign({key:t},e))})))};var l="1624744368"},143:function(e,t,n){"use strict";var a=n(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=a(n(148)),o=a(n(149)),i=a(n(7)),u=a(n(52)),s=a(n(53)),l=a(n(4)),c=a(n(0)),d=n(17),f=n(144);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:l.default.string,activeStyle:l.default.object},v=function(e){function t(t){var n;n=e.call(this,t)||this,(0,s.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},n.props.style,n.props.activeStyle)}:null});var a=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(a=!0),n.state={IOSupported:a},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,i.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,a,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(a=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(a.unobserve(t),a.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,a=t.getProps,i=void 0===a?this.defaultGetProps:a,u=t.onClick,s=t.onMouseEnter,l=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,v=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var m=p(n);return c.default.createElement(d.Link,(0,o.default)({to:m,state:l,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){s&&s(e),___loader.hovering((0,f.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),y(n,{state:l,replace:h})),!0}},v))},t}(c.default.Component);v.propTypes=(0,o.default)({},h,{innerRef:l.default.func,onClick:l.default.func,to:l.default.string.isRequired,replace:l.default.bool});var m=c.default.forwardRef(function(e,t){return c.default.createElement(v,(0,o.default)({innerRef:t},e))});t.default=m;var y=function(e,t){window.___navigate(p(e),t)};t.navigate=y;var g=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=g;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),g(e)}},144:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(143),s=n.n(u);n.d(t,"Link",function(){return s.a}),n.d(t,"withPrefix",function(){return u.withPrefix}),n.d(t,"navigate",function(){return u.navigate}),n.d(t,"push",function(){return u.push}),n.d(t,"replace",function(){return u.replace}),n.d(t,"navigateTo",function(){return u.navigateTo});var l=n(145),c=n.n(l);n.d(t,"PageRenderer",function(){return c.a});var d=n(33);n.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,n){var a;e.exports=(a=n(150))&&a.default||a},146:function(e,t,n){"use strict";var a=n(147),r=n(0),o=n.n(r),i=n(144),u=n(151),s=n.n(u);t.a=function(e){var t=e.children;return o.a.createElement(i.StaticQuery,{query:"1097489062",render:function(e){return function(e,t){return o.a.createElement("div",null,o.a.createElement("div",{className:s.a.gradient}),o.a.createElement("div",{className:s.a.layout},o.a.createElement("header",{className:s.a.header},o.a.createElement(i.Link,{to:"/"},o.a.createElement("h3",null,e.site.siteMetadata.title)),o.a.createElement("span",{className:s.a.navigation},o.a.createElement(i.Link,{to:"/"},"About"),o.a.createElement(i.Link,{to:"/blog/"},"Blog"),o.a.createElement(i.Link,{to:"/portfolio/"},"Portfolio"),o.a.createElement("a",{target:"_blank",href:"https://resume.creddle.io/resume/xsgwo141h1"},"Resume"))),t))}(e,t)},data:a})}},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Jared Cuffe"}}}}},148:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}},149:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},n.apply(this,arguments)}e.exports=n},150:function(e,t,n){"use strict";n.r(t);n(32);var a=n(0),r=n.n(a),o=n(4),i=n.n(o),u=n(54),s=n(2),l=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(u.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},151:function(e,t,n){e.exports={gradient:"layout-module--gradient--s9OUM",layout:"layout-module--layout--2XPd8",header:"layout-module--header--rB-aY",navigation:"layout-module--navigation--1zoOl"}},153:function(e,t,n){var a=n(25).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||n(16)&&a(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},154:function(e,t,n){e.exports={repository:"repository-module--repository--1YEkV"}}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-53689fa1b10e5eabb08e.js.map
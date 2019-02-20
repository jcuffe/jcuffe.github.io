(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{139:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(146);t.default=function(){return r.a.createElement(o.a,null,r.a.createElement("h1",null,"About Me"),r.a.createElement("p",null,"Hi! My name is Jared, and I have been fascinated with code all my life - I got my start hacking on the Half-Life video game's SDK when I was in high school! I was born with a love for solving puzzles and exploring the unknown. I am a California native, and despite enduring almost 30 summers here, I am glad to call this state my home."),r.a.createElement("p",null,"After trying out some entry level jobs and an indulgence of my curiosity toward the manual trades, I discovered and enrolled in the Lambda programming school. After six months of instruction and work based on Agile methodology, I have become very proficient in navigating the industry's Git-based workflow and frequent face-to-face meetings. I have enjoyed every moment, and I believe that the individuals at Lambda are at the top of their field as hands-on educators, instilling graduates with the specific work and communication skills that they will need master to succeed."),r.a.createElement("p",null,"I am excited by the many divergent paths taken by the tech community, pursuing different sectors of the economy and everyday life, allowing developers a great amount of choice in how their efforts are applied to the surface of society. I am particularly interested in the fields of security, blockchain histories, and economics. I feel that the software developed in the next 20 years may decide the winners of the global economy, and cause either a great increase or decrease in personal economic freedom. My greatest dream is to be on the side of the people in this arena, perhaps developing decentralized banking software, or an international news site with a literally impeccable record of events."))}},143:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.withPrefix=p,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var r=n(a(148)),o=n(a(149)),i=n(a(7)),s=n(a(52)),l=n(a(53)),u=n(a(4)),c=n(a(0)),d=a(17),f=a(144);function p(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var h={activeClassName:u.default.string,activeStyle:u.default.object},m=function(e){function t(t){var a;a=e.call(this,t)||this,(0,l.default)((0,s.default)((0,s.default)(a)),"defaultGetProps",function(e){return e.isCurrent?{className:[a.props.className,a.props.activeClassName].filter(Boolean).join(" "),style:(0,o.default)({},a.props.style,a.props.activeStyle)}:null});var n=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(n=!0),a.state={IOSupported:n},a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,f.parsePath)(this.props.to).pathname)},a.handleRef=function(e){var t,a,n,r=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,a=function(){___loader.enqueue((0,f.parsePath)(r.props.to).pathname)},(n=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t),n.disconnect(),a())})})).observe(t))},a.render=function(){var e=this,t=this.props,a=t.to,n=t.getProps,i=void 0===n?this.defaultGetProps:n,s=t.onClick,l=t.onMouseEnter,u=(t.activeClassName,t.activeStyle,t.innerRef,t.state),h=t.replace,m=(0,r.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","innerRef","state","replace"]);var v=p(a);return c.default.createElement(d.Link,(0,o.default)({to:v,state:u,getProps:i,innerRef:this.handleRef,onMouseEnter:function(e){l&&l(e),___loader.hovering((0,f.parsePath)(a).pathname)},onClick:function(t){return s&&s(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),g(a,{state:u,replace:h})),!0}},m))},t}(c.default.Component);m.propTypes=(0,o.default)({},h,{innerRef:u.default.func,onClick:u.default.func,to:u.default.string.isRequired,replace:u.default.bool});var v=c.default.forwardRef(function(e,t){return c.default.createElement(m,(0,o.default)({innerRef:t},e))});t.default=v;var g=function(e,t){window.___navigate(p(e),t)};t.navigate=g;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(p(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(p(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(143),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var u=a(145),c=a.n(u);a.d(t,"PageRenderer",function(){return c.a});var d=a(33);a.d(t,"parsePath",function(){return d.a});var f=r.a.createContext({}),p=function(e){return r.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},146:function(e,t,a){"use strict";var n=a(147),r=a(0),o=a.n(r),i=a(144),s=a(151),l=a.n(s);t.a=function(e){var t=e.children;return o.a.createElement(i.StaticQuery,{query:"1097489062",render:function(e){return function(e,t){return o.a.createElement("div",null,o.a.createElement("div",{className:l.a.gradient}),o.a.createElement("div",{className:l.a.layout},o.a.createElement("header",{className:l.a.header},o.a.createElement(i.Link,{to:"/"},o.a.createElement("h3",null,e.site.siteMetadata.title)),o.a.createElement("span",{className:l.a.navigation},o.a.createElement(i.Link,{to:"/"},"About"),o.a.createElement(i.Link,{to:"/blog/"},"Blog"),o.a.createElement(i.Link,{to:"/portfolio/"},"Portfolio"),o.a.createElement("a",{target:"_blank",href:"https://resume.creddle.io/resume/xsgwo141h1"},"Resume"))),t))}(e,t)},data:n})}},147:function(e){e.exports={data:{site:{siteMetadata:{title:"Jared Cuffe"}}}}},148:function(e,t){e.exports=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}},149:function(e,t){function a(){return e.exports=a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},a.apply(this,arguments)}e.exports=a},150:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),o=a(4),i=a.n(o),s=a(54),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},151:function(e,t,a){e.exports={gradient:"layout-module--gradient--s9OUM",layout:"layout-module--layout--2XPd8",header:"layout-module--header--rB-aY",navigation:"layout-module--navigation--1zoOl"}}}]);
//# sourceMappingURL=component---src-pages-index-js-9f71b4f61329d683f320.js.map
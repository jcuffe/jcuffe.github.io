(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return g});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(157),c=a.n(s),l=a(160),p=a(187),m=a(226),u=a(156),d=a.n(u),h=(a(432),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges;return o.a.createElement(l.a,null,o.a.createElement("div",{className:"index-container"},o.a.createElement(c.a,{title:d.a.siteTitle}),o.a.createElement(m.a,null),o.a.createElement(p.a,{postEdges:e})))},t}(o.a.Component));t.default=h;var g="1411389146"},156:function(e,t){e.exports={siteTitle:"Gatsby Advanced Starter",siteTitleShort:"GA Starter",siteTitleAlt:"GatsbyJS Advanced Starter",siteLogo:"/logos/logo-1024.png",siteUrl:"https://vagr9k.github.io",pathPrefix:"/gatsby-advanced-starter",siteDescription:"A GatsbyJS stater with Advanced design in mind.",siteRss:"/rss.xml",siteFBAppID:"1825356251115265",googleAnalyticsID:"UA-47311644-5",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"DD/MM/YYYY",userName:"Advanced User",userTwitter:"",userLocation:"North Pole, Earth",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.",userLinks:[{label:"GitHub",url:"https://github.com/Vagr9K/gatsby-advanced-starter",iconClassName:"fa fa-github"},{label:"Twitter",url:"https://twitter.com/Vagr9K",iconClassName:"fa fa-twitter"},{label:"Email",url:"mailto:vagr9k@gmail.com",iconClassName:"fa fa-envelope"}],copyright:"Copyright © 2017. Advanced User",themeColor:"#c62828",backgroundColor:"#e0e0e0"}},160:function(e,t,a){"use strict";a.d(t,"a",function(){return m});var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(157),c=a.n(s),l=a(156),p=a.n(l),m=(a(161),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.children;return o.a.createElement("div",{className:"root-layout"},o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:p.a.siteDescription})),e)},t}(o.a.Component))},161:function(e,t,a){},187:function(e,t,a){"use strict";a(53),a(79),a(80);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(38),c=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var a=t.prototype;return a.getPostList=function(){var e=[];return this.props.postEdges.forEach(function(t){e.push({path:t.node.fields.slug,tags:t.node.frontmatter.tags,cover:t.node.frontmatter.cover,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead})}),e},a.render=function(){var e=this.getPostList();return o.a.createElement("div",null,e.map(function(e){return o.a.createElement(s.Link,{to:e.path,key:e.title},o.a.createElement("h1",null,e.title))}))},t}(o.a.Component);t.a=c},195:function(e,t,a){var n,r,i;i=function(){return function(){return function(e){var t=[];if(e[0].match(/^[^\/:]+:\/*$/)&&e.length>1){var a=e.shift();e[0]=a+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^\/:]+):\/*/,"$1://");for(var n=0;n<e.length;n++){var r=e[n];if("string"!=typeof r)throw new TypeError("Url must be a string. Received "+r);""!==r&&(n>0&&(r=r.replace(/^[\/]+/,"")),r=n<e.length-1?r.replace(/[\/]+$/,""):r.replace(/[\/]+$/,"/"),t.push(r))}var i=t.join("/"),o=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=o.shift()+(o.length>0?"?":"")+o.join("&")}("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(r="function"==typeof(n=i)?n.call(t,a,t,e):n)||(e.exports=r)},226:function(e,t,a){"use strict";var n=a(7),r=a.n(n),i=a(0),o=a.n(i),s=a(157),c=a.n(s),l=a(195),p=a.n(l),m=a(156),u=a.n(m),d=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t,a,n,r=this.props,i=r.postNode,s=r.postPath,l=r.postSEO;if(l){var m=i.frontmatter;e=m.title,t=m.description?m.description:i.excerpt,a=m.cover.publicURL,n=p()(u.a.siteUrl,u.a.pathPrefix,s)}else e=u.a.siteTitle,t=u.a.siteDescription,a=u.a.siteLogo;a=p()(u.a.siteUrl,u.a.pathPrefix,a);var d=p()(u.a.siteUrl,u.a.pathPrefix),h=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:""}];return l&&h.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:u.a.siteTitleAlt?u.a.siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:a},description:t}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:t}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(h)),o.a.createElement("meta",{property:"og:url",content:l?n:d}),l?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:e}),o.a.createElement("meta",{property:"og:description",content:t}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:u.a.siteFBAppID?u.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:u.a.userTwitter?u.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:e}),o.a.createElement("meta",{name:"twitter:description",content:t}),o.a.createElement("meta",{name:"twitter:image",content:a}))},t}(i.Component);t.a=d},432:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-jsx-9e22c7f416ab362c9871.js.map
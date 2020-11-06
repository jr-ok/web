(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{81:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(0),l=a.n(r),o=a(86),s=a(94),c=a(95);function i(e){var t=e.title,a=e.children,n=e.language;return l.a.createElement("div",{className:"code-with-header"},l.a.createElement("div",{className:"code-header"},t),l.a.createElement(c.a,{className:n},a))}a(72);var u=function(){return l.a.createElement("form",{className:"email-signup-form",action:"https://gmail.us4.list-manage.com/subscribe/post?u=8139c7de74df98aa17054b235&id=f0c6ba5f1d",method:"post"},l.a.createElement("input",{"aria-label":"Email address",name:"EMAIL",type:"email",required:!0,className:"input",placeholder:"Enter your email"}),l.a.createElement("div",{className:""},l.a.createElement("button",{className:"button button--primary",type:"submit"},"Subscribe")))},m=a(87),p=a(82),d=a(84),g=a(88),h=a(73),f=a.n(h),y=[{title:"Quick start",description:l.a.createElement(l.a.Fragment,null,"No more endless configuration files. Create a production-ready web app with just a few lines of code - we will set you up with all the best defaults.")},{title:"Speed & Power",description:l.a.createElement(l.a.Fragment,null,"Move fast using Wasp's declarative language, but also drop down to ",l.a.createElement("code",null,"js/html/css...")," when you require more control.")},{title:"No lock-in",description:l.a.createElement(l.a.Fragment,null,"If Wasp becomes too limiting for you, simply eject and continue with the human-readable source code following industry best-practices.")}];function E(e){var t=e.imageUrl,a=e.title,n=e.description,r=Object(d.a)(t);return l.a.createElement("div",{className:Object(o.a)("col col--4",f.a.feature)},r&&l.a.createElement("div",{className:"text--center"},l.a.createElement("img",{className:f.a.featureImage,src:r,alt:a})),l.a.createElement("h2",null,a),l.a.createElement("p",null,n))}function v(){return l.a.createElement("section",{className:"section-lg"},l.a.createElement("div",{className:"container",style:{textAlign:"center"}},l.a.createElement("img",{className:"logo",src:"img/eqpar-separator.png"})))}function b(){return l.a.createElement(i,{title:"todoApp.wasp",language:"css"},'app todoApp {\n  title: "ToDo App" /* visible in browser tab */\n}\n\n/* full-stack auth out-of-the-box */\nauth {\n  userEntity: User,\n  methods: [ EmailAndPassword ]\n}\n\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/Main" /* import React code */\n}\n')}function N(){var e=Object.freeze({NEW_APP:"Create a new app",DEFINE_ENTITY:"Define and query a data model",ADD_AUTH:"Add authentication"}),t=Object(r.useState)(e.NEW_APP),a=t[0],n=t[1];function s(){if(a===e.NEW_APP){return l.a.createElement("div",{className:"codeExampleFiles"},l.a.createElement(i,{title:"todoApp.wasp",language:"css"},'/* global app settings */\napp todoApp {\n  title: "ToDo App" /* browser tab title */\n}\n\n/* routing */\nroute "/" -> page Main\npage Main {\n  component: import Main from "@ext/Main" /* import your React code */\n}\n'),l.a.createElement(i,{title:"ext/Main.js | External React code, imported above",language:"jsx"},"import React from 'react'\n\nexport default () => <span> Hello World! </span>\n"),l.a.createElement("div",null,"That's it, this is the whole app! Run ",l.a.createElement("code",null,"wasp start")," and check it out at ",l.a.createElement("code",null,"http://localhost:3000"),"!"))}if(a===e.ADD_AUTH){return l.a.createElement("div",{className:"codeExampleFiles"},l.a.createElement(i,{title:"todoApp.wasp",language:"css"},"/* ... */\n\n/* full-stack auth out-of-the-box */\nauth {\n  userEntity: User,\n  methods: [ EmailAndPassword ] /* more methods coming soon */\n}\n\n/* email & password required because of the auth method above */\nentity User {=psl\n    id          Int     @id @default(autoincrement())\n    email       String  @unique\n    password    String\npsl=}\n"),l.a.createElement(i,{title:"ext/Main.js | Checking if user is logged in",language:"jsx"},"import React from 'react'\nimport { Link } from 'react-router-dom'\nimport useAuth from '@wasp/auth/useAuth.js'\nimport Todo from './Todo.js'\n\nexport default () => {\n  // A hook provided by Wasp.\n  const { data: user } = useAuth()\n\n  if (!user) {\n    return <span>\n             Please login or signup <Link to='/login'>here</Link>.\n           </span>\n  } else {\n    return <Todo/>\n  }\n}\n"),l.a.createElement("div",null,"To learn more about authentication & authorization in Wasp, check the ",l.a.createElement(m.a,{to:Object(d.a)("/docs/language/basic-elements#authentication--authorization")},"docs"),"."))}if(a===e.DEFINE_ENTITY){return l.a.createElement("div",{className:"codeExampleFiles"},l.a.createElement(i,{title:"todoApp.wasp",language:"css"},'/* ... */\n\n/* Data model is defined via Prisma Schema Language (PSL) */\nentity Task {=psl\n    id          Int     @id @default(autoincrement())\n    description String\n    isDone      Boolean @default(false)\npsl=}\n\nquery getTasks {\n  fn: import { getTasks } from "@ext/queries.js", /* import Node.js function */\n  /* A list of entities this query uses - useful for automatic invalidation and refetching */\n  entities: [Task]\n}\n'),l.a.createElement(i,{title:"ext/queries.js | Node.js function imported in a query above",language:"jsx"},"export const getTasks = async (args, context) => {\n  // Since we above declared this query is using Task, it is automatically injected in the\n  // context.\n  return context.entities.Task.findMany()\n}\n"),l.a.createElement(i,{title:"ext/Todo.js | Invoking query from React code",language:"jsx"},"import React from 'react'\nimport { useQuery } from '@wasp/queries'\nimport getTasks from '@wasp/queries/getTasks.js'\n\nexport default () => {\n  // Standard useQuery syntax, Wasp provides a thin wrapper around it.\n  const { data: tasks } = useQuery(getTasks)\n  return <Tasks tasks={tasks}/>\n}\n"),l.a.createElement("div",null,"To learn more about working with data in Wasp, check the ",l.a.createElement(m.a,{to:Object(d.a)("/docs/language/language/basic-elements#entity")},"docs"),"."))}return console.log("this should never happen."),null}function c(){function t(t){var r=t.codeExampleKey;return l.a.createElement("button",{className:Object(o.a)("button","info",a===e[r]&&"is-active","button--secondary"),onClick:function(){return n(e[r])}},e[r])}return Object.keys(e).map((function(e){return l.a.createElement(t,{codeExampleKey:e})}))}return l.a.createElement("div",{className:"row CodeExamples"},l.a.createElement("div",{className:"ButtonTabs col col--3"},l.a.createElement("div",null,l.a.createElement(c,null))),l.a.createElement("div",{className:"col col--9"},l.a.createElement(s,null)))}function k(){return l.a.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=wasp-lang&repo=wasp&type=star&count=true&size=large",frameborder:"0",scrolling:"0",width:"160px",height:"30px"})}function j(){return l.a.createElement("section",{className:"section-lg bg-diff",id:"signup"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered)},l.a.createElement("div",{className:"col col--10 col--offset-1"},l.a.createElement("h2",null,"Stay up to date"),l.a.createElement("h3",null,l.a.createElement("p",null,"Join our mailing list and be the first to know when we ship new features and updates!")))),l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered),style:{paddingTop:"1rem"}},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement(u,null))),l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered,"section-text")},l.a.createElement("div",{className:"col col--10 col--offset-1"},l.a.createElement("h3",null,l.a.createElement("p",null,"Also, make sure to check out ",l.a.createElement(m.a,{to:"https://github.com/wasp-lang/wasp"},"Wasp repo on Github")," and express your support by giving us a star!")))),l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered),style:{paddingTop:"1rem"}},l.a.createElement("div",{className:"col"},l.a.createElement(k,null)))))}t.default=function(){var e=Object(p.a)().siteConfig,t=void 0===e?{}:e,a=Object(d.a)("docs/tutorials/todo-app");return l.a.createElement(s.a,{title:""+t.title,description:t.tagline},l.a.createElement(g.a,null,l.a.createElement("meta",{property:"og:image",content:Object(d.a)("img/hero-code-shot.png")})),l.a.createElement("header",{className:Object(o.a)("hero",f.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--5"},l.a.createElement("h1",{className:"hero-title"},"Web App Specification Language"),l.a.createElement("p",{className:"hero-subtitle"},t.tagline),l.a.createElement("div",{className:f.a.buttons},l.a.createElement(m.a,{className:Object(o.a)("button button--outline button--secondary button--lg",f.a.heroButton),to:Object(d.a)("docs/tutorials/getting-started")},"Get Started"),l.a.createElement(m.a,{className:Object(o.a)("button button--secondary button--lg",f.a.heroButton),to:a},"Take the Tutorial")),l.a.createElement(k,null))," ",l.a.createElement("div",{className:"col col--7"},l.a.createElement(b,null)))," ")),l.a.createElement("main",null,l.a.createElement("section",{className:"section-lg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered)},l.a.createElement("div",{className:"col col--10 col--offset-1"},l.a.createElement("h3",{className:"title"},"Made for devs who want to ",l.a.createElement("span",{className:"title-strong"},"use modern web dev stack")," (React, Node.js, Prisma)\xa0",l.a.createElement("br",null),l.a.createElement("span",{className:"title-strong"},"without writing boilerplate"),"."),l.a.createElement("h3",null,l.a.createElement("p",null,"Front-end, back-end and deployment - all within one concise DSL.")))))),l.a.createElement(v,null),l.a.createElement("section",{className:"section-lg",id:"how-it-works"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered)},l.a.createElement("div",{className:"col col--10 col--offset-1"},l.a.createElement("h2",null,"How it works"),l.a.createElement("h3",null,l.a.createElement("p",null,"Given ",l.a.createElement("code",null,".wasp")," files as an input, Wasp compiler\xa0",l.a.createElement("span",{className:"title-strong"},"generates the full source code of your web app")," - front-end, back-end and deployment."),l.a.createElement("p",null,"Wasp also ",l.a.createElement("span",{className:"title-strong"},"integrates with the modern web dev technologies")," - React, Node.js, CSS, ...")))),l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered),style:{paddingTop:"2rem"}},l.a.createElement("div",{className:"col"},l.a.createElement("img",{className:"wasp-diagram",src:"img/wasp-compilation.png",alt:"Wasp compilation"}))))),l.a.createElement(v,null),y&&y.length>0&&l.a.createElement("section",{className:Object(o.a)(f.a.features,"bg-diff")},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},y.map((function(e,t){return l.a.createElement(E,Object(n.a)({key:t},e))}))))),l.a.createElement(v,null),l.a.createElement("section",{className:"section-lg",id:"the-language"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered)},l.a.createElement("div",{className:"col col--10 col--offset-1"},l.a.createElement("h2",null,"The Language"),l.a.createElement("h3",null,l.a.createElement("p",null,"Concepts such as ",l.a.createElement("em",null,"app"),", ",l.a.createElement("em",null,"page"),", ",l.a.createElement("em",null,"route"),", ",l.a.createElement("em",null,"auth"),"\xa0 etc. are baked into Wasp, providing the higher level of expressiveness.")))),l.a.createElement(N,null))),l.a.createElement("section",{className:"section-lg"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered)},l.a.createElement("div",{className:"col col--10 col--offset-1"},l.a.createElement("h2",null,"Take the tutorial"),l.a.createElement("h3",null,l.a.createElement("p",null,"Take ",l.a.createElement(m.a,{to:a},"our tutorial")," and build a full-fledged Todo app in Wasp! You can find it ",l.a.createElement(m.a,{to:a},"here"),".")))),l.a.createElement("div",{className:Object(o.a)("row",f.a.responsiveCentered),style:{paddingTop:"2rem"}},l.a.createElement("div",{className:"col"},l.a.createElement("img",{alt:"How Todo App will work once it is done",src:Object(d.a)("img/todo-app-tutorial-intro.gif"),style:{border:"1px solid black"}}))))),l.a.createElement("div",{id:"join-the-list"},l.a.createElement(j,null))))}},95:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),o=a(86),s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},c={Prism:a(20).a,theme:s};function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var m=/\r\n|\r|\n/,p=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},d=function(e,t){var a=e.length;return a>0&&e[a-1]===t?e:e.concat(t)},g=function(e,t){var a=e.plain,n=Object.create(null),r=e.styles.reduce((function(e,a){var n=a.languages,r=a.style;return n&&!n.includes(t)||a.types.forEach((function(t){var a=u({},e[t],r);e[t]=a})),e}),n);return r.root=a,r.plain=u({},a,{backgroundColor:null}),r};function h(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&-1===t.indexOf(n)&&(a[n]=e[n]);return a}var f=function(e){function t(){for(var t=this,a=[],n=arguments.length;n--;)a[n]=arguments[n];e.apply(this,a),i(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var a=e.theme?g(e.theme,e.language):void 0;return t.themeDict=a})),i(this,"getLineProps",(function(e){var a=e.key,n=e.className,r=e.style,l=u({},h(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),o=t.getThemeDict(t.props);return void 0!==o&&(l.style=o.plain),void 0!==r&&(l.style=void 0!==l.style?u({},l.style,r):r),void 0!==a&&(l.key=a),n&&(l.className+=" "+n),l})),i(this,"getStyleForToken",(function(e){var a=e.types,n=e.empty,r=a.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===r&&"plain"===a[0])return n?{display:"inline-block"}:void 0;if(1===r&&!n)return l[a[0]];var o=n?{display:"inline-block"}:{},s=a.map((function(e){return l[e]}));return Object.assign.apply(Object,[o].concat(s))}})),i(this,"getTokenProps",(function(e){var a=e.key,n=e.className,r=e.style,l=e.token,o=u({},h(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==r&&(o.style=void 0!==o.style?u({},o.style,r):r),void 0!==a&&(o.key=a),n&&(o.className+=" "+n),o}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,a=e.language,n=e.code,r=e.children,l=this.getThemeDict(this.props),o=t.languages[a];return r({tokens:function(e){for(var t=[[]],a=[e],n=[0],r=[e.length],l=0,o=0,s=[],c=[s];o>-1;){for(;(l=n[o]++)<r[o];){var i=void 0,u=t[o],g=a[o][l];if("string"==typeof g?(u=o>0?u:["plain"],i=g):(u=d(u,g.type),g.alias&&(u=d(u,g.alias)),i=g.content),"string"==typeof i){var h=i.split(m),f=h.length;s.push({types:u,content:h[0]});for(var y=1;y<f;y++)p(s),c.push(s=[]),s.push({types:u,content:h[y]})}else o++,t.push(u),a.push(i),n.push(0),r.push(i.length)}o--,t.pop(),a.pop(),n.pop(),r.pop()}return p(s),c}(void 0!==o?t.tokenize(n,o,a):[n]),className:"prism-code language-"+a,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component),y=a(96),E=a.n(y),v=a(97),b=a.n(v),N=a(82),k={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},j=a(91),w=function(){var e=Object(N.a)().siteConfig.themeConfig.prism,t=void 0===e?{}:e,a=Object(j.a)().isDarkTheme,n=t.theme||k,r=t.darkTheme||n;return a?r:n},x=a(46),T=a.n(x),O=/{([\d,-]+)}/,A=function(e){void 0===e&&(e=["js","jsBlock","jsx","python","html"]);var t={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},a=["highlight-next-line","highlight-start","highlight-end"].join("|"),n=e.map((function(e){return"(?:"+t[e].start+"\\s*("+a+")\\s*"+t[e].end+")"})).join("|");return new RegExp("^\\s*(?:"+n+")\\s*$")},C=/title=".*"/;t.a=function(e){var t=e.children,a=e.className,s=e.metastring,i=Object(N.a)().siteConfig.themeConfig.prism,u=void 0===i?{}:i,m=Object(r.useState)(!1),p=m[0],d=m[1],g=Object(r.useState)(!1),h=g[0],y=g[1];Object(r.useEffect)((function(){y(!0)}),[]);var v=Object(r.useRef)(null),k=[],j="",x=w();if(s&&O.test(s)){var S=s.match(O)[1];k=b.a.parse(S).filter((function(e){return e>0}))}s&&C.test(s)&&(j=s.match(C)[0].split("title=")[1].replace(/"+/g,""));var P=a&&a.replace(/language-/,"");!P&&u.defaultLanguage&&(P=u.defaultLanguage);var D=t.replace(/\n$/,"");if(0===k.length&&void 0!==P){for(var L,W="",B=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return A(["js","jsBlock"]);case"jsx":case"tsx":return A(["js","jsBlock","jsx"]);case"html":return A(["js","jsBlock","html"]);case"python":case"py":return A(["python"]);default:return A()}}(P),q=t.replace(/\n$/,"").split("\n"),R=0;R<q.length;){var I=R+1,M=q[R].match(B);if(null!==M){switch(M.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":W+=I+",";break;case"highlight-start":L=I;break;case"highlight-end":W+=L+"-"+(I-1)+","}q.splice(R,1)}else R+=1}k=b.a.parse(W),D=q.join("\n")}var F=function(){E()(D),d(!0),setTimeout((function(){return d(!1)}),2e3)};return l.a.createElement(f,Object(n.a)({},c,{key:String(h),theme:x,code:D,language:P}),(function(e){var t,a,r=e.className,s=e.style,c=e.tokens,i=e.getLineProps,u=e.getTokenProps;return l.a.createElement(l.a.Fragment,null,j&&l.a.createElement("div",{style:s,className:T.a.codeBlockTitle},j),l.a.createElement("div",{className:T.a.codeBlockContent},l.a.createElement("button",{ref:v,type:"button","aria-label":"Copy code to clipboard",className:Object(o.a)(T.a.copyButton,(t={},t[T.a.copyButtonWithTitle]=j,t)),onClick:F},p?"Copied":"Copy"),l.a.createElement("div",{tabIndex:0,className:Object(o.a)(r,T.a.codeBlock,(a={},a[T.a.codeBlockWithTitle]=j,a))},l.a.createElement("div",{className:T.a.codeBlockLines,style:s},c.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var a=i({line:e,key:t});return k.includes(t+1)&&(a.className=a.className+" docusaurus-highlight-code-line"),l.a.createElement("div",Object(n.a)({key:t},a),e.map((function(e,t){return l.a.createElement("span",Object(n.a)({key:t},u({token:e,key:t})))})))}))))))}))}},96:function(e,t,a){"use strict";const n=(e,{target:t=document.body}={})=>{const a=document.createElement("textarea"),n=document.activeElement;a.value=e,a.setAttribute("readonly",""),a.style.contain="strict",a.style.position="absolute",a.style.left="-9999px",a.style.fontSize="12pt";const r=document.getSelection();let l=!1;r.rangeCount>0&&(l=r.getRangeAt(0)),t.append(a),a.select(),a.selectionStart=0,a.selectionEnd=e.length;let o=!1;try{o=document.execCommand("copy")}catch(s){}return a.remove(),l&&(r.removeAllRanges(),r.addRange(l)),n&&n.focus(),o};e.exports=n,e.exports.default=n},97:function(e,t){e.exports.parse=function(e){var t=e.split(",").map((function(e){return function(e){if(/^-?\d+$/.test(e))return parseInt(e,10);var t;if(t=e.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){var a=t[1],n=t[2],r=t[3];if(a&&r){var l=[],o=(a=parseInt(a))<(r=parseInt(r))?1:-1;"-"!=n&&".."!=n&&"\u2025"!=n||(r+=o);for(var s=a;s!=r;s+=o)l.push(s);return l}}return[]}(e)}));return 0===t.length?[]:1===t.length?Array.isArray(t[0])?t[0]:t:t.reduce((function(e,t){return Array.isArray(e)||(e=[e]),Array.isArray(t)||(t=[t]),e.concat(t)}))}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{74:function(t,e,n){"use strict";n.r(e),n.d(e,"frontMatter",(function(){return o})),n.d(e,"metadata",(function(){return i})),n.d(e,"rightToc",(function(){return c})),n.d(e,"default",(function(){return p}));var a=n(2),r=(n(0),n(83));n(84);const o={title:"Updating tasks"},i={unversionedId:"tutorials/todo-app/updating-tasks",id:"tutorials/todo-app/updating-tasks",isDocsHomePage:!1,title:"Updating tasks",description:"Todo app isn't done if you can't mark a task as done!",source:"@site/docs/tutorials/todo-app/updating-tasks.md",slug:"/tutorials/todo-app/updating-tasks",permalink:"/docs/tutorials/todo-app/updating-tasks",editUrl:"https://github.com/wasp-lang/web/edit/master/docs/tutorials/todo-app/updating-tasks.md",version:"current",sidebar:"docs",previous:{title:"Creating tasks",permalink:"/docs/tutorials/todo-app/creating-tasks"},next:{title:"Authentication",permalink:"/docs/tutorials/todo-app/auth"}},c=[{value:"Action",id:"action",children:[{value:"Wasp declaration",id:"wasp-declaration",children:[]},{value:"JS implementation",id:"js-implementation",children:[]}]},{value:"React logic",id:"react-logic",children:[]}],s={rightToc:c};function p({components:t,...e}){return Object(r.b)("wrapper",Object(a.a)({},s,e,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Todo app isn't done if you can't mark a task as done!"),Object(r.b)("p",null,"For that, we will need to do two things:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Implement Wasp action that updates the task."),Object(r.b)("li",{parentName:"ol"},"Modify our React code so it calls that action.")),Object(r.b)("h2",{id:"action"},"Action"),Object(r.b)("h3",{id:"wasp-declaration"},"Wasp declaration"),Object(r.b)("p",null,"We declare Wasp action:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c",metastring:'title="main.wasp"',title:'"main.wasp"'}),'// ...\n\naction updateTask {\n  fn: import { updateTask } from "@ext/actions.js",\n  entities: [Task]\n}\n')),Object(r.b)("h3",{id:"js-implementation"},"JS implementation"),Object(r.b)("p",null,"We define JS implementation of Wasp action in ",Object(r.b)("inlineCode",{parentName:"p"},"ext/actions.js"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js",metastring:'title="ext/actions.js"',title:'"ext/actions.js"'}),"// ...\n\nexport const updateTask = async (args, context) => {\n  return context.entities.Task.update({\n    where: { id: args.taskId },\n    data: {\n      isDone: args.data.isDone\n    }\n  })\n}\n")),Object(r.b)("h2",{id:"react-logic"},"React logic"),Object(r.b)("p",null,"And we update the React component:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:'{2,7-16,23} title="ext/MainPage.js"',"{2,7-16,23}":!0,title:'"ext/MainPage.js"'}),"// ...\nimport updateTask from '@wasp/actions/updateTask'\n\n// ...\n\nconst Task = (props) => {\n  const handleIsDoneChange = async (event) => {\n    try {\n      await updateTask({\n        taskId: props.task.id,\n        data: { isDone: event.target.checked }\n      })\n    } catch (error) {\n      window.alert('Error while updating task: ' + error.message)\n    }\n  }\n\n  return (\n    <div>\n      <input\n        type='checkbox' id={props.task.id}\n        checked={props.task.isDone}\n        onChange={handleIsDoneChange}\n      />\n      {props.task.description}\n    </div>\n  )\n}\n// ...\n")),Object(r.b)("p",null,"Awesome! We can now tick this task as done ;)."))}p.isMDXComponent=!0},82:function(t,e,n){"use strict";var a=n(0),r=n(19);e.a=function(){const t=Object(a.useContext)(r.a);if(null===t)throw new Error("Docusaurus context not provided");return t}},83:function(t,e,n){"use strict";n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return f}));var a=n(0),r=n.n(a);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=r.a.createContext({}),u=function(t){var e=r.a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},l=function(t){var e=u(t.components);return r.a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.a.createElement(r.a.Fragment,{},e)}},b=r.a.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),l=u(n),b=a,f=l["".concat(i,".").concat(b)]||l[b]||d[b]||o;return n?r.a.createElement(f,c(c({ref:e},p),{},{components:n})):r.a.createElement(f,c({ref:e},p))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},84:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return i}));var a=n(82),r=n(85);function o(){const{siteConfig:{baseUrl:t="/",url:e}={}}=Object(a.a)();return{withBaseUrl:(n,a)=>function(t,e,n,{forcePrependBaseUrl:a=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(a)return e+n;const i=n.startsWith(e)?n:e+n.replace(/^\//,"");return o?t+i:i}(e,t,n,a)}}function i(t,e={}){const{withBaseUrl:n}=o();return n(t,e)}},85:function(t,e,n){"use strict";function a(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!a(t)}n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}))}}]);
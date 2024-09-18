"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[4920],{9342:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>h});var o=r(5893),s=r(1151);const n={},a="\ud83d\udcd8 Intro to Search operators",c={id:"search-operators/intro",title:"\ud83d\udcd8 Intro to Search operators",description:"In the previous exercise, you used a $search stage that looked like this one.",source:"@site/docs/5-search-operators/01-intro.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/intro",permalink:"/search-lab/docs/search-operators/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/5-search-operators/01-intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Search Operators",permalink:"/search-lab/docs/category/search-operators"},next:{title:"\ud83d\udcd8 The text operator",permalink:"/search-lab/docs/search-operators/text"}},i={},h=[];function d(e){const t={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"-intro-to-search-operators",children:"\ud83d\udcd8 Intro to Search operators"})}),"\n",(0,o.jsxs)(t.p,{children:["In the previous exercise, you used a ",(0,o.jsx)(t.code,{children:"$search"})," stage that looked like this one."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"{\n    $search: {\n        index: 'fulltextsearch',\n        text: {\n            query,\n            path: ['title', 'authors.name', 'categories']\n        }\n    }\n}\n"})}),"\n",(0,o.jsxs)(t.p,{children:["We've talked about the ",(0,o.jsx)(t.code,{children:"$search"})," stage, and what is the ",(0,o.jsx)(t.code,{children:"index"})," property, but so far, we've only used the ",(0,o.jsx)(t.code,{children:"text"})," operator in it's most simple form."]}),"\n",(0,o.jsx)(t.p,{children:"However, as you want to refine the results of your search, you'll need to use more advanced operators, and even combine some of those operators to get the results you want."}),"\n",(0,o.jsx)(t.p,{children:"In this exercise, we'll explore some of the most common operators, and how to use them."})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>a});var o=r(7294);const s={},n=o.createContext(s);function a(e){const t=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);
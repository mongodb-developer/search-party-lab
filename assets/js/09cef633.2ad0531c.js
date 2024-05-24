"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[7496],{7611:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var n=t(5893),s=t(1151);const r={},a="\ud83d\udc50 Exercises",i={id:"search-operators/exercises",title:"\ud83d\udc50 Exercises",description:"Time to get some practice with the concepts you've learned! Try to answer the following questions to the best of your ability. Feel free to reference the slides and notes you've taken during the lesson.",source:"@site/docs/5-search-operators/09-exercises.mdx",sourceDirName:"5-search-operators",slug:"/search-operators/exercises",permalink:"/search-lab/docs/search-operators/exercises",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/5-search-operators/09-exercises.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcd8 Mixing and matching",permalink:"/search-lab/docs/search-operators/mix-and-match"},next:{title:"\ud83e\uddb8 Advanced Exercises",permalink:"/search-lab/docs/search-operators/advanced-exercises"}},c={},h=[{value:"Add fuzzy search",id:"add-fuzzy-search",level:2},{value:"Promote the books of the month",id:"promote-the-books-of-the-month",level:2}];function d(e){const o={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,s.a)(),...e.components},{Details:t}=o;return t||function(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h1,{id:"-exercises",children:"\ud83d\udc50 Exercises"}),"\n",(0,n.jsx)(o.p,{children:"Time to get some practice with the concepts you've learned! Try to answer the following questions to the best of your ability. Feel free to reference the slides and notes you've taken during the lesson."}),"\n",(0,n.jsx)(o.p,{children:"No cheating! Try to only look at the answer after you gave it a try."}),"\n",(0,n.jsx)(o.h2,{id:"add-fuzzy-search",children:"Add fuzzy search"}),"\n",(0,n.jsx)(o.p,{children:"Try adding fuzzy search to your application so it can find the correct books, even if the user makes a typo."}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["Remember the fuzzy parameter of the ",(0,n.jsx)(o.a,{href:"https://www.mongodb.com/docs/atlas/atlas-search/text/#std-label-text-ref",children:(0,n.jsx)(o.code,{children:"text"})})," operator? This is where you'd use it."]})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Answer"}),(0,n.jsx)("div",{children:(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:"public async searchBooks(query: string): Promise<Book[]> {\n  const aggregationPipeline = [\n      {\n          $search: {\n              index: 'fulltextsearch',\n              text: {\n                  query,\n                  path: ['title', 'authors.name', 'genres'],\n                  fuzzy: {\n                    maxEdits: 2\n                  }\n              }\n          }\n      }\n  ];\n  const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n  return books;\n}\n"})})})]}),"\n",(0,n.jsx)(o.h2,{id:"promote-the-books-of-the-month",children:"Promote the books of the month"}),"\n",(0,n.jsx)(o.p,{children:"The marketing team has decided that they want to promote the books of the month. They want to show these books first in the search results. How would you do this?"}),"\n",(0,n.jsx)(o.admonition,{type:"tip",children:(0,n.jsxs)(o.p,{children:["You'll need to use the ",(0,n.jsx)(o.a,{href:"https://www.mongodb.com/docs/atlas/atlas-search/compound/#std-label-compound-ref",children:(0,n.jsx)(o.code,{children:"compound"})})," operator with multiple operators here. There is a ",(0,n.jsx)(o.code,{children:"bookOfTheMonth"})," boolean field on some of the books that you could use."]})}),"\n",(0,n.jsxs)(t,{children:[(0,n.jsx)("summary",{children:"Answer"}),(0,n.jsx)("div",{children:(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-js",children:'public async searchBooks(query: string): Promise<Book[]> {\n    const aggregationPipeline = [\n        {\n          $search: {\n            "index": "fulltextsearch",\n            "compound": {\n              "must": [\n                {\n                  "text": {\n                    query,\n                    "path": ["title", "authors.name", "genres"],\n                    fuzzy: {\n                      maxEdits: 2\n                    }\n                  }\n                }\n              ],\n              "should": [\n                {\n                  "equals": {\n                    "value": true,\n                    "path": "bookOfTheMonth",\n                    "score": {\n                      "boost": { value: 10 }\n                    }\n                  }\n                }\n              ]\n            }\n          }\n        }\n      ];\n    const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n    return books;\n}\n'})})})]})]})}function l(e={}){const{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,o,t)=>{t.d(o,{Z:()=>i,a:()=>a});var n=t(7294);const s={},r=n.createContext(s);function a(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);
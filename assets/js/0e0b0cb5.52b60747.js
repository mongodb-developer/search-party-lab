"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[3959],{5906:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=o(5893),r=o(1151);const a={},s="\ud83d\udc50 Add Full-text Search to Your Application",i={id:"add-to-app/add-to-app",title:"\ud83d\udc50 Add Full-text Search to Your Application",description:"So far, you've seen how to use the search indexes in the aggregation pipeline builder or Compass. But what if you want to use the search index in your application?",source:"@site/docs/4-add-to-app/1-add-to-app.mdx",sourceDirName:"4-add-to-app",slug:"/add-to-app/add-to-app",permalink:"/search-lab/docs/add-to-app/add-to-app",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/4-add-to-app/1-add-to-app.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Implementing Atlas Search",permalink:"/search-lab/docs/category/implementing-atlas-search"},next:{title:"Search Operators",permalink:"/search-lab/docs/category/search-operators"}},c={},l=[{value:"Using aggregation pipelines in Node.js",id:"using-aggregation-pipelines-in-nodejs",level:2},{value:"Adding search to the library app",id:"adding-search-to-the-library-app",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:o}=t;return o||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-add-full-text-search-to-your-application",children:"\ud83d\udc50 Add Full-text Search to Your Application"})}),"\n",(0,n.jsx)(t.p,{children:"So far, you've seen how to use the search indexes in the aggregation pipeline builder or Compass. But what if you want to use the search index in your application?"}),"\n",(0,n.jsx)(t.p,{children:"To do so, you will need to add some code to your application."}),"\n",(0,n.jsx)(t.h2,{id:"using-aggregation-pipelines-in-nodejs",children:"Using aggregation pipelines in Node.js"}),"\n",(0,n.jsxs)(t.p,{children:["To use the aggregation pipeline in Node.js, you will need to use the ",(0,n.jsx)(t.code,{children:"aggregate"})," method on the collection object. This method takes an array of stages as an argument and returns a cursor. You can then use the cursor to iterate over the results or use the ",(0,n.jsx)(t.code,{children:"toArray"})," method to get the results in an array."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:"const documents = await collection.aggregate(aggregationPipelines).toArray();\n"})}),"\n",(0,n.jsx)(t.p,{children:"You now know everything you need to add full-text search capabilities to your application."}),"\n",(0,n.jsx)(t.h2,{id:"adding-search-to-the-library-app",children:"Adding search to the library app"}),"\n",(0,n.jsxs)(t.p,{children:["Open up the code from the server file ",(0,n.jsx)(t.code,{children:"server/src/controllers/books.ts"}),". In there, look for the ",(0,n.jsx)(t.code,{children:"searchBooks"})," function."]}),"\n",(0,n.jsx)(t.p,{children:"Right now, it uses a regular expression to query the database."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"title='server/src/controllers/books.ts'",children:'public async searchBooks(query: string): Promise<Book[]> {\n  const books = await collections?.books?.find({ title: {$regex: new RegExp(query, "i")} }).toArray();\n  return books;\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"While this code works to a certain extent, it is less than optimal. As the dataset grows, the performance of this query will degrade because it will have to scan the entire collection. You cannot query the index with a regular expression. Furthermore, the query only matches on the title and only for the exact sequence of characters."}),"\n",(0,n.jsxs)(t.p,{children:["Change this code to use the search index instead. You will need to use the ",(0,n.jsx)(t.code,{children:"$search"})," stage in the aggregation pipeline. Have your search cover the title, the author name, and the genres array."]}),"\n",(0,n.jsxs)(t.p,{children:["This code will go in the ",(0,n.jsx)(t.code,{children:"server/src/controllers/books.ts"})," file, in the ",(0,n.jsx)(t.code,{children:"searchBooks"})," function."]}),"\n",(0,n.jsxs)(o,{children:[(0,n.jsx)("summary",{children:"Click here to see the answer"}),(0,n.jsx)("div",{children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",metastring:"title='server/src/controllers/books.ts'",children:"public async searchBooks(query: string): Promise<Book[]> {\n  const aggregationPipeline = [\n      {\n          $search: {\n              index: 'fulltextsearch',\n              text: {\n                  query,\n                  path: ['title', 'authors.name', 'genres']\n              }\n          }\n      }\n  ];\n  const books = await collections?.books?.aggregate(aggregationPipeline).toArray() as Book[];\n  return books;\n}\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:"Play around the application, and look at the results you're getting. You should see that the results are more relevant than before."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>i,a:()=>s});var n=o(7294);const r={},a=n.createContext(r);function s(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);
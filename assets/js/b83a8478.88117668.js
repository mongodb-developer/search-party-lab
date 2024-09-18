"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[7261],{7072:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(5893),a=r(1151),s=r(4866),o=r(5162);const i={},c="\ud83d\udc50 Create Vector Search indexes",l={id:"vector-search/create-index",title:"\ud83d\udc50 Create Vector Search indexes",description:"To start using Vector Search, you must configure another search index on your database. The process is similar to what you have done in the last section.",source:"@site/docs/7-vector-search/6-create-index.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/create-index",permalink:"/search-lab/docs/vector-search/create-index",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/6-create-index.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Import Vectorized Data",permalink:"/search-lab/docs/vector-search/import-data"},next:{title:"\ud83d\udc50 Add semantic search to your application",permalink:"/search-lab/docs/vector-search/add-to-app"}},u={},d=[{value:"Step-by-step guide to creating your Vector Search index",id:"step-by-step-guide-to-creating-your-vector-search-index",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components},{Screenshot:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Screenshot",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"-create-vector-search-indexes",children:"\ud83d\udc50 Create Vector Search indexes"})}),"\n",(0,n.jsx)(t.p,{children:"To start using Vector Search, you must configure another search index on your database. The process is similar to what you have done in the last section."}),"\n",(0,n.jsx)(t.h2,{id:"step-by-step-guide-to-creating-your-vector-search-index",children:"Step-by-step guide to creating your Vector Search index"}),"\n",(0,n.jsxs)(t.p,{children:["Open the ",(0,n.jsx)(t.strong,{children:"Database Deployments"})," page in MongoDB Atlas and select ",(0,n.jsx)(t.strong,{children:"Create Index"})," in the lower right corner."]}),"\n",(0,n.jsx)(r,{src:"img/screenshots/7-vector-search/6-create-index/1-create-index.png",alt:"The 'Database Deployments' page with the 'Create Index' link highlighted",url:"https://cloud.mongodb.com"}),"\n",(0,n.jsxs)(t.p,{children:["Click the ",(0,n.jsx)(t.strong,{children:"Create Search Index"})," button."]}),"\n",(0,n.jsx)(r,{src:"img/screenshots/7-vector-search/6-create-index/2-create-search-index.png",alt:"The 'Create Index' page with the 'Create Search Index' button highlighted",url:"https://cloud.mongodb.com"}),"\n",(0,n.jsxs)(t.p,{children:["This time, you will use the ",(0,n.jsx)(t.strong,{children:"JSON Editor"})," to create your index"]}),"\n",(0,n.jsx)(r,{src:"img/screenshots/7-vector-search/6-create-index/3-json-editor.png",alt:"The 'Create Index' page with the 'JSON Editor' tab highlighted",url:"https://cloud.mongodb.com"}),"\n",(0,n.jsxs)(t.p,{children:["Select your database and the ",(0,n.jsx)(t.code,{children:"books"})," collection, change the index name to ",(0,n.jsx)(t.code,{children:"vectorsearch"}),", and add the following code in the JSON editor:"]}),"\n",(0,n.jsxs)(s.Z,{groupId:"aiproviders",children:[(0,n.jsx)(o.Z,{value:"serverless",label:"Serverless Endpoint",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'{\n  "fields":[\n    {\n      "type": "vector",\n      "path": "embeddings",\n      "numDimensions": 1408,\n      "similarity": "cosine"\n    }\n  ]\n}\n'})})}),(0,n.jsx)(o.Z,{value:"openai",label:"OpenAI",default:!0,children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'{\n  "fields":[\n    {\n      "type": "vector",\n      "path": "embeddings",\n      "numDimensions": 1536,\n      "similarity": "cosine"\n    }\n  ]\n}\n'})})}),(0,n.jsx)(o.Z,{value:"googleVertex",label:"Google Cloud Vertex AI",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'{\n  "fields":[\n    {\n      "type": "vector",\n      "path": "embeddings",\n      "numDimensions": 1408,\n      "similarity": "cosine"\n    }\n  ]\n}\n'})})})]}),"\n",(0,n.jsxs)(t.p,{children:["The final step allows you to review the index configuration and refine it if needed. Go ahead and click ",(0,n.jsx)(t.strong,{children:"Create Search Index"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>o});r(7294);var n=r(6905);const a={tabItem:"tabItem_Ymn6"};var s=r(5893);function o(e){let{children:t,hidden:r,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,o),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(7294),a=r(6905),s=r(2466),o=r(6550),i=r(469),c=r(1980),l=r(7392),u=r(812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}(r);return function(e){const t=(0,l.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,c._X)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,s=h(e),[o,c]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[l,d]=m({queryString:r,groupId:a}),[b,g]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),f=(()=>{const e=l??b;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(5893);function v(e){let{className:t,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),u=e=>{const t=e.currentTarget,r=c.indexOf(t),a=i[r].value;a!==n&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;t=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;t=c[r]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,a.Z)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(y,{...t,...e})]})}function w(e){const t=(0,g.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>i,a:()=>o});var n=r(7294);const a={},s=n.createContext(a);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);
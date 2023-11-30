"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[7261],{1985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(5893),a=n(1151),s=n(3992),o=n(425);const i={},c="\ud83d\udc50 Create Vector Search indexes",l={id:"vector-search/create-index",title:"\ud83d\udc50 Create Vector Search indexes",description:"To start using Vector Search, you must configure another search index on your database. The process is similar to what you have done in the last section.",source:"@site/docs/7-vector-search/6-create-index.mdx",sourceDirName:"7-vector-search",slug:"/vector-search/create-index",permalink:"/search-lab/docs/vector-search/create-index",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/6-create-index.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udc50 Import Vectorized Data",permalink:"/search-lab/docs/vector-search/import-data"},next:{title:"\ud83d\udc50 Construct vector search queries",permalink:"/search-lab/docs/vector-search/search-queries"}},u={},d=[{value:"Step-by-step guide to creating your Vector Search index",id:"step-by-step-guide-to-creating-your-vector-search-index",level:2}];function h(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components},{Screenshot:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Screenshot",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"-create-vector-search-indexes",children:"\ud83d\udc50 Create Vector Search indexes"}),"\n",(0,r.jsx)(t.p,{children:"To start using Vector Search, you must configure another search index on your database. The process is similar to what you have done in the last section."}),"\n",(0,r.jsx)(t.h2,{id:"step-by-step-guide-to-creating-your-vector-search-index",children:"Step-by-step guide to creating your Vector Search index"}),"\n",(0,r.jsxs)(t.p,{children:["Open the ",(0,r.jsx)(t.strong,{children:"Database Deployments"})," page in MongoDB Atlas and select ",(0,r.jsx)(t.strong,{children:"Create Index"})," in the lower right corner."]}),"\n",(0,r.jsx)(n,{src:"img/screenshots/7-vector-search/6-create-index/1-create-index.png",alt:"The 'Database Deployments' page with the 'Create Index' link highlighted",url:"https://cloud.mongodb.com"}),"\n",(0,r.jsxs)(t.p,{children:["Click the ",(0,r.jsx)(t.strong,{children:"Create Search Index"})," button."]}),"\n",(0,r.jsx)(n,{src:"img/screenshots/7-vector-search/6-create-index/2-create-search-index.png",alt:"The 'Create Index' page with the 'Create Search Index' button highlighted",url:"https://cloud.mongodb.com"}),"\n",(0,r.jsxs)(t.p,{children:["This time, you will use the ",(0,r.jsx)(t.strong,{children:"JSON Editor"})," to create your index"]}),"\n",(0,r.jsx)(n,{src:"img/screenshots/7-vector-search/6-create-index/3-json-editor.png",alt:"The 'Create Index' page with the 'JSON Editor' tab highlighted",url:"https://cloud.mongodb.com"}),"\n",(0,r.jsxs)(t.p,{children:["Select your database and collection, change the index name to ",(0,r.jsx)(t.code,{children:"vectorsearch"}),", and add the following code in the JSON editor:"]}),"\n",(0,r.jsxs)(s.Z,{groupId:"aiproviders",children:[(0,r.jsx)(o.Z,{value:"serverless",label:"Serverless Endpoint",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n  "mappings": {\n    "dynamic": true,\n    "fields": {\n      "embeddings": {\n        "dimensions": 1408,\n        "similarity": "cosine",\n        "type": "knnVector"\n      }\n    }\n  }\n}\n'})})}),(0,r.jsx)(o.Z,{value:"openai",label:"OpenAI",default:!0,children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n  "mappings": {\n    "dynamic": true,\n    "fields": {\n      "embeddings": {\n        "dimensions": 1536,\n        "similarity": "cosine",\n        "type": "knnVector"\n      }\n    }\n  }\n}\n'})})}),(0,r.jsx)(o.Z,{value:"googleVertex",label:"Google Cloud Vertex AI",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n  "mappings": {\n    "dynamic": true,\n    "fields": {\n      "embeddings": {\n        "dimensions": 1408,\n        "similarity": "cosine",\n        "type": "knnVector"\n      }\n    }\n  }\n}\n'})})}),(0,r.jsx)(o.Z,{value:"sagemaker",label:"Amazon SageMaker",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-js",children:'{\n  "mappings": {\n    "dynamic": true,\n    "fields": {\n      "embeddings": {\n        "dimensions": 384,\n        "similarity": "cosine",\n        "type": "knnVector"\n      }\n    }\n  }\n}\n'})})})]}),"\n",(0,r.jsxs)(t.p,{children:["The final step allows you to review the index configuration and refine it if needed. Go ahead and click ",(0,r.jsx)(t.strong,{children:"Create Search Index"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},425:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(6010);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:n,children:t})}},3992:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(7294),a=n(6010),s=n(2957),o=n(6550),i=n(1270),c=n(5238),l=n(3609),u=n(2560);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[l,d]=m({queryString:n,groupId:a}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),f=(()=>{const e=l??b;return p({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{f&&c(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=n(1048);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(5893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),a=i[n].value;a!==r&&(l(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(v,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function w(e){const t=(0,g.Z)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(7294);const a={},s=r.createContext(a);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);
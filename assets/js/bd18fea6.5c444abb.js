"use strict";(self.webpackChunksearch_party_lab=self.webpackChunksearch_party_lab||[]).push([[635],{4762:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var o=n(5893),t=n(1151);const s={},r="\ud83e\uddb8 Using Amazon SageMaker",i={id:"vector-search/create-vectors/amazon-sagemaker",title:"\ud83e\uddb8 Using Amazon SageMaker",description:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab.",source:"@site/docs/7-vector-search/5-create-vectors/5-amazon-sagemaker.mdx",sourceDirName:"7-vector-search/5-create-vectors",slug:"/vector-search/create-vectors/amazon-sagemaker",permalink:"/search-lab/docs/vector-search/create-vectors/amazon-sagemaker",draft:!1,unlisted:!1,editUrl:"https://github.com/mongodb-developer/search-lab/blob/main/docs/7-vector-search/5-create-vectors/5-amazon-sagemaker.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83e\uddb8 Using Google Cloud Vertex AI",permalink:"/search-lab/docs/vector-search/create-vectors/google-vertex"},next:{title:"\ud83d\udc50 Import Vectorized Data",permalink:"/search-lab/docs/vector-search/import-data"}},c={},l=[{value:"Getting Started with Amazon SageMaker",id:"getting-started-with-amazon-sagemaker",level:2},{value:"Let&#39;s set up a playground for you to try it out!",id:"lets-set-up-a-playground-for-you-to-try-it-out",level:2}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components},{Screenshot:n}=a;return n||function(e,a){throw new Error("Expected "+(a?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Screenshot",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.h1,{id:"-using-amazon-sagemaker",children:"\ud83e\uddb8 Using Amazon SageMaker"}),"\n",(0,o.jsx)(a.admonition,{type:"info",children:(0,o.jsx)(a.p,{children:"Extra activity, do it if you have extra time or are following at home, won't be covered during the hands-on Lab."})}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"https://aws.amazon.com/pm/sagemaker/",children:"Amazon SageMaker"})," is a cloud based machine-learning platform that enables developers to build, train, and deploy machine learning (ML) models for any use case with fully managed infrastructure, tools, and workflows.\nIt also enables developers to deploy ML models on embedded systems and edge-devices. SageMaker was launched in November 2017 and has been improved ever since, especially since the increased popularity and demand of ML and AI systems in recent years."]}),"\n",(0,o.jsx)(a.p,{children:"To make it easier to get started, Amazon SageMaker JumpStart provides a set of solutions for the most common use cases that can be deployed readily with just a few clicks."}),"\n",(0,o.jsxs)(a.p,{children:["Amazon SageMaker is available for free, for 2 months, as part of the AWS Free Tier program. Users can get access to 250 hours per month of ",(0,o.jsx)(a.code,{children:"ml.t3.medium"})," notebooks usage with the Free Tier."]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/0-pricing.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.h2,{id:"getting-started-with-amazon-sagemaker",children:"Getting Started with Amazon SageMaker"}),"\n",(0,o.jsx)(a.p,{children:"Amazon SageMaker JumpStart helps you quickly and easily get started with machine learning. The solutions are fully customizable and supports one-click deployment and fine-tuning of more than 150 popular open source models such as natural language processing, object detection, and image classification models."}),"\n",(0,o.jsx)(a.p,{children:"Popular solutions include:"}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Extract & Analyze Data: Automatically extract, process, and analyze documents for more accurate investigation and faster decision-making."}),"\n",(0,o.jsx)(a.li,{children:"Fraud Detection: Automate detection of suspicious transactions faster and alert your customers to reduce potential financial loss."}),"\n",(0,o.jsx)(a.li,{children:"Churn Prediction: Predict likelihood of customer churn and improve retention by honing in on likely abandoners and taking remedial actions such as promotional offers."}),"\n",(0,o.jsx)(a.li,{children:"Personalized Recommendations: Deliver customized, unique experiences to customers to improve customer satisfaction and grow your business rapidly."}),"\n"]}),"\n",(0,o.jsx)(a.h2,{id:"lets-set-up-a-playground-for-you-to-try-it-out",children:"Let's set up a playground for you to try it out!"}),"\n",(0,o.jsxs)(a.p,{children:["On the main page of SageMaker you'll find the option to ",(0,o.jsx)(a.code,{children:"Set up for single user"})," or ",(0,o.jsx)(a.code,{children:"Set up for organization"}),". These will set up a domain and a quick start user."]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/1-main-page.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/2-setup-started.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/3-preparing-domain.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.p,{children:"The initial setup only has to be done once, but it might take several minutes. When finished, SageMaker will notify you about the new domain being ready."}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"https://docs.aws.amazon.com/sagemaker/latest/dg/sm-domain.html",children:"Amazon SageMaker Domain"})," supports SageMaker machine learning (ML) environments. A SageMaker Domain is composed of the following entities:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"Domain"}),": An Amazon SageMaker Domain consists of an associated Amazon Elastic File System (Amazon EFS) volume; a list of authorized users; and a variety of security, application, policy, and Amazon Virtual Private Cloud (Amazon VPC) configurations. Users within a Domain can share notebook files and other artifacts with each other. An account can have multiple Domains. For more information about multiple Domains, see Multiple Domains Overview."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"UserProfile"}),": A user profile represents a single user within a Domain. It is the main way to reference a user for the purposes of sharing, reporting, and other user-oriented features. This entity is created when a user onboards to the Amazon SageMaker Domain. For more information about user profiles, see Domain User Profiles."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"shared space"}),": A shared space consists of a shared JupyterServer application and shared directory. All users within the Domain have access to the shared space. All user profiles in a Domain have access to all shared spaces in the Domain. For more information about shared spaces, see Collaborate with shared spaces."]}),"\n",(0,o.jsxs)(a.li,{children:[(0,o.jsx)(a.code,{children:"App"}),": An app represents an application that supports the reading and execution experience of the user\u2019s notebooks, terminals, and consoles. The type of app can be JupyterServer, KernelGateway, RStudioServerPro, or RSession. A user may have multiple apps active simultaneously."]}),"\n"]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/4-domain-ready.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.p,{children:"Now that the domain is set up, you want to open one of the built-in apps to actually work on your environment."}),"\n",(0,o.jsxs)(a.p,{children:["Amazon SageMaker supports the following ",(0,o.jsx)(a.a,{href:"https://docs.aws.amazon.com/sagemaker/latest/dg/machine-learning-environments.html",children:"machine learning environments"}),"."]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Amazon SageMaker Studio: Lets you build, train, debug, deploy, and monitor your machine learning models."}),"\n",(0,o.jsx)(a.li,{children:"Amazon SageMaker Notebook Instances: Lets you prepare and process data, and train and deploy machine learning models from a compute instance running the Jupyter Notebook application."}),"\n",(0,o.jsx)(a.li,{children:"Amazon SageMaker Studio Lab: Studio Lab is a free service that gives you access to AWS compute resources, in an environment based on open-source JupyterLab, without requiring an AWS account."}),"\n",(0,o.jsx)(a.li,{children:"Amazon SageMaker Canvas: Gives you the ability to use machine learning to generate predictions without needing to code."}),"\n",(0,o.jsx)(a.li,{children:"Amazon SageMaker geospatial: Gives you the ability to build, train, and deploy geospatial models."}),"\n",(0,o.jsx)(a.li,{children:"RStudio on Amazon SageMaker: RStudio is an IDE for R, with a console, syntax-highlighting editor that supports direct code execution, and tools for plotting, history, debugging and workspace management."}),"\n"]}),"\n",(0,o.jsxs)(a.p,{children:["For this workshop we will use the Studio, which can be opened by clicking on ",(0,o.jsx)(a.code,{children:"Launch"}),"."]}),"\n",(0,o.jsxs)(a.p,{children:[(0,o.jsx)(a.a,{href:"https://docs.aws.amazon.com/sagemaker/latest/dg/studio.html",children:"Amazon SageMaker Studio"})," is a web-based, integrated development environment (IDE) for machine learning that lets you build, train, debug, deploy, and monitor your machine learning models. SageMaker Studio provides all the tools you need to take your models from data preparation to experimentation to production while boosting your productivity. In a single unified visual interface, customers can perform the following tasks:"]}),"\n",(0,o.jsxs)(a.ul,{children:["\n",(0,o.jsx)(a.li,{children:"Write and execute code in Jupyter notebooks"}),"\n",(0,o.jsx)(a.li,{children:"Prepare data for machine learning"}),"\n",(0,o.jsx)(a.li,{children:"Build and train machine learning models"}),"\n",(0,o.jsx)(a.li,{children:"Deploy the models and monitor the performance of their predictions"}),"\n",(0,o.jsx)(a.li,{children:"Track and debug the machine learning experiments"}),"\n"]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/5-open-studio.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.p,{children:"When opening the studio, you will be redirected to your domain."}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/6-domain-redirect.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.p,{children:"When opening Amazon SageMaker Studio for the first time, a JupyterServer application will be created at your domain."}),"\n",(0,o.jsxs)(a.p,{children:["An ",(0,o.jsx)(a.a,{href:"https://docs.aws.amazon.com/sagemaker/latest/dg/nbi.html",children:"Amazon SageMaker notebook instance"})," is a machine learning (ML) compute instance running the Jupyter Notebook App. SageMaker manages creating the instance and related resources. Use Jupyter notebooks in your notebook instance to prepare and process data, write code to train models, deploy models to SageMaker hosting, and test or validate your models."]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/7-creating-JupyterServer-app.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsxs)(a.p,{children:["In some cases the loading can take a while and SageMaker will offer you to clear the workspace. Just click ",(0,o.jsx)(a.code,{children:"Keep Waiting"})," for now."]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/8-notebook-loading-screen.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.p,{children:"Once the Studio is loaded you will be presented with the following. This is your domains workspace in which you can adjust anything around it."}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/9-studio-homepage.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsxs)(a.p,{children:["As a first step, we want to choose a model that we want to work with. You can find the models in the SageMaker JumpStart section. We will start with a simple text generation at first. Choose ",(0,o.jsx)(a.code,{children:"Flan-T5 Xl"}),".\nThis is a decently complex model that offers a good starting point. There are more complex models available for which you'd need bigger AWS EC2 instances to run them on, so choosing a smaller model to get started is a good choice."]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/10-sagemaker-jumpstart.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.p,{children:"You'll find option to deploy your model or train it."}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/11-flan-t5-xl-deploy.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsxs)(a.p,{children:["Everything we need to get started can be found inside the ",(0,o.jsx)(a.code,{children:"Notebook"})," section."]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/12-flan-t5-xl-notebook.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.p,{children:"When opening a notebook, we can use the default settings for now."}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/13-notebook-environment.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.p,{children:"The notebook is already prepared with everything you need to play around. Deploying the model and even some examples to see it in action. When opening the notebook, the kernel will be started automatically."}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/14-notebook-starting.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsxs)(a.p,{children:["After this has been successfully happened you can ",(0,o.jsx)(a.code,{children:"Run All Cells"}),"."]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/15-notebook-ready.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsxs)(a.p,{children:["Cells that have been run show a number in brackets to the left of them. The number is the order in which they got executed. When using the ",(0,o.jsx)(a.code,{children:"Run All Cells"})," option they get executed from top to bottom.\nBut you can execute (and re-execute) any cell at any time out of order. As you can see in the following screenshot, the result will be printed right below the cell."]}),"\n",(0,o.jsx)(n,{src:"img/screenshots/7-vector-search/5-aws-sagemaker/16-inference-code-example.png",url:"https://aws.amazon.com/pm/sagemaker/",alt:""}),"\n",(0,o.jsx)(a.p,{children:"Go ahead and adjust the text input, see how the results change. The SageMaker JumpStart notebook also provides documentation for each cell to explain what happens.\nThis will provide you with a good starting point to your journey into Amazon SageMaker."})]})}function h(e={}){const{wrapper:a}={...(0,t.a)(),...e.components};return a?(0,o.jsx)(a,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,a,n)=>{n.d(a,{Z:()=>i,a:()=>r});var o=n(7294);const t={},s=o.createContext(t);function r(e){const a=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:a},e.children)}}}]);
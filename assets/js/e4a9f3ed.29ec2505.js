"use strict";(self.webpackChunklivio_dump_page=self.webpackChunklivio_dump_page||[]).push([[4067],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),d=i,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return a?n.createElement(h,r(r({ref:t},p),{},{components:a})):n.createElement(h,r({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1971:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},assets:function(){return p},toc:function(){return c},default:function(){return d}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],l={slug:"full-stack-it-automation-part-10-demo-ui",title:"Full-Stack Automation Part 10 - Demo - UI",authors:["livio"],tags:["automation","awx","ansible","gitlab","network automation","gitlab-ci","CI/CD","gitops","react admin"]},s=void 0,u={permalink:"/full-stack-it-automation-part-10-demo-ui",editUrl:"https://github.com/liviozanol/liviozanol.github.io/blog/2022-02-05-automation-10/index.md",source:"@site/blog/2022-02-05-automation-10/index.md",title:"Full-Stack Automation Part 10 - Demo - UI",description:"Web Interface",date:"2022-02-05T00:00:00.000Z",formattedDate:"February 5, 2022",tags:[{label:"automation",permalink:"/tags/automation"},{label:"awx",permalink:"/tags/awx"},{label:"ansible",permalink:"/tags/ansible"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"network automation",permalink:"/tags/network-automation"},{label:"gitlab-ci",permalink:"/tags/gitlab-ci"},{label:"CI/CD",permalink:"/tags/ci-cd"},{label:"gitops",permalink:"/tags/gitops"},{label:"react admin",permalink:"/tags/react-admin"}],readingTime:5.475,truncated:!0,authors:[{name:"L\xedvio Zanol Puppim",title:"Me",url:"https://github.com/liviozanol",imageURL:"https://github.com/liviozanol.png",key:"livio"}],prevItem:{title:"Full-Stack Automation Part 11 - Conclusions",permalink:"/full-stack-it-automation-part-11"},nextItem:{title:"Full-Stack Automation Part 9 - Demo - API",permalink:"/full-stack-it-automation-part-9-demo-api"}},p={authorsImageUrls:[void 0]},c=[{value:"Web Interface",id:"web-interface",children:[],level:2},{value:"Coding the interface",id:"coding-the-interface",children:[],level:2},{value:"Publishing our webpage",id:"publishing-our-webpage",children:[],level:2}],m={toc:c};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"web-interface"},"Web Interface"),(0,o.kt)("p",null,"In this section we will build our web interface. Users can use it to get and update info from their WAN sites in a friendly interface. Note that using web interface is not mandatory. In fact, the web page will only convert data to/from API to show on a page, but users still request our API directly and can use it to make its changes. In some aspect this is good, since you give option to users to use any other tool to interact with our solution. They can use for example ",(0,o.kt)("a",{parentName:"p",href:"https://www.postman.com"},"postman"),", ",(0,o.kt)("a",{parentName:"p",href:"https://curl.se"},"curl"),", ansible, terraform, or even building its own web interface if they want to."),(0,o.kt)("p",null,"Will be used ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin"},"react admin")," as framework to build our UI. Their community version is very complete and allow us to build our pages (if they are basic ones) pretty easy. The Tutorial and Manual are very complete, and if want to deep dive in it go check it out."),(0,o.kt)("p",null,"React admin is a framework built in ",(0,o.kt)("a",{parentName:"p",href:"https://pt-br.reactjs.org"},"React")," that lets you build a complete admin dashboard for almost anything using react and Javascript/Typescript (you can also use other ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM")," modules). It integrates with APIs pretty simple and also have a lot of pre-built fields/functions that makes the job of building dashboards much more simple. As UI components, it uses the great ",(0,o.kt)("a",{parentName:"p",href:"https://mui.com/"},"Material UI")," providing a great visual experience."),(0,o.kt)("p",null,"It's not part of this post to explain how Javascript/Typescript, NPM or React works as this is a whole world for itself. If want you can learn more about them somewhere else on Internet."),(0,o.kt)("p",null,"As always, all files generated on this section (and on previous) are on full-stack automation github repo (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/liviozanol/full-stack-automation"},"https://github.com/liviozanol/full-stack-automation"),"), so you don't need to create it yourself again."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that I'm not a developer. You shouldn't trust my code blindly (in fact, any code). But feel free to use it, change it and send me angry feedbacks and comments."))),(0,o.kt)("h2",{id:"coding-the-interface"},"Coding the interface"),(0,o.kt)("p",null,"To build our simple web interface using React Admin we need basically these things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A file with our ",(0,o.kt)("a",{parentName:"li",href:"https://marmelab.com/react-admin/Authentication.html"},"Auth provider")," that will receive username/pass as input and validate user permission on the API. Will be named ",(0,o.kt)("inlineCode",{parentName:"li"},"authProvider.js")),(0,o.kt)("li",{parentName:"ul"},"A file with our ",(0,o.kt)("a",{parentName:"li",href:"https://marmelab.com/react-admin/DataProviders.html"},"Data provider")," that will query our API and transform the JSON response from it to a format compatible with react admin. If needed, you can also convert data from react admin format to a format understood by the API before you send to the API (we have done this). Will be named ",(0,o.kt)("inlineCode",{parentName:"li"},"dataProvider.ts")),(0,o.kt)("li",{parentName:"ul"},"A file with our Wan Sites functions that will basically have 2 main exported functions: 1 with a ",(0,o.kt)("a",{parentName:"li",href:"https://marmelab.com/react-admin/List.html"},"List")," of Wan Sites and 1 with the ",(0,o.kt)("a",{parentName:"li",href:"https://marmelab.com/react-admin/CreateEdit.html"},"Edit(Update)")," view that user will use to edit a Wan Site configuration. We also added react admin simple form validation for each field on the Edit view so user can have a better experience, but this is not required since our API ",(0,o.kt)("em",{parentName:"li"},"must")," validate the data also. This file will be named ",(0,o.kt)("inlineCode",{parentName:"li"},"wanSite.js")),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"App.js")," file that will put everything together and make the react admin app available to the user.")),(0,o.kt)("p",null,"On the demo we will use async site update. Once the user submits a change, after validation, data is updated on gitlab and user can make other tasks. So, we need a way to show users if their submitted changes have been implemented on equipment or not and we will create another file for this: ",(0,o.kt)("inlineCode",{parentName:"p"},"jobList.js"),". This file is a custom React file that shows a table of the last 5 jobs submitted by users and its status. It will be used as an ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/CreateEdit.html#aside-component"},"Aside Component")," on the Edit View that will be shown on the right side of this page to the user."),(0,o.kt)("p",null,"If you follow ",(0,o.kt)("a",{parentName:"p",href:"https://marmelab.com/react-admin/Tutorial.html"},"react admin tutorial")," after you create your react app, edit App.js to import authProvider, dataProvider and wanSite, obviously create these files (and jobList), make the ajustment on resources and authprovider on App.js and that's it. You can run your app (",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start"),') to see it working. If you have access to the API from the computer where you are running the react admin interface you can start to use the app. Login with "client_a_user" (user/pass), "client_b_user"(user/pass) and "admin" (user/pass) to see the differences.'),(0,o.kt)("p",null,"If you look at the source codes of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/liviozanol/full-stack_automation/tree/master/demo/fullstack-ui/src"},"files")," you will see that coding basic things using react admin is pretty simple and the documentation and examples help a lot. But as you start to customize elements, things can get very complicated. If you take a look at ",(0,o.kt)("inlineCode",{parentName:"p"},"jobList.js")," that is pratically a custom built element using very few react admin elements, you will see how messy things can become. Either way, React Admin always tries to make things simpler to you and sure is much more easier than build your own admin dashboard from scracth."),(0,o.kt)("p",null,"UI demonstration after wall is installed and configured\n",(0,o.kt)("img",{alt:"UI demonstration after wall is installed and configured",src:a(4108).Z})),(0,o.kt)("h2",{id:"publishing-our-webpage"},"Publishing our webpage"),(0,o.kt)("p",null,"Just like our API, everything will be auto deployed by our gitlab runner using a CI/CD pipeline."),(0,o.kt)("p",null,"We will again use the same gitlab runner that calls AWX. On a production environment, the UI and API runner should be separated."),(0,o.kt)("p",null,"Since we will be using React Admin for our UI, we will use ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM")," to build and install our App. Our repo will contain a ",(0,o.kt)("inlineCode",{parentName:"p"},"packages.json")," file that is read by npm and installs the required packages and its dependencies. The output from this build are simple HTML, CSS and JS files that you can even run on your local computer. The CI/CD pipeline will just get these files, and build a simple nginx docker image with then inside, publishing our app just like any simple simple HTML/JS application."),(0,o.kt)("p",null,"Will be created 1 repository for our react admin source files and packages.json. Gitlab runner will watch this repo and update our UI container everytime we modify it."),(0,o.kt)("p",null,"Again, our CI/CD pipeline will be VERY simple, without even testing our application before deploy. Please note that adding more stages with some good tests, validation, approval is very recommended. For simplicity, the update process will be disruptive (stop old containers and running new ones). On production environment, obviously, you should make something more suitable for your needs."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The installation/configuration script will try to guess which IP address is the pyshical IP and change App.js to use it as a dataprovider. If its wrong, you can just update App.js file with the correct IP, either using git operations or gitlab web UI."))))}d.isMDXComponent=!0},4108:function(e,t,a){t.Z=a.p+"assets/images/UI-02e4ae8364f73dcacc1172f2c80975d5.gif"}}]);
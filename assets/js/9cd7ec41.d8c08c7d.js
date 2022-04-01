"use strict";(self.webpackChunklivio_dump_page=self.webpackChunklivio_dump_page||[]).push([[490],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),h=i,m=d["".concat(l,".").concat(h)]||d[h]||p[h]||o;return a?n.createElement(m,r(r({ref:t},c),{},{components:a})):n.createElement(m,r({ref:t},c))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=a[u];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9318:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return p},default:function(){return h}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={slug:"full-stack-it-automation-part-9-demo-api",title:"Full-Stack Automation Part 9 - Demo - API",authors:["livio"],tags:["automation","awx","ansible","gitlab","network automation","gitlab-ci","CI/CD","gitops","fastapi"]},l=void 0,u={permalink:"/full-stack-it-automation-part-9-demo-api",editUrl:"https://github.com/liviozanol/liviozanol.github.io/blog/2022-01-28-automation-9/index.md",source:"@site/blog/2022-01-28-automation-9/index.md",title:"Full-Stack Automation Part 9 - Demo - API",description:"Service API",date:"2022-01-28T00:00:00.000Z",formattedDate:"January 28, 2022",tags:[{label:"automation",permalink:"/tags/automation"},{label:"awx",permalink:"/tags/awx"},{label:"ansible",permalink:"/tags/ansible"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"network automation",permalink:"/tags/network-automation"},{label:"gitlab-ci",permalink:"/tags/gitlab-ci"},{label:"CI/CD",permalink:"/tags/ci-cd"},{label:"gitops",permalink:"/tags/gitops"},{label:"fastapi",permalink:"/tags/fastapi"}],readingTime:9.155,truncated:!0,authors:[{name:"L\xedvio Zanol Puppim",title:"Me",url:"https://github.com/liviozanol",imageURL:"https://github.com/liviozanol.png",key:"livio"}],prevItem:{title:"Full-Stack Automation Part 10 - Demo - UI",permalink:"/full-stack-it-automation-part-10-demo-ui"},nextItem:{title:"Full-Stack Automation Part 8 - Demo - Runner",permalink:"/full-stack-it-automation-part-8-demo-gitlab-runner"}},c={authorsImageUrls:[void 0]},p=[{value:"Service API",id:"service-api",children:[],level:2},{value:"API structure",id:"api-structure",children:[],level:2},{value:"Bastion NGINX configuration",id:"bastion-nginx-configuration",children:[],level:2},{value:"API code and server",id:"api-code-and-server",children:[],level:2},{value:"Deploying Bastion host and API using gitlab runner",id:"deploying-bastion-host-and-api-using-gitlab-runner",children:[],level:2},{value:"Testing the API witch CURL",id:"testing-the-api-witch-curl",children:[],level:2}],d={toc:p};function h(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"service-api"},"Service API"),(0,o.kt)("p",null,"In this section we will build our service API. It's responsible to ",(0,o.kt)("em",{parentName:"p"},"receive direct user request"),", check permissions and if authorized, read and modify files on our gitlab repository."),(0,o.kt)("p",null,"We will use python as the API language, but as explained before, you could use any language you want that can be built to receive and process HTTP requests. To make things a little faster, will be used ",(0,o.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/"},"FastAPI framework"),". We will try to keep things as simple as possible for the demo, and some funtions may have some minor issues, but on your journey to build a production API you should take more cautions and make things as secure as possible."),(0,o.kt)("p",null,"After building the API, users should be able to access it using user/pass and view or change information from their WAN site."),(0,o.kt)("p",null,"All files generated on this section (and on previous) are on full-stack automation github repo (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/liviozanol/full-stack-automation"},"https://github.com/liviozanol/full-stack-automation"),"), so you don't need to create it yourself again."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please, note that in this demo we will use Hashicorp Vault 2 itself to store and verify users authentication and authorization with simple Key/Value and this is not safe/recommended at all. We will create 3 KV secrets in it, each one containing the username, the password and the tenants that each user can access. API simply queries this data and check if passwords match and checks which tenant users belong. Also, queries to the API will use a Basic HTTP Authentication using provided user/pass and that is also not safe and should not be used on production."),(0,o.kt)("p",{parentName:"div"},"On a production environment you ",(0,o.kt)("em",{parentName:"p"},"MUST")," use other method of authentication/authorzation."),(0,o.kt)("p",{parentName:"div"},"If you already have an auth system you should consider integrating your APIs with it. If its an ",(0,o.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OIDC"),"/",(0,o.kt)("a",{parentName:"p",href:"https://oauth.net/2/"},"OAuth2")," even better, you can use its own specification to authorize and get users tenant based on custom scopes and it also has it own mean of temporary token exchange to enhace security."),(0,o.kt)("p",{parentName:"div"},"If you want to build your own Auth, you need to get this information elsewhere. I like ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=d4Y2DkKbxM0"},"this")," simple tutorial using React/GO that even uses JWT to exchange messages to/from API. You could also use some free OIDC as ",(0,o.kt)("a",{parentName:"p",href:"https://www.ory.sh/hydra/"},"Ory")," to build on premise auth system, and we could have done this on this demo, but would make our demo too big, more than it already is. Python FastAPI have nice features to easily integrate with oAuth/OIDC."))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Please note that I'm not a developer. You shouldn't trust my code blindly (in fact, any code). But feel free to use it, change it and send me angry feedbacks and comments."))),(0,o.kt)("p",null,"API source code for our demo can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/liviozanol/full-stack_automation/tree/master/demo/api"},"here")),(0,o.kt)("p",null,"Bastion configuration for our demo can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/liviozanol/full-stack_automation/tree/master/demo/bastion"},"here")),(0,o.kt)("h2",{id:"api-structure"},"API structure"),(0,o.kt)("p",null,"When you build APIs you almost always want to think your serevice on a ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"},"CRUD")," way:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"How do you Create a service instance;"),(0,o.kt)("li",{parentName:"ul"},"How do you Read/List your serivce instances;"),(0,o.kt)("li",{parentName:"ul"},"How do you Update a service instance;"),(0,o.kt)("li",{parentName:"ul"},"How do you Delete a service instance.")),(0,o.kt)("p",null,"Remebering our ",(0,o.kt)("a",{parentName:"p",href:"./full-stack-it-automation-part-6-demo-scenario"},"service definition"),", our service is a WAN site LAN customization that users can change LAN IP addresses, set helper address, ACLs and some other infos. Thinking in a CRUD way would be something like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create/Enable a WAN site LAN interface (or install/activate/comission whole WAN site CPE, including its PE interface)."),(0,o.kt)("li",{parentName:"ul"},"Read/List WAN sites LAN configuration."),(0,o.kt)("li",{parentName:"ul"},"Update/Change WAN sites LAN configuration."),(0,o.kt)("li",{parentName:"ul"},"Delete/Disable a WAN site LAN interface (or desinstall/descomission whole WAN site CPE).")),(0,o.kt)("p",null,"As you can see, Creating/Deleting our service could/should be a staff/operator activity, and we will not cover it on the demo, but if you want, you sure can! You would need to create playbooks involved on these tasks, change your gitlab runner to indetify when to execute each playbook (eg.: by a commit message?), create a way to authenticate/authorize your operators (could even use our Vault user/pass/tenant sctructure - just for a demo, please) and create these functions on the API/UI."),(0,o.kt)("p",null,"Considering the info above, we will build a ",(0,o.kt)("a",{parentName:"p",href:"https://restfulapi.net/"},"REST API")," that receives either a HTTP GET(read/list) or PUT(update) request. The API will be stateless and you can scale it horizontally."),(0,o.kt)("p",null,"We will also use a bastion container using ",(0,o.kt)("a",{parentName:"p",href:"https://www.nginx.com/"},"NGINX")," that receives our requests and identify to which API endpoint it should redirect it based on path (eg.: ",(0,o.kt)("a",{parentName:"p",href:"http://127.0.0.1/wan_site"},"http://127.0.0.1/wan_site")," should go to our demo API). Keep in mind that each API container is responsible for its own auth function, our bastion hosts only pass our requests to the API based on the URL path (eg.: wan_site to wan_site APIs)."),(0,o.kt)("p",null,"You could also add some cache layer if you want using something like ",(0,o.kt)("a",{parentName:"p",href:"https://redis.io/"},"redis")," if you have some complex automation. "),(0,o.kt)("p",null,"Everything will be auto deployed by our gitlab runner using a CI/CD pipeline."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You could, and it is a good practice, create 2 separated APIs layers for any specific service deployed. The first one deals with data validation, business rules and other things related with user relationship and frontend. This is the API accessed by users and the web interface. Another one would be responsible with basic validation, parsing, uploading data on gitlab and other things related with automation itself. The first one only talks to the second one and never touches any piece of your automation infrastructure. You could also add an auth for this API to API conversation using JWT for example to secure it better."))),(0,o.kt)("p",null,"The following picture demonstrate our expanded API layer for the demo (we will build a bastion host container and only one wan_site API container, but could be easilly scalable):\n",(0,o.kt)("img",{alt:"API layer architecture",src:a(4442).Z})),(0,o.kt)("p",null,"Demo with API running\n",(0,o.kt)("img",{alt:"API",src:a(961).Z})),(0,o.kt)("h2",{id:"bastion-nginx-configuration"},"Bastion NGINX configuration"),(0,o.kt)("p",null,"We will keep bastion host configuration as simple as possible, and you should enhance its configuration if needed and can read more about NGINX configuration ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide"},"here"),"."),(0,o.kt)("p",null,"We will use ",(0,o.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/nginx"},"official alpine nginx docker image")," and create 3 files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"apis.conf")," that will have our proxy_pass redirecting requests containing wan_sites on path to our API. For every API you create, just add a line like this, redirecting to the correct API endpoint. 127.0.0.1 will be replaced by our script with the real IP from our host.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"location /wan_sites {\n    proxy_pass http://127.0.0.1:10042/wan_sites;\n    include /etc/nginx/conf.d/APIs/default_proxy.conf;\n}\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default_proxy.conf")," that will have our common proxy configuration for every API:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"proxy_http_version  1.1;\nproxy_cache_bypass  $http_upgrade;\n\nproxy_set_header Host               $host;\nproxy_set_header X-Real-IP          $remote_addr;\nproxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\nproxy_set_header X-Forwarded-Proto  $scheme;\nproxy_set_header X-Forwarded-Host   $host;\nproxy_set_header X-Forwarded-Port   $server_port;\n    \nproxy_connect_timeout 180;\nproxy_send_timeout 180;\nproxy_read_timeout 180;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"default.conf")," that is basically own nginx default.conf just adding include clause to import our ",(0,o.kt)("inlineCode",{parentName:"li"},"apis.conf"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"server {\n    listen       80;\n    listen  [::]:80;\n    server_name  localhost;\n    include /etc/nginx/conf.d/APIs/*.conf;\n(...)\n}\n")),(0,o.kt)("h2",{id:"api-code-and-server"},"API code and server"),(0,o.kt)("p",null,"As stated on the beginning we will use ",(0,o.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/"},"FastAPI framework")," to build our API. We will publish it using ",(0,o.kt)("a",{parentName:"p",href:"https://www.uvicorn.org/"},"Uvicorn")," on a container."),(0,o.kt)("p",null,"You could scale it simply creating more containers and changing nginx bastion host config (if not on kubernetes) to load balance between them (please use ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/load-balancer/http-health-check"},"healthchecks"),"), or use some more structured approaches using ",(0,o.kt)("a",{parentName:"p",href:"https://fastapi.tiangolo.com/deployment/server-workers"},"gunicorn")," or even more complex structures with cache layers."),(0,o.kt)("p",null,"The created code is simple and structured in a approach more close to Functional Programming rather than Object Oriented (OOP). It has 3 files:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/liviozanol/full-stack_automation/blob/master/demo/api/main.py"},"main.py")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/liviozanol/full-stack_automation/blob/master/demo/api/check_permissions.py"},"check_permissions.py")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/liviozanol/full-stack_automation/blob/master/demo/api/wan_api_functions.py"},"wan_api_functions.py"))),(0,o.kt)("p",null,'main.py is responsible to handle the HTTP requests, check if user have permissions, and send the requests to the appropriate functions that processes them. If a user send a GET request to the path "/wan_sites" main.py, after checking permissions, will send the request to the function that get sites JSON data from gitlab and return them.'),(0,o.kt)("p",null,"check_permissions.py is responsible to get credentials from the HTTP Authorization header, check if they match the stored one on vault and get the tenants that user has permission. For EVERY request the Auth Header ",(0,o.kt)("em",{parentName:"p"},"must")," be sent to the API and requests are only processed if they are authorized on vault. Separating the permission check in functions like this, allow us to easially change how this check is done to use other auth providers like OIDC. The function can do whatever you want, just needing to return what tenants does that user has permission."),(0,o.kt)("p",null,"wan_api_functions.py is our principal file and is the one that we work the most coding. It contains all functions related to the API objective itself. It has functions to get data from gitlab, to list pipeline jobs and its status, to receive UPDATE requests from user and validate it and so on. The biggest and most workly function here is the one that validate the user data on a UPDATE requests. It has a lot of strictly validating rules based on our data definition and is the function that you need to have most care and takes more time to build."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We have created a new HTTP GET path on our API that will list the last x pipeline jobs and its status. This can be used by the user to check if its UPDATE is finished or not and will also be used on the web UI."),(0,o.kt)("p",{parentName:"div"},"On the UPDATE API path we have configured the function to accept a query string that will make the UPDATE syncronous (wait until the job pipeline is finished) or asyncronous (just UPDATE gitlab file with user data)."),(0,o.kt)("p",{parentName:"div"},"We have made a separate validation function for user data because we wanted to make some complex data validation besides simple string/int/boolean/regex one. FastAPI has some good options for simple data validation using strong integration with ",(0,o.kt)("a",{parentName:"p",href:"https://pydantic-docs.helpmanual.io/"},"pydantic")))),(0,o.kt)("h2",{id:"deploying-bastion-host-and-api-using-gitlab-runner"},"Deploying Bastion host and API using gitlab runner"),(0,o.kt)("p",null,"As stated before, we will use the same gitlab runner that call AWX to automatic deploy our API and bastion/reverse proxy. On a production environment, the API/bastion gitlab runner should be separated."),(0,o.kt)("p",null,"Will be created 2 repositories on gitlab: 1 for our bastion host and another for our API. Gitlab runner will watch these repos and update our API or bastion container everytime we modify it."),(0,o.kt)("p",null,"Again, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/liviozanol/full-stack_automation/blob/master/demo/api/.gitlab-ci.yml"},"our CI/CD pipeline")," will be VERY simple, without even testing our application before deploy. Please note that adding more stages with some good tests, validation, approval is very recommended for the APIs and also for UI. For simplicity, also the bastion/API update process will be disruptive (stop old caontainers and running new ones), but you can easilly achieve high availability for the APIs scaling them horizontally and Load Balancing with healthchecks on bastion hosts. Updating the bastion/reverse proxy container  without disrupting it thougha is more difficult."),(0,o.kt)("h2",{id:"testing-the-api-witch-curl"},"Testing the API witch CURL"),(0,o.kt)("p",null,"When the API is deployed you can test its functions using curl like below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Listing Client A WAN sites\n",(0,o.kt)("inlineCode",{parentName:"p"},"curl --user client_a_user:client_a_user 127.0.0.1:10042/wan_sites | jq"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Getting one specific site from Client B:\n",(0,o.kt)("inlineCode",{parentName:"p"},"curl --user client_b_user:client_b_user 127.0.0.1:10042/wan_sites/site_3 | jq"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Updating info for site 1 from Client A asyncronous (please, create CHANGED_FILE.json with your changes):\n",(0,o.kt)("inlineCode",{parentName:"p"},"curl --user client_a_user:client_a_user 127.0.0.1:10042/wan_sites/site_1?sync=0 -X PUT --data @demo/api/update_test_files/CHANGED_FILE.json"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"List the last 10 jobs for site 1:\n",(0,o.kt)("inlineCode",{parentName:"p"},"curl --user client_a_user:client_a_user 127.0.0.1:10042/wan_sites/site_1/jobs?number_of_jobs=10 | jq")))))}h.isMDXComponent=!0},961:function(e,t,a){t.Z=a.p+"assets/images/api-d1e47fa284844fad2bff304f33bb000e.gif"},4442:function(e,t,a){t.Z=a.p+"assets/images/api_arch-2bf5d3a520f0324630d2c7f2851ad246.svg"}}]);
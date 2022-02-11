"use strict";(self.webpackChunklivio_dump_page=self.webpackChunklivio_dump_page||[]).push([[1182],{3905:function(t,e,i){i.d(e,{Zo:function(){return I},kt:function(){return b}});var a=i(7294);function l(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function n(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,a)}return i}function o(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?n(Object(i),!0).forEach((function(e){l(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function d(t,e){if(null==t)return{};var i,a,l=function(t,e){if(null==t)return{};var i,a,l={},n=Object.keys(t);for(a=0;a<n.length;a++)i=n[a],e.indexOf(i)>=0||(l[i]=t[i]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(a=0;a<n.length;a++)i=n[a],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(l[i]=t[i])}return l}var c=a.createContext({}),r=function(t){var e=a.useContext(c),i=e;return t&&(i="function"==typeof t?t(e):o(o({},e),t)),i},I=function(t){var e=r(t.components);return a.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var i=t.components,l=t.mdxType,n=t.originalType,c=t.parentName,I=d(t,["components","mdxType","originalType","parentName"]),m=r(i),b=l,u=m["".concat(c,".").concat(b)]||m[b]||s[b]||n;return i?a.createElement(u,o(o({ref:e},I),{},{components:i})):a.createElement(u,o({ref:e},I))}));function b(t,e){var i=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=i.length,o=new Array(n);o[0]=m;var d={};for(var c in e)hasOwnProperty.call(e,c)&&(d[c]=e[c]);d.originalType=t,d.mdxType="string"==typeof t?t:l,o[1]=d;for(var r=2;r<n;r++)o[r]=i[r];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}m.displayName="MDXCreateElement"},2745:function(t,e,i){i.r(e),i.d(e,{frontMatter:function(){return d},contentTitle:function(){return c},metadata:function(){return r},assets:function(){return I},toc:function(){return s},default:function(){return b}});var a=i(7462),l=i(3366),n=(i(7294),i(3905)),o=["components"],d={slug:"full-stack-it-automation-part-2-gitlab",title:"Full-Stack Automation Part 2 - Gitlab",authors:["livio"],tags:["automation","ansible","gitlab","python eve","netbox","gitlab-ci","network automation"]},c=void 0,r={permalink:"/full-stack-it-automation-part-2-gitlab",editUrl:"https://github.com/liviozanol/liviozanol.github.io/blog/2021-12-04-automation-2/index.md",source:"@site/blog/2021-12-04-automation-2/index.md",title:"Full-Stack Automation Part 2 - Gitlab",description:"Gitlab",date:"2021-12-04T00:00:00.000Z",formattedDate:"December 4, 2021",tags:[{label:"automation",permalink:"/tags/automation"},{label:"ansible",permalink:"/tags/ansible"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"python eve",permalink:"/tags/python-eve"},{label:"netbox",permalink:"/tags/netbox"},{label:"gitlab-ci",permalink:"/tags/gitlab-ci"},{label:"network automation",permalink:"/tags/network-automation"}],readingTime:3.39,truncated:!0,authors:[{name:"L\xedvio Zanol Puppim",title:"Me",url:"https://github.com/liviozanol",imageURL:"https://github.com/liviozanol.png",key:"livio"}],prevItem:{title:"Full-Stack Automation Part 3 - Vault",permalink:"/full-stack-it-automation-part-3-Vault"},nextItem:{title:"Full-Stack Automation Part 1 - Overview",permalink:"/full-stack-it-automation-part-1"}},I={authorsImageUrls:[void 0]},s=[{value:"Gitlab",id:"gitlab",children:[],level:2},{value:"Gitlab Role",id:"gitlab-role",children:[],level:2},{value:"Gitlab Alternatives",id:"gitlab-alternatives",children:[],level:2},{value:"Gitlab Installation and Configuration",id:"gitlab-install-config",children:[],level:2}],m={toc:s};function b(t){var e=t.components,d=(0,l.Z)(t,o);return(0,n.kt)("wrapper",(0,a.Z)({},m,d,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"gitlab"},"Gitlab"),(0,n.kt)("p",null,"Since gitlab is the center of our architecture we'll start by installing and configuring it."),(0,n.kt)("p",null,"Gitlab is a git source code controller with a nice websystem that doesn't need introductions and is very similar to github. It has versioning, issues control, tags, auto devops, and a lot of features that you can explore."),(0,n.kt)("p",null,"More about Gitlab can be found on its site: ",(0,n.kt)("a",{parentName:"p",href:"https://about.gitlab.com/stages-devops-lifecycle"},"https://about.gitlab.com/stages-devops-lifecycle")),(0,n.kt)("h2",{id:"gitlab-role"},"Gitlab Role"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gitlab role on architecture",src:i(5880).Z})),(0,n.kt)("p",null,"Gitlab will be used by the solution for 3 main objectives:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Store structured data that will be read and manipulated by the API, also keeping historical data/versions.")," This is it purpose on architecture."),(0,n.kt)("li",{parentName:"ul"},"Store inventories, playbooks and complementary files (templates, etc.) used by AWX. (Could be files directed inserted on AWX)"),(0,n.kt)("li",{parentName:"ul"},"Store the APIs and UI code. (Could be files directed created on a web server infrastructure)")),(0,n.kt)("p",null,"Ideally, for security purposes, you should separate it in 3 or 2 gitlabs (1 only for AWX files, ",(0,n.kt)("strong",{parentName:"p"},"1 for your structured data")," (our main reason) and 1 for APIs/UI). Gitlab-ci/runner should communicate only with structured data gitlab and maybe APIs/UI gitlab. For simplicity on the demo, will be kept only one."),(0,n.kt)("p",null,"On full-stack automation, gitlab never talks to any external element and only receives connection from the following elements:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"APIs that need to read/write structured data on repositories."),(0,n.kt)("li",{parentName:"ul"},"Gitlab CI that reads pour structured data and starts the execution of a pipeline and call AWX to implement changes."),(0,n.kt)("li",{parentName:"ul"},"AWX that needs to read playbooks/inventories/templates (could be a separate gitlab).")),(0,n.kt)("p",null,"You may also need to manually send data to it (eg.: modify API source codes or ansible playbooks). Also it could be used to make a request/approval step for gitlab runner pipeline and 'admins/operators' can access it and approve this step directly on gitlab web UI."),(0,n.kt)("h2",{id:"gitlab-alternatives"},"Gitlab Alternatives"),(0,n.kt)("p",null,"As any other piece of the solution you could replace gitlab with other tools, like github, files, databases or whatever. Also, for the structured data for your API, you could use other specific solutions that should work even better than gitlab."),(0,n.kt)("p",null,"You could use ",(0,n.kt)("a",{parentName:"p",href:"https://netbox.readthedocs.io/en/stable/"},"Netbox")," which already has a lot of structured data and a nice API, but it's a little difficult to expand (as of 2021-12). You could also use ",(0,n.kt)("a",{parentName:"p",href:"https://docs.python-eve.org/en/stable/"},"Python Eve")," which is a data agnostic API interface to a mongodb with features like data validation and format, auto sort/filter, historical data and included race conditions control. Really nice solution and fits perfectly on this architecture. Go check it out."),(0,n.kt)("p",null,"Remember that changing gitlab with another solution will need adjustment on the CI/CD portion. You can add an MQ (eg.: activeMQ, rabbitMQ) to the architecture that would make you less dependent on gitlab CI and make gitlab more easily replaceable. MQ would be the mechanism that calls AWX and monitor execution (instead of gitlab-ci), and the API itself would post jobs on the MQ. This would also allow you to insert other automations tools besides AWX, since the MQ would be the solution that calls jobs and monitors its execution. It is a good option also."),(0,n.kt)("h2",{id:"gitlab-install-config"},"Gitlab Installation and Configuration"),(0,n.kt)("p",null,"First, if you haven't cloned the architecture repo from github, please do so: ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/liviozanol/full-stack-automation")),(0,n.kt)("p",null,"TL;DR: Simply run the shell script. You could check each step reading the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/liviozanol/full-stack_automation/tree/master/installation/gitlab"},"repo itself")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo /bin/bash installation/gitlab/create_gitlab.sh\n")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"You need to have docker and docker-compose available. Docker service must be running and healthy (check with ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo docker ps")," or similar)."))),(0,n.kt)("p",null,"The installation has a docker-compose YAML and a shell script. The shell script is used to create users and access tokens on gitlab that will be used by AWX to get playbooks and also for further scripts to associate gitlab-ci to projects programmatically (and also create the repositories). Note that we are running gitlab only on HTTP. In a production environment you should run it on HTTPS (offloaded or not)."),(0,n.kt)("p",null,"The docker-compose will install and run gitlab and also run a shell script that will create users access tokens to be used further on the solution."))}b.isMDXComponent=!0},5880:function(t,e){e.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyOTJweCIgaGVpZ2h0PSIxNTJweCIgdmlld0JveD0iLTAuNSAtMC41IDI5MiAxNTIiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjEtMTItMDZUMTk6MjM6NTYuODI2WiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk2LjAuNDY2NC40NSBTYWZhcmkvNTM3LjM2JnF1b3Q7IHZlcnNpb249JnF1b3Q7MTUuOC45JnF1b3Q7IGV0YWc9JnF1b3Q7NFRHOXZmZEROSUd3NnVkNlJ6T2YmcXVvdDsgdHlwZT0mcXVvdDtnb29nbGUmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7WUM5ODVNZTJHczBLOVFWd095ckEmcXVvdDsmZ3Q7M1ZmQmpwc3dFUDBhcmlzQ2dkQmprbDIybFZxcFVnNmJIQjJZZ0Z2RFJNWUowSyt2QVJQanBXbFhiY1JXdWV4NjNzell6RHkva1dPNTY2eDY1dVNZZnNFWW1PWFljV1c1ajVianpIMWIvbTJBdWdNV250TUJDYWR4QjgwMHNLRS9RSUVxTHpuUkdBb2pVQ0F5UVk4bUdHR2VReVFNakhDT3BSbDJRR2FlZWlRSmpJQk5STmdZZmFHeFNEczBjQllhL3dnMFNmdVRaLzZIenBPUlBsaFZVcVFreG5JQXVVK1d1K2FJb2x0bDFScFkwN3UrTDExZWVNVjcrVEFPdVhoTGd1cDdJZXErTm9obHFjck1NWmYvVmh4UGVReE5oaTB0NUNMRkJIUENQaU1lSlRpVDREY1FvbFpFa1pOQUNhVWlZOG9MRlJYYndYclhiUFhnS2V1eFVqdTNSdDBidWVEMWRtZ01zaHBUcDdWV24xY0l3c1d5SVZrWDBHSWhaVXpGSE9SeWpReDVXN0liRXdnT1VSdkg4VHNNUExhOUNNUHc0dW5KbGpTdHVzWTEzVEphWCtDSlJ3cHkxZFVrUEFIRmhqY21hSGFoWGNvRk1BTlpqUXpod0lpZ1ozTjNvaTV1Y29uVDNNcUZvdmZYVkt1dk9STjJVcHN1djM0YTBhKzVic2dxVXlwZ2N5UnRSYVhVc3NucjdmcDRCaTZndW5xSnIvUklKVGdMcFNZMVR1UnhuVjFxY2ZZakp4M28wclAvdmF2elNRV2tSYk1iZVA0a0lLMlpuU0daTndnb1lxUW9hUFJLUSszQmVmeEtaUktaWG1QZVdHUCsrMm5NRzJuc21RcEc5bmNoTXpkd0g3eDNFNXAvdGJYMitqN0dtQnZNamU3T0orenVZdG94OWpmdmdObnQzd0dER2FZSG5SNWp0NzBidngxandYLzFWQWpHVDRXOG9IdDVGeHlmeVc5WjdibGNKYzFxK2JLOUMvRjU5bVJ2Q0ducUIzN3JHL3hLY3A5K0FnPT0mbHQ7L2RpYWdyYW0mZ3Q7Jmx0Oy9teGZpbGUmZ3Q7Ij48ZGVmcy8+PGc+PHBhdGggZD0iTSA2MSAyNiBMIDEwNi4yNiAyNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTEyLjI2IDI2IEwgMTA0LjI2IDMwIEwgMTA2LjI2IDI2IEwgMTA0LjI2IDIyIFoiIGZpbGw9IiMwMDdmZmYiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iNjAiIGhlaWdodD0iNTAiIHJ4PSI3LjUiIHJ5PSI3LjUiIGZpbGw9IiNkYWU4ZmMiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjZweDsgbWFyZ2luLWxlZnQ6IDJweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkFQSTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzMSIgeT0iMzAiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BUEk8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gMTQ0LjU4IDU5LjI0IEwgMTQ1IDEwMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTQ0LjUyIDUzLjI0IEwgMTQ4LjYgNjEuMiBMIDE0NC41OCA1OS4yNCBMIDE0MC42IDYxLjI4IFoiIGZpbGw9IiMwMDdmZmYiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxMTQuNSIgeT0iMSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjUwIiByeD0iNy41IiByeT0iNy41IiBmaWxsPSIjZGFlOGZjIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDI2cHg7IG1hcmdpbi1sZWZ0OiAxMTZweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkdpdGxhYjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxNDUiIHk9IjMwIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R2l0bGFiPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIxMTUiIHk9IjEwMSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjUwIiByeD0iNy41IiByeT0iNy41IiBmaWxsPSIjZGFlOGZjIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDEyNnB4OyBtYXJnaW4tbGVmdDogMTE2cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5HaXRsYWIgQ0k8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMTQ1IiB5PSIxMzAiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5HaXRsYWIgQ0k8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gMjMxIDI2IEwgMTgyLjc0IDI2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAxNzYuNzQgMjYgTCAxODQuNzQgMjIgTCAxODIuNzQgMjYgTCAxODQuNzQgMzAgWiIgZmlsbD0iIzAwN2ZmZiIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxyZWN0IHg9IjIzMSIgeT0iMSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjUwIiByeD0iNy41IiByeT0iNy41IiBmaWxsPSIjZGFlOGZjIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDI2cHg7IG1hcmdpbi1sZWZ0OiAyMzJweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkFuc2libGU8YnIgLz5BV1g8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMjYxIiB5PSIzMCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFuc2libGUuLi48L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48c3dpdGNoPjxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPjxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kaWFncmFtcy5uZXQvZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+Vmlld2VyIGRvZXMgbm90IHN1cHBvcnQgZnVsbCBTVkcgMS4xPC90ZXh0PjwvYT48L3N3aXRjaD48L3N2Zz4="}}]);
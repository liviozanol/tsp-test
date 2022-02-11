"use strict";(self.webpackChunklivio_dump_page=self.webpackChunklivio_dump_page||[]).push([[5732],{3905:function(t,i,a){a.d(i,{Zo:function(){return b},kt:function(){return s}});var e=a(7294);function l(t,i,a){return i in t?Object.defineProperty(t,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[i]=a,t}function n(t,i){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),a.push.apply(a,e)}return a}function I(t){for(var i=1;i<arguments.length;i++){var a=null!=arguments[i]?arguments[i]:{};i%2?n(Object(a),!0).forEach((function(i){l(t,i,a[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(a,i))}))}return t}function d(t,i){if(null==t)return{};var a,e,l=function(t,i){if(null==t)return{};var a,e,l={},n=Object.keys(t);for(e=0;e<n.length;e++)a=n[e],i.indexOf(a)>=0||(l[a]=t[a]);return l}(t,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(e=0;e<n.length;e++)a=n[e],i.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=e.createContext({}),c=function(t){var i=e.useContext(o),a=i;return t&&(a="function"==typeof t?t(i):I(I({},i),t)),a},b=function(t){var i=c(t.components);return e.createElement(o.Provider,{value:i},t.children)},m={inlineCode:"code",wrapper:function(t){var i=t.children;return e.createElement(e.Fragment,{},i)}},Z=e.forwardRef((function(t,i){var a=t.components,l=t.mdxType,n=t.originalType,o=t.parentName,b=d(t,["components","mdxType","originalType","parentName"]),Z=c(a),s=l,r=Z["".concat(o,".").concat(s)]||Z[s]||m[s]||n;return a?e.createElement(r,I(I({ref:i},b),{},{components:a})):e.createElement(r,I({ref:i},b))}));function s(t,i){var a=arguments,l=i&&i.mdxType;if("string"==typeof t||l){var n=a.length,I=new Array(n);I[0]=Z;var d={};for(var o in i)hasOwnProperty.call(i,o)&&(d[o]=i[o]);d.originalType=t,d.mdxType="string"==typeof t?t:l,I[1]=d;for(var c=2;c<n;c++)I[c]=a[c];return e.createElement.apply(null,I)}return e.createElement.apply(null,a)}Z.displayName="MDXCreateElement"},9734:function(t,i,a){a.r(i),a.d(i,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return b},toc:function(){return m},default:function(){return s}});var e=a(7462),l=a(3366),n=(a(7294),a(3905)),I=["components"],d={slug:"full-stack-it-automation-part-5-gitlabci",title:"Full-Stack Automation Part 5 - Gitlab CI",authors:["livio"],tags:["automation","awx","ansible","gitlab","network automation","gitlab-ci","CI/CD","gitops"]},o=void 0,c={permalink:"/full-stack-it-automation-part-5-gitlabci",editUrl:"https://github.com/liviozanol/liviozanol.github.io/blog/2021-12-09-automation-5/index.md",source:"@site/blog/2021-12-09-automation-5/index.md",title:"Full-Stack Automation Part 5 - Gitlab CI",description:"Gitlab-CI",date:"2021-12-09T00:00:00.000Z",formattedDate:"December 9, 2021",tags:[{label:"automation",permalink:"/tags/automation"},{label:"awx",permalink:"/tags/awx"},{label:"ansible",permalink:"/tags/ansible"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"network automation",permalink:"/tags/network-automation"},{label:"gitlab-ci",permalink:"/tags/gitlab-ci"},{label:"CI/CD",permalink:"/tags/ci-cd"},{label:"gitops",permalink:"/tags/gitops"}],readingTime:2.735,truncated:!0,authors:[{name:"L\xedvio Zanol Puppim",title:"Me",url:"https://github.com/liviozanol",imageURL:"https://github.com/liviozanol.png",key:"livio"}],prevItem:{title:"Full-Stack Automation Part 6 - Demo -Scenario",permalink:"/full-stack-it-automation-part-6-demo-scenario"},nextItem:{title:"Full-Stack Automation Part 4 - AWX",permalink:"/full-stack-it-automation-part-4-awx"}},b={authorsImageUrls:[void 0]},m=[{value:"Gitlab-CI",id:"gitlab-ci",children:[],level:2},{value:"Gitlab-CI Role",id:"gitlab-ci-role",children:[],level:2},{value:"Gitlab-CI Alternatives",id:"gitlab-ci-alternatives",children:[],level:2},{value:"Gitlab-CI Installation and Configuration",id:"gitlab-ce-install-config",children:[],level:2}],Z={toc:m};function s(t){var i=t.components,d=(0,l.Z)(t,I);return(0,n.kt)("wrapper",(0,e.Z)({},Z,d,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"gitlab-ci"},"Gitlab-CI"),(0,n.kt)("p",null,"Gitlab-CI, AKA Gitlab runner, is a Continuous Integration and Continuous Delivery/Deployment solution built by gitlab. It fully integrates with gitlab listening for changes on repositories and executing pipelines to automate build, test, approve and deploy applications."),(0,n.kt)("p",null,"It can run on a container and, after a change is triggered, uses docker images to execute steps configured on the pipeline."),(0,n.kt)("p",null,"More about Gitlab can be found on its site: ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/ci/"},"https://docs.gitlab.com/ee/ci/")),(0,n.kt)("h2",{id:"gitlab-ci-role"},"Gitlab-CI Role"),(0,n.kt)("p",null,"Gitlab-CI will be used as the mechanism that starts automation. It will monitor gitlab repositories, detect changes on it and call AWX to implement changes on automated resources (eg.: router). This is its main function, but it will also be used to automatically create containers needed by the API and web interface."),(0,n.kt)("p",null,"Gitlab-CI talks to almost every component on the solution:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Calls AWX API to run and monitor jobs/playbook execution;"),(0,n.kt)("li",{parentName:"ul"},"Monitor changes on gitlab repositories to run its CI/CD pipelines;"),(0,n.kt)("li",{parentName:"ul"},"Create API containers and also talk to them if needed on a pipeline step (should be a separated gitlab runner);"),(0,n.kt)("li",{parentName:"ul"},"Get keys/secrets from hashicorp vault 2 if needed on the pipeline and use them to talk to gitlab itself or to talk to full-stack automation APIs.")),(0,n.kt)("p",null,"Gitlab-CI will be running with privileged mode so it can access docker socket and create, update and delete containers on the host itself. This is needed because Gitlab-CI will be responsible for managing API and web interface containers."),(0,n.kt)("p",null,"For its automation function on this architecture itself gitlab-ci only needs to get data on gitlab and call AWX REST API, so no privileged mode is required and you could use something like ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/_/docker"},"docker in docker")," to run it or a direct shell script. It is a good idea to separate functions as stated before."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Gitlab-CI role on architecture",src:a(2968).Z})),(0,n.kt)("h2",{id:"gitlab-ci-alternatives"},"Gitlab-CI Alternatives"),(0,n.kt)("p",null,"You can change Gitlab-CI to other CI/CD tools very easily. It is important to note that we are using it because of its tighty integration with gitlab itself and we will be able to query the gitlab API to know which step we are in the pipeline so we can notify the user about its request."),(0,n.kt)("p",null,"So, feel free to use other tools like CircleCI, Jenkins, Travis, whatever."),(0,n.kt)("p",null,"You could also choose to not use a CI/CD as an element that starts automation. If you decide, for example, to use a solution with python EVE as a database and a MQ to talk to AWX you could have the jobs and approval steps controlled by the API directly with its status stored on python EVE and MQ could be the responsible to query AWX job status and update it on EVE."),(0,n.kt)("h2",{id:"gitlab-ce-install-config"},"Gitlab-CI Installation and Configuration"),(0,n.kt)("p",null,"First, if you haven't cloned the architecture repo from github, please do so: ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/liviozanol/full-stack-automation")),(0,n.kt)("p",null,"TL;DR: Simply run the shell script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"sudo /bin/bash installation/gitlab-runner/create_gitlabrunner.sh\n")),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"You need to have docker available. Docker service must be running and healthy (check with ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo docker ps")," or similar)."))),(0,n.kt)("p",null,"Installing gitlab-runner is simple as issuing a docker run"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo docker run -d --name gitlab-runner --restart always \\\n    --privileged \\\n    -v /var/run/docker.sock:/var/run/docker.sock \\\n    -v /srv/gitlab-runner:/etc/gitlab-runner:Z \\\n    gitlab/gitlab-runner:alpine\n")),(0,n.kt)("p",null,"In the next steps, gitlab-runner will be configured to register on gitlab and monitor changes."))}s.isMDXComponent=!0},2968:function(t,i){i.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyOTNweCIgaGVpZ2h0PSIxNTNweCIgdmlld0JveD0iLTAuNSAtMC41IDI5MyAxNTMiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjEtMTItMDlUMTc6MDM6MTUuNDg3WiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk2LjAuNDY2NC40NSBTYWZhcmkvNTM3LjM2JnF1b3Q7IHZlcnNpb249JnF1b3Q7MTUuOC45JnF1b3Q7IGV0YWc9JnF1b3Q7SUEyaXpKSkZjc3o0Rm5VSmV3YUwmcXVvdDsgdHlwZT0mcXVvdDtnb29nbGUmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7czAzeHVTbVFDX19FVk1CZDlUTWgmcXVvdDsmZ3Q7M1ZoZGo1c3dFUHcxdkZZRzU0TThKcm5qcmxJclZZclV1M3Qwd0FHM0RvdU11WkQrK3Bxd0JITTAxN1JOZzVTWGhKMzFnbmM4WStJNGRMa3RIeFRMa3M4UWNlbDRKQ29kZXVkNDNuamttczhLMk5lQVQyWTFFQ3NSMVpEYkFpdnhneU5JRUMxRXhQUE9RQTBndGNpNllBaHB5a1Bkd1poU3NPc08yNERzUGpWak1lOEJxNURKUHZva0lwMWdGOTYweFIrNWlKUG15ZTRFKzl1eVpqQjJraWNzZ3AwRjBYdUhMaFdBcnErMjVaTExpcnVHbDdvdU9KRTlUa3p4Vko5VDROVUZyMHdXMk52OHkwZWNtdDQzL1NvbzBvaFhKYTVERjd0RWFMN0tXRmhsZDJhQkRaYm9yY1QwUmtpNUJBbnFVRXNqeHYxTmFQQmNLL2pPclF3aDB5QUlqcG1HU2NQQkFtZkZsZWJseWM3Y0kxOUdaeHkyWEt1OUdZSUYzaFFwUm8yWng5WHhybDJ4Q1VLSnRWaGp4QmhxSkQ3ZXVhWFJYQ0NUdjJhVjloamtrUkVRaGltazVtdlJra3BNQkVvbkVFUEs1Q2VBREtuOHhyWGVvL3hab2FGTE5DK0ZmcTdLUDR3eGVyRXlkeVhlK1JEc215QTFyVmhGVmZoaTU5cXlROVRVNVpvcFBhK3NZNEJRc2p3WFlRTUhRaDZubEViTklPelNJSmduRjlWR1JXaEhHVGtVS2tSb2hIc0NVekhIWmZYUDFvL2lrbW54MnIzN3Y2aGgxUFBZZzlDU3JXL0NadFNuUmtsREdXMThWYU81bHMxYTAvM1dhRjdIYWU2Zk9BMDdzRzFHdWpacnZkZzY3Ykx5ZU5kcGZ0OXBzK0djTnJudXZ2czNjbkJ0TFZpYjhBazFiQ0RWT0JIL0ZzVFIvSUliUWgzVGR6YmNTMHJoM0gxaGV2RjlZYmgxOVlaYlZ2L2s2NVVzYitPbkxQVkhuVGZzNklwdjJGbi9nSkRtWW0zbzlDYlNQR2V4VnVZcXJxN21UODgzUWZlWURIZHlhUFpIaSs5SGxpY2lCSlgxR2YvS0NvTjR4TDBKM3QrZTJQNmp6RTNZbnJFUE9ldVBDbnIvRXc9PSZsdDsvZGlhZ3JhbSZndDsmbHQ7L214ZmlsZSZndDsiPjxkZWZzLz48Zz48cmVjdCB4PSIxIiB5PSIxIiB3aWR0aD0iNjAiIGhlaWdodD0iNTAiIHJ4PSI3LjUiIHJ5PSI3LjUiIGZpbGw9IiNkYWU4ZmMiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjZweDsgbWFyZ2luLWxlZnQ6IDJweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkFQSTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzMSIgeT0iMzAiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BUEk8L3RleHQ+PC9zd2l0Y2g+PC9nPjxwYXRoIGQ9Ik0gMTQ0LjU4IDU5LjI0IEwgMTQ1IDEwMSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTQ0LjUyIDUzLjI0IEwgMTQ4LjYgNjEuMiBMIDE0NC41OCA1OS4yNCBMIDE0MC42IDYxLjI4IFoiIGZpbGw9IiMwMDdmZmYiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxMTQuNSIgeT0iMSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjUwIiByeD0iNy41IiByeT0iNy41IiBmaWxsPSIjZGFlOGZjIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDI2cHg7IG1hcmdpbi1sZWZ0OiAxMTZweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkdpdGxhYjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxNDUiIHk9IjMwIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R2l0bGFiPC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDE3NSAxMjYgTCAyNDAuMzQgNTYuOTgiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDI0NC40NiA1Mi42MiBMIDI0MS44NyA2MS4xOCBMIDI0MC4zNCA1Ni45OCBMIDIzNi4wNiA1NS42OCBaIiBmaWxsPSIjMDA3ZmZmIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAxMTUgMTI2IEwgNjkuMjQgMTI2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSA2My4yNCAxMjYgTCA3MS4yNCAxMjIgTCA2OS4yNCAxMjYgTCA3MS4yNCAxMzAgWiIgZmlsbD0iIzAwN2ZmZiIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxwYXRoIGQ9Ik0gMTE1IDEwMSBMIDUyLjY3IDU1LjgzIiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSA0Ny44MSA1Mi4zMSBMIDU2LjY0IDUzLjc3IEwgNTIuNjcgNTUuODMgTCA1MS45NCA2MC4yNSBaIiBmaWxsPSIjMDA3ZmZmIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMTE1IiB5PSIxMDEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI1MCIgcng9IjcuNSIgcnk9IjcuNSIgZmlsbD0iI2RhZThmYyIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogNThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMjZweDsgbWFyZ2luLWxlZnQ6IDExNnB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+R2l0bGFiIENJPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjE0NSIgeT0iMTMwIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R2l0bGFiIENJPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIyMzEiIHk9IjEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI1MCIgcng9IjcuNSIgcnk9IjcuNSIgZmlsbD0iI2RhZThmYyIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogNThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAyNnB4OyBtYXJnaW4tbGVmdDogMjMycHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5BbnNpYmxlPGJyIC8+QVdYPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjI2MSIgeT0iMzAiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbnNpYmxlLi4uPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIxIiB5PSIxMDEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI1MCIgcng9IjcuNSIgcnk9IjcuNSIgZmlsbD0iI2RhZThmYyIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogNThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMjZweDsgbWFyZ2luLWxlZnQ6IDJweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkhhc2hpY29ycDxiciAvPlZhdWx0IDE8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMzEiIHk9IjEzMCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhhc2hpY29ycC4uLjwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5WaWV3ZXIgZG9lcyBub3Qgc3VwcG9ydCBmdWxsIFNWRyAxLjE8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg=="}}]);
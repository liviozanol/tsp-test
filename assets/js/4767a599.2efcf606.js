"use strict";(self.webpackChunklivio_dump_page=self.webpackChunklivio_dump_page||[]).push([[5898],{3905:function(t,i,e){e.d(i,{Zo:function(){return s},kt:function(){return r}});var l=e(7294);function a(t,i,e){return i in t?Object.defineProperty(t,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[i]=e,t}function n(t,i){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);i&&(l=l.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),e.push.apply(e,l)}return e}function d(t){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?n(Object(e),!0).forEach((function(i){a(t,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):n(Object(e)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(e,i))}))}return t}function o(t,i){if(null==t)return{};var e,l,a=function(t,i){if(null==t)return{};var e,l,a={},n=Object.keys(t);for(l=0;l<n.length;l++)e=n[l],i.indexOf(e)>=0||(a[e]=t[e]);return a}(t,i);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)e=n[l],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var c=l.createContext({}),I=function(t){var i=l.useContext(c),e=i;return t&&(e="function"==typeof t?t(i):d(d({},i),t)),e},s=function(t){var i=I(t.components);return l.createElement(c.Provider,{value:i},t.children)},m={inlineCode:"code",wrapper:function(t){var i=t.children;return l.createElement(l.Fragment,{},i)}},Z=l.forwardRef((function(t,i){var e=t.components,a=t.mdxType,n=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),Z=I(e),r=a,u=Z["".concat(c,".").concat(r)]||Z[r]||m[r]||n;return e?l.createElement(u,d(d({ref:i},s),{},{components:e})):l.createElement(u,d({ref:i},s))}));function r(t,i){var e=arguments,a=i&&i.mdxType;if("string"==typeof t||a){var n=e.length,d=new Array(n);d[0]=Z;var o={};for(var c in i)hasOwnProperty.call(i,c)&&(o[c]=i[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,d[1]=o;for(var I=2;I<n;I++)d[I]=e[I];return l.createElement.apply(null,d)}return l.createElement.apply(null,e)}Z.displayName="MDXCreateElement"},268:function(t,i,e){e.r(i),e.d(i,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return I},assets:function(){return s},toc:function(){return m},default:function(){return r}});var l=e(7462),a=e(3366),n=(e(7294),e(3905)),d=["components"],o={slug:"full-stack-it-automation-part-3-Vault",title:"Full-Stack Automation Part 3 - Vault",authors:["livio"],tags:["automation","harshicorp vault","ansible","gitlab","network automation"]},c=void 0,I={permalink:"/full-stack-it-automation-part-3-Vault",editUrl:"https://github.com/liviozanol/liviozanol.github.io/blog/2021-12-07-automation-3/index.md",source:"@site/blog/2021-12-07-automation-3/index.md",title:"Full-Stack Automation Part 3 - Vault",description:"Harshicorp Vault",date:"2021-12-07T00:00:00.000Z",formattedDate:"December 7, 2021",tags:[{label:"automation",permalink:"/tags/automation"},{label:"harshicorp vault",permalink:"/tags/harshicorp-vault"},{label:"ansible",permalink:"/tags/ansible"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"network automation",permalink:"/tags/network-automation"}],readingTime:2.875,truncated:!0,authors:[{name:"L\xedvio Zanol Puppim",title:"Me",url:"https://github.com/liviozanol",imageURL:"https://github.com/liviozanol.png",key:"livio"}],prevItem:{title:"Full-Stack Automation Part 4 - AWX",permalink:"/full-stack-it-automation-part-4-awx"},nextItem:{title:"Full-Stack Automation Part 2 - Gitlab",permalink:"/full-stack-it-automation-part-2-gitlab"}},s={authorsImageUrls:[void 0]},m=[{value:"Harshicorp Vault",id:"harshicorp-vault",children:[],level:2},{value:"Harshicorp Vault",id:"vault-role",children:[],level:2},{value:"Harshicorp Vault Alternatives",id:"vault-alternatives",children:[],level:2},{value:"Harshicorp Vault Installation and Configuration",id:"vault-install-config",children:[],level:2}],Z={toc:m};function r(t){var i=t.components,o=(0,a.Z)(t,d);return(0,n.kt)("wrapper",(0,l.Z)({},Z,o,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"harshicorp-vault"},"Harshicorp Vault"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"Harshicorp Vault")," is a solution to secure store and get sensitive information. It has a lot of features, like One Time Password, many auth methods, policies, temp tokens, etc."),(0,n.kt)("p",null,"For this solution will be used a basic auth with token (no refreshment) to query vault, simple Key/Value will store keys/passwords. Of course it can and should be improved, like using policies, temp tokens, other auth methods, lease duration, etc. You can (and should) also limit requests for secrets based on IP addresses."),(0,n.kt)("h2",{id:"vault-role"},"Harshicorp Vault"),(0,n.kt)("p",null,"The full-stack automation solution will have 2 vaults."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Vault role on architecture",src:e(5868).Z})),(0,n.kt)("p",null,"Vault 1 only stores secret keys/values that will be used by AWX which are secrets that have access to modify infrastructure resources (e.g. router user/pass). A much more sensitive information."),(0,n.kt)("p",null,"Vault 2 stores secret keys/values to be used by the APIs, gitlab CI and AWX. It stores AWX user/pass and gitlab token. APIs need access to read/write on repositories of gitlab to change our structured data and will use the token stored on Vault for this. Gitlab-CI/Runner needs to start and read jobs on AWX using its API and will use user/pass stored on Vault for this."),(0,n.kt)("p",null,"Considering the sensitive data, vault 1 MUST only be accessed by AWX, and should preferably be installed in a specific network/security segment with ACLs/firewall rules permitting only AWX communication. This vault should only store credentials that will be used by the automation engine (ansible/awx)."),(0,n.kt)("p",null,"Also, rules can be used inside Vault that permits reading key/pass only by AWX (IP based). In this way, even if the access token from AWX is leaked and even if for some reason an attacker can communicate with Vault, it won't be able to get the sensitive key/pass."),(0,n.kt)("p",null,'On the "demo" solution, for simplicity, the 2 vaults will be on the same host, but in a production environment must be separated. Also, will be used the "dev" mode with local file storage and no TLS, but in a production environment you must, of course, install it with TLS.'),(0,n.kt)("p",null,"Also, on demo, Vault 2 will store user credentials (user/pass) that are used by end users to query API and also used on the UI for authentication. On production, you should consider using other authentication/authorization method for them."),(0,n.kt)("h2",{id:"vault-alternatives"},"Harshicorp Vault Alternatives"),(0,n.kt)("p",null,"You can use other methods or solutions if wanted like: gitlab secret variables; ansible/awx own vault; azure/aws vault; whatever. Harshicorp vault is used because it's a great software, with nice API, has enhanced security and is cloud/architecture agnostic. Also it has only one separate function in the solution, so, if needed, it can be easily changeable."),(0,n.kt)("h2",{id:"vault-install-config"},"Harshicorp Vault Installation and Configuration"),(0,n.kt)("p",null,"First, if you haven't cloned the architecture repo from github, please do so: ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/liviozanol/full-stack-automation")),(0,n.kt)("p",null,"TL;DR: Simply run the shell script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo /bin/bash installation/vault/create_vaults.sh\n")),(0,n.kt)("p",null,"In this guide Harshicorp Vault will be installed using docker-compose."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"You need to have docker and docker-compose available. Docker service must be running and healthy (check with ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo docker ps")," or similar)."))),(0,n.kt)("p",null,"The installation has a docker-compose YAML and a shell script. The shell script is used to create the key/pass on the 2 vaults that will be used to authenticate on AWX, gitlab and on the automated element. Note that vault is running only on HTTP. In a production environment you should run it on HTTPS (offloaded or not)."),(0,n.kt)("p",null,"The docker-compose will install and run vault."))}r.isMDXComponent=!0},5868:function(t,i){i.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIyOTNweCIgaGVpZ2h0PSIyNDNweCIgdmlld0JveD0iLTAuNSAtMC41IDI5MyAyNDMiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjEtMTItMDlUMTY6NTI6NTAuOTU1WiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk2LjAuNDY2NC40NSBTYWZhcmkvNTM3LjM2JnF1b3Q7IHZlcnNpb249JnF1b3Q7MTUuOC45JnF1b3Q7IGV0YWc9JnF1b3Q7SGVsVENFbUhhYktmQzVScnBIYjMmcXVvdDsgdHlwZT0mcXVvdDtnb29nbGUmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7cVFYX0tHbFMwUUZkNUtLRlJXaDYmcXVvdDsmZ3Q7M1ZqYmJ1SXdFUDBhWGxlNWNBbVBRRXU3MHE2MEV0SzJmVFNKU2R5YVRPUTRFUGJyZDVKTWJuVlJ1emZRNWdVOHh4N0hQajVuWWhpNXEzMStwMWdTZllXQXk1RmpCZm5JdlJrNXptUnM0MmNCbkNyQXMrWVZFQ29SVkpEZEFodnhneE5vRVpxSmdLZTlnUnBBYXBIMFFSL2ltUHU2aHpHbDROZ2Z0Z1BaZjJyQ1FtNEFHNTlKRTMwUWdZNW9GODZzeGUrNUNLUDZ5ZmFVOXJkbjlXRGFTUnF4QUk0ZHlMMGR1U3NGb0t2V1BsOXhXWEJYODFMbHJjLzBOZ3RUUE5ZZlNYQm9HZnBVNzQwSHVGVUtZNGp4YTZrZ2l3TmVaRmdZZ2RJUmhCQXorUVVnUWRCRzhKbHJmYUtEWXBrR2hDSzlsOVRMYzZFZmkvUlBFNHFlT2owM09jMWNCcWM2aUxVNmRaS0s4S25iMTZhVlVaMjNnMWpUUWp3TVU4MlVYaFJuM3U2bnhOWkN5bWFDb0I3aFM1YW13cTlBR2xLc2M0Zk5GVWhRSlVsdXdMaTM4OHVwRkx6d1RvOWx6ZGJyZGROVHl3TVBkbGxSWGZEYk82d1VNdVVUNUpLWW1RcDVMUjdMUEZPN1VRbzZqTU9lSXdFNFJISEp0RGowcDJlazliQVoxOG9CRzZTSXQ5VkJ5emt3bWRHa2kyK2ZEY1cwOGlpWU9rWkM4MDNDeWkwZDBmNTlLZnc5SWc5Y2FaNmYxZjBaamlqQm1SR3RWSUh3Y1ZWOGJQMDhKU2pxV0hsaS9UbXI0NHQ2enU0NHJ2WGZ1NTV6ZXFhejN6SGQvK1d5cWVreTczb21tMXkyQlArT0hPeXVGanIxZUlnbCtBMXhYTE1FVDQwU2ZDZTBaRnZFVnNNb3hhNDM3cFhpOFFWTDhleUsxeC9yWTk1N2RmMFpWaVgyVExQTnIrYzF6N3p1eEtuWW9oYWNxY1MxTExjS1cySFJXanc4RHNKOEUrdDY5NkM1UWZjOVN5UGhnMHBNd3IrekRCSEhNbit3RElIMjVoVnpBZHJyUi8wYTcvWWdlSDk5N2YrSDd4b00yNS94WlYvbnZ4RDM5aWM9Jmx0Oy9kaWFncmFtJmd0OyZsdDsvbXhmaWxlJmd0OyI+PGRlZnMvPjxnPjxwYXRoIGQ9Ik0gMzEgMTQxIEwgMzEgMTgyLjc2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAzMSAxODguNzYgTCAyNyAxODAuNzYgTCAzMSAxODIuNzYgTCAzNSAxODAuNzYgWiIgZmlsbD0iIzAwN2ZmZiIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxyZWN0IHg9IjEiIHk9IjkxIiB3aWR0aD0iNjAiIGhlaWdodD0iNTAiIHJ4PSI3LjUiIHJ5PSI3LjUiIGZpbGw9IiNkYWU4ZmMiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTE2cHg7IG1hcmdpbi1sZWZ0OiAycHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5BUEk8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMzEiIHk9IjEyMCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkFQSTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAxNzUgMjE2IEwgMjQwLjM0IDE0Ni45OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMjQ0LjQ2IDE0Mi42MiBMIDI0MS44NyAxNTEuMTggTCAyNDAuMzQgMTQ2Ljk4IEwgMjM2LjA2IDE0NS42OCBaIiBmaWxsPSIjMDA3ZmZmIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHBhdGggZD0iTSAxMTUgMjE2IEwgNjkuMjQgMjE2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSA2My4yNCAyMTYgTCA3MS4yNCAyMTIgTCA2OS4yNCAyMTYgTCA3MS4yNCAyMjAgWiIgZmlsbD0iIzAwN2ZmZiIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxyZWN0IHg9IjExNSIgeT0iMTkxIiB3aWR0aD0iNjAiIGhlaWdodD0iNTAiIHJ4PSI3LjUiIHJ5PSI3LjUiIGZpbGw9IiNkYWU4ZmMiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjE2cHg7IG1hcmdpbi1sZWZ0OiAxMTZweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkdpdGxhYiBDSTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxNDUiIHk9IjIyMCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdpdGxhYiBDSTwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSAyNjEgOTEgTCAyNjEgNTkuMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDI2MSA1My4yNCBMIDI2NSA2MS4yNCBMIDI2MSA1OS4yNCBMIDI1NyA2MS4yNCBaIiBmaWxsPSIjMDA3ZmZmIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMjMxIiB5PSI5MSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjUwIiByeD0iNy41IiByeT0iNy41IiBmaWxsPSIjZGFlOGZjIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDExNnB4OyBtYXJnaW4tbGVmdDogMjMycHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5BbnNpYmxlPGJyIC8+QVdYPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjI2MSIgeT0iMTIwIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QW5zaWJsZS4uLjwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMjMxIiB5PSIxIiB3aWR0aD0iNjAiIGhlaWdodD0iNTAiIHJ4PSI3LjUiIHJ5PSI3LjUiIGZpbGw9IiNkYWU4ZmMiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjZweDsgbWFyZ2luLWxlZnQ6IDIzMnB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+SGFzaGljb3JwPGJyIC8+VmF1bHQgMjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIyNjEiIHk9IjMwIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SGFzaGljb3JwLi4uPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIxIiB5PSIxOTEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI1MCIgcng9IjcuNSIgcnk9IjcuNSIgZmlsbD0iI2RhZThmYyIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogNThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAyMTZweDsgbWFyZ2luLWxlZnQ6IDJweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkhhc2hpY29ycDxiciAvPlZhdWx0IDE8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMzEiIHk9IjIyMCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkhhc2hpY29ycC4uLjwvdGV4dD48L3N3aXRjaD48L2c+PC9nPjxzd2l0Y2g+PGcgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5Ii8+PGEgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCwtNSkiIHhsaW5rOmhyZWY9Imh0dHBzOi8vd3d3LmRpYWdyYW1zLm5ldC9kb2MvZmFxL3N2Zy1leHBvcnQtdGV4dC1wcm9ibGVtcyIgdGFyZ2V0PSJfYmxhbmsiPjx0ZXh0IHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTBweCIgeD0iNTAlIiB5PSIxMDAlIj5WaWV3ZXIgZG9lcyBub3Qgc3VwcG9ydCBmdWxsIFNWRyAxLjE8L3RleHQ+PC9hPjwvc3dpdGNoPjwvc3ZnPg=="}}]);
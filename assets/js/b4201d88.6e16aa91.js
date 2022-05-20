"use strict";(self.webpackChunklivio_dump_page=self.webpackChunklivio_dump_page||[]).push([[1974],{3905:function(e,t,a){a.d(t,{Zo:function(){return r},kt:function(){return p}});var i=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=i.createContext({}),d=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},r=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,c=e.parentName,r=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=l,I=u["".concat(c,".").concat(p)]||u[p]||m[p]||n;return a?i.createElement(I,o(o({ref:t},r),{},{components:a})):i.createElement(I,o({ref:t},r))}));function p(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,o=new Array(n);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:l,o[1]=s;for(var d=2;d<n;d++)o[d]=a[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8022:function(e,t,a){a.r(t),a.d(t,{assets:function(){return r},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return m}});var i=a(7462),l=a(3366),n=(a(7294),a(3905)),o=["components"],s={slug:"full-stack-it-automation-part-4-awx",title:"Full-Stack Automation Part 4 - AWX",authors:["livio"],tags:["automation","awx","ansible","gitlab","network automation","terraform","playbook","inventory"]},c=void 0,d={permalink:"/full-stack-it-automation-part-4-awx",editUrl:"https://github.com/liviozanol/liviozanol.github.io/blog/2021-12-08-automation-4/index.md",source:"@site/blog/2021-12-08-automation-4/index.md",title:"Full-Stack Automation Part 4 - AWX",description:"Ansible/AWX",date:"2021-12-08T00:00:00.000Z",formattedDate:"December 8, 2021",tags:[{label:"automation",permalink:"/tags/automation"},{label:"awx",permalink:"/tags/awx"},{label:"ansible",permalink:"/tags/ansible"},{label:"gitlab",permalink:"/tags/gitlab"},{label:"network automation",permalink:"/tags/network-automation"},{label:"terraform",permalink:"/tags/terraform"},{label:"playbook",permalink:"/tags/playbook"},{label:"inventory",permalink:"/tags/inventory"}],readingTime:5.835,truncated:!0,authors:[{name:"L\xedvio Zanol Puppim",title:"Me",url:"https://github.com/liviozanol",imageURL:"https://github.com/liviozanol.png",key:"livio"}],frontMatter:{slug:"full-stack-it-automation-part-4-awx",title:"Full-Stack Automation Part 4 - AWX",authors:["livio"],tags:["automation","awx","ansible","gitlab","network automation","terraform","playbook","inventory"]},prevItem:{title:"Full-Stack Automation Part 5 - Gitlab CI",permalink:"/full-stack-it-automation-part-5-gitlabci"},nextItem:{title:"Full-Stack Automation Part 3 - Vault",permalink:"/full-stack-it-automation-part-3-Vault"}},r={authorsImageUrls:[void 0]},m=[{value:"Ansible/AWX",id:"ansible-awx",level:2},{value:"Ansible/AWX Role",id:"ansible-role",level:2},{value:"Ansible/AWX Alternatives",id:"ansible-alternatives",level:2},{value:"Ansible/AWX Installation and Configuration",id:"ansible-install-config",level:2}],u={toc:m};function p(e){var t=e.components,s=(0,l.Z)(e,o);return(0,n.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"ansible-awx"},"Ansible/AWX"),(0,n.kt)("p",null,"Ansible is an automation platform that supports a wide range of functions and can be used to automate almost anything: From network devices from different manufacturers to custom web APIs. The choice for ansible in this layer is for this reason and also because of AWX."),(0,n.kt)("p",null,"AWX is a complete automation solution based on ansible. It boosts ansible adding a lot of functionalities to make a complete automation tool mainly introducing a nice web system. Some cool functionalities includes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A web interface where you can make all life-cycle related activities with playbooks (monitor, execute, cancel, group, etc.). You still create the playbooks external."),(0,n.kt)("li",{parentName:"ul"},"Workflow of playbooks where you can execute one or more playbooks in sequence giving certain circumstances and even insert approval tasks!"),(0,n.kt)("li",{parentName:"ul"},"Nice web forms with basic data validation to start playbooks execution."),(0,n.kt)("li",{parentName:"ul"},"Notification of jobs status using e-mail, telegram, rocketchat, etc."),(0,n.kt)("li",{parentName:"ul"},"Integration with git or other sources to read inventories and playbooks."),(0,n.kt)("li",{parentName:"ul"},"LDAP and other integrations to authentication/authorization."),(0,n.kt)("li",{parentName:"ul"},"And more important: A complete REST API that gives access to all of the above and more!")),(0,n.kt)("p",null,"Note that AWX comes with a form to play tasks/playbooks that could be used for more simple automations. If you have small tight teams to OAMP only some infrastructure you could use it directly. But secrets for automated resources could be leaked and I do not think that this is a good solution for end-user direct intervention. So do it at your own risk."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"To execute any playbook you can (and ",(0,n.kt)("em",{parentName:"p"},"really")," should) add a bastion host to access your automated elements, and make AWX use, for example, SSH tunnel prior to connecting to the automated element, protecting it even more from undesirable access. ",(0,n.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/5/reference_appendices/faq.html#how-do-i-configure-a-jump-host-to-access-servers-that-i-have-no-direct-access-to"},"Read more on ansible documentation."),"."))),(0,n.kt)("h2",{id:"ansible-role"},"Ansible/AWX Role"),(0,n.kt)("p",null,'Ansible/AWX is the "engine" that will access automation elements and execute actions to implement the changes submitted by the user (i.e. run a playbook) and validated by API and CI/CD.'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"It talks to any automated resource to execute change actions."),(0,n.kt)("li",{parentName:"ul"},"It talks to hashicorp vault 1 to get keys/pass to access the automated resources"),(0,n.kt)("li",{parentName:"ul"},"It talks to gitlab to get inventories, playbooks and complementary files (templates, etc.)."),(0,n.kt)("li",{parentName:"ul"},"It receives API requests from Gitlab CI to start and monitor jobs/playbooks.")),(0,n.kt)("p",null,"Even if AWX has an approval task on workflows, the solution described here won't use it. Since AWX has access to sensitive data, like key or pass to access infrastructure resources, we need to minimize any human intervention on it and also its point of contact with other infrastructure. Only gitlab CI/CD will talk actively to AWX on full-stack automation architecture. AWX solution will be used solely as a way to start and monitor tasks execution."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"AWX/ansible role on architecture",src:a(2940).Z,width:"319",height:"243"})),(0,n.kt)("h2",{id:"ansible-alternatives"},"Ansible/AWX Alternatives"),(0,n.kt)("p",null,"You can use other automation tools you like, but since the solution is using AWX as an API to execute and monitor jobs, it's important that you execute it using ansible playbooks. Since ansible can execute any arbitrary shell and python command (and others if you install it), you can use ",(0,n.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"terraform"),", ",(0,n.kt)("a",{parentName:"p",href:"https://nornir.readthedocs.io/en/latest/"},"nornir"),", ",(0,n.kt)("a",{parentName:"p",href:"https://napalm.readthedocs.io/en/latest/"},"napalm"),", ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Expect"},"expect"),", custom scripts, whatever, but it needs to be called from ansible. You can, for example, install custom linux packages on ansible job execution containers and just call a shell script in a playbook."),(0,n.kt)("p",null,"Yes, ansible can be ",(0,n.kt)("a",{parentName:"p",href:"https://networklore.com/ansible-nornir-speed/"},"slow in some situations"),", and templates or ",(0,n.kt)("a",{parentName:"p",href:"https://docs.ansible.com/ansible/latest/user_guide/playbooks_templating.html"},"jinja2")," like language sometimes are too much complex and boring to write, but for this architecture, objetiving a manufacturer agnostic and wide range automation, its important. If you need high speeds or don't like ansible at all, you can use your preferred automation tool through ansible as explained, or just build a new API for you custom automation tool - if it doesn't have (and insert a MQ solution as stated on gitlab session)."),(0,n.kt)("h2",{id:"ansible-install-config"},"Ansible/AWX Installation and Configuration"),(0,n.kt)("p",null,"First, if you haven't cloned the architecture repo from github, please do so: ",(0,n.kt)("inlineCode",{parentName:"p"},"git clone https://github.com/liviozanol/full-stack_automation")),(0,n.kt)("p",null,"TL;DR: Simply run the shell script"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"sudo /bin/bash installation/awx/create_awx.sh\n")),(0,n.kt)("p",null,"In this guide AWX/ansible will be installed using docker-compose (which is not indicated for production - should be kubernetes instead). Will be used the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/ansible/awx/blob/devel/tools/docker-compose/README.md"},'"official" awx docker-compose guide'),"."),(0,n.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"You need to have jq (used by script), ansible, openssl, docker and docker-compose available. Docker service must be running and healthy (check with ",(0,n.kt)("inlineCode",{parentName:"p"},"sudo docker ps")," or similar)."),(0,n.kt)("p",{parentName:"div"},"As of 2021-12-07, you also need to be able to execute ",(0,n.kt)("inlineCode",{parentName:"p"},"make")," (i.e.: build-essential, make, automake, gcc, etc.)."),(0,n.kt)("p",{parentName:"div"},"The steps below are already done by the script, which also makes some bugfixes. They are here only for information."))),(0,n.kt)("p",null,"1- Clone AWX Repo (version 19.5.0)"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git clone -b 19.5.0 https://github.com/ansible/awx.git\n")),(0,n.kt)("p",null,"2- CD to the directory"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"cd awx\n")),(0,n.kt)("p",null,"3- Change passwords/secrets"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'sed -i \'s/# pg_password=""/pg_password="fullstack_automation_pg"/g;s/# broadcast_websocket_secret=""/broadcast_websocket_secret="fullstack_automation_broadcast_websocket"/g;s/# secret_key=""/secret_key="fullstack_automation_secret"/g\' tools/docker-compose/inventory\n')),(0,n.kt)("p",null,"4- Build the image"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make docker-compose-build\n")),(0,n.kt)("p",null,"5- Run AWX"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"make docker-compose COMPOSE_UP_OPTS=-d\n")),(0,n.kt)("p",null,"6- Enable WEB UI (not required but good for troubleshooting)"),(0,n.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Please wait about 5 minutes so AWX is up and running before issuing this command"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"docker exec tools_awx_1 make clean-ui ui-devel\n")),(0,n.kt)("p",null,"7- Change default admin password"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'docker exec -it tools_awx_1 bash -c "awx-manage update_password --username=admin --password=awx-fullstackautomationpass"\n')),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Below steps can also be done using AWX web UI, but for simplicity, everything will be done using its REST API."),(0,n.kt)("p",null,"8- Create an organization that will be used to further commands"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'AWX_ORG_ID=`curl -sk --request POST https://admin:awx-fullstackautomationpass@localhost:8043/api/v2/organizations/ -H "Content-Type: application/json" --data \'{"description": "full stack organization", "name": "FULLSTACK_INC"}\' | jq .id`\n\necho "Adding Default Galaxy Credential to Organization. (Needed to install custom collections from ansible galaxy)"\ncurl -sk --request POST https://admin:awx-fullstackautomationpass@localhost:8043/api/v2/organizations/$AWX_ORG_ID/galaxy_credentials/ -H "Content-Type: application/json" --data \'{"id": 2}\' | jq .id\n')),(0,n.kt)("p",null,"9- Create a user that will be used by GITLAB-CI to start and monitor jobs/playbooks"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'AWX_USER_ID=`curl -sk --request POST https://admin:awx-fullstackautomationpass@localhost:8043/api/v2/organizations/$AWX_ORG_ID/users/ -H "Content-Type: application/json" --data \'{"email": "user@fullstackapi.io", "first_name": "fullstack", "is_superuser": false, "last_name": "api", "password": "fullstackapi_pass", "username": "fullstackapi" }\' | jq .id`\n\n')),(0,n.kt)("p",null,"10- Create a credential type to store harshicorp vault token so it can be used later to request secrets. You could try to use the specific harshicorp vault credential type that AWX already has, but we'll be using a custom one"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'AWX_VAULT_CREDENTIAL_TYPE=`curl -sk --request POST https://admin:awx-fullstackautomationpass@localhost:8043/api/v2/credential_types/ -H "Content-Type: application/json" --data \'{"name": "Custom Vault Cred Type","description": "Custom credential type to store vault token","kind": "cloud","inputs": { "fields": [ {"id": "vault_server","type": "string","label": "URL to Vault Server (i.e: http://127.0.0.1:5555/)" },{ "id": "vault_token","type": "string","label": "Vault token","secret": true}],"required": ["vault_server","vault_token"]},"injectors": { "extra_vars": { "vault_server": "{{ vault_server }}",   "vault_token": "{{ vault_token }}"}}}\' | jq .id`\n')),(0,n.kt)("p",null,"11- Create a credential to store vault token and url, using the credential type just created"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'AWX_VAULT_CREDENTIAL=`curl -sk --request POST https://admin:awx-fullstackautomationpass@localhost:8043/api/v2/organizations/$AWX_ORG_ID/credentials/ -H "Content-Type: application/json" --data "{\\"credential_type\\": $AWX_VAULT_CREDENTIAL_TYPE,\\"description\\": \\"vault credential\\", \\"inputs\\":{\\"vault_server\\":\\"http://127.0.0.1:9200\\",\\"vault_token\\":\\"fullstackautomation-root-token-vault2\\"}, \\"name\\": \\"vault_credential\\"}" | jq .id`\n')),(0,n.kt)("p",null,"Everything is set to use AWX in the architecture. On further steps, after we create our repos on gitlab, we'll be creating projects, inventories and templates. All linked to the gitlab source."))}p.isMDXComponent=!0},2940:function(e,t){t.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHdpZHRoPSIzMTlweCIgaGVpZ2h0PSIyNDNweCIgdmlld0JveD0iLTAuNSAtMC41IDMxOSAyNDMiIGNvbnRlbnQ9IiZsdDtteGZpbGUgaG9zdD0mcXVvdDthcHAuZGlhZ3JhbXMubmV0JnF1b3Q7IG1vZGlmaWVkPSZxdW90OzIwMjEtMTItMDlUMTY6MzM6NDcuMTkxWiZxdW90OyBhZ2VudD0mcXVvdDs1LjAgKFdpbmRvd3MgTlQgMTAuMDsgV2luNjQ7IHg2NCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzk2LjAuNDY2NC40NSBTYWZhcmkvNTM3LjM2JnF1b3Q7IHZlcnNpb249JnF1b3Q7MTUuOC45JnF1b3Q7IGV0YWc9JnF1b3Q7dHR3ejUwSkZtNDhQRVJ2TEN4RnImcXVvdDsgdHlwZT0mcXVvdDtnb29nbGUmcXVvdDsmZ3Q7Jmx0O2RpYWdyYW0gaWQ9JnF1b3Q7UDhPbTZ6Ri1sRzJzMG1aOVJhZG8mcXVvdDsmZ3Q7NVZqYmp0b3dFUDBhcFBhaHExd0loRWRnbDkxSzdVdVJ1dkJva2lGeGF6S3A0eXloWDE4bkdaT2tXZFR0UmFDbEwrQTU0N0V6Wjg0NGw0RTczeFgza3FYeFJ3eEJEQndyTEFidTdjQnh2S0d0ZjB2Z1VBTytOYW1CU1BLd2h1d0dXUEx2UUtCRmFNNUR5RG9URmFKUVBPMkNBU1lKQktxRE1TbHgzNTIyUmRIZE5XVVI5SUJsd0VRZmZlU2hpaWtMWjl6Z0Q4Q2oyT3hzanlpL0hUT1RLWk1zWmlIdVc1QjdOM0RuRWxIVm8xMHhCMUZ5WjNpcDR4WW52TWNMazVDb2x3UTRkY0FURXpubGRzK1ZZQnU2T25Vd0tVdk1reERLS0h2Z3p2WXhWN0JNV1ZCNjk3ckdHb3ZWVHBCN3k0V1lvMEJaeGJvaEEzOGJhRHhURXI5Q3kyTlo0OFZpY2ZRWU1qVU5NN293a0FxS2s4blpSOHEwMUFCM29PUkJUNkVBMTNkdnZEcUloS1kzck8xOVU3WVJRWEdyWWg1aGpJUVNIZGR1dU5RRG92TjVhdDBlaHhCcUZaR1pZS0wvWmcydGxyWlFxaGdqVEpqNGdKZ1NtVjlBcVFQMUFNc1ZkcW1HZ3F0VmE3d3VsOUpaMTladFFTdFh4c0VZaVU1bFZVMTBQR092elNLbDBjUlZsZ25NRkpOcVdqWlFrMEdGTFhoSkEwV0Vaa1lnV0pieG9BWnB5citWUjhsb1J4d1o1aklnYUVnbkE1TVJVRjM5RjB0SWdtQ0tQM1ZYL3hzNURFOTJtalYvZnlYdE51dzAyL0NNemVhZHRkbWFCbHUzKyt0WHpYYkZ2ZWIzZTIxeXVWNGJ2WUtqdDYyRmxqU3VWUTNtMGUwU2NoaWY5M0Q0RXpuWS81a2NuTXVwd2UvZGlLZEp4amRhQzg1STZHdVpiYVFlUmVWbytyaTZpanV6Wis3RUYzZ01udlRvZm1CWnpBT1VhWi93enl6WGlHTTVWMG43OFJBOEErMW1xN2JNOVpHbFgwQTFpVDNlUHdIMWE4OWprQzBtcWxPUjBiY2NqZU5kVmgyS1V6M0JUNHZHWnhaNUE5Rk4yY3FZSzVCdnpaSTZoWHBWczlQSmtsdXZwdVFqNTZlU1Q4Ym1GYlJWZFArNW9udS9YWFJ0Tmw4S0tsL3JjNHQ3OXdNPSZsdDsvZGlhZ3JhbSZndDsmbHQ7L214ZmlsZSZndDsiPjxkZWZzLz48Zz48cmVjdCB4PSIwLjUiIHk9IjkxIiB3aWR0aD0iNjAiIGhlaWdodD0iNTAiIHJ4PSI3LjUiIHJ5PSI3LjUiIGZpbGw9IiNkYWU4ZmMiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMTE2cHg7IG1hcmdpbi1sZWZ0OiAycHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5HaXRsYWI8L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMzEiIHk9IjEyMCIgZmlsbD0icmdiKDAsIDAsIDApIiBmb250LWZhbWlseT0iSGVsdmV0aWNhIiBmb250LXNpemU9IjEycHgiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkdpdGxhYjwvdGV4dD48L3N3aXRjaD48L2c+PHBhdGggZD0iTSA2MSAyMTYgTCAxMjYuMzQgMTQ2Ljk4IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAxMzAuNDYgMTQyLjYyIEwgMTI3Ljg3IDE1MS4xOCBMIDEyNi4zNCAxNDYuOTggTCAxMjIuMDYgMTQ1LjY4IFoiIGZpbGw9IiMwMDdmZmYiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cmVjdCB4PSIxIiB5PSIxOTEiIHdpZHRoPSI2MCIgaGVpZ2h0PSI1MCIgcng9IjcuNSIgcnk9IjcuNSIgZmlsbD0iI2RhZThmYyIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogNThweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAyMTZweDsgbWFyZ2luLWxlZnQ6IDJweDsiPjxkaXYgZGF0YS1kcmF3aW8tY29sb3JzPSJjb2xvcjogcmdiKDAsIDAsIDApOyAiIHN0eWxlPSJib3gtc2l6aW5nOiBib3JkZXItYm94OyBmb250LXNpemU6IDBweDsgdGV4dC1hbGlnbjogY2VudGVyOyI+PGRpdiBzdHlsZT0iZGlzcGxheTogaW5saW5lLWJsb2NrOyBmb250LXNpemU6IDEycHg7IGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7IGNvbG9yOiByZ2IoMCwgMCwgMCk7IGxpbmUtaGVpZ2h0OiAxLjI7IHBvaW50ZXItZXZlbnRzOiBhbGw7IHdoaXRlLXNwYWNlOiBub3JtYWw7IG92ZXJmbG93LXdyYXA6IG5vcm1hbDsiPkdpdGxhYiBDSTwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIzMSIgeT0iMjIwIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+R2l0bGFiIENJPC90ZXh0Pjwvc3dpdGNoPjwvZz48cGF0aCBkPSJNIDE0NyA5MSBMIDE0NyA1OS4yNCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgcG9pbnRlci1ldmVudHM9InN0cm9rZSIvPjxwYXRoIGQ9Ik0gMTQ3IDUzLjI0IEwgMTUxIDYxLjI0IEwgMTQ3IDU5LjI0IEwgMTQzIDYxLjI0IFoiIGZpbGw9IiMwMDdmZmYiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDE3NyAxMTYgTCAyMjguNzYgMTE2IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0ic3Ryb2tlIi8+PHBhdGggZD0iTSAyMzQuNzYgMTE2IEwgMjI2Ljc2IDEyMCBMIDIyOC43NiAxMTYgTCAyMjYuNzYgMTEyIFoiIGZpbGw9IiMwMDdmZmYiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48cGF0aCBkPSJNIDExNyAxMTYgTCA2OC43NCAxMTYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHBvaW50ZXItZXZlbnRzPSJzdHJva2UiLz48cGF0aCBkPSJNIDYyLjc0IDExNiBMIDcwLjc0IDExMiBMIDY4Ljc0IDExNiBMIDcwLjc0IDEyMCBaIiBmaWxsPSIjMDA3ZmZmIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PHJlY3QgeD0iMTE3IiB5PSI5MSIgd2lkdGg9IjYwIiBoZWlnaHQ9IjUwIiByeD0iNy41IiByeT0iNy41IiBmaWxsPSIjZGFlOGZjIiBzdHJva2U9IiMwMDdmZmYiIHN0cm9rZS13aWR0aD0iMiIgcG9pbnRlci1ldmVudHM9ImFsbCIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTAuNSkiPjxzd2l0Y2g+PGZvcmVpZ25PYmplY3QgcG9pbnRlci1ldmVudHM9Im5vbmUiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIgc3R5bGU9Im92ZXJmbG93OiB2aXNpYmxlOyB0ZXh0LWFsaWduOiBsZWZ0OyI+PGRpdiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCIgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiB1bnNhZmUgY2VudGVyOyBqdXN0aWZ5LWNvbnRlbnQ6IHVuc2FmZSBjZW50ZXI7IHdpZHRoOiA1OHB4OyBoZWlnaHQ6IDFweDsgcGFkZGluZy10b3A6IDExNnB4OyBtYXJnaW4tbGVmdDogMTE4cHg7Ij48ZGl2IGRhdGEtZHJhd2lvLWNvbG9ycz0iY29sb3I6IHJnYigwLCAwLCAwKTsgIiBzdHlsZT0iYm94LXNpemluZzogYm9yZGVyLWJveDsgZm9udC1zaXplOiAwcHg7IHRleHQtYWxpZ246IGNlbnRlcjsiPjxkaXYgc3R5bGU9ImRpc3BsYXk6IGlubGluZS1ibG9jazsgZm9udC1zaXplOiAxMnB4OyBmb250LWZhbWlseTogSGVsdmV0aWNhOyBjb2xvcjogcmdiKDAsIDAsIDApOyBsaW5lLWhlaWdodDogMS4yOyBwb2ludGVyLWV2ZW50czogYWxsOyB3aGl0ZS1zcGFjZTogbm9ybWFsOyBvdmVyZmxvdy13cmFwOiBub3JtYWw7Ij5BbnNpYmxlPGJyIC8+QVdYPC9kaXY+PC9kaXY+PC9kaXY+PC9mb3JlaWduT2JqZWN0Pjx0ZXh0IHg9IjE0NyIgeT0iMTIwIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QW5zaWJsZS4uLjwvdGV4dD48L3N3aXRjaD48L2c+PHJlY3QgeD0iMTE3IiB5PSIxIiB3aWR0aD0iNjAiIGhlaWdodD0iNTAiIHJ4PSI3LjUiIHJ5PSI3LjUiIGZpbGw9IiNkYWU4ZmMiIHN0cm9rZT0iIzAwN2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIiBwb2ludGVyLWV2ZW50cz0iYWxsIi8+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSI+PHN3aXRjaD48Zm9yZWlnbk9iamVjdCBwb2ludGVyLWV2ZW50cz0ibm9uZSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgcmVxdWlyZWRGZWF0dXJlcz0iaHR0cDovL3d3dy53My5vcmcvVFIvU1ZHMTEvZmVhdHVyZSNFeHRlbnNpYmlsaXR5IiBzdHlsZT0ib3ZlcmZsb3c6IHZpc2libGU7IHRleHQtYWxpZ246IGxlZnQ7Ij48ZGl2IHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sIiBzdHlsZT0iZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IHVuc2FmZSBjZW50ZXI7IGp1c3RpZnktY29udGVudDogdW5zYWZlIGNlbnRlcjsgd2lkdGg6IDU4cHg7IGhlaWdodDogMXB4OyBwYWRkaW5nLXRvcDogMjZweDsgbWFyZ2luLWxlZnQ6IDExOHB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+SGFzaGljb3JwPGJyIC8+VmF1bHQgMjwvZGl2PjwvZGl2PjwvZGl2PjwvZm9yZWlnbk9iamVjdD48dGV4dCB4PSIxNDciIHk9IjMwIiBmaWxsPSJyZ2IoMCwgMCwgMCkiIGZvbnQtZmFtaWx5PSJIZWx2ZXRpY2EiIGZvbnQtc2l6ZT0iMTJweCIgdGV4dC1hbmNob3I9Im1pZGRsZSI+SGFzaGljb3JwLi4uPC90ZXh0Pjwvc3dpdGNoPjwvZz48cmVjdCB4PSIyMzciIHk9Ijg4LjUiIHdpZHRoPSI4MCIgaGVpZ2h0PSI1NSIgZmlsbD0iI2RhZThmYyIgc3Ryb2tlPSIjMDA3ZmZmIiBzdHJva2Utd2lkdGg9IjIiIHBvaW50ZXItZXZlbnRzPSJhbGwiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIj48c3dpdGNoPjxmb3JlaWduT2JqZWN0IHBvaW50ZXItZXZlbnRzPSJub25lIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXF1aXJlZEZlYXR1cmVzPSJodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9mZWF0dXJlI0V4dGVuc2liaWxpdHkiIHN0eWxlPSJvdmVyZmxvdzogdmlzaWJsZTsgdGV4dC1hbGlnbjogbGVmdDsiPjxkaXYgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwiIHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogdW5zYWZlIGNlbnRlcjsganVzdGlmeS1jb250ZW50OiB1bnNhZmUgY2VudGVyOyB3aWR0aDogNzhweDsgaGVpZ2h0OiAxcHg7IHBhZGRpbmctdG9wOiAxMTZweDsgbWFyZ2luLWxlZnQ6IDIzOHB4OyI+PGRpdiBkYXRhLWRyYXdpby1jb2xvcnM9ImNvbG9yOiByZ2IoMCwgMCwgMCk7ICIgc3R5bGU9ImJveC1zaXppbmc6IGJvcmRlci1ib3g7IGZvbnQtc2l6ZTogMHB4OyB0ZXh0LWFsaWduOiBjZW50ZXI7Ij48ZGl2IHN0eWxlPSJkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IGZvbnQtc2l6ZTogMTJweDsgZm9udC1mYW1pbHk6IEhlbHZldGljYTsgY29sb3I6IHJnYigwLCAwLCAwKTsgbGluZS1oZWlnaHQ6IDEuMjsgcG9pbnRlci1ldmVudHM6IGFsbDsgd2hpdGUtc3BhY2U6IG5vcm1hbDsgb3ZlcmZsb3ctd3JhcDogbm9ybWFsOyI+QXV0b21hdGVkPGJyIC8+UmVzb3VyY2U8YnIgLz48Zm9udCBzdHlsZT0iZm9udC1zaXplOiA4cHgiPihlZy4gcm91dGVyKTwvZm9udD48L2Rpdj48L2Rpdj48L2Rpdj48L2ZvcmVpZ25PYmplY3Q+PHRleHQgeD0iMjc3IiB5PSIxMjAiIGZpbGw9InJnYigwLCAwLCAwKSIgZm9udC1mYW1pbHk9IkhlbHZldGljYSIgZm9udC1zaXplPSIxMnB4IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BdXRvbWF0ZWQuLi48L3RleHQ+PC9zd2l0Y2g+PC9nPjwvZz48c3dpdGNoPjxnIHJlcXVpcmVkRmVhdHVyZXM9Imh0dHA6Ly93d3cudzMub3JnL1RSL1NWRzExL2ZlYXR1cmUjRXh0ZW5zaWJpbGl0eSIvPjxhIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsLTUpIiB4bGluazpocmVmPSJodHRwczovL3d3dy5kaWFncmFtcy5uZXQvZG9jL2ZhcS9zdmctZXhwb3J0LXRleHQtcHJvYmxlbXMiIHRhcmdldD0iX2JsYW5rIj48dGV4dCB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmb250LXNpemU9IjEwcHgiIHg9IjUwJSIgeT0iMTAwJSI+Vmlld2VyIGRvZXMgbm90IHN1cHBvcnQgZnVsbCBTVkcgMS4xPC90ZXh0PjwvYT48L3N3aXRjaD48L3N2Zz4="}}]);
"use strict";(self.webpackChunklivio_dump_page=self.webpackChunklivio_dump_page||[]).push([[9572],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7162:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={slug:"non-contiguous-netmasks",title:"Non-contiguous Netmasks",authors:["livio"],tags:["network fundamentals","subnet","iptables","acl","routing","pf"]},u=void 0,l={permalink:"/non-contiguous-netmasks",editUrl:"https://github.com/liviozanol/liviozanol.github.io/blog/2022-05-20-non-contiguous-netmask/index.md",source:"@site/blog/2022-05-20-non-contiguous-netmask/index.md",title:"Non-contiguous Netmasks",description:"Intro",date:"2022-05-20T00:00:00.000Z",formattedDate:"May 20, 2022",tags:[{label:"network fundamentals",permalink:"/tags/network-fundamentals"},{label:"subnet",permalink:"/tags/subnet"},{label:"iptables",permalink:"/tags/iptables"},{label:"acl",permalink:"/tags/acl"},{label:"routing",permalink:"/tags/routing"},{label:"pf",permalink:"/tags/pf"}],readingTime:5,truncated:!0,authors:[{name:"L\xedvio Zanol Puppim",title:"Me",url:"https://github.com/liviozanol",imageURL:"https://github.com/liviozanol.png",key:"livio"}],frontMatter:{slug:"non-contiguous-netmasks",title:"Non-contiguous Netmasks",authors:["livio"],tags:["network fundamentals","subnet","iptables","acl","routing","pf"]},nextItem:{title:'Using vSphere Distributed Switch (VDS) for stateless "traffic filtering" (or ACL)',permalink:"/vmware-vds-traffic-filter"}},p={authorsImageUrls:[void 0]},c=[{value:"Intro",id:"intro",level:2},{value:"The fundamentals",id:"the-fundamentals",level:2},{value:"Checking non-contiguous Subnet Mask configuration Today",id:"checking-non-contiguous-subnet-mask-configuration-today",level:2},{value:"Packet filters and firewalls",id:"packet-filters-and-firewalls",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"A long time ago (2006), When I was still graduating in computer science, I\u2019ve made a ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=QsUlySdtqaw"},"video")," showing the communication between 2 openBSD VMs configured with non-contiguous network masks (eg: 255.255.0.255 or 255.255.255.1) talking to each other."),(0,i.kt)("p",null,"At that time, I tried to use non-contiguous masks on Windows, Linux (Gentoo?), FreeBSD and OpenBSD. Only OpenBSD was able to make this kind of configuration."),(0,i.kt)("p",null,"Maybe having subnets with non-continuous masks aren't useful at all, but what about firewalls/filters? Having this possibility can be good and suppress some (many?) lines of rules depending on your scenario."),(0,i.kt)("p",null,"The below video demonstrates a working environment using non-contiguous netmask on OpenBSD and also a working routing scenario between 2 subnets (one with EVEN IPs and one with ODDs IPs):"),(0,i.kt)("iframe",{width:"600",height:"400",src:"https://www.youtube.com/embed/QsUlySdtqaw"}),(0,i.kt)("p",null,"I've made this video after a conversation with some coleagues about general network fundamentals. At that time I was trying to figure out how to scan networks like this using NMAP and started a discussion at the mailing list (",(0,i.kt)("a",{parentName:"p",href:"http://seclists.org/nmap-dev/2006/q4/50"},"http://seclists.org/nmap-dev/2006/q4/50"),"). Fortunately, nmap gives us some good options for this using wildcards. You can start a nmap scan with a range like ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.0-100.1")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.*.1")," or even ",(0,i.kt)("inlineCode",{parentName:"p"},"192.168.0.1,3,5,7,9"),"."),(0,i.kt)("h2",{id:"the-fundamentals"},"The fundamentals"),(0,i.kt)("p",null,"Network calculations are based on ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bitwise_operation"},"bitwise operations"),', and so are IP/mask 5-tuples filters/rules. If you want to know if an IP address belongs to an IP/subnet you can do an "AND" binary comparison using this IP and the subnet and compare the result with the intended IP and the same subnet. If the results are equal, they belong to the same subnet. (eg.: 192.168.0.1 AND 255.255.255.0 = 192.168.0.0, so is 192.168.0.250 AND 255.255.255.0). If you want to read a more complete calculation explanation you can ',(0,i.kt)("a",{parentName:"p",href:"https://www.prado.it/2016/05/21/.yet-another-post-about-ipv4-subnetting-non-contiguous-bits-version/"},"read this post")),(0,i.kt)("p",null,"Since everything is bit afterall, why couldn't we use non-contiguous netmasks? I don't know exactly the reason. ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc950"},"RFC 950"),' doesn\'t specify it as mandatory and also includes an explanation on its appendix with a non-contiguous example, but this old RFC was already "overwritten" by new ones that clearly stated that netmask bit ',(0,i.kt)("strong",{parentName:"p"},"must")," b contiguous. Maybe they wanted network configuration to be easier to understand?"),(0,i.kt)("h2",{id:"checking-non-contiguous-subnet-mask-configuration-today"},"Checking non-contiguous Subnet Mask configuration Today"),(0,i.kt)("p",null,"I have made new tests on this subject, trying to configure an IP address with netmask 255.255.0.255 on some interface and the results are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"FreeBSD 13.1: ",(0,i.kt)("strong",{parentName:"li"},"Supported"),"! Didn't work in 2006."),(0,i.kt)("li",{parentName:"ul"},"MAC OS: Didn't test."),(0,i.kt)("li",{parentName:"ul"},"OpenBSD 7.1: ",(0,i.kt)("strong",{parentName:"li"},"Supported"),"."),(0,i.kt)("li",{parentName:"ul"},"Ubuntu 22.04: Not supported. (either using iproute2 or ifconfig)"),(0,i.kt)("li",{parentName:"ul"},"Windows 10: Not supported.")),(0,i.kt)("p",null,"I have tried to figure out why iproute2 on Ubuntu didn't allow me to make this configuration by investigating the source code. I don't know much about C and coded very little in it, so I find it difficult to understand some of the iproute2 code (and kernel too). Well, using the error message displayed ",(0,i.kt)("inlineCode",{parentName:"p"},'Error: any valid prefix is expected rather than "192.168.0.1/255.255.0.255"'),", I was able to identify that this error is returned by function ",(0,i.kt)("a",{parentName:"p",href:"https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tree/lib/utils.c#n651"},"get_prefix_1"),", more specific, inside get_prefix_1, it detected the error with the function ",(0,i.kt)("a",{parentName:"p",href:"https://git.kernel.org/pub/scm/network/iproute2/iproute2.git/tree/lib/utils.c#n164"},"get_netmask"),". Reading the code below, I can suggest (but can't be sure) that it tries to convert our dotted decimal mask to a CIDR and then returns an error."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C",metastring:"{10,18} showLineNumbers","{10,18}":!0,showLineNumbers:!0},"static int get_netmask(unsigned int *val, const char *arg, int base)\n{\n    inet_prefix addr;\n\n    if (!get_unsigned(val, arg, base))\n        return 0;\n\n    /* try converting dotted quad to CIDR */\n    if (!get_addr_1(&addr, arg, AF_INET) && addr.family == AF_INET) {\n        int b = mask2bits(addr.data[0]);\n\n        if (b >= 0) {\n            *val = b;\n            return 0;\n        }\n    }\n\n    return -1;\n}\n")),(0,i.kt)("h2",{id:"packet-filters-and-firewalls"},"Packet filters and firewalls"),(0,i.kt)("p",null,"Ok, on FreeBSD and OpenBSD we can configure non-contiguous masks, but It isn't very useful nowadays. But what about using it to filter packets on firewalls and ACLs? Well, in some scenarios it could be useful."),(0,i.kt)("p",null,"Imagine for example, you have a lot of remote WAN sites concentrating traffic on a central office on a typical hub-and-spoke topology and you have a well defined remote ip addressing police and every WAN site has a /24 subnet and a specific equipment (pbx/printer/proxy/router/whatever) is always the last IP. What if you want to allow traffic only from this IP from all sites on your central office, but block any other? In this case, on a typical implementation, you would have to create 1 /32 rule for each remote site."),(0,i.kt)("p",null,"Ex.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"permit ip 10.0.1.254/32 any\npermit ip 10.0.2.254/32 any\npermit ip 10.0.3.254/32 any\n...\ndeny any any (implied)\n")),(0,i.kt)("p",null,"If you could use non-contiguous netmask you could solve this problem with only one line, like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"permit ip 10.0.0.254/255.255.0.255 any\ndeny any any (implied)\n")),(0,i.kt)("p",null,"Or using wildcard:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"permit ip 10.0.0.254 0.0.255.0 any\ndeny any any (implied)\n")),(0,i.kt)("p",null,"Do routers support this? What about firewalls? Tested some of them. These are the results (won't put specific OS versions):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"IOS: Supported."),(0,i.kt)("li",{parentName:"ul"},"IOS XE: Supported."),(0,i.kt)("li",{parentName:"ul"},"IOS XR: Supported."),(0,i.kt)("li",{parentName:"ul"},"NX OS: Supported."),(0,i.kt)("li",{parentName:"ul"},"Huawei VRP: Supported."),(0,i.kt)("li",{parentName:"ul"},"Windows O.S. Firewall: ",(0,i.kt)("strong",{parentName:"li"},"Not Supported"),"."),(0,i.kt)("li",{parentName:"ul"},"IPtables: Supported."),(0,i.kt)("li",{parentName:"ul"},"PF: Didn't test. ",(0,i.kt)("a",{parentName:"li",href:"https://man.openbsd.org/pf.conf"},"Documentation")," specify CIDR notation or ranges.")),(0,i.kt)("p",null,"Nice! Almost every equipment/firewall supports it! So yes, you can use this to make a more intelligent filter, just don't forget that other people may be reading and managing the equipment/software with you, they must be notified about it, since reading this kind of configuration for the first time can be confusing."),(0,i.kt)("p",null,"Also, as a side note, since IPtables support this kind of rule, and docker and kubernetes relies on it, I think you could mock a sort of non-contiguous netmask configuration on it. But please, don't."),(0,i.kt)("p",null,"Another point to note is that ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/xdp-project/xdp-tutorial"},"eBPF XDP")," has been rising as a solution for simple filters and firewalls. Being ",(0,i.kt)("em",{parentName:"p"},"very")," basic on the definition, XDP lets you execute a user-built program for every packet that arrives on an interface so you can decide whatever you want to do with it. So for sure it can support non-contiguous masks. Maybe in the future, I can write more about XDP."))}m.isMDXComponent=!0}}]);
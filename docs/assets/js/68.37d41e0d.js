(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{477:function(s,a,e){"use strict";e.r(a);var t=e(0),r=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("介绍")]),s._v(" "),a("p",[s._v("使用docker部署仿写小红书的后端接口")])]),s._v(" "),a("h1",{attrs:{id:"docker部署node服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker部署node服务"}},[s._v("#")]),s._v(" docker部署node服务")]),s._v(" "),a("p",[s._v("由于后端服务器没有node环境，安装也比较困难，但是有docker，所有使用docker部署。")]),s._v(" "),a("p",[s._v("首先先在node服务下编写"),a("strong",[s._v("dockerfile")]),s._v("和**.dockerignore**")]),s._v(" "),a("p",[a("img",{attrs:{src:"2023-04-26.assets/image-20230426153910118.png",alt:"image-20230426153910118"}})]),s._v(" "),a("div",{staticClass:"language-dockerfile extra-class"},[a("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[a("code",[a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" node")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WORKDIR")]),s._v(" /home/redBookServer")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" . .")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm config set registry=http://registry.npmmirror.com")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" npm install pnpm -g")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pnpm i")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" pnpm add pm2 -g")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXPOSE")]),s._v(" 7001")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token instruction"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CMD")]),s._v(" [ "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pnpm"')]),s._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"pm2 start -n redBookServer npm -- run dev"')]),s._v(" ]")]),s._v("\n")])])]),a("p",[s._v(".dockerignore文件里直接忽略node_modules即可")]),s._v(" "),a("p",[s._v("执行build命令")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" redbookserver "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n")])])]),a("p",[s._v("然后在本地先创建一个容器，然后再把容器导出到一个文件里，不直接导出镜像，是因为导出镜像太大了，直接导出容器好一点。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" 容器id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" redbookserver.tar\n")])])]),a("p",[s._v("然后把导出的文件上传到服务器导入")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" - redbookserver "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" redbookserver.tar\n")])])]),a("p",[s._v("然后在服务器就可以看到该镜像了")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" images\n")])])]),a("p",[s._v("注意由于该镜像是直接通过容器导出的，不是通过镜像文件创建的，所以不能通过常规方式运行比如下面这种")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(":7001 redbookserver\n")])])]),a("p",[a("strong",[s._v("需要先手动运行，然后在容器内部再开启node 服务")])]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-itd")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("7001")]),s._v(":7001 redbookserver /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看运行中的容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#进入运行中的容器")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-it")]),s._v(" 容器id /bin/bash\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#找到node项目文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /home/redBookServer\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#通过PM2运行")]),s._v("\npm2 start "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" -- run dev\n")])])]),a("p",[a("strong",[s._v("查阅质料")])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/u013189824/article/details/109623741",target:"_blank",rel:"noopener noreferrer"}},[s._v("docker: Error response from daemon: No command specified. 解决_-小末的博客-CSDN博客"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.runoob.com/docker/docker-container-usage.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker 容器使用 | 菜鸟教程 (runoob.com)"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.hangge.com/blog/cache/detail_2411.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Docker - 实现本地镜像的导出、导入（export、import、save、load） (hangge.com)"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("a",{attrs:{href:"https://pm2.fenxianglu.cn/docs/start/",target:"_blank",rel:"noopener noreferrer"}},[s._v("快速开始 | PM2中文网 (fenxianglu.cn)"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);
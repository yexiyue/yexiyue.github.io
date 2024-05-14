(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{439:function(t,s,n){"use strict";n.r(s);var a=n(0),r=Object(a.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("介绍")]),t._v(" "),s("p",[t._v("如果你想搭建博客，就请看这篇文章")])]),t._v(" "),s("div",{staticClass:"language-markdown extra-class"},[s("pre",{pre:!0,attrs:{class:"language-markdown"}},[s("code",[s("span",{pre:!0,attrs:{class:"token front-matter-block"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token front-matter yaml language-yaml"}},[t._v("title: 小程序学习day4\ndate: 2022-06-12\ncover: /images/2053194.jpg\ntags:\n  - 小程序\n  - node\n  - java\ncategories:\n - 学习笔记\n - 生活\nsticky: true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("---")])]),t._v("\n::: tip 介绍\n今天学习了自定义小程序组件，插槽，组件间通信等\n:::\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- more --\x3e")]),t._v("\n\n\n/*"),s("span",{pre:!0,attrs:{class:"token italic"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v("\n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")])]),t._v(" date：日期必须按照上面格式写\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" cover可要可不要，不要的话就显示1.jpg\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" cover：有的话路径要写对，/代表public，然后写相对地址\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" sticky: 表示是否提到最前面\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" categories：分类\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" tags: 标签\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" ::: tip 介绍\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" 介绍内容，其他不变\n"),s("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" :::\n"),s("span",{pre:!0,attrs:{class:"token italic"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")]),s("span",{pre:!0,attrs:{class:"token content"}},[t._v(" \x3c!-- more --\x3e\n")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("*")])]),t._v(" 后面的内容就是博客内容\n*/\n注意：博客md文件得写到blogs下面\n")])])]),s("p",[s("strong",[t._v("bolg目录是你写markdown文件的目录")])]),t._v(" "),s("p",[t._v("先把项目clone下来")]),t._v(" "),s("p",[s("strong",[t._v("git clone git@github.com:yexiyue/yexiyue.github.io.git")])]),t._v(" "),s("p",[t._v("下载个包管理器\n"),s("code",[t._v("npm install -g pnpm")])]),t._v(" "),s("p",[s("strong",[t._v("1.进入根目录下")])]),t._v(" "),s("p",[s("strong",[t._v("2.执行")]),s("code",[t._v("pnpm install")])]),t._v(" "),s("p",[s("strong",[t._v("3.本地开发查看"),s("code",[t._v("pnpm dev")])])]),t._v(" "),s("p",[s("strong",[t._v("打开没反应可能是node环境设置成了production，要改成development")])]),t._v(" "),s("p",[s("strong",[t._v("5.编译打包"),s("code",[t._v("pnpm build")])])]),t._v(" "),s("p",[s("strong",[t._v("编译报错可能是node环境设置成了development，要改成production")])]),t._v(" "),s("p",[s("strong",[t._v("6.然后打开根目录")])]),t._v(" "),s("p",[s("strong",[t._v("7.打开git bash执行命令"),s("code",[t._v("sh deploy.sh")])])]),t._v(" "),s("p",[s("strong",[t._v("8.然后设置github pages")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/15/i9mgQFNahD3y7bu.png",alt:"image-20220615091053437"}})]),t._v(" "),s("p",[s("strong",[t._v("这样就部署成功了")])]),t._v(" "),s("h2",{attrs:{id:"详细配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#详细配置"}},[t._v("#")]),t._v(" "),s("strong",[t._v("详细配置")])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/06/22/8MQ7zUab3ckXRyF.png",alt:"image-20220622082133592"}})]),t._v(" "),s("h2",{attrs:{id:"目录说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#目录说明"}},[t._v("#")]),t._v(" 目录说明")]),t._v(" "),s("ol",[s("li",[s("strong",[t._v("images目录放博客封面的位置")])]),t._v(" "),s("li",[s("strong",[t._v("pageImage放的是随机封面，当没配置封面时随机显示封面")])]),t._v(" "),s("li",[s("strong",[t._v("homePages是主页背景图")])]),t._v(" "),s("li",[s("strong",[t._v("avatar-top.png是主页最左上角头像")])]),t._v(" "),s("li",[s("strong",[t._v("logo.png是主页右边头像")])]),t._v(" "),s("li",[s("strong",[t._v("config.js是重要配置文件")])])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//config.js重要配置信息")]),t._v("\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//网站标题（博客名称）")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"title"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"红尘散仙"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加载页面的提示语句")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"心软不是病，回头才致命"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//首页文案，可以自己更换每天会自动显示一段")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"mottos"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"zh"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"天在下雨地下滑，自己跌倒自己爬。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"It was raining and I slipped. I fell and climbed."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"zh"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"花有百般红，人与狗不同。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Flowers are all kinds of red. People are different from dogs."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"zh"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"只因人在风中，聚散不由你我。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Just because people gather and disperse in the wind, it\'s up to you and me."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"zh"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"学过很多技能，到头来才发现，最有用的技能是——看开点。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"After learning many skills, I finally found that the most useful skill is to be open-minded."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"zh"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"好好享受生活吧，未来若干年后你会很怀念过去的美好时光。。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enjoy yourself. These are the good old days you\'re going to miss in the years ahead. "')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"zh"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"打雷天站在雨里头，有点儿不讲究！"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"It\'s a bit careless to stand in the rain on a thundering day."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"zh"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"我就是想站着，还把钱挣了。"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"en"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"I just want to stand and earn money."')]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//配置背景图片，每次刷新自动")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//放public下名字跟下面一样")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v('"covers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/1.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/2.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/3.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/4.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/5.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/6.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/7.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/8.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/9.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/10.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/11.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/12.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/13.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/14.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/15.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/16.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/17.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/18.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/19.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/homeImage/20.jpg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 修改deploy.sh")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#下面配置你的github地址，中间最长的哪里替换复制下来的链接")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-f")]),t._v(" git@github.com:yexiyue/yexiyue.github.io.git master:gh-pages\n\n")])])]),s("p",[s("strong",[t._v("其他配置我在config.js文件中都写了注释，自行查看")])])])}),[],!1,null,null,null);s.default=r.exports}}]);
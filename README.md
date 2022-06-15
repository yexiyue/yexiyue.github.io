```markdown
---
title: 小程序学习day4
date: 2022-06-12
cover: /images/2053194.jpg
tags:
  - 小程序
  - node
  - java
categories:
 - 学习笔记
 - 生活
sticky: true
---
::: tip 介绍
今天学习了自定义小程序组件，插槽，组件间通信等
:::
<!-- more -->


/**
* date：日期必须按照上面格式写
* cover可要可不要，不要的话就显示1.jpg
* cover：有的话路径要写对，/代表public，然后写相对地址
* sticky: 表示是否提到最前面
* categories：分类
* tags: 标签
* ::: tip 介绍
* 介绍内容，其他不变
* :::
* <!-- more -->
* 后面的内容就是博客内容
*/
注意：博客md文件得写到blogs下面
```

**bolg目录是你写markdown文件的目录**

先把项目clone下来

**git clone git@github.com:yexiyue/yexiyue.github.io.git**

**1.进入根目录下**

**2.执行**`npm install`

**3.`npm install vuepress@1.7.1 -g`**

**4.本地开发查看vuepress dev .**

**打开没反应可能是node环境设置成了production，要改成development**

**5.编译打包vuepress build .**

**编译报错可能是node环境设置成了development，要改成production**

**6.然后进入打包后的dist目录**

**7.打开git bash执行以下命令把编译后的目录推送到你的仓库**

```bash
git init
git branch -m master
git add .
git commit -m "deploy"
## 注意下面yexiyue要替换成你自己的github用户名
git push -f git@github.com:yexiyue/yexiyue.github.io.git master:gh-pages
```




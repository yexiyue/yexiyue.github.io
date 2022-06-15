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



![image-20220615091053437](https://s2.loli.net/2022/06/15/i9mgQFNahD3y7bu.png)

**这样就部署成功了**



## **详细配置**

![image-20220615092107091](https://s2.loli.net/2022/06/15/Qe5cyv6RKhzsa3o.png)

## 目录说明

1. **images目录放博客封面的位置**
2. **pageImage放的是随机封面，当没配置封面时随机显示封面**
3. **1~7.jpg是主页背景图**
4. **avatar-top.png是主页最左上角头像**
5. **logo.png是主页右边头像**
6. **config.js是重要配置文件**

```js
//config.js重要配置信息
module.exports={
  //网站标题（博客名称）
  "title": "红尘散仙",
  //加载页面的提示语句
  "description": "心软不是病，回头才致命",
}
//首页文案，可以自己更换每天会自动显示一段
    "mottos": [
    {
      "zh": "天在下雨地下滑，自己跌倒自己爬。",
      "en": "It was raining and I slipped. I fell and climbed."
    },
    {
      "zh": "花有百般红，人与狗不同。",
      "en": "Flowers are all kinds of red. People are different from dogs."
    },
    {
      "zh": "只因人在风中，聚散不由你我。",
      "en": "Just because people gather and disperse in the wind, it's up to you and me."
    },
    {
      "zh": "学过很多技能，到头来才发现，最有用的技能是——看开点。",
      "en": "After learning many skills, I finally found that the most useful skill is to be open-minded."
    },
    {
      "zh": "好好享受生活吧，未来若干年后你会很怀念过去的美好时光。。",
      "en": "Enjoy yourself. These are the good old days you're going to miss in the years ahead. "
    }, {
      "zh": "打雷天站在雨里头，有点儿不讲究！",
      "en": "It's a bit careless to stand in the rain on a thundering day."
    },
    {
      "zh": "我就是想站着，还把钱挣了。",
      "en": "I just want to stand and earn money."
    }
    ],
```



**其他配置我在config.js文件中都写了注释，自行查看**
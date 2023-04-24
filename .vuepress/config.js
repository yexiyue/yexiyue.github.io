module.exports = {
  //网站标题（博客名称）
  "title": "红尘散仙",
  //加载页面的提示语句
  "description": "心软不是病，回头才致命",
  "dest": "dist",
  "head": [
    /* [
      "link",
      {
        "rel": "icon",
        "href": "favicon.ico"
      }
    ], */
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ['script', {}, `
          var _hmt = _hmt || [];
          (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?b0aae218897fa9d8a9f76e9a77e0b3c6";
            var s = document.getElementsByTagName("script")[0]; 
            s.parentNode.insertBefore(hm, s);
          })();
        `] //百度统计
  ],
  "locales": {
    "/": {
      "lang": 'zh-CN'
    }
  },
  // "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "主页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "关于",
        "link": "/about/",
        "icon": "reco-account"
      }
    ],
    "type": "blog",
    "sidebar": true,
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "博客"
      },
      "tag": {
        "location": 3,
        "text": "标签"
      }
    },
    //配置有情链接
    "friendLink": [
      
    ],
    //配置评论，比较复杂建议自己百度
    "valineConfig": {
      "appId": "XoYVGebrakOU2FA6fhWOCGxA-gzGzoHsz",// your appId
      "appKey": "z8fnOR0R5kyLwEAoTdszjTvE", // your appKey
      "avatar": "https://s2.loli.net/2022/06/14/fgbwH1c5dlZUiuy.jpg", //
      "enableQQ": true, //启用昵称框自动获取QQ昵称和QQ头像
      "requiredFields": ['nick', 'mail'], //设置必填项
    },
    "logo": "/logo.png",
    // "huawei": true, //首页出现华为文案
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "红尘散仙",
    "authorAvatar": "/avatar-top.png",
    "record": "你的备案号 ", //icp备案
    "startYear": "2022",
    //关于页面的信息
    "info": "全网人民大家好，我是练习时长两年半的前端练习生，红尘散仙，喜欢唱 跳 rap 篮球。",
    //社交账号设置
    "socials": {
      "github": "https://github.com/yexiyue", //github
      //"gitlub": false, //gitlub
      //"gitee": false,//"https://gitee.com/GodLikeZeal", //gitee
      //"jianshu":false,// "https://www.jianshu.com/u/e2d051b6d2e9", //简书
      //"zhihu": "https://www.zhihu.com/people/qian-ge-diao-63", //知乎
      //"toutiao": false, //知乎
      "juejin": "https://juejin.cn/user/334694205359901", //掘金
      //"segmentfault": false ,//"https://segmentfault.com/u/zeal_5eecb699bdb08", 思否
      // "csdn": false, //CSDN
      "wechat": false, //微信
      "qq": false //QQ
    },

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
    //配置背景图片，每次刷新自动
    //放public下名字跟下面一样
    "covers": [
      '/homeImage/1.jpg',
      '/homeImage/2.jpg',
      '/homeImage/3.jpg',
      '/homeImage/4.jpg',
      '/homeImage/5.jpg',
      '/homeImage/6.jpg',
      '/homeImage/7.jpg',
      '/homeImage/8.jpg',
      '/homeImage/9.jpg',
      '/homeImage/10.jpg',
      '/homeImage/11.jpg',
      '/homeImage/12.jpg',
      '/homeImage/13.jpg',
      '/homeImage/14.jpg',
      '/homeImage/15.jpg',
      '/homeImage/16.jpg',
      '/homeImage/17.jpg',
      '/homeImage/18.jpg',
      '/homeImage/19.jpg',
      '/homeImage/20.jpg',
    ],
    "codeTheme": "tomorrow"
  },
  "markdown": {
    "lineNumbers": false
  },
  //配置彩带
  plugins:[
    ["ribbon-animation", {
      size: 90,   // 默认数据
      opacity: 0.3,  //  透明度
      zIndex: -1,   //  层级
      opt: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "center",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 2,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      ribbonShow: false, //  点击彩带  true显示  false为不显示
      ribbonAnimationShow: true  // 滑动彩带
    },
  ]
  ]
  
  // configureWebpack: (config, isServer) => {
  //   if (!isServer) {
  //     // 修改客户端的 webpack 配置
  //     config.output.publicPath = config.mode === 'production'
  //       ? 'https://pan.zealsay.com/blog/' // sample/essays 打包的默认路径为 ‘_nuxt’ 或者可以指定cdn 域名
  //       : '/';
  //     config.output.filename = "assets/js/[name].js";
  //   }
  // }
}
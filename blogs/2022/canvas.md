
# canvas学习

## 1.概述

**Canvas API** 提供了一个通过[JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript) 和 [HTML](https://developer.mozilla.org/zh-CN/docs/Web/HTML)的[``](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas)元素来绘制图形的方式。它可以用于动画、游戏画面、数据可视化、图片编辑以及实时视频处理等方面。

Canvas API 主要聚焦于 2D 图形。而同样使用`<canvas>`元素的 [WebGL API](https://developer.mozilla.org/zh-CN/docs/Web/API/WebGL_API) 则用于绘制硬件加速的 2D 和 3D 图形。

长久以来，web. 上的动画都是Flash。比如动画广告、游戏等等，基本上都是Flash实现的。Flash 是有缺点的，比如需要安装Adobe Flash Player, 漏洞多，重量比较大。卡顿和不流畅等等。

Canvas是一个轻量级的画布，我们使用Canvas进行JavaScript的编程，不需要增加额外的插件，性能也很好，不卡顿，在手机中也很流畅

### canvas主要应用的领域(了解)

1. 游戏:canvas 在基于Web的图像显示方面比Flash更加立体、更加精巧,canvas游戏在流畅度和跨平台方面更牛。
2. **可视化数据，数据图表化，比如:百度的echart**
3. **banner广告: Flash曾经辉煌的时代，智能手机还未曾出现。现在以及未来的智能机时代，HTML5 技术能够在banner广告上发挥巨大作用，用Canvas实现动态的广告效果再合适不过**
4. 未来=>模拟器:无论从视觉效果还是核心功能方面来说，模拟器产品可以完全由JavaScript来实现。
5. 未来=>远程计算机控制: Canvas可以让开发者更好地实现基于Web的数据传输，构建一个完美的可视化控制界面。
6. 未来=>图形编辑器:Photoshop图形编辑器将能够100%基于Web实现。
7. 其他可嵌入网站的内容(多用于活动页面、特效):类似图表、音频、视频,还有许多元素能够更好地与Web融合，并且不需要任何插件。

## 2.基础入门

**1.设置canvas标签**

```html
 <canvas id="canvas" width="600" height="400">
    当前的浏览器版本过低，请升级浏览器
  </canvas>
```

canvas的标签属性只有两个，width和height。表示的是canvas画布的宽度和高度。

**注意canvas的width和height不要用css的样式来设置，如果使用css的样式来设置，画布会失真，会变形。**

标签对儿里面的文字是用来提示低版本浏览器(IE6/7/8)

支持canvas的浏览器看不到文字



**2.通过js绘制图像**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    canvas{
      border: 1px solid #ccc;
    }
  </style>
</head>
<body>
  <canvas id="canvas" width="600" height="400">
    当前的浏览器版本过低，请升级浏览器
  </canvas>
  <script>
    //获取画布
    let canvas=document.getElementById('canvas')
    //获取画布的上下文,2d或者3d上下文
    //所有的图像绘制都是通过ctx属性或者是方法进行设置的，和canvas标签无关
    let cvsCtx=canvas.getContext('2d')
    //先设置颜色再绘制
    cvsCtx.fillStyle = 'green';
    // 绘制矩形
    cvsCtx.fillRect(100, 100, 200, 50);
    
  </script>
</body>
</html>
```

![image-20220720081920528](https://s2.loli.net/2022/07/20/ZVY81fSu53ClBPQ.png)



## 3.canvas的动画

**我们使用canvas绘制了一个图形，一旦绘制成功了，canvas 就像素化了他们。canvas 没有能力，从画布上再次得到这个图形，也就是说我们没有能力去修改已经在画布上的内容。这个就是canvas比较轻量的原因,Flash重的原因之一就有它可以通过对应的api得到已经上“画布”的内容然后再次绘制**

> **如果我们想要让这个canvas图形移动，必须按照清屏-更新-渲染的逻辑进行编程**



**简单动画**

**canvas上画布的元素，就被像素化了，所以不能通过style.1eft方法进行修改，而是必须要重新绘制**

```js
let canvas=document.getElementById('canvas')
let cvsCtx=canvas.getContext('2d')
cvsCtx.fillStyle='#4ae5c6'
let left=100;
setInterval(()=>{
    cvsCtx.clearRect(0,0,600,600)
    left++;
    if(left>=600){
        left=-200
    }
    cvsCtx.fillRect(left,200,200,100)
},10)
```

![image-20220720092440115](https://s2.loli.net/2022/07/20/ILoWqlGutwS6s9P.png)

### 面向对象思维实现canvas动化

**因为canvas不能得到已经上屏的对象，所以我们要维持对象的状态。在canvas动画中，我们都使用面向对象来进行编程,因为我们可以使用面向对象的方式来维持canvas需要的属性和状态**

```typescript
class CanvasAnimation{
  public ctx:CanvasRenderingContext2D
  public x:number=0
  public y:number=0
  public h:number=100
  public w:number=100
  public fillStyle:CanvasFillStrokeStyles['fillStyle']='red'
  public canvasWidth
  public canvasHeight
  constructor(target:string){
    
    let canvas=(document.getElementById(target) as HTMLCanvasElement)
    this.ctx=canvas.getContext('2d')!
    this.canvasWidth=canvas.width
    this.canvasHeight=canvas.height
  }
  public fillRect(){
    this.ctx.fillStyle=this.fillStyle
    return this.ctx.fillRect(this.x,this.y,this.w,this.h)
  }
  public moveFillRectX(){
    const timer=setInterval(()=>{
      this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight)
      if(this.x>=this.canvasWidth){
        this.x=-this.w
        //clearInterval(timer)
      }
      this.x++;
      this.fillRect()
    },10)
  }
  public moveFillRectY(){
    const timer=setInterval(()=>{
      this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight)
      if(this.y>=this.canvasWidth){
        this.y=-this.h
        //clearInterval(timer)
      }
      this.y++;
      this.fillRect()
    },10)
  }
}
```

**感觉这个封装的不是很好，不易于扩展**



## 4.canvas的绘制功能

**绘制矩形api**

既然我们已经设置了 [canvas 环境](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Basic_usage)，我们可以深入了解如何在 canvas 上绘制。到本文的最后，你将学会如何绘制矩形，三角形，直线，圆弧和曲线，变得熟悉这些基本的形状。绘制物体到 Canvas 前，需掌握路径，我们看看到底怎么做。

**[栅格](https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#栅格)**

![img](https://s2.loli.net/2022/07/20/CznMyNRBUQAwhiD.png)

在我们开始画图之前，我们需要了解一下画布栅格（canvas grid）以及坐标空间。上一页中的 HTML 模板中有个宽 150px, 高 150px 的 canvas 元素。如右图所示，canvas 元素默认被网格所覆盖。通常来说网格中的一个单元相当于 canvas 元素中的一像素。栅格的起点为左上角（坐标为（0,0））。所有元素的位置都相对于原点定位。所以图中蓝色方形左上角的坐标为距离左边（X 轴）x 像素，距离上边（Y 轴）y 像素（坐标为（x,y））。在课程的最后我们会平移原点到不同的坐标上，旋转网格以及缩放。现在我们还是使用原来的设置。

### **绘制矩形**

不同于 [SVG](https://developer.mozilla.org/zh-CN/docs/Glossary/SVG)，[`<canvas>`](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/canvas) 只支持两种形式的图形绘制：矩形和路径（由一系列点连成的线段）。所有其他类型的图形都是通过一条或者多条路径组合而成的。不过，我们拥有众多路径生成的方法让复杂图形的绘制成为了可能。

首先，我们回到矩形的绘制中。canvas 提供了三种方法绘制矩形：

- [`fillRect(x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/fillRect)

  绘制一个填充的矩形

- [`strokeRect(x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/strokeRect)

  绘制一个矩形的边框

- [`clearRect(x, y, width, height)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/clearRect)

  清除指定矩形区域，让清除部分完全透明。

上面提供的方法之中每一个都包含了相同的参数。x 与 y 指定了在 canvas 画布上所绘制的矩形的左上角（相对于原点）的坐标。width 和 height 设置矩形的尺寸。

```js
let ctx=document.getElementById('canvas').getContext('2d')
//填充矩形
ctx.fillStyle='#4ae546'
ctx.fillRect(100,100,200,100)
//绘制矩形边框
ctx.strokeStyle='#4ae546'
ctx.strokeRect(320,100,200,100)
```

### 绘制路径

图形的基本元素是路径。路径是通过不同颜色和宽度的线段或曲线相连形成的不同形状的点的集合。一个路径，甚至一个子路径，都是闭合的。使用路径绘制图形需要一些额外的步骤。

1. 首先，你需要创建路径起始点。
2. 然后你使用[画图命令](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D#paths)去画出路径。
3. 之后你把路径封闭。
4. 一旦路径生成，你就能通过描边或填充路径区域来渲染图形。

以下是所要用到的函数：

- `beginPath()`

  新建一条路径，生成之后，图形绘制命令被指向到路径上生成路径。

- `closePath()`

  闭合路径之后图形绘制命令又重新指向到上下文中。

- `stroke()`

  通过线条来绘制图形轮廓。

- `fill()`

  通过填充路径的内容区域生成实心的图形。

生成路径的第一步叫做 beginPath()。本质上，路径是由很多子路径构成，这些子路径都是在一个列表中，所有的子路径（线、弧形、等等）构成图形。而每次这个方法调用之后，列表清空重置，然后我们就可以重新绘制新的图形。

**注意：当前路径为空，即调用 beginPath() 之后，或者 canvas 刚建的时候，第一条路径构造命令通常被视为是 moveTo（），无论实际上是什么。出于这个原因，你几乎总是要在设置路径之后专门指定你的起始位置。**

第二步就是调用函数指定绘制路径，本文稍后我们就能看到了。

第三，就是闭合路径 closePath(),不是必需的。这个方法会通过绘制一条从当前点到开始点的直线来闭合图形。如果图形是已经闭合了的，即当前点为开始点，该函数什么也不做。

**备注：** 当你调用 fill() 函数时，所有没有闭合的形状都会自动闭合，所以你不需要调用 closePath() 函数。但是调用 stroke() 时不会自动闭合。

```typescript
 let ctx=document.getElementById('canvas').getContext('2d')
 //创建路径
 ctx.beginPath()
//移动画笔到
ctx.moveTo(100,100)
//描述路径
ctx.lineTo(200,200)
ctx.lineTo(400,180);
ctx.lineTo(380,50)
//封闭路径
ctx.closePath()
//上色
ctx.strokeStyle='red'
ctx.stroke()
ctx.fillStyle='blue'
ctx.fill()
```

![image-20220720104707683](https://s2.loli.net/2022/07/20/zHX2hc3CyqPkSUA.png)

#### 移动笔触

一个非常有用的函数，而这个函数实际上并不能画出任何东西，也是上面所描述的路径列表的一部分，这个函数就是`moveTo()`。或者你可以想象一下在纸上作业，一支钢笔或者铅笔的笔尖从一个点到另一个点的移动过程。

- `moveTo(*x*, *y*)`

  将笔触移动到指定的坐标 x 以及 y 上。

#### 线

绘制直线，需要用到的方法`lineTo()`。

- [`lineTo(x, y)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineTo)

  绘制一条从当前位置到指定 x 以及 y 位置的直线。

#### 圆弧

绘制圆弧或者圆，我们使用`arc()`方法。当然可以使用`arcTo()`，不过这个的实现并不是那么的可靠，所以我们这里不作介绍。

- [`arc(x, y, radius, startAngle, endAngle, anticlockwise)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arc)

  画一个以（x,y）为圆心的以 radius 为半径的圆弧（圆），从 startAngle 开始到 endAngle 结束，按照 anticlockwise 给定的方向（默认为顺时针）来生成。

- [`arcTo(x1, y1, x2, y2, radius)`](https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/arcTo)

  根据给定的控制点和半径画一段圆弧，再以直线连接两个控制点。

这里详细介绍一下 arc 方法，该方法有六个参数：`x,y`为绘制圆弧所在圆上的圆心坐标。`radius`为半径。`startAngle`以及`endAngle`参数用弧度定义了开始以及结束的弧度。这些都是以 x 轴为基准。参数`anticlockwise`为一个布尔值。为 true 时，是逆时针方向，否则顺时针方向。

**注意：`arc()`函数中表示角的单位是弧度，不是角度。角度与弧度的 js 表达式：**

**弧度=(Math.PI/180)\*角度。**

```js
let canvas=document.getElementById('canvas')
let cvsCtx=canvas.getContext('2d')
cvsCtx.beginPath()
cvsCtx.arc(200,200,100,0,1,true)
/* cvsCtx.closePath() */
cvsCtx.strokeStyle='red'
cvsCtx.stroke()
```

![image-20220720143905013](https://s2.loli.net/2022/07/20/nkErUeXF5b2C4YS.png)
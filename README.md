# LeonSans-WxAppComponent
[![Page Views Count](https://badges.toozhao.com/badges/01EH2AWJFBQY4SRNMH0WCMNT90/blue.svg)](https://badges.toozhao.com/badges/01EH2AWJFBQY4SRNMH0WCMNT90/blue.svg "Get your own page views count badge on badges.toozhao.com")

Leon Sans是由Jongmin Kim在2019年开发的一款动态字体，这款字体有许多有趣酷炫的效果。我将其封装成了微信小程序组件，方便广大开发者使用~<br>
目前封装了四种字体，仅支持显示英文、数字和特殊符号。<br>
> 基于[Leon Sans项目](https://github.com/cmiscm/leonsans)
> <br>使用了TweenMax.js动画库
## 体验
可扫描以下小程序码体验：<br>
![小程序码](https://raw.githubusercontent.com/starkZH/LeonSans-WxAppComponent/gh-pages/screenshot/miniapp.jpg "小程序码")<br>
![多彩缤纷](https://raw.githubusercontent.com/starkZH/LeonSans-WxAppComponent/gh-pages/screenshot/colorful.gif "多彩缤纷")<br>
![彩色渐变](https://raw.githubusercontent.com/starkZH/LeonSans-WxAppComponent/gh-pages/screenshot/gradient.gif "彩色渐变")<br>
![波浪](https://raw.githubusercontent.com/starkZH/LeonSans-WxAppComponent/gh-pages/screenshot/wave.gif "波浪")<br>
![图案](https://raw.githubusercontent.com/starkZH/LeonSans-WxAppComponent/gh-pages/screenshot/pattern.gif "图案")

## 快速上手
1. 下载components和utils，然后复制至你的项目的根目录下
2. 在页面配置的json文件中引入自定义组件，如下：
```json
{
  "usingComponents": {
    "font-colorful": "/components/font-colorful/index",
    "font-wave": "/components/font-wave/index",
    "font-gradient": "/components/font-gradient/index",
    "font-pattern": "/components/font-pattern/index",
    "font-color-pattern": "/components/font-color-pattern/index"
  },
}
```
3. 在wxml中使用（若要在一个页面使用多个字体，需为每个字体指定唯一的key）
```html
<font-colorful key='colorful' text="Hello" size='30' weight='200' />
<font-wave key='wave' text="Hello" amplitude="0.3" size='30' weight='200' />
```
## 属性列表
### 公共属性
名称|类型|说明|默认值
--|:--:|:--|--
i-class|string|自定义样式|-
text|string|显示的文本|-
weight|number|字体的粗细|200
size|number|字体的尺寸|50
color|Array|每个字符的颜色|['#c5d73f', '#9d529c', '#49a9db', '#fec330', '#5eb96e', '#fc5356', '#f38f31']
tracking|number|字符之间的空格数|0
leading|number|每一行文本的间隔|0
align|number|文本的水平对齐方式（可选值：left,center,right）|left
animate|string|动画类型，可选值Power4(平缓),Bounce(弹跳),Elastic(弹簧),Expo(锐减)|Power4
animateIn|boolean|启用入场动画|true
animateOut|boolean|启用退场动画|true
loop|boolean|动画循环展示|false
key|string|字体的唯一标识|leon-canvas
width|number|画布的宽度与屏幕宽度之比（0~1）|1
height|number|画布的高度与屏幕高度之比（0~1）|1
### font-colorful属性（多彩缤纷字体）
名称|类型|说明|默认值
--|:--:|:--|--
color|Array|提供字体效果的颜色数组|['#c5d73f', '#9d529c', '#49a9db', '#fec330', '#5eb96e', '#fc5356', '#f38f31']
roundCap|boolean|是否开启笔画边缘圆角|false
multiply|boolean|是否开启笔画边缘叠影|false
### font-gradient属性（颜色渐变字体）
名称|类型|说明|默认值
--|:--:|:--|--
color|Array|二维数组，每个字符的渐变颜色列表作为一维数组|[['#64d3ce', '#2a92ce'],['#e7c4c4', '#aae898', '#e1ea73', '#ff8974'],['#fd46aa', '#8ad781']]
### font-wave属性（波浪字体）
名称|类型|说明|默认值
--|:--:|:--|--
amplitude|number|波浪效果的振幅（0~1）|0.3
fps|number|波浪效果的FPS|30
### font-pattern属性（图案字体）
名称|类型|说明|默认值
--|:--:|:--|--
patternWidth|number|图案的宽度|40
patternHeight|number|图案的高度|10
pathGap|number|每个字符的笔画上的点之间的间隔（0~1）|0.2
## 事件
事件名|说明|返回值
--|:--|:--
bind:complete|当画布初始化完成后触发，返回canvas实例对象|-


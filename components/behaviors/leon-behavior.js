import {TweenMax,Bounce,Elastic,RoughEase,Expo,Power4} from '../../utils/TweenMax.min.js'
const animateMap=[Power4,Bounce,Elastic,Expo,RoughEase]
module.exports = Behavior({
  behaviors: [],
  properties: {
    text:{
      type:String,
      value:'Stark'
    },
    weight:{
      type:Number,
      value:200
    },
    size:{
      type:Number,
      value:50
    },
    id:{
      type:String,
      value:'leon-canvas'
    },
    color:{
      type:Array,
      value:['#c5d73f', '#9d529c', '#49a9db', '#fec330', '#5eb96e', '#fc5356', '#f38f31']
    },
    width:{
      type:Number,
      value:1
    },
    height:{
      type:Number,
      value:0.3
    },
    tracking:{
      type:Number,
      value:0
    },
    leading:{
      type:Number,
      value:0
    },
    align:{
      type:String,
      value:'left'
    },
    pathGap:{
      type:Number,
      value:1
    },
    animateIn:{
      type:Boolean,
      value:true
    },
    animateOut:{
      type:Boolean,
      value:true
    },
    animate:{
      type:String,
      value:'Power4'
    },
    loop:{
      type:Boolean,
      value:false
    },
    offsetX:{
      type:Number,
      value:1
    },
    offsetY:{
      type:Number,
      value:1
    },
  },
  data: {
    sw:400,
    sh:300,
    canvas:{}, 
    ctx:null,
    animateIndex:{
      'Power4':0,
      'Bounce':1,
      'Elastic':2,
      'Expo':3,
      'RoughEase':4
    },
  },
  observers: {
    '**': function() {
      if(this.data.animateIndex[this.data.animate]==undefined)
        this.data.animate='Power4'
      this.data.easeAnimate = animateMap[this.data.animateIndex[this.data.animate]]
      if(this.data.leon){
      
        if(this.data.animateOut){
          let i, total = this.data.leon.drawing.length;
          for (i = 0; i < total; i++) {
              TweenMax.to(this.data.leon.drawing[i], 1, {
                  value: 0,
                  ease:this.data.easeAnimate.easeIn
              });
          }
          setTimeout(()=>{
            this.data.leon.dispose();
            this._initLeon();
            if(this.data.animateIn)
            this._drawing()
            },1000)
        }else{
          this.data.leon.dispose();
          this._initLeon();
          if(this.data.animateIn)
          this._drawing()
        }
      }
    }
  },
  attached: function(){
    if(this.data.animateIndex[this.data.animate]==undefined)
      this.data.animate='Power4'
    this.data.easeAnimate = animateMap[this.data.animateIndex[this.data.animate]]
    wx.createSelectorQuery().in(this)
    .select('#'+this.data.id)
    .fields({
      node: true,
      size: true,
    },(res)=>{this._initCanvas(res)})
    .exec()
  },
  methods: {
    _initCanvas(res){
      const width = res.width
      const height = res.height
  
      this.data.canvas = res.node
      this.data.ctx = this.data.canvas.getContext('2d')
      const sysInfo = wx.getSystemInfoSync();
      const pixelRatio = sysInfo.pixelRatio;
      this.data.sw=sysInfo.windowWidth*this.data.width;
      this.data.sh=sysInfo.windowHeight*this.data.height;
      this.data.canvas.width = width * pixelRatio
      this.data.canvas.height = height * pixelRatio
      this.data.ctx.scale(pixelRatio, pixelRatio);
      this.data.canvas.requestAnimationFrame((t)=>this._animate(t));
      this._init()
    },
    _drawing() {
      let out = Power4.easeOut;
      switch(this.data.animate){
        case 'Bounce':
          out =Bounce.easeOut;
          break;
        case 'Expo':
          out =Expo.easeOut;
          break;
        case 'Elastic':
          out =Elastic.easeOut;
          break;
        case 'RoughEase':
          out =RoughEase.easeOut;
          break;
      }
      let i, total = this.data.leon.drawing.length;
      for (i = 0; i < total; i++) {
          TweenMax.killTweensOf(this.data.leon.drawing[i]);
          let toObj={
            delay: i * 0.1,
            value: 1,
            ease: this.data.easeAnimate.easeOut
        }
          if(this.data.loop){
            toObj.yoyo=true;
            toObj.yoyoEase=true;
            toObj.repeat=-1;
          }
          TweenMax.fromTo(this.data.leon.drawing[i], 2, {
              value: 0
          },toObj );
      }
  },
  _animate(t){
    this.data.canvas.requestAnimationFrame((t)=>this._animate(t));
    this.data.ctx.clearRect(0, 0, this.data.sw, this.data.sh);
    const x = (this.data.sw - this.data.leon.rect.w) / 2;
    const y = (this.data.sh - this.data.leon.rect.h) / 2;
    this.data.leon.position(x*this.data.offsetX, y*this.data.offsetY);
    this.self_animate(t);
  }
  }
})
import {LeonSans} from '../../utils/leon'
const leonBehavior = require('../behaviors/leon-behavior');
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['i-class'],
  behaviors: [leonBehavior],
  properties: {
    roundCap:{
      type:Boolean,
      value:false
    },
    multiply:{
      type:Boolean,
      value:false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    leon:null,
  },

  lifetimes: {
    ready: function() {
     // this._init()
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    _initLeon(){
      this.data.leon = new LeonSans({
        text:  this.data.text,
        colorful:  this.data.color,
        size: this.data.size,
        weight:  this.data.weight,
        pathGap: -1,
        isPath: true,
        tracking:this.data.tracking,
        leading:this.data.leading,
        align:this.data.align
    });
    if(this.data.multiply){
      this.data.ctx.globalCompositeOperation = 'multiply';
    }else {
      this.data.ctx.globalCompositeOperation = 'source-over';
    }
    if (this.data.roundCap) {
        this.data.ctx.lineCap = "round";
    } else {
        this.data.ctx.lineCap = "butt";
    }
    },
    _init() {
      this._initLeon();
      
      if(this.data.animateIn)
      setTimeout(()=>this._drawing(),0);
  },
  
  self_animate(t) {
      //console.log(this._animate)
      this.data.leon.drawColorful(this.data.ctx);
  },
  }
})

import {LeonSans} from '../../utils/leon'
const leonBehavior = require('../behaviors/leon-behavior');
Component({
  /**
   * 组件的属性列表
   */
  externalClasses: ['i-class'],
  behaviors: [leonBehavior],
  properties: {
    amplitude:{
      type:Number,
      value:0.3
    },
    pathGap:{
      type:Number,
      value:0.3
    },
    fps:{
      type:Number,
      value:30
    },
    color:{
      type:Array,
      value:['#333333']
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    _initLeon(){
      this.data.leon = new LeonSans({
        isWave: true,
        text: this.data.text,
        color: this.data.color,
        size:this.data.size,
        weight: this.data.weight,
        pathGap: this.data.pathGap,
        amplitude: this.data.amplitude,
        fps: this.data.fps,
        tracking:this.data.tracking,
        leading:this.data.leading,
        align:this.data.align
    });
  },
    _init() {
      this._initLeon();
      
      if(this.data.animateIn)
      setTimeout(()=>this._drawing(),0);
  },
  
  self_animate(t) {
      this.data.leon.wave(this.data.ctx,t);
  },
  }
})

import {LeonSans} from '../../utils/leon'
const leonBehavior = require('../behaviors/leon-behavior');
Component({
  externalClasses: ['i-class'],
  behaviors: [leonBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    patternWidth:{
      type:Number,
      value:40,
    },
    patternHeight:{
      type:Number,
      value:10
    },
    pathGap:{
      type:Number,
      value:0.2
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
        text:  this.data.text,
        color:  this.data.color,
        size: this.data.size,
        weight:  this.data.weight,
        isPath: true,
        pathGap: this.data.pathGap,
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
    this.data.leon.pattern(this.data.ctx, this.data.patternWidth, this.data.patternHeight);
  },
  }
})

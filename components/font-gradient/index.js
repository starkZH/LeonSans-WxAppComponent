import {LeonSans} from '../../utils/leon'
const leonBehavior = require('../behaviors/leon-behavior');
const mini_weight=120;
const fps=1000/50;
Component({
  externalClasses: ['i-class'],
  behaviors: [leonBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    color:{
      type:Array,
      value: [
          ['#64d3ce', '#2a92ce'],
          ['#e7c4c4', '#aae898', '#e1ea73', '#ff8974'],
          ['#fd46aa', '#8ad781']
      ]
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
        tracking:this.data.tracking,
        leading:this.data.leading,
        align:this.data.align
    });
    },
    _init() {
      this._initLeon();
      
      //console.log(this.data.leons)
      if(this.data.animateIn)
      setTimeout(()=>this._drawing(),0);
  },
  
  self_animate(t) {
      this.data.leon.draw(this.data.ctx);
  }
  }
})

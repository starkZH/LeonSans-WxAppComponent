import {LeonSans} from '../../utils/leon'
const leonBehavior = require('../behaviors/leon-behavior');
const PI2 = 2 * Math.PI;
const fps=1000/40;
const speed=10;
Component({
  externalClasses: ['i-class'],
  behaviors: [leonBehavior],
  /**
   * 组件的属性列表
   */
  properties: {
    patternWidth:{
      type:Number,
      value:30
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cValue:0,
    time:null
  },

  /**
   * 组件的方法列表
   */
  methods: {

    _initLeon(){
      this.data.leon = new LeonSans({
        text:  this.data.text,
        size: this.data.size,
        weight:  this.data.weight,
        pathGap: 0,
        isPath: true
    });
    },
    _init() {
      this._initLeon();
      
      if(this.data.animateIn)
      setTimeout(()=>this._drawing(),0);
  },
  
  self_animate(t) {
    if (t) {
        if (!this.data.time) this.data.time = t;
        if (t - this.data.time > fps) {
            this.data.time = t;
            this.update();
        }
    }
  },
   update() {
      //this.data.ctx.clearRect(0, 0, this.data.sw, this.data.sh);
      this.data.ctx.lineWidth = 0.2;
      const w = this.data.patternWidth * this.data.leon.scale;
      const total = this.data.leon.data.length;
      let i, p, pos, no = 0; 
      let d, j, j_total;

      for (i = 0; i < total; i++) {
          d = this.data.leon.data[i].paths;
          j_total = Math.round(d.length * this.data.leon.drawing[i].value);
          for (j = 0; j < j_total; j++) {
              pos = d[j];
              this.data.ctx.fillStyle = this.randomColor(no);
              this.data.ctx.strokeStyle = this.randomColor(no);
              this.data.ctx.beginPath();
              this.data.ctx.arc(pos.x, pos.y, w, 0, PI2);
              this.data.ctx.stroke();
              no += 1;
          }
      }

      this.data.cValue -= speed;
  }
  , randomColor(no) {
      return "hsl(" + (no + this.data.cValue) + ',' + '70%,' + '50%)';
  }
  }
})

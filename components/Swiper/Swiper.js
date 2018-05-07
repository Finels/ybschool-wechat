// components/Swiper/Swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgUrls: {
      type: Array,
      value: []
    },
    imgWidth: {   // 图片宽度
      type: Number,
      value: 98
    },
    imgHeight: {   // 图片高度
      type: Number,
      value: 350
    },
    margin: {   // 与屏幕间距
      type: Number,
      value: 1
    },
    indicatorDots: {    // 是否显示面板指示点
      type: Boolean,
      value: true
    },
    autoplay: {    // 是否自动切换
      type: Boolean,
      value: true
    },
    interval: {   // 自动切换时间间隔
      type: Number,
      value: 3000
    },
    duration: {   // 滑动动画时长
      type: Number,
      value: 500
    },


  },

  

  /**
   * 组件的初始数据
   */
  data: {
    Hei:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    imgH: function (e) {
      var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
      var imgh = e.detail.height;　　　　　　　　　　　　　　　　//图片高度
      var imgw = e.detail.width;
      var swiperH = winWid * imgh / imgw + "px"　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
      this.setData({
        Hei: swiperH　　　　　　　　//设置高度
      })
      console.log(swiperH)
    },
  }
})

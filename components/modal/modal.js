Component({
  properties: {
    title: {
      type: String,
      value: '温馨提示'
    },
    content: {
      type: String,
      value: '弹窗内容'
    },
    noCancel:{
      type: Boolean,
      value: true
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    okText: {
      type: String,
      value: '确定'
    }
  },
  data: {
    isShow: false
  },
  methods: {
    show: function () {
      this.setData({
        isShow: true
      })
    },
    close: function () {
      this.setData({
        isShow: false
      })
    },
    _cancelEvent: function () {
      this.triggerEvent('cancelEvent');
    },
    _okEvent: function () {
      this.triggerEvent('okEvent');
    }
  }
})


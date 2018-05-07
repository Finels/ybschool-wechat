// components/Picker/Picker.js
Component({


  /**
   * 组件的属性列表
   */
  properties: {
    iconUrl: {      //  图标路径
      type: null,
    },
    title: {
      type: String,
      value: '待填'
    },
    mode: {
      type: String,
      value: 'selector'
    },
    start: {
      type: String,
      value: '2018-03-26'
    },
    value: {
      type: null
    },
    options: {
      type: Array,
      value: []
    },
    color: {
      type: null,
      value: 'red'
    },
    content: {
      type: null,
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
    changeData(e) {
      console.log('------------->')
      console.log(e)
      //触发取消回调
      this.triggerEvent("changeData", { value: e.datail.value })
    },
  }
})

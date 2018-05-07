// components/gridView/gridView.js
Component({

  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {

    gridViewData: {            // 数据源
      type: Array,             // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
      value: []                // value 属性初始值（可选），如果未指定则会根据类型选择一个
    },
    itemWidth: {
      type: Number,
      value: 25                         //   25   33  50
    },
    itemImgWidth: {
      type: Number,
      value: 60                          //   25    120     
    },
    itemImgHeight: {
      type: Number,
      value: 60
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
    _clickItem(e) { 
      let param = {};
      param = e.currentTarget.dataset.item;
      param.index = e.currentTarget.dataset.index;
      //点击事件
      this.triggerEvent("clickItem", { data: param})
    },
  }
})

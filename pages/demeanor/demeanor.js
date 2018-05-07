// pages/schoolDemeanor/schoolDemeanor.js
const util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    gridViewData: [
      {
        "name": "场地一",
        "pic_url": '../../images/demeanor/place01.png'
      },
      {
        "name": "场地二",
        "pic_url": '../../images/demeanor/place02.png'
      },
      {
        "name": "场地三",
        "pic_url": '../../images/demeanor/place03.png'
      },
      {
        "name": "场地四",
        "pic_url": '../../images/demeanor/place04.png'
      }
    ],
    coachData: [
      {
        "name": '教练1',
        "pic_url": '../../images/demeanor/coach01.jpg'
      },
      {
        "name": "教练2",
        "pic_url": '../../images/demeanor/coach02.jpg'
      },
      {
        "name": "教练3",
        "pic_url": '../../images/demeanor/coach03.jpg'
      },
      {
        "name": "教练4",
        "pic_url": '../../images/demeanor/coach04.jpg'
      }
    ]
  },

  _clickPlaceItem: function (event) {
    console.log('4444')
    console.log(event)
    util.navigateToUrl('placeShow/placeShow?data=' + JSON.stringify(event.detail.data))
  },

  previewImage: function (event) {
    console.log(event)
    let imgUrls = [
      '../../images/demeanor/place01.JPG',
      '../../images/demeanor/place01.JPG', 
      '../../images/demeanor/place01.JPG'
    ]
    var src = event.detail.data.pic_url;//获取data-src
    var imgList = imgUrls;//获取data-list
    //图片预览
    wx.previewImage({
      current: src, // 当前显示图片的http链接
      urls: imgList // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(wx.getSystemInfoSync().windowWidth)
    console.log(wx.getSystemInfoSync().windowHeight)
  },



  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
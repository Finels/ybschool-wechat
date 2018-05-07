//home.js
//获取应用实例

const util = require('../../utils/util.js');

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagewidth: 0,
    gridViewData: [
      {
        "name": "驾校简介",
        "pic_url": '../../images/home/drive_notice.png'
      },
      {
        "name": "教学流程",
        "pic_url": '../../images/home/teach_steps.png'
      },
      {
        "name": "报名须知",
        "pic_url": '../../images/home/sign_notice.png'
      }
    ],
    rowData: {
      imgUrl_one: '../../images/home/course_one.png',
      title_one: '测试一',
      imgUrl_two: '../../images/home/course_two.png',
      title_two: '测试二',
    }
  },

  clickCourse: function (e) {
    let type = e.currentTarget.dataset.type
    console.log(type)
    if (type === '1') {
      wx.navigateTo({
        url: 'courseOne/courseOne',
      })
    } else if (type === '2') {
      wx.navigateTo({
        url: 'courseTwo/courseTwo',
      })
    } else if (type === '3') {
      wx.navigateTo({
        url: 'courseThree/courseThree',
      })
    } else if (type === '4') {
      wx.navigateTo({
        url: 'courseFour/courseFour',
      })
    }

  },

  _clickItem: function (e) {
    let type = e.detail.data.index
    console.log(type)
    if (type === 0) {
      wx.navigateTo({
        url: 'schoolDesc/schoolDesc',
      })
    } else if (type === 1) {
      wx.navigateTo({
        url: 'teachProcess/teachProcess',
      })
    } else if (type === 2) {
      wx.navigateTo({
        url: 'signNotice/signNotice',
      })
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    console.log('onshow')
    console.log(util.getHour())
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

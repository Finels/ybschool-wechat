// pages/personCenter/personCenter.js
const app = getApp();
var network = require("../../utils/HttpUtil.js");
var util = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {

    userInfo: {},
    hasUserInfo: false,

    orderData: [

    ],

    stage: '',

    hasLogin: false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    console.log('user---onLoad')
    console.log('hasLogin');
    console.log(app.globalData.hasLogin);

    if (app.globalData.stage === '科目二') {
      this.setData({
        stage: '科目二'
      });
    } else if (app.globalData.stage === '科目三') {
      this.setData({
        stage: '科目三'
      });
    }

    var self = this;

    if (app.globalData.userInfo) {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    self.setData({
      hasLogin: app.globalData.hasLogin
    })
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

    var self = this;
    console.log('user---onShow')
    console.log(app.globalData.hasLogin);


    self.setData({
      hasLogin: app.globalData.hasLogin
    })
    

    let param = {
      url: 'app/appointment',
      token: app.globalData.openid,
      data: {

      }
    }
    network.requestGet(param, '', function (res) {
      //res就是我们请求接口返回的数据
      console.log(res.content)
      let newArr = [];
      for (let i = 0; i < res.content.length; i++) {
        console.log(new Date(res.content[i].appointmentDate))
        console.log(util.getNowDate(new Date(res.content[i].appointmentDate)))

        newArr[i] = {};

        if (res.content[i].stage && res.content[i].stage === '103') {
          newArr[i].stage = '科目三'
        } else {
          newArr[i].stage = '科目二'
        }
        newArr[i].traineeName = res.content[i].traineeName;
        newArr[i].timeIntervalDesc = res.content[i].timeIntervalDesc;
        newArr[i].appointmentDate = util.getNowDate(new Date(res.content[i].appointmentDate));

      }
      self.setData({
        orderData: newArr
      })
    }, function (res) {
      wx.showToast({
        title: '加载数据失败',
      })
    })

  },

  registerFn: function (e) {
    wx.navigateTo({
      url: 'register/register?fromPage=user',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    //获得dialog组件


    console.log('user---onReady')
    console.log(app.globalData.hasLogin);

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
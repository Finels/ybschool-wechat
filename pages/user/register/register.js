// pages/user/register/register.js
const myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
var network = require("../../../utils/HttpUtil.js");
const app = getApp();


Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName: '',
    userPhone: '',
    licenseTypeData: [
      { name: '手动挡', value: '101' },
      { name: '自动挡', value: '102' },
    ],
    licenseType: -1,

    fromPage: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    if (options.fromPage === 'order') {
      this.setData({
        fromPage: 'order'
      })
    } else if (options.fromPage === 'user') {
      this.setData({
        fromPage: 'user'
      })
    }
  },

  changeUserName: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },

  changePhone: function (e) {
    this.setData({
      userPhone: e.detail.value
    })
  },

  radioChange: function (e) {
    this.setData({
      licenseType: e.detail.value
    })
  },

  submitFn: function (e) {
    console.log('---------');
    console.log(app.globalData.openid)
    console.log(app.globalData.schoolId)
    if (this.data.userName === '') {
      wx.showToast({
        title: '姓名不能为空！',
        icon: 'none'
      })
    } else if (this.data.userPhone === '') {
      wx.showToast({
        title: '手机号不能为空！',
        icon: 'none'
      })
    } else if (!myreg.test(this.data.userPhone)) {
      wx.showToast({
        title: '手机号码格式不对，请输入正确的手机号！',
        icon: 'none'
      })
    } else if (this.data.licenseType === -1) {
      wx.showToast({
        title: '请选择手动挡还是自动挡',
        icon: 'none'
      })
    }
    else {



      let param = {
        url: 'user',
        token: '',
        data: {
          userName: this.data.userName,
          userPhone: this.data.userPhone,
          licenseType: this.data.licenseType,
          wxOpenId: app.globalData.openid,
          schoolId: app.globalData.schoolId
        }
      }
      network.requestPost(param, '数据提交中', function (res) {
        //res就是我们请求接口返回的数据
        console.log('*******')
        console.log(res.content)

        var that = this;

        if (res.code === 1) {
          wx.showToast({
            title: res.msg,
            icon: 'none'
          })
        } else if (res.code === 0) {
          wx.setStorage({
            key: "hasLogin",
            data: true
          })

          let userInfo = {
            openid: app.globalData.openid,
            schoolId: app.globalData.schoolId
          }

          wx.setStorage({
            key: "userInfo",
            data: userInfo
          })

          app.globalData.hasLogin = true;
          app.globalData.userInfo.userName = res.content.userName;
          app.globalData.userInfo.userPhone = res.content.userPhone;

          var pages = getCurrentPages();
          var currPage = pages[pages.length - 1];   //当前页面
          var prevPage = pages[pages.length - 2];  //上一个页面


          prevPage.setData({
            hasLogin: true
          })

          if (currPage.data.fromPage === 'user') {
            wx.switchTab({
              url: '../user',
            })
          } else if (currPage.data.fromPage === 'order') {
            wx.switchTab({
              url: '../../order/order',
            })
          }
        }
      }, function (res) {
        console.log('----')
        console.log(res)
        wx.showToast({
          title: '加载数据失败',
        })
      })



    }
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
// pages/order/order.js
const util = require('../../utils/util.js');
var network = require("../../utils/HttpUtil.js");
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    winWidth: 0,
    winHeight: "",
    currentTab: 0,      // tab切换

    courseData: ['科目一', '科目二', '科目三'],      // 训练科目数据
    stage: '暂无',

    coachData: [],        // 教练数据
    coach: "请选择教练",
    traineeId: '',

    startDate: util.getNextDate(),
    appointmentDate: util.getNextDate(),

    timeData: [],     // 时间段数据
    time: '请选择时间段',
    timeInterval: '',

    noCancel: false,
    hasLogin: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('order--onLoad')
    console.log(app.globalData.hasLogin)




    this.resetModal = this.selectComponent('#resetModal');
    this.confirmModal = this.selectComponent('#confirmModal');
    this.registerModal = this.selectComponent('#registerModal');
    this.openModal = this.selectComponent('#openModal');


    var that = this;



    this.setData({
      winWidth: wx.getSystemInfoSync().windowWidth,
      winHeight: wx.getSystemInfoSync().windowHeight,
      hasLogin: app.globalData.hasLogin
    });


    if (app.globalData.stage === '科目二') {
      this.setData({
        stage: '科目二'
      });
    } else if (app.globalData.stage === '科目三') {
      this.setData({
        stage: '科目三'
      });
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
    console.log('order--onshow')
    console.log(app.globalData.hasLogin)

    var that = this;
    this.setData({
      hasLogin: app.globalData.hasLogin
    })

    let curHour = util.getHour()


    //获取预约基本信息
    let param = {
      url: 'app/appointment/infos',
      token: app.globalData.openid,
      data: ''
    }
    network.requestGet(param, '获取数据中', function (res) {

      //res就是我们请求接口返回的数据
      console.log('res------------------>')
      console.log(res)


      let timeData = [];

      that.setData({
        coachData: res.content.trainees,
        timeData: res.content.times,
      });

    }, function (res) {
      console.log('----')
      console.log(res)
      wx.showToast({
        title: '加载数据失败',
      })
    })

    let param_getUser = {
      url: 'user',
      token: '',
      data: {
        openId: app.globalData.openid
      }
    }
    network.requestGet(param_getUser, '获取数据中', function (res2) {
      //res就是我们请求接口返回的数据
      console.log('----->')
      console.log(res2)

      if (res2.code === 1) {
        app.globalData.hasLogin = false;
      } else if (res2.code === 0) {



        if (!res2.content.stage || res2.content.stage !== '103') {
          that.setData({
            stage: '科目二'
          })
        } else {
          that.setData({
            stage: '科目三'
          })
        }

      }

    }, function (res2) {
      wx.showToast({
        title: '加载数据失败',
      })
    })


    if (curHour < 7 || curHour > 19) {
      this.openModal.show();
    } else {

    }

    if (!this.data.hasLogin) {
      this.registerModal.show();

    } else {
      this.registerModal.close();
    }
  },

  openOk() {
    let curHour = util.getHour()
    if (curHour < 7 || curHour > 19) {
      this.openModal.show();
    } else {
      this.openModal.close();
    }
  },

  // 滑动切换tab
  bindChange: function (e) {
    var that = this;
    that.setData({ currentTab: e.detail.current });
  },

  // 点击tab切换 
  swichNav: function (e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  // 选择科目
  selectCourseFn: function (e) {
    var that = this;
    wx.showActionSheet({
      itemList: this.data.courseData,
      success: function (res) {
        console.log('success')
        that.setData({
          course: that.data.courseData[res.tapIndex]
        })
      },
      fail: function (res) {
        console.log('fail')
        console.log(res.errMsg)
      }
    })

    // console.log(e)
    // this.setData({
    //   course: this.data.courseData[e.detail.value]
    // })
  },
  // 选择教练
  selectCoachFn: function (e) {

    var that = this;

    let param = {
      url: 'app/appointment/infos',
      token: app.globalData.openid,
      data: ''
    }
    network.requestGet(param, '获取数据中', function (res) {
      //res就是我们请求接口返回的数据
      console.log(res)
      if (res.content.trainees.length === 0) {
        wx.showToast({
          title: '暂无教练可选',
          icon: 'none'
        })
      } else {
        that.setData({
          coachData: res.content.trainees,
        });
        let coachArr = [];
        coachArr = res.content.trainees;
        wx.showActionSheet({
          itemList: coachArr.map((item) => { return item.userName }),
          success: function (res) {
            console.log('success')
            that.setData({
              coach: coachArr[res.tapIndex].userName,
              traineeId: coachArr[res.tapIndex].id
            })
          },
          fail: function (res) {
            console.log('fail')
            console.log(res.errMsg)
          }
        })
      }
    }, function (res) {
      console.log('----')
      console.log(res)
      wx.showToast({
        title: '加载数据失败',
      })
    })



    // console.log(e)
    // this.setData({
    //   coach: this.data.coachData[e.detail.value]
    // })
  },
  // 选择日期
  selectDateFn: function (e) {
    console.log(e)
    this.setData({
      appointmentDate: e.detail.value
    })
  },
  //选择时间段
  selectTimeFn: function (e) {

    var that = this;
    wx.showActionSheet({
      itemList: this.data.timeData.map((item) => { return item.smallName }),
      success: function (res) {
        console.log('success')
        console.log(res)
        that.setData({
          time: that.data.timeData[res.tapIndex].smallName,
          timeInterval: that.data.timeData[res.tapIndex].smallCode
        })
      },
      fail: function (res) {
        console.log('fail')
        console.log(res)
      }
    })

  },


  showModal: function (e) {
    let type = e.currentTarget.dataset.type
    if (type == 'reset') {
      this.resetModal.show();
    } else {
      if (this.data.course === '请选择科目') {
        wx.showToast({
          title: '请选择科目',
          icon: 'none'
        })
      } else if (this.data.coach === '请选择老师') {
        wx.showToast({
          title: '请选择老师',
          icon: 'none'
        })
      } else if (this.data.time === '请选择时间段') {
        wx.showToast({
          title: '请选择时间段',
          icon: 'none'
        })
      } else {
        this.confirmModal.show();
      }
    }
  },

  registerOk: function () {
    util.navigateToUrl("../user/register/register?fromPage=order")

  },

  resetCancel: function () {
    this.resetModal.close();
  },
  resetOk: function () {
    this.setData({
      // course: '请选择科目',
      coach: "请选择教练",
      traineeId: '',
      appointmentDate: util.getNowDate(new Date()),
      time: '请选择开始时间',
      timeInterval: ''
    });
    this.resetModal.close();

  },


  confirmCancel: function () {
    this.confirmModal.close();
  },
  confirmOk: function () {
    var that = this;

    let param = {
      url: 'app/appointment',
      token: app.globalData.openid,
      data: {
        traineeId: this.data.traineeId,
        appointmentDate: this.data.appointmentDate,
        timeInterval: this.data.timeInterval,
      }
    }
    network.requestPost(param, '数据提交中', function (res) {

      //res就是我们请求接口返回的数据
      console.log(res.content)
      if (res.code === 0) {
        wx.showLoading({
          title: '预约成功！',
        })
        setTimeout(() => {
          wx.hideLoading();
          that.resetOk();
        }, 2000)
      } else if (res.code === 1) {
        wx.showLoading({
          title: '该时段预约已满，请选择其他时间！',
        })
        setTimeout(function () {
          wx.hideLoading()
        }, 2000)
      }

    }, function (res) {
      console.log('----')
      console.log(res)
      wx.showToast({
        title: '加载数据失败',
      })
    })
    this.confirmModal.close();
  },

  jumpToUrl: function (e) {
    console.log(e)
    // util.navigateToUrl("orderWebView/orderWebView")
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onHide')
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
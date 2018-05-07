//app.js
var network = require("./utils/HttpUtil.js");
App({
  onLaunch: function () {
    var self = this

    wx.login({
      success: function (res) {
        if (res.code) {
          console.log('code')
          console.log(res)
          let param = {
            url: 'getOpenId',
            token: '',
            data: {
              code: res.code
            }
          }
          network.requestGet(param, '', function (res) {
            //res就是我们请求接口返回的数据
            console.log('res')
            console.log(res)
            self.globalData.openid = res.content.openid

            let openid = res.content.openid;

            let param = {
              url: 'user',
              token: '',
              data: {
                openId: openid
              }
            }
            network.requestGet(param, '获取数据中', function (res) {
              //res就是我们请求接口返回的数据
              console.log('----->')
              console.log(res)

              if (res.code === 1) {
                self.globalData.hasLogin = false;
              } else if (res.code === 0) {

                self.globalData.hasLogin = true;

                if (!res.content.stage || res.content.stage !== '103') {
                  self.globalData.stage = '科目二'
                } else {
                  self.globalData.stage = '科目三'
                }

                let newUserInfo = {
                  openid: res.content.wxOpenId,
                  schoolId: res.content.schoolId,
                  isEnabled: res.content.isEnabled,
                  stage: res.content.stage,
                  licenseType: res.content.licenseType,
                  userName: res.content.userName,
                  userPhone: res.content.userPhone,
                  userRole: res.content.userRole
                }

                wx.setStorage({
                  key: "userInfo",
                  data: newUserInfo
                })
              }

            }, function (res) {
              wx.showToast({
                title: '加载数据失败',
              })
            })

          }, function (res) {
            wx.showToast({
              title: '加载数据失败',
            })
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });


    // wx.getStorage({
    //   key: 'hasLogin',
    //   success: function (res) {
    //     console.log('**success**')
    //     console.log(res)
    //     if (res.data) {
    //       self.globalData.hasLogin = true;
    //     }
    //   },
    //   fail: function (res) {
    //     console.log('**false**')
    //     console.log(res)
    //     self.globalData.hasLogin = false;
    //   }
    // })

  },

  globalData: {
    userInfo: {},
    stage: null,
    hasLogin: false,
    openid: '',
    schoolId: 'ybschool'
  },

})
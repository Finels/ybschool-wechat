// function request(url, params, success, fail) {
//   this.requestLoading(url, params, "", success, fail)
// }


// const BASE_URL = 'http://10.17.31.91:9999/';
const BASE_URL = 'https://hzwfbz.cn/';

const CodeMessages = [
  { code: 400, message: "错误请求" },
  { code: 401, message: "未授权" },
  { code: 403, message: "禁止访问" },
  { code: 404, message: "未找到的请求" },
  { code: 408, message: "请求超时，请检查网络" },
  { code: 500, message: "服务器内部错误" },
  { code: 0, message: "网络错误" }
];


// 展示进度条的网络请求
// url:网络请求的url
// params:请求参数
// message:提示信息
// success:成功的回调函数
// fail：失败的回调

function requestGet(params, message, success, fail) {
  wx.showNavigationBarLoading()
  if (message != "") {
    wx.showLoading({
      title: message,
    })
  }
  wx.request({
    url: BASE_URL + params.url,
    data: params.data,
    header: {
      'Accept': 'application/json',
      'token': params.token
    },
    method: 'GET',
    success: function (res) {
      wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {

        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        } else {
          success(res.data)
        }
      } else {
        fail()
      }
    },
    fail: function (res) {
      wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      fail()
    },
    complete: function (res) {

    },
  })
}

function requestPost(params, message, success, fail) {
  wx.showNavigationBarLoading()
  if (message != "") {
    wx.showLoading({
      title: message,
    })
  }
  wx.request({
    url: BASE_URL + params.url,
    data: params.data,
    header: {
      'content-type': 'application/x-www-form-urlencoded',
      'token': params.token
    },
    method: 'POST',
    success: function (res) {
      wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      if (res.statusCode == 200) {
        if (res.data.code !== 0) {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        } else {
          success(res.data)
        }
      } else {
        fail()
      }
    },
    fail: function (res) {
      wx.hideNavigationBarLoading()
      if (message != "") {
        wx.hideLoading()
      }
      fail()
    },
    complete: function (res) {

    },
  })
}


module.exports = {
  requestGet: requestGet,
  requestPost: requestPost
}

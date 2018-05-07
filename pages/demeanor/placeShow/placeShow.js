// pages/demeanor/placeShow/placeShow.js


Page({
  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [

    ],
    place_address: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let placeName = JSON.parse(options.data).name;
    console.log(JSON.parse(options.data))
    switch (placeName) {
      case "场地一":
        this.setData({
          imgUrls: [
            '../../images/demeanor/place01.png',
            '../../images/demeanor/place02.png',
            '../../images/demeanor/place03.png',
            '../../images/demeanor/place04.png'
          ],
          place_address: '这是' + placeName + '的地址'
        });
        wx.setNavigationBarTitle({
          title: '场地一'
        });
        break;
      case "场地二":
        this.setData({
          imgUrls: [
            '../../images/demeanor/place01.png',
            '../../images/demeanor/place02.png',
            '../../images/demeanor/place03.png',
            '../../images/demeanor/place04.png'
          ],
          place_address: '这是' + placeName + '的地址'
        });
        wx.setNavigationBarTitle({
          title: '场地二'
        });
        break;
      case "场地三":
        this.setData({
          imgUrls: [
            '../../images/demeanor/place01.png',
            '../../images/demeanor/place02.png',
            '../../images/demeanor/place03.png',
            '../../images/demeanor/place04.png'
          ],
          place_address: '这是' + placeName + '的地址'
        })
        wx.setNavigationBarTitle({
          title: '场地三'
        });
        break;
      case "场地四":
        this.setData({
          imgUrls: [
            '../../images/demeanor/place01.png',
            '../../images/demeanor/place02.png',
            '../../images/demeanor/place03.png',
            '../../images/demeanor/place04.png'
          ],
          place_address: '这是' + placeName + '的地址'
        })
        wx.setNavigationBarTitle({
          title: '场地四'
        });
        break;
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
// pages/home/coursePage/coursePage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pageTitle: '',
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    switch (options.type) {
      case '0':
        wx.setNavigationBarTitle({
          title: '驾校简介'
        });
        this.setData({
          pageTitle: '驾校简介',
          content:'友邦驾校拥有各型性能良好的车辆提供教学，教练员是通过严格的考核，并持证上岗，属经验丰富、作风正派、有职业道德、责任心强的高级驾驶员执教。终坚持一次性收费，随到随学原则，如有特殊情况可采取上门服务，学校对行管人员及教练员有一系列之有效的管理制度。不允许对学员以任何名义摊派费用，学校对违章违纪的行为历来奉行严惩不怠的原则，力求给学员一个满意的答复。以雄厚的师资力量、优越的办学条件、成功的办学经验、科学的教学管理、一流的服务质量赢得了广大学员及各界的好评。我们欢迎有志于汽车驾驭的朋友来学校报名学习。'
        })
        break;
      case '1':
        wx.setNavigationBarTitle({
          title: '教学流程'
        });
        this.setData({
          pageTitle: '教学流程'
        })
        break;
      case '2':
        wx.setNavigationBarTitle({
          title: '报名须知'
        });
        this.setData({
          pageTitle: '报名须知',
          content:'一、满18周岁至70周岁、身高150cm(小货155cm)以上，视力不低于0.7(可矫正)辩色力正常，身体运动能力正常。二、本市学员必须携带有效身份证原件，外省市学员必须携带有效的暂住证、居住证或蓝印户口及身份证原件。三、体检合格后凭《机动车驾驶证申请表》和《机动车驾驶人身体条件证明》以及身份证到各区所在地的交警支队宣传科领取《机动车驾驶证申请表副表》后，再缴还驾校。四、原有E照、F照的加考学员须具备初领驾驶证一年以上的条件，另须携带原驾驶证复印件、原驾驶证副表(到户籍所在区、县交警支队宣传科抽取底卡)。'
        })
        break;
      case '3':
        wx.setNavigationBarTitle({
          title: '科目一'
        });
        this.setData({
          pageTitle: '科目一'
        })
        break;
      case '4':
        wx.setNavigationBarTitle({
          title: '科目二'
        });
        this.setData({
          pageTitle: '科目二'
        })
        break;
      case '5':
        wx.setNavigationBarTitle({
          title: '科目三'
        });
        this.setData({
          pageTitle: '科目三'
        })
        break;
      case '6':
        wx.setNavigationBarTitle({
          title: '科目四'
        });
        this.setData({
          pageTitle: '科目四'
        })
        break;
      default:
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
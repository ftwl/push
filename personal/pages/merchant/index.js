// personal/pages/merchant/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:[
      {
        title:"今日销售",
        price:30
      },
      {
        title:"今日订单",
        count:10
      },
      {
        title:"今日访客",
        count:20
      }
    ],
    options:[
      {
        icon:"dingdanguanli-active",
        text:"订单管理"
      },
      {
        icon:"ziyuan",
        text:"店铺设置"
      },
      {
        icon:"saomiao",
        text:"核销订单"
      },
      {
        icon:"zijin",
        text:"资金管理"
      },
      {
        icon:"guanlirenyuan",
        text:"管理人员"
      }
    ]
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
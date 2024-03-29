// pages/ensure/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:2.66,
    price:90.88,
    singleton:90.88,
    amount:1
  },

  check(e) {
    console.log(e.detail.value)
  },

  toggleCounter(e){
    const { singleton} = this.data
    const {count} = e.detail
    let price = singleton * count
    this.setData({
      price,
      amount:count
    })
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
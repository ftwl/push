// pages/personal-info/index.js
const date = new Date()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timePicker: false,
    year: date.getFullYear(),
    month:9,
    day: 7,
    value: [9999, 5, 6]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // timePickerToggle
  toggleTimePicker() {
    const { timePicker } = this.data
    this.setData({
      timePicker: !timePicker
    })
  },
  // showTimePicker
  showTimePicker() {
    this.toggleTimePicker()
  },
  // cancelTimePicker
  TimePickerCancel(){
    this.toggleTimePicker()
  },
  // sureTimePicker
  TimePickerSure(){
    this.toggleTimePicker()
  },
  // change
  TimePickerChange(e){
   this.setData({
     value:e.detail.value
   })
  },
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
// pages/publish/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    text:'',
    itemList: [
      {
        name: '1公里',
      },
      {
        name: '3公里',
      },
      {
        name: '5公里'
      }
    ],
// 年龄
    showAge:false,
    age:'',
    ageList:[
      {
        name:'23-35'
      }
    ],
// 性别
    showSex:false,
    sex:'',
    sexList:[
      {
        name:'男'
      },
      {
        name:'女'
      }
    ],
// 职业
    showJob:false,
    job:'',
    jobList:[
      {
        name:'白领'
      }
    ]
  },

  // 位置范围
  toggleActionSheet() {
    this.setData({
      show: true
    })
  },

  lincancel() {
    wx.showToast({
      title: '取消',
      icon: 'none'
    })
  },
  lintapItem(e) {
    this.setData({
      text:e.detail.item.name
    })
    wx.showToast({
      title:`您选择了${e.detail.item.name}`
    })
  },
  // age
  toggleAgeActionSheet(){
    this.setData({
      showAge:true
    })
  },
  ageCancel(){
    wx.showToast({
      title: '取消',
      icon: 'none'
    })
  },
  ageItem(e){
    this.setData({
      age: e.detail.item.name
    })
    wx.showToast({
      title: `您选择了${e.detail.item.name}`
    })
  },
  // sex
  toggleSexActionSheet(){
    this.setData({
      showSex:true
    })
  },
  sexCancel(){
    wx.showToast({
      title:'取消',
      icon:'none'
    })
  },
  sexItem(e){
    this.setData({
      sex: e.detail.item.name
    })
    wx.showToast({
      title: `您选择了${e.detail.item.name}`
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

  },
})
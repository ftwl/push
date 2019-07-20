// personal/pages/task/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    task:[{
      day:1,
      coin:10
    },{
      day:2,
      coin:20
    },{
      day:3,
      coin:30
    },{
      day:4,
      coin:40
    },{
      day:5,
      coin:50
    },{
      day:6,
      coin:60
    },{
      day:7,
      coin:70
    }],
    rules:[{
      title:"升级会员",
      coin:1000,
      desc:"单次任务,最多获得1000金币"
    },{
      title:"发红包",
      coin:100,
      desc:"每发一次红包，都可以获得金币"
    },{
      title:"分享红包",
      coin:10,
      desc:"每天最多获得30金币"
    },{
      title:"浏览商品",
      coin:10,
      desc:"浏览10秒商品页面,可以获得金币,每日1次"
    },{
      title:"分享商品",
      coin:10,
      desc:"每天最多获得50金币"
    },{
      title:"邀请好友",
      coin:100,
      desc:"每天最多获得500金币"
    },{
      title:"完善个人信息",
      coin:100,
      desc:"单次任务,最多获得100金币"
    }],
    activeIndex:2
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
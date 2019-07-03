// personal/pages/super-vip/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    is_vip: false,
    num: 56623,
    equities:[{
      icon:"huangguan1",
      title:"专属标记",
      desc:"在地图上点亮头像"
    },{
        icon:"hongbao1",
        title:"更多红包",
        desc:"红包的范围3km"
    },{
        icon:"renwu",
        title:"免任务",
        desc:"赠送积分无限抢红包"
    },{
        icon:"qiandaizi",
        title:"分享下单返现",
        desc:"最大返现100%"
    },{
        icon:"yingxiaohuodong-fanxiantuan-",
        title:"分享返现",
        desc:"好友成为商家得返现"
    },{
        icon:"gift",
        title:"福利",
        desc:"活动好处惊喜连连"
    }],
    duration:[{
      id:1,
      time:1,
      price:9.9,
      deletePrice:19.9,
      select:true
    }, {
        id:2,
        time: 3,
        price: 20,
        deletePrice: 49.9,
        select: false
    }, {
        id:3,
        time: 12,
        price: 99,
        deletePrice: 99.9,
        select: false
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // radio功能
  recharge(e){
    let that = this
    let this_selected = e.currentTarget.dataset.id
    const durationList = this.data.duration
    for(let i=0;i<durationList.length;i++){
      if(durationList[i].id == this_selected){
        durationList[i].select = true
      }else{
        durationList[i].select = false
      }
    }
    that.setData({
      duration:durationList
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
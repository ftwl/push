// pages/interest/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { id:3,name: '美食', value: '1' ,selected:false},
      { id: 6, name: '休闲娱乐', value: '2', selected:true},
      { id: 8, name: '旅行', value: '3', selected: true },
      { id: 10, name: '演出电影', value: '4', selected: false },
      { id: 12, name: '丽人', value: '5', selected: false },
      { id: 13, name: '亲子', value: '6', selected: false},
      { id: 14, name: '摄影', value: '7', selected: false},
      { id: 16, name: '书籍', value: '8', selected: false },
      { id: 17, name: '健身', value: '9', selected: false }
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  // Hobby Checked
  selectHobby(e){
    let string = "items[" + e.target.dataset.index + "].selected"
    this.setData({
      [string]: !this.data.items[e.target.dataset.index].selected
    })
    let selectedValue = this.data.items.filter(it => it.selected).map(it => it.value)
    console.log('所有选中的值为：', selectedValue)
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
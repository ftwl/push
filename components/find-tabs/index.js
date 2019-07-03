// components/find-tabs/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    index:0
  },
  /**
   * 组件的方法列表
   */
  methods: {
    changeTabbar(e){
      this.setData({
        index:e.target.dataset.id
      })
    }
  }
})

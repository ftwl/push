// components/drop-down/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots: true
  },
  properties: {
    title:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    open:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggle(){
      this.setData({
        open:!this.data.open
      })
    }
  }
})

// components/time-picker/index.js

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1; i <= 12; i++) {
  months.push(i)
}

for (let i = 1; i <= 31; i++) {
  days.push(i)
}

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    value:Array,
    years:{
      type:Array,
      value:years
    },
    months:{
      type:Array,
      value:months
    },
    days:{
      type:Array,
      value:days
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindChange: function (e) {
      const value = {value:e.detail.value}
      this.triggerEvent('TimePickerChange',value)
    },
    // cancel
    toggleTimePickerCancel() {
      let Cancel = {} 
      this.triggerEvent('TimePickerCancel', Cancel)
    },
    // sure
    toggleTimePickerSure() {
      let Sure = {}
      this.triggerEvent('TimePickerSure',Sure)
    }
  }
})

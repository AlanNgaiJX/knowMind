// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepLength: 10,
    currStep: 1
  },
  sub() {
    this.setData({
      currStep: this.data.currStep - 1
    })
  },
  add() {
    this.setData({
      currStep: this.data.currStep + 1
    })
  }
})
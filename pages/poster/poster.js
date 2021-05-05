// pages/poster/poster.js
import {
  getWxml,
  style
} from './posterTemplate.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    hasUserInfo: false,
    avatarUrl: "",
    nickName: "",
    qrcodeUrl: "https://muc0901.oss-cn-shenzhen.aliyuncs.com/customer/42/wxcode.png",
    widget: null,
    showPoster: false,
    src:""
  },

  getUserInfo() {
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        const {
          nickName,
          avatarUrl
        } = res.userInfo;
        this.setData({
          nickName,
          avatarUrl
        })

        wx.showLoading({
          title: '加载中...',
          mask: true
        })

        this.widget.renderToCanvas({
          wxml: getWxml(this.data.avatarUrl, this.data.qrcodeUrl),
          style
        }).then((res) => {
          this.setData({
            showPoster: true
          })
          wx.hideLoading()
        })
      }
    })
  },

  extraImage(){
    this.widget.canvasToTempFilePath().then(res => {
      this.setData({
        src: res.tempFilePath
      })
    })
  },

  onLoad() {
    this.widget = this.selectComponent('.widget')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

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
// pages/testResult/testResult.js
import {
  getWxml,
  style
} from './posterTemplate.js'
const TEST = require("../../config/TEST.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: "",
    result: null,
    avatarUrl: "",
    qrcodeUrl: "https://alanngai1996.xyz/store/know-mind/assets/knowMindQRcode.png",
    hideShade: false,
    shareSingleCount: 0,
  },

  extraImage() {

    wx.getSetting({
      success: (res) =>{
        if (!res.authSetting['scope.record']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success: () =>{

              wx.showLoading({
                title: '加载中',
                mask: true
              })

              const p2 = this.widget.canvasToTempFilePath()
              p2.then(res => {
                this.setData({
                  src: res.tempFilePath
                })
                wx.saveImageToPhotosAlbum({
                  filePath: res.tempFilePath,
                  success: () => {
                    wx.hideLoading()
                    wx.showToast({
                      title: '图片保存成功',
                      icon: 'none',
                      duration: 2000
                    })
                  }
                })
              })
            },
            fail() {
              wx.showToast({
                title: '保存需要先开启权限',
                icon: 'none',
                duration: 2000
              })
            }
          })
        }
      }
    })
  },

  shareSingle() {
    this.setData({
      shareSingleCount: this.data.shareSingleCount + 1
    })
    if (this.data.shareSingleCount >= 2) {
      this.setData({
        hideShade: true
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      resultType,
      avatarUrl
    } = options;

    console.log(resultType);
    console.log(avatarUrl);
    const result = TEST[0].results.find(item => item.type === resultType);

    this.setData({
      result,
      avatarUrl
    })

    this.widget = this.selectComponent('.widget');

    setTimeout(() => {
      this.widget.renderToCanvas({
        wxml: getWxml(result.img_src, avatarUrl, this.data.qrcodeUrl),
        style
      }).then((res) => {
        this.container = res
      })
    }, 5000)
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
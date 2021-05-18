// pages/testResult/testResult.js
import {
  getWxml,
  style
} from './posterTemplate.js'
const TEST = require("../../config/TEST.js");
let timer;
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
    wx.showLoading({
      title: '保存中...',
      mask: true
    })
    wx.getSetting({
      success: (res) => {
        var auth = res.authSetting
        if (auth) {
          if (auth['scope.writePhotosAlbum'] == true) {
            const p2 = this.widget.canvasToTempFilePath()
            p2.then(res => {
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: () => {
                  wx.hideLoading()
                  wx.showToast({
                    title: '图片保存成功',
                    icon: 'none',
                    duration: 2000
                  })
                },
                fail: () => {
                  wx.hideLoading()
                }
              })
            })
            return;
          }
          if (auth['scope.writePhotosAlbum'] == false) {
            wx.hideLoading()
            wx.showModal({
              title: '温馨提示',
              confirmText: '确认',
              content: '请打开相册授权哦',
              success: (res) => {
                if (res.confirm) {
                  wx.openSetting({
                    success: (res) => {
                      this.extraImage()
                    }
                  })
                }
              }
            })
          } else {
            wx.hideLoading()
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success: () => {
                console.log('kskks')
                // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                this.extraImage()
              }
            })
          }
        }

      },
      fail: () => {
        wx.hideLoading()
      }
    })
  },

  shareSingle() {
    setTimeout(() => {
      this.setData({
        shareSingleCount: this.data.shareSingleCount + 1
      })
      if (this.data.shareSingleCount >= 2) {
        this.setData({
          hideShade: true
        })
      }
    }, 1000);
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const {
      resultType,
      avatarUrl
    } = options;

    const result = TEST[0].results.find(item => item.type === resultType);

    this.setData({
      result,
      avatarUrl
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.widget = this.selectComponent('.widget');
    const {
      result,
      avatarUrl,
      qrcodeUrl
    } = this.data;
    setTimeout(() => {
      wx.showLoading({
        title: '加载中...',
        mask: true
      })
      this.widget.renderToCanvas({
        wxml: getWxml(result.img_src, avatarUrl, qrcodeUrl),
        style
      }).then((res) => {
        wx.hideLoading()
        this.container = res
      })
    }, 200)
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
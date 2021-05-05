export const getWxml = (avatar, qr) => {
  return `
  <view class="container">
    <image class="bg" src="https://muc0901.oss-cn-shenzhen.aliyuncs.com/common/wxmini/mt_share_bg.png"></image>
    <image class="avatar"  src="${avatar}"></image>
    <image class="qr" src="${qr}" ></image>
  </view>
  `
}
export const style = {
  container: {
    backgroundColor: "red",
    width: 562,
    height: 1021,
    position: "relative"
  },
  bg: {
    width: 562,
    height: 1021,
  },
  avatar: {
    width: 125,
    height: 125,
    borderRadius: 13,
    position: "absolute",
    left: 36,
    bottom: 27
  },
  qr: {
    borderRadius: 66,
    position: 'absolute',
    right: 41,
    bottom: 27,
    width: 133,
    height: 133,
  }
}
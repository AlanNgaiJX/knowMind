export const getWxml = (bg, avatar, qr) => {
  return `
  <view class="container">
    <image class="bg" src="${bg}"></image>
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
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    left: 60,
    top: 162
  },
  qr: {
    borderRadius: 20,
    position: 'absolute',
    width: 88.5,
    height: 88.5,
    left: 100.5,
    bottom: 55.5
  }
}
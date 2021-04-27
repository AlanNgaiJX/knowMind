// components/progressBar/progressBar.js
Component({
  properties: {
    value:{// 0 ~ 100
      type: Number,
      value: 0
    },
    content:{// 进度条中间显示的内容
      type: String,
      value: ''
    }
  }
})

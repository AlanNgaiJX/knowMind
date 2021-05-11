// pages/testing/testing.js
const TEST = require("../../config/TEST.js");
const {
  deepCopy
} = require("../../utils/util.js");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currStep: 1, // 当前步骤
    overStep: 1, // 已经过的步骤
    testEnd: false,
    stepLength: 0, // 总步数，未初始化为0
    scoreType: "",
    questions: [],
    disableClickNext: true,
    avatarUrl: ""
  },

  handleClickNext() {
    if (!this.data.disableClickNext) {
      this.next();
    } else {
      return false;
    }
  },

  next() {
    const step = this.data.currStep + 1;
    if (step > this.data.stepLength) {
      this.setData({
        testEnd: true
      })
      return false;
    }

    if (step > this.data.overStep) {
      this.setData({
        overStep: step,
        currStep: step
      })
    } else {
      this.setData({
        currStep: step
      })
    }

    if (this.data.currStep >= this.data.overStep) {
      this.setData({
        disableClickNext: true
      })
    } else {
      this.setData({
        disableClickNext: false
      })
    }
  },

  back() {
    this.setData({
      currStep: this.data.currStep - 1
    })

    if (this.data.currStep === this.data.overStep) {
      this.setData({
        disableClickNext: true
      })
    } else {
      this.setData({
        disableClickNext: false
      })
    }
  },

  stopTouchMove() {
    return false;
  },

  chooseAnswer(e) {
    const location = e.currentTarget.dataset.location;
    this.data.questions[location[0]].answers.forEach((answer, index) => {
      answer.selected = false;
      if (index === location[1]) {
        answer.selected = true;
      }
    })
    this.setData({
      questions: this.data.questions
    })
    this.next();
  },

  getUserInfo() {
    wx.getUserProfile({
      desc: '用于获取头像生成海报',
      success: (res) => {
        this.setData({
          avatarUrl: res.userInfo.avatarUrl
        })
        this.getResult();
      },
      fail: ()=>{
        wx.showModal({
          title: '获取结果失败了喔',
          content: '授权成功，才看到测试结果呢'
        })
      }
    })
  },

  getResult() {
    const result = this.resultCaculator();
    wx.navigateTo({
      url: `/pages/testResult/testResult?resultType=${result.type}&avatarUrl=${this.data.avatarUrl}`
    })
  },

  resultCaculator() {
    if (this.data.scoreType === "typeCountingMBTI") {
      const final_result_obj = this.data.answer_type_obj;

      // for creating an array which contains VS between types ex.["EI", "SN", "TF", "JP"]
      const _which_type_arr = this.data.questions.map((item) => {
        return item.which
      }).filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

      // get max value & type from Each VS
      let final_type = '';
      _which_type_arr.forEach(item => {
        const first_type = item[0]
        const second_type = item[1]
        const type_arr = [first_type, second_type]
        let max_val = 0
        // for split in case of odd | even questions in the same which(ex. EI/SN..)
        if (final_result_obj[first_type] !== final_result_obj[second_type]) {
          max_val = Math.max(final_result_obj[first_type], final_result_obj[second_type])
          type_arr.filter(item => final_result_obj[item] === max_val).forEach(item => final_type += item)
        } else {
          final_type += type_arr[0]
        }
      })

      // return 'THE' result TYPE from TESTS.js
      for (let i = 0; i < this.data.results.length; i++) {
        if (final_type === this.data.results[i].type) {
          return this.data.results[i]
        }
      }
    }

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const testId = options.testId;
    const currTest = deepCopy(TEST.find((item => item.id === testId)));

    // 加 selected 标记
    currTest.questions.forEach(qItem => {
      qItem.answers.forEach(item => {
        item.selected = false;
      })
    });

    // 初始化得分表
    // create answer option object for counting each question's answer
    let _answer_type_obj = {};
    for (let i = 0; i < currTest.questions.length; i++) {
      for (let j = 0; j < currTest.questions[j].answers.length; j++) {
        _answer_type_obj[currTest.questions[i].answers[j].type] = 0;
      }
    }

    this.setData({
      stepLength: currTest.questions.length,
      scoreType: currTest.info.scoreType,
      questions: currTest.questions,
      answer_type_obj: _answer_type_obj,
      results: currTest.results
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  }
})
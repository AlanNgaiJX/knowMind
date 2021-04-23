// components/stepCounter/stepCounter.js
const computedBehavior = require('miniprogram-computed').behavior;

Component({
  behaviors:[computedBehavior],
  properties: {
    stepLength:{
      type: Number,
      value: 12
    },
    currStep:{
      type: Number,
      value: 1
    }
  },
  data: {

  },
  computed:{
    progressValue(data){
      return data.currStep * 100 / data.stepLength;
    }
  }
})

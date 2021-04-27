// components/stepCounter/stepCounter.js
const computedBehavior = require('miniprogram-computed').behavior;

Component({
  behaviors: [computedBehavior],
  properties: {
    stepLength: {
      type: Number,
      value: 12
    },
    currStep: {
      type: Number,
      value: 1
    }
  },
  data: {

  },
  computed: {
    progressValue(data) {
      return data.currStep * 100 / data.stepLength;
    }
  },
  methods: {
    currStepchange(e) {
      const type = e.target.dataset.type;
      switch (type) {
        case 'sub':
          if (this.data.currStep - 1 > 0) {
            this.triggerEvent('sub')
          }
          break;

        case 'add':
          if (this.data.currStep + 1 < this.data.stepLength + 1) {
            this.triggerEvent('add');
          }
          default:
            break;
      }
    }
  }
})
const config = require("./index.js");
const sourceHost = config.sourceHost;

function range(start, stop, step) {
  if (typeof stop == 'undefined') {
      // one param defined
      stop = start;
      start = 0;
  }

  if (typeof step == 'undefined') {
      step = 1;
  }

  if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
      return [];
  }

  var result = [];
  for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
      result.push(i);
  }

  return result;
};

const Test = [
  // persoanlColor in Chinese
  {
    id:"1",
    info: {
      mainTitle: "颜色心理测试性格篇",
      subTitle: "最适合我的颜色是什么？ K测试 你的颜色是？",
      coverUrl: sourceHost + "/assets/colorTestWelcome.png",
      scoreType: "typeCountingMBTI",
      canStart: true
    },
    questions: [{
        which: "EI",
        question: '初次结识的朋友面前我是？',
        answers: [{
            type: "E",
            score: 2,
            content: '通常我先说话。'
          },
          {
            type: "I",
            score: 5,
            content: '通常对方先说话。'
          },
        ],
      },
      {
        which: "EI",
        question: "周末我会？",
        answers: [{
            type: "E",
            score: 2,
            content: "喜欢和其他人见面。"
          },
          {
            type: "I",
            score: 5,
            content: "并不介意独自度过。"
          },
        ]
      },
      {
        which: "EI",
        question: "和朋友们出行时我是？",
        answers: [{
            type: "E",
            score: 2,
            content: "喜欢喧嚣热闹的气氛。"
          },
          {
            type: "I",
            score: 5,
            content: "喜欢和少数朋友们一起聊天。"
          },
        ]
      },
      {
        which: "SN",
        question: "我认为更重要的是？",
        answers: [{
            type: "S",
            score: 2,
            content: "没有现在就意味着没有未来。"
          },
          {
            type: "N",
            score: 5,
            content: "不考虑未来的话就不会有进步。"
          },
        ]
      },
      {
        which: "SN",
        question: "工作时的我是？",
        answers: [{
            type: "S",
            score: 2,
            content: "更偏向跟随别人的脚步。"
          },
          {
            type: "N",
            score: 5,
            content: "更偏向采取自己的方式。"
          },
        ]
      },
      {
        which: "SN",
        question: "周围的人认为我是？",
        answers: [{
            type: "S",
            score: 2,
            content: "经常说我很有耐心和恒心。"
          },
          {
            type: "N",
            score: 5,
            content: "经常说我很有自己独创的思维。"
          },
        ]
      },
      {
        which: "TF",
        question: "遇到必须拒绝的情况时，我会？",
        answers: [{
            type: "T",
            score: 2,
            content: "直接了当地拒绝。"
          },
          {
            type: "F",
            score: 5,
            content: "深思熟虑后也往往会顺从。"
          },
        ]
      },
      {
        which: "TF",
        question: "我生气的时候会？",
        answers: [{
            type: "T",
            score: 2,
            content: "说得很有道理，同时也很计较。"
          },
          {
            type: "F",
            score: 5,
            content: "想说的话很多，但因为太生气，往往眼泪先流出来。"
          },
        ]
      },
      {
        which: "TF",
        question: "朋友向我诉说烦恼，我却觉得是朋友的错时，我会？",
        answers: [{
            type: "T",
            score: 2,
            content: "告诉他错的原因。"
          },
          {
            type: "F",
            score: 5,
            content: "直接了当地说的话担心朋友会伤心，所以故意绕着弯子说。"
          },
        ]
      },
      {
        which: "JP",
        question: "做准备工作时的我会？",
        answers: [{
            type: "J",
            score: 2,
            content: "提前一天做好准备。"
          },
          {
            type: "P",
            score: 5,
            content: "总想着‘明天再说明天再说’，经常忘记。"
          },
        ]
      },
      {
        which: "JP",
        question: "结束了一天的日程回家后准备学习，结果朋友们突然叫我出去玩，这时我会？",
        answers: [{
            type: "J",
            score: 2,
            content: "不在我的计划范围内…很纠结。"
          },
          {
            type: "P",
            score: 5,
            content: "OK！果然人生不会按计划走！玩起！！！"
          },
        ]
      },
      {
        which: "JP",
        question: "总体上我是？",
        answers: [{
            type: "J",
            score: 2,
            content: "按我的计划进行！更偏向按计划的顺序进行！"
          },
          {
            type: "P",
            score: 5,
            content: "想起什么就先做什么！更偏向灵活处理！"
          },
        ]
      },
    ],
    results: [{
        type: "ESTJ",
        query: "ESTJ",
        score_range: range(26),
        img_src: `${sourceHost}/resultImages/personalColorCN/ESTJ.png`
      },
      {
        type: "ESTP",
        query: "ESTP",
        score_range: range(26, 51),
        img_src: `${sourceHost}/resultImages/personalColorCN/ESTP.png`
      },
      {
        type: "ESFJ",
        desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
        query: "ESFJ",
        score_range: range(51, 75),
        img_src: `${sourceHost}/resultImages/personalColorCN/ESFJ.png`
      },
      {
        type: "ESFP",
        query: "ESFP",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColorCN/ESFP.png`
      },
      {
        type: "ENTJ",
        query: "ENTJ",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColorCN/ENTJ.png`
      },
      {
        type: "ENTP",
        query: "ENTP",
        score_range: range(26),
        img_src: `${sourceHost}/resultImages/personalColorCN/ENTP.png`
      },
      {
        type: "ENFJ",
        query: "ENFJ",
        score_range: range(26, 51),
        img_src: `${sourceHost}/resultImages/personalColorCN/ENFJ.png`
      },
      {
        type: "ENFP",
        query: "ENFP",
        score_range: range(51, 75),
        img_src: `${sourceHost}/resultImages/personalColorCN/ENFP.png`
      },
      {
        type: "ISTJ",
        query: "ISTJ",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColorCN/ISTJ.png`
      },
      {
        type: "ISTP",
        query: "ISTP",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColorCN/ISTP.png`
      },
      {
        type: "ISFJ",
        query: "ISFJ",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColorCN/ISFJ.png`
      },
      {
        type: "ISFP",
        query: "ISFP",
        score_range: range(26),
        img_src: `${sourceHost}/resultImages/personalColorCN/ISFP.png`
      },
      {
        type: "INTJ",
        query: "INTJ",
        score_range: range(26, 51),
        img_src: `${sourceHost}/resultImages/personalColorCN/INTJ.png`
      },
      {
        type: "INTP",
        query: "INTP",
        score_range: range(51, 75),
        img_src: `${sourceHost}/resultImages/personalColorCN/INTP.png`
      },
      {
        type: "INFJ",
        query: "INFJ",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColorCN/INFJ.png`
      },
      {
        type: "INFP",
        query: "INFP",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColorCN/INFP.png`
      },
    ]
  }
]

module.exports = Test;
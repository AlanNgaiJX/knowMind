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
        img_src: `${sourceHost}/resultImages/personalColor/ESTJ.png`,
        detail:[
          {
            title:"性格是？",
            list: [
              '是一个特别倔强而且很现实的人！能准确地辨别是非！',
              '不想做领导人，但每次担当领导人物时又很胜任！工作能力特别强！',
              '头脑聪慧，喜欢学习。很有眼色，善于交谈！好奇心强！',
              '指导他人的欲望也很强！你是一个表里一致的人，有事儿就当面说清楚，当面不说背后也不会说的性格！',
              '比起过程更重视结果！彻彻底底的工作狂！',
              '比起情绪化，更倾向于仔细分析情况，然后客观地判断到底谁对谁错。',
              '但是仅仅埋在心里，不会说出来！',
              '会提前做好缜密的计划和准备工作，但一点儿都不会灵活处理问题！'
            ]
          },
          {
            title:"小心点！",
            list:[
              '如果对方不胜任工作，你就会很着急而且会变得很唠叨。',
              '你认为胜任工作的人就是好人，工作效率低的人就是坏人！',
              '不会安慰人…不轻易感到寂寞，所以理解不了寂寞的人。',
              '最讨厌不守约的人、冲动的人、闪电般突然约你的人、打扰你私人时间的人。'
            ]
          },
          {
            title:"你和这类人比较合适",
            list:[
              '在工作上被表扬时你会很开心，所以喜欢懂得表扬对方的人。',
              '懂得尊重人隐私，对自己担当的工作认真。',
              '在他身上能学到很多的人！很照顾我的人！',
              '但却不要求太多回报的人。'
            ]
          }
        ]
      },
      {
        type: "ESTP",
        query: "ESTP",
        score_range: range(26, 51),
        img_src: `${sourceHost}/resultImages/personalColor/ESTP.png`
      },
      {
        type: "ESFJ",
        desc: `도비가 부러운 자유로운 영혼인, 웰시코기\n`,
        query: "ESFJ",
        score_range: range(51, 75),
        img_src: `${sourceHost}/resultImages/personalColor/ESFJ.png`
      },
      {
        type: "ESFP",
        query: "ESFP",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColor/ESFP.png`
      },
      {
        type: "ENTJ",
        query: "ENTJ",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColor/ENTJ.png`
      },
      {
        type: "ENTP",
        query: "ENTP",
        score_range: range(26),
        img_src: `${sourceHost}/resultImages/personalColor/ENTP.png`
      },
      {
        type: "ENFJ",
        query: "ENFJ",
        score_range: range(26, 51),
        img_src: `${sourceHost}/resultImages/personalColor/ENFJ.png`
      },
      {
        type: "ENFP",
        query: "ENFP",
        score_range: range(51, 75),
        img_src: `${sourceHost}/resultImages/personalColor/ENFP.png`
      },
      {
        type: "ISTJ",
        query: "ISTJ",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColor/ISTJ.png`
      },
      {
        type: "ISTP",
        query: "ISTP",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColor/ISTP.png`
      },
      {
        type: "ISFJ",
        query: "ISFJ",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColor/ISFJ.png`
      },
      {
        type: "ISFP",
        query: "ISFP",
        score_range: range(26),
        img_src: `${sourceHost}/resultImages/personalColor/ISFP.png`
      },
      {
        type: "INTJ",
        query: "INTJ",
        score_range: range(26, 51),
        img_src: `${sourceHost}/resultImages/personalColor/INTJ.png`
      },
      {
        type: "INTP",
        query: "INTP",
        score_range: range(51, 75),
        img_src: `${sourceHost}/resultImages/personalColor/INTP.png`
      },
      {
        type: "INFJ",
        query: "INFJ",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColor/INFJ.png`
      },
      {
        type: "INFP",
        query: "INFP",
        score_range: range(76, 101),
        img_src: `${sourceHost}/resultImages/personalColor/INFP.png`
      },
    ]
  }
]

module.exports = Test;
// odysseus-zh-CN 汉化发布 deck —— 由 AI workflow 生成。
// 切回 520 那套：用 cards.config.520.js 覆盖本文件。
window.CARDS_CONFIG = {
  "cards": [
    "cards/oz-01-cover.html",
    "cards/oz-02-origin.html",
    "cards/oz-03-wall.html",
    "cards/oz-04-what.html",
    "cards/oz-05-effect.html",
    "cards/oz-06-how.html",
    "cards/oz-07-who.html",
    "cards/oz-08-cta.html"
  ],
  "post": {
    "author_name": "chichu",
    "author_bio": "高三休学，在公开做点东西",
    "location": "成都",
    "title": "把那道英文墙顺手拆了",
    "body": "前阵子我装了 Odysseus —— PewDiePie 开源的那个自托管 AI 工作台，一周冲到 6 万多 star。本地优先、能接自己的模型，我挺喜欢。\n\n但打开第一眼是满屏英文。侧边栏、设置、Cookbook、记忆、技能……一个能用的功能，先得过一遍生词。我盯着那个界面发了会儿呆，心想：与其每次都在心里默默翻译，不如把这道墙拆了。\n\n于是就做了 odysseus-zh-CN，一个简体中文汉化。它不是替你改源码的那种工具，而是一个运行时覆盖层 —— 页面加载的时候，把英文界面换成中文，一共 2006 条词条。\n\n我比较在意几件事，所以一开始就定死了：\n\n不碰你的对话，也不碰 AI 的输出。它只翻界面上的固定文案，聊天记录、代码块、AI 回你的内容，整块跳过，原样不动。\n\n可以随时一键开关。存在 localStorage 里，想看回英文，一个开关的事。\n\n不改 Odysseus 的源文件。所以它更新了、你 git pull 了，汉化也不会失效（文件补丁那种装法 pull 后重跑一下脚本就回来）。\n\n没收录的词条就保持英文，只会\"部分中文\"，绝不会把界面翻坏。漏译了欢迎来提，我再补。\n\n两种装法：小白用油猴脚本 Tampermonkey，一键；想让整台机器、手机、别人电脑都中文的，用 install.py 打文件补丁，服务器端永久。MIT，公开。\n\n说实话这是我第一次给一个全球开源项目做东西、再开源回馈出去，做得不一定完美，但每一处都想\"做对\"而不是糊弄。\n\n链接放评论区了。也想问问你们 —— 用过 Odysseus 吗，是不是也曾经卡在那一屏英文上？",
    "hashtags": [
      "odysseus",
      "AI工作台",
      "开源",
      "汉化",
      "油猴脚本",
      "自托管AI",
      "PewDiePie",
      "build in public",
      "独立开发",
      "vibe coding",
      "高中生做开源",
      "开源项目",
      "AI工具"
    ],
    "stats": {
      "likes": "1.2k",
      "comments": "38",
      "collects": "203"
    }
  }
};

// odysseus-zh-CN v3 deck (AI workflow). 切回 520: 用 cards.config.520.js 覆盖本文件.
window.CARDS_CONFIG = {
  "cards": [
    "cards/oz-01-cover.html",
    "cards/oz-02-trio.html",
    "cards/oz-03-what.html",
    "cards/oz-04-allinone.html",
    "cards/oz-05-cookbook.html",
    "cards/oz-06-wall.html",
    "cards/oz-07-patch.html",
    "cards/oz-08-deploy.html",
    "cards/oz-09-who.html",
    "cards/oz-10-cta.html"
  ],
  "post": {
    "author_name": "chichu",
    "author_bio": "高三休学，在公开做点东西",
    "location": "成都",
    "title": "邮件日历待办，都在一个本地app里",
    "body": "说个最近让我有点上头的开源项目：Odysseus。\n\n可能你没听过，但它一周拿了 5.6 万多 star，作者是 PewDiePie——对，那个 YouTube 订阅数曾经全球第一的人。放在 2026 这个开源 AI 年看，坐标很清楚：OpenClaw 4 天冲到 34.5 万 star 但安全翻车，Hermes Agent 10 周 11 万 star，然后是它，一周 5.6 万。\n\n它到底是什么？一个跑在你自己电脑上的 AI 工作台。但真正打动我的不是\"本地\"这种词，是它顺手。\n\n聊天、邮件、日历、笔记、待办，全塞进一个 app 里了。邮件走 IMAP/SMTP，能自动分拣、摘要、起草回复、挡垃圾邮件；日历走 CalDAV，能同步 Apple、Nextcloud、Fastmail。更妙的是 AI 能跨着这些应用干活——让它出一份调研报告，它能顺手把里面的待办、日历事件、提醒都给你建好。不用在邮箱、日历、ChatGPT 之间反复横跳了。\n\n还有个被好几家媒体叫\"杀手锏\"的功能 Cookbook：它扫一遍你的硬件，打个兼容分，从 270 多个开源模型里挑出你这台电脑能跑的，一键下载。解决的就是\"我根本不知道我电脑能跑什么模型\"这个头疼。\n\n老实说也不是没缺点。本地模型挺挑硬件，有人跑大模型把电脑搞崩过，想稳一点接个 API 更省心。但全家桶顺手 + Cookbook 帮你挑模型，这两点是真好用。\n\n唯一劝退的是全英文。所以我做了个简体中文汉化，2006 条词条，运行时覆盖、不改源文件、不碰对话和 AI 输出的内容，一键开关，odysseus 更新了也不会失效。油猴一键加载，或者 install.py 装成永久的。\n\n我没什么来头，就是个在公开做东西的人，第一次给全球的开源项目做点回馈，MIT 协议开源。\n\n你电脑里现在有几个 app 在管邮件、日历、待办？要是能收进一个，会想试试吗？链接放评论区了。",
    "hashtags": [
      "odysseus",
      "AI工作台",
      "自托管AI",
      "开源",
      "汉化",
      "PewDiePie",
      "效率工具",
      "一站式"
    ],
    "stats": {
      "likes": "2.8k",
      "comments": "91",
      "collects": "512"
    }
  }
};

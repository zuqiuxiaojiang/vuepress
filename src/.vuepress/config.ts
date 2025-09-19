import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/vuepress/",

  lang: "zh-CN",
  title: "勝利的凱歌",
  description: "榮光的軌跡",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});

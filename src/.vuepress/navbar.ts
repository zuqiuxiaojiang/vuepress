/*
import { navbar } from "@vuepress/theme-default";
export const navbar = [




];
*/
//以上为默认主题导航栏的设置代码
import { navbar } from "vuepress-theme-hope";
export default navbar([
  "/",
  "/portfolio",
  "/intro",
  {
    text: '🚏🚶⛩️🏃',
    icon: "signs-post",
    children: [
      {
        text: '…我…',
        link: '/我/',
      },
      {
        text: '应知应会',
        link: '/工作/',
      },
    ],
  },
/*
  {
    text: "VuePress与Hope主题",
    icon: "lightbulb",
    link: "/",
    children: [
      "demo/",
      "portfolio",
      "intro",
      {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
      },
      {
        text: "文档",
        icon: "book",
        link: "guide/",
      },
      {
        text: "博客",
        icon: "blog",
        link: "posts/",
      },
    ],
  },
*/
]);

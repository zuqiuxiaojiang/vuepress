/*
import { sidebar } from "@vuepress/theme-default";
export const sidebar = {




};
*/
//以上为默认主题侧边栏的设置代码
import { sidebar } from "vuepress-theme-hope";
export default sidebar({
  "/": [
    "",
    "portfolio",
    "intro",
    {
      text: "我",
      icon: "book",
      prefix: "我/",
      children: "structure",
    },
    {
      text: "应知应会",
      icon: "book",
      prefix: "工作/",
      children: "structure",
    },
/*
    {
      text: '應知應會',
      prefix: "工作/",
      collapsible: true,
      children: [
        {
          text: "事故隐患判定标准",
          prefix: "事故隐患判定标准/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "应急处置流程",
          prefix: "应急处置流程/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "安全生产责任制",
          prefix: "安全生产责任制/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "安全操作规程",
          prefix: "安全操作规程/",
          collapsible: true,
          children: "structure",
        },
        {
          text: "未分类",
          prefix: "未分类/",
          collapsible: true,
          children: [
            "安全生产禁令⑪条",
            "岗位危险辨识_图片版",
            "岗位危险辨识_文字版",
            "离心机故障代码_图片版",
            "离心机故障代码_文字版",
          ],
        },
        {
          text: "外部链接",
          collapsible: true,
          children: [
            { text: "数字国投APP", link: "https://newapp.sdic.com.cn" },
            { text: "国投生物网络考试系统", link: "http://exam.gtswims.com" },
            { text: "各类题库", link: "https://sdic.pages.dev/tk/" },
          ],
        },
      ],
    },

    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
    {
      text: "文档",
      icon: "book",
      prefix: "guide/",
      children: "structure",
    },
    {
      text: "博客",
      icon: "blog",
      prefix: "posts/",
      children: "structure",
    },
*/
  ],
});

/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2025-02-17 10:32:38
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2025-02-17 11:05:13
 * @FilePath: \vitepress-theme-sakurairo\src\config\sakurairo.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
import { ThemeConfig } from "../types";

export const defaultCOnfig: ThemeConfig = {
  nav: {
    style: "sakura",
    items: [],
  },
  hero: {
    urls: [],
    title: "",
    description: "",
    typed: {
      strings: [],
    },
    socialLinks: [],
    wave: {
      enable: false,
    },
  },
  noticeBoard: {
    enable: true,
    background: {
      src() {
        return "";
      },
    },
    text: {
      content: "",
      align: "left",
      color: "",
    },
  },
  displayBoard: {
    enable: true,
    icon: "",
    title: "Display",
    urls: ["", "", ""],
    items: [
      {
        title: "Display 1",
        description: "Tt is display 1",
        link: "",
      },
      {
        title: "Display 2",
        description: "Tt is display 2",
        link: "",
      },
      {
        title: "Display 3",
        description: "Tt is display 3",
        link: "",
      },
    ],
  },
  articleBoard: {
    title: "Article",
    icon: "",
    layout: "interlaced",
  },
};

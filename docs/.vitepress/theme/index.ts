/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-10 20:17:09
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2025-02-17 14:18:27
 * @FilePath: \vitepress-theme-sakurairo\docs\.vitepress\theme\index.ts
 */
import { Awaitable, EnhanceAppContext, Theme } from "vitepress";
import { Layout, initTheme } from "../../../src";

const themeConfig: Theme = {
  Layout,
  enhanceApp: (ctx: EnhanceAppContext): Awaitable<void> => {
    initTheme(ctx);
  },
  extends: undefined,
};

export default themeConfig;

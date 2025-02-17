/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-05-17 16:18:51
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-05-17 16:19:41
 * @FilePath: /vitepress-theme-sakurairo/src/utils/todo.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */

import { createPinia } from "pinia";
import { type EnhanceAppContext } from "vitepress";

function alertMessage(msg: string) {
  window.alert(msg);
}

function initTheme(ctx: EnhanceAppContext) {
  const pinia = createPinia();
  ctx.app.use(pinia);
}

export { alertMessage, initTheme };

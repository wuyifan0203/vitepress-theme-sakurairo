/* eslint-disable @typescript-eslint/no-empty-object-type */
/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-20 13:05:44
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2025-02-17 10:20:39
 * @FilePath: \vitepress-theme-sakurairo\src\env.d.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare module "@waline/client/component" {
  import type { DefineComponent } from "vue";
  const Waline: DefineComponent<{}, {}, any>;
  export { Waline };
}

interface ImportMeta {
  readonly hot?: {
    accept: (callback: (mod: any) => void) => void;
    dispose: (callback: () => void) => void;
    // 其他可能的属性
  };
}

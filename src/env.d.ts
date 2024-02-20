/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-20 13:05:44
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-20 14:30:19
 * @FilePath: /vitepress-theme-sakurairo/src/env.d.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
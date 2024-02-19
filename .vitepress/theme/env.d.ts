/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-19 13:31:29
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-19 13:31:48
 * @FilePath: /vitepress-theme-sakurairo/.vitepress/theme/env.d.ts
 * Copyright (c) 2024 by ${git_name} email: ${git_email}, All Rights Reserved.
 */
declare module "*.vue" {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}
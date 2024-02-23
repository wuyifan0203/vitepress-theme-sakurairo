/*
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-22 14:48:29
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-23 14:17:14
 * @FilePath: /vitepress-theme-sakurairo/src/plugin/index.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */
import { useNProgress } from './nprogress'

function installThemePlugin() {
    useNProgress();
}

export { installThemePlugin }
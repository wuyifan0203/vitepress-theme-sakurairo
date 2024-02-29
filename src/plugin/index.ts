/*
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-22 14:48:29
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-01 01:52:21
 * @FilePath: /vitepress-theme-sakurairo/src/plugin/index.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */
import { useNProgress } from './nprogress';
import { useYiYan } from './yiyan';

function installThemePlugin() {
    useNProgress();
    useYiYan()
}

export { installThemePlugin }
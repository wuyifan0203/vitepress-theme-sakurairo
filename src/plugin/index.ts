/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-01 09:36:28
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-01 10:07:41
 * @FilePath: /vitepress-theme-sakurairo/src/plugin/index.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
import { useNProgress } from './nprogress';
import { useYiYan } from './yiyan';

function installThemePlugin() {
    useNProgress();
    useYiYan()
}

export { installThemePlugin }
/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:17:09
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-22 14:51:53
 * @FilePath: /vitepress-theme-sakurairo/docs/.vitepress/theme/index.ts
 */
import { Awaitable, EnhanceAppContext, Theme } from 'vitepress';
import { Layout, installThemePlugin } from '../../../src';


const themeConfig: Theme = {
    Layout,
    enhanceApp: (ctx: EnhanceAppContext): Awaitable<void> => {
        installThemePlugin(ctx);
    },
    extends: undefined
};

export default themeConfig;
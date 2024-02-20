/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:17:09
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-20 18:10:34
 * @FilePath: /vitepress-theme-sakurairo/docs/.vitepress/theme/index.ts
 */
import { Awaitable, EnhanceAppContext, Theme } from 'vitepress';
import { Layout } from '../../../src';


const themeConfig: Theme = {
    Layout,
    enhanceApp: (ctx: EnhanceAppContext): Awaitable<void> => {
    },
    extends: undefined
};

export default themeConfig;
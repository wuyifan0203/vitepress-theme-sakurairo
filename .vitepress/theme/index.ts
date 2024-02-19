/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:17:09
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-19 13:21:22
 * @FilePath: /vitepress-theme-sakurairo/.vitepress/theme/index.ts
 */
import { Awaitable, EnhanceAppContext, Theme } from 'vitepress';
import Layout from './index.vue';
import './style/variable.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';

const themeConfig: Theme = {
    Layout,
    enhanceApp: (ctx: EnhanceAppContext): Awaitable<void> => {

    },
    extends: undefined
};

export default themeConfig;
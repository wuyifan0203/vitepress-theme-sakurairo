/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:17:09
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-18 13:31:47
 * @FilePath: /vuepress-interview/.vitepress/theme/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
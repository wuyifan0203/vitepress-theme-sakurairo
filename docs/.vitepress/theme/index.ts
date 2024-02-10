/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:17:09
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-10 20:26:56
 * @FilePath: /vuepress-interview/docs/theme/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Awaitable, EnhanceAppContext, Theme } from 'vitepress';
import Layout from './layout/Layout.vue';

const themeConfig:Theme = {
    Layout,
    enhanceApp:(ctx:EnhanceAppContext):Awaitable<void>=>{

    },
    extends:undefined
};

export default themeConfig;
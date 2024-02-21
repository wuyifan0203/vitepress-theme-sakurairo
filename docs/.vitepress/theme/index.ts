/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:17:09
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-21 16:40:58
 * @FilePath: /vitepress-theme-sakurairo/docs/.vitepress/theme/index.ts
 */
import { Awaitable, EnhanceAppContext, Theme } from 'vitepress';
import { Layout } from '../../../src';


const themeConfig: Theme = {
    Layout,
    enhanceApp: (ctx: EnhanceAppContext): Awaitable<void> => {

        const { app, router } = ctx;

        const cacheOnBeforeRouteChange =  router.onBeforeRouteChange;

        router.onBeforeRouteChange = (to)=>{
            console.log('onBeforeRouteChange',to);
            cacheOnBeforeRouteChange && cacheOnBeforeRouteChange(to);
        }
        

        console.log(app,router);
        

    },
    extends: undefined
};

export default themeConfig;
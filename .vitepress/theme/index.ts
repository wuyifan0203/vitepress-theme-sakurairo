/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:17:09
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-15 14:27:11
 * @FilePath: /vuepress-interview/docs/theme/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Awaitable, EnhanceAppContext, Theme } from 'vitepress';
import Layout from './index.vue';
import './style/variable.scss';
import nprogress from 'nprogress';

const themeConfig: Theme = {
    Layout,
    enhanceApp: (ctx: EnhanceAppContext): Awaitable<void> => {
        const { router } = ctx
        setTimeout(() => {
            nprogress.configure({ showSpinner: false });


            const cacheBeforeRouteChange = router.onBeforeRouteChange
            const cacheAfterRouteChange = router.onAfterRouteChanged
            router.onBeforeRouteChange = (to) => {                
                nprogress.start();
                cacheBeforeRouteChange?.(to)
            }
            router.onAfterRouteChanged = (to) => {
                nprogress.done();
                cacheAfterRouteChange?.(to)
            }
        })


    },
    extends: undefined
};

export default themeConfig;
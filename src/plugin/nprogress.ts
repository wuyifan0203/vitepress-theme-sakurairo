/*
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-22 14:18:38
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-22 15:32:35
 * @FilePath: /vitepress-theme-sakurairo/src/plugin/nprogress.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */
import type { EnhanceAppContext } from "vitepress";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

export function useNProgress(ctx: EnhanceAppContext) {
    if (typeof window === 'undefined') return;

    const { router } = ctx;

    setTimeout(() => {
        nprogress.configure({ showSpinner: false });
        const cacheOnBeforeRouteChange = router.onBeforeRouteChange;
        const cacheAfterRouteChange = router.onAfterRouteChanged

        router.onBeforeRouteChange = (to) => {
            nprogress.start();
            cacheOnBeforeRouteChange && cacheOnBeforeRouteChange(to);
        }

        router.onAfterRouteChanged = (to) => {
            nprogress.done();
            cacheAfterRouteChange && cacheAfterRouteChange(to);
        }
    })

}

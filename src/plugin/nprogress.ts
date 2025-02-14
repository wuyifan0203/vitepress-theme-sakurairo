/* eslint-disable @typescript-eslint/no-unused-expressions */
/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-26 15:58:44
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-01 10:01:59
 * @FilePath: /vitepress-theme-sakurairo/src/plugin/nprogress.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */

import { useRouter } from 'vitepress'
import nprogress from "nprogress";
import "nprogress/nprogress.css";

export function useNProgress() {
    if (typeof window === 'undefined') return;

    const router = useRouter();

    nprogress.configure({ showSpinner: false });
    const cacheOnBeforeRouteChange = router.onBeforeRouteChange;
    const cacheAfterRouteChange = router.onAfterRouteChange 

    router.onBeforeRouteChange = (to) => {
        nprogress.start();
        cacheOnBeforeRouteChange && cacheOnBeforeRouteChange(to);
    }

    router.onAfterRouteChange  = (to) => {
        nprogress.done();
        cacheAfterRouteChange && cacheAfterRouteChange(to);
    }

}

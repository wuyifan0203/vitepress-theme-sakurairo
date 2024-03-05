/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-05 15:49:00
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-05 16:03:15
 * @FilePath: /vitepress-theme-sakurairo/src/composables/useRouter.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
import { useRouter } from 'vitepress'

function useBeforeRouterChange(callback: Function) {
    const router = useRouter();
    const callbackList: Array<Function> = [];

    const cacheBeforeChange = router.onBeforeRouteChange;
    router.onBeforeRouteChange = async (to: string) => {
        for (const func of callbackList) {
            await func(to);
        }

        console.log(callbackList);
        
        cacheBeforeChange && cacheBeforeChange(to);
    }

    return ((callback) => {
        callbackList.push(callback)
    })(callback)
}

export { useBeforeRouterChange }
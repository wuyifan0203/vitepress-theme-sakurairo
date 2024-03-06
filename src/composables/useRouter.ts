/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-05 15:49:00
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-06 18:05:13
 * @FilePath: /vitepress-theme-sakurairo/src/composables/useRouter.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
import { useRouter } from 'vitepress';

const callbackMap: { [key: string]: Function } = {};
let useBeforeRouterChange = (callback: Function) => {
    if (Object.keys(callbackMap).length === 0) {
        const router = useRouter();
        const cacheBeforeChange = router.onBeforeRouteChange;
        router.onBeforeRouteChange = async (to: string) => {
            for (const key in callbackMap) {
                await callbackMap[key](to);
            }
            cacheBeforeChange && cacheBeforeChange(to);
        }
    }
    // 不用数组因为没法去重
    callbackMap[callback.toString()] = callback;

    console.log(callbackMap,'callbackMap');
    
}

export { useBeforeRouterChange }

// 另一种写法，

// const a = {
//     useBeforeRouterChange(callback: Function) {
//         const router = useRouter();
//         const cacheBeforeChange = router.onBeforeRouteChange;
//         router.onBeforeRouteChange = async (to: string) => {
//             for (const func of callbackList) {
//                 await func(to);
//             }
//             cacheBeforeChange && cacheBeforeChange(to);
//         }
//         const fn = (callback: Function) => {
//             callbackList.push(callback);
//         };
//         fn(callback);
//         this.useBeforeRouterChange = fn;
//     }
// }

// export { a }

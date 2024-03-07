/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-05 15:49:00
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-08 00:35:50
 * @FilePath: /vuepress-interview/src/composables/useRouter.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
import { useRouter } from 'vitepress';

const beforeCallbackMap: { [key: string]: Function } = {};
const useBeforeRouterChange = (callback: Function) => {
    if (Object.keys(beforeCallbackMap).length === 0) {
        const router = useRouter();
        const cacheBeforeChange = router.onBeforeRouteChange;
        router.onBeforeRouteChange = async (to: string) => {
            for (const key in beforeCallbackMap) {
                await beforeCallbackMap[key](to);
            }
            cacheBeforeChange && cacheBeforeChange(to);
        }
    }
    // 不用数组因为没法去重
    beforeCallbackMap[callback.toString()] = callback;

    console.log(beforeCallbackMap, 'callbackMap');

}

const afterCallbackMap: { [key: string]: Function } = {};
const useAfterRouterChange = (callback: Function) => {
    if (Object.keys(afterCallbackMap).length === 0) {
        const router = useRouter();
        const cacheAfterChange = router.onAfterRouteChanged;
        router.onAfterRouteChanged = async (to: string) => {
            for (const key in afterCallbackMap) {
                await afterCallbackMap[key](to);
            }
            cacheAfterChange && cacheAfterChange(to);
        }
    }
    // 不用数组因为没法去重
    afterCallbackMap[callback.toString()] = callback;
}



export { useBeforeRouterChange, useAfterRouterChange }

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

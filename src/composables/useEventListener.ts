/*
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-23 13:58:54
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-23 14:36:55
 * @FilePath: /vitepress-theme-sakurairo/src/composables/useEventListener.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */

import { onMounted, onUnmounted } from "vue";


export function useEventListener(event: keyof WindowEventMap, callback: () => any, element: Window | Document = window) {
    onMounted(() => {
        element.addEventListener(event, callback);
    });

    onUnmounted(() => {
        element.removeEventListener(event, callback);
    })
}
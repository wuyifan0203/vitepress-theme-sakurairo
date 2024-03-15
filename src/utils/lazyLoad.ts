/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-14 15:59:38
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-15 13:39:48
 * @FilePath: /vitepress-theme-sakurairo/src/utils/lazyLoad.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */

import type { App, Ref } from "vue"
import { ImageLoader, State } from "./ImageLoader";

function lazy(options: { loading: string, error?: string }) {
    const managerQueue: ImageLoader[] = [];

    const cache = new Set<string>();

    const callback: IntersectionObserverCallback = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const manager = managerQueue.find((manager) => {
                    return manager.el === entry.target
                })
                // console.log(manager, 'manager');

                if (manager) {
                    if (manager.state === State.LOADED) {
                        removeManager(manager)
                        return
                    }
                    manager.load()
                }
            }
        })
    }

    const observer = new IntersectionObserver(callback, {
        rootMargin: '0px',
        threshold: 0
    })

    function removeManager(manager: ImageLoader) {
        const index = managerQueue.indexOf(manager)
        if (index > -1) {
            managerQueue.splice(index, 1)
        }
        if (observer) {
            observer.unobserve(manager.el)
        }
    }

    function add(el: HTMLImageElement, binding: Ref<string>) {
        // console.log(el, binding, 'add');

        const src = binding.value;
        const manager = new ImageLoader({
            el,
            src,
            loading: options.loading,
            error: options.error,
            cache
        });

        managerQueue.push(manager);
        observer.observe(el);
    }

    function remove(el: HTMLImageElement) {
        // console.log(el, 'remove');
        const manager = managerQueue.find((manager) => {
            return manager.el === el
        })
        manager && removeManager(manager)
    }

    function update(el: HTMLImageElement, binding: Ref<string>) {
        // console.log(el, binding, 'update');
        const src = binding.value;
        const manager = managerQueue.find((manager) => {
            return manager.el === el
        })
        manager && manager.update(src)
    }

    return {
        managerQueue,
        remove,
        add,
        update
    }


}

const lazyLoad = {
    install(app: App, options: { loading: string, error?: string }) {

        const lazyInstance = lazy(options);

        app.directive('lazy', {
            mounted: lazyInstance.add.bind(lazyInstance),
            unmounted: lazyInstance.remove.bind(lazyInstance),
            updated: lazyInstance.update.bind(lazyInstance)
        })
    },
}

export default lazyLoad;
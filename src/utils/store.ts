/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-03-09 23:10:25
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-05-17 16:26:23
 * @FilePath: /vitepress-theme-sakurairo/src/utils/store.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
// 全局变量存储
import { reactive } from 'vue';

function createStore(options: {
    state: () => Object,
    actions: any

}) {
    const state = reactive(options.state());
    const actions = options.actions;

    // 将 actions 绑定到 state 上
    for (const key in actions) {
        actions[key] = actions[key].bind(state);
    }

    return { state, ...actions };
}

function createStoreInstance() {
    const stores: { [key: string]: any } = {};

    function store(id: string, storeCreator:any) {
        if (!stores[id]) {
            stores[id] = storeCreator;
        }

        return stores[id];
    }

    function useStore(id: string) {
        return stores[id];
    }

    return { store, useStore };
}

const { store, useStore } = createStoreInstance()


export { createStore, store, useStore }
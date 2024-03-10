/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-03-10 18:25:28
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-10 19:01:15
 * @FilePath: /vuepress-interview/src/store/global.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
import { DefaultPageFormatter } from "../types";
import { createStore } from "../utils";


const globalStore = createStore({
    state() {
        return {
            count: 0,
            name: 'Vue',
            data: null,
        }
    },
    actions: {
        addCount() {
            console.log(this);
            this.count++;
        },
        setData(data: DefaultPageFormatter[]) {
            this.data = data;
        },
        getData(){
            return this.data;
        }
    }
});

export { globalStore }
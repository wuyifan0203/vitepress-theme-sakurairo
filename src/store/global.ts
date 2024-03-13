/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-03-10 18:25:28
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-13 16:25:42
 * @FilePath: /vitepress-theme-sakurairo/src/store/global.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
import { withBase } from "vitepress";
import { getCommentsCount, getPageViews } from "../api";
import { DefaultPageFormatter } from "../types";
import { createStore } from "../utils";


const globalStore = createStore({
    state() {
        return {
            data: null,
        }
    },
    actions: {
        setData(data: DefaultPageFormatter[]) {
            this.data = data;
        },
        getData() { 
            return this.data;
        },
        async getTotalPageViews(serverURL:string){
            const data = this.data;
            const urls: string[] = [];
            const index:number[] = []
            for (let j = 0, k = data.length; j < k; j++) {
                const current = data[j];
                if (current.layout === 'page') {
                    urls.push(withBase(current.url) )
                    index.push(j)
                }
            }

            try {
                const pageViewsRes = await getPageViews(serverURL,urls) as Array<{time:number}>;
                const commentsRes = await getCommentsCount(serverURL,urls)
                
                pageViewsRes.forEach((info:{time:number},i)=>{
                    this.data[index[i]]['pageViews'] = info.time;
                    this.data[index[i]]['commentsCount'] = commentsRes[i];
                })
            } catch (error) {
                console.log(error,'获取total文章评论失败');
            }
        }
    }
});

export { globalStore }
/*
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-23 17:24:09
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-25 02:38:12
 * @FilePath: /vitepress-theme-sakurairo/src/posts.data.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */

import { createContentLoader } from 'vitepress';
import type { SiteConfig } from 'vitepress';

const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG;

console.log('config',config);

export interface Post {
    title: string;
    url: string;
    github: string;
    date: {
        time: number;
        string: string;
    };
    excerpt: string | undefined;
}

declare const data: Post[];
export { data };


export default createContentLoader('posts/**/**.md', {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(raw) {
        console.log('raw',raw);
        if(!(config.site.base === '/' || config.site.base === './'|| config.site.base === '')){
            raw.url = config.site.base + raw.url
        }
        return raw
    },

})
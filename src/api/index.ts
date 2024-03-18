/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-08 14:11:43
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-18 09:44:19
 * @FilePath: /vitepress-theme-sakurairo/src/api/index.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */

import { Axios } from '../utils/request';

const getCommentsCount = async (serverUrl: string, paths: string[]) => {
    serverUrl = `${serverUrl.replace(/\/?$/, '/')}api/comment`;
    return await Axios.get(serverUrl, {
        type: 'count',
        url: paths,
        lang: 'zh-CN'
    }).then((res: any) => {
        res = JSON.parse(res);
        if (typeof res === 'object' && res.errno) {
            throw new TypeError(`Get pageViews count failed with ${res.errno}: ${res.errmsg}`);
        }
        return res.data;
    })
}

const getPageViews = async (serverUrl: string, paths: string[]) => {
    serverUrl = `${serverUrl.replace(/\/?$/, '/')}api/article`;
    return await Axios.get(serverUrl, {
        path: paths,
        type: ['time'],
        lang: 'zh-CN'
    }).then((res: any) => {
        res = JSON.parse(res);
        if (typeof res === 'object' && res.errno) {
            throw new TypeError(`Get pageViews count failed with ${res.errno}: ${res.errmsg}`);
        }
        return res.data;
    })
}

export { getPageViews, getCommentsCount } 

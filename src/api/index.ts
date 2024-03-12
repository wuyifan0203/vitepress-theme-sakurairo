/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-08 14:11:43
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-13 01:16:07
 * @FilePath: /vitepress-theme-sakurairo/src/api/index.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */


const fetchApi = (function () {

    let instance: null | any = null;

    const get = (url: string) => {
        return fetch(url)
            .then(res => res.json())
    };

    function init(serverURL = '') {
        const serverPath = `${serverURL.replace(/\/?$/, '/')}api/`;

        async function getPageViews(paths: string[], types = ['time'], lang = 'zh-CN') {
            const url = `${serverPath}article?path=${encodeURIComponent(paths.join(','))}&type=${encodeURIComponent(types.join(','))}&lang=${lang}`
            return await get(url).then((data) => {
                if (typeof data === 'object' && data.errno) {
                    throw new TypeError(`Get pageViews count failed with ${data.errno}: ${data.errmsg}`);
                }
                return data;
            });;
        }

        async function getCommentsCount(paths: string[], lang = 'zh-CN') {
            const url = `${serverPath}comment?type=count&url=${encodeURIComponent(paths.join(','))}&lang=${lang}`;
            return await get(url).then((data) => {
                if (typeof data === 'object' && data.errno) {
                    throw new TypeError(`Get comment count failed with ${data.errno}: ${data.errmsg}`);
                }
                return data;
            });
        }

        async function getImage(url:string){
            console.log(url);
            
            return await get(url).then((res)=>{
                console.log(res);
                
                return res.blob()
            }).then((blob)=>{
                console.log(blob);
                
                return URL.createObjectURL(blob)
            })
        }

        return {
            getPageViews,
            getCommentsCount,
            getImage
        }

    }

    return {
        getInstance(serverURL: string) {
            if (!instance) {
                instance = init(serverURL);
            }
            return instance;
        }
    }
})()

export { fetchApi } 
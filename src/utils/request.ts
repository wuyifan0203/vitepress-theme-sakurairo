/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-13 10:51:30
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-13 16:27:00
 * @FilePath: /vitepress-theme-sakurairo/src/utils/request.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
class Axios {
    static get(url: string, data: { [key: string]: any }, config?: {
        headers?: { [key: string]: string },
    }) {
        url = JSON.stringify(data) === '{}' ? url : `${url}?${buildQueryString(data)}`;
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url);

            // 设置请求头
            if (config?.headers) {
                Object.entries(config.headers).forEach(([key, value]) => {
                    xhr.setRequestHeader(key, value);
                });
            }

            // 监听请求完成
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(new Error(`Request failed with status ${xhr.status}`));
                }
            };

            // 监听网络错误
            xhr.onerror = function () {
                reject(new Error('Network error'));
            };

            // 发送请求
            xhr.send();
        });
    }

    static post(url: string, data: { [key: string]: string }, config?: {
        headers?: { [key: string]: string },
    }) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', url);

            // 设置请求头
            if (config?.headers) {
                Object.entries(config.headers).forEach(([key, value]) => {
                    xhr.setRequestHeader(key, value);
                });
            }

            // 监听请求完成
            xhr.onload = function () {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject(new Error(`Request failed with status ${xhr.status}`));
                }
            };

            // 监听网络错误
            xhr.onerror = function () {
                reject(new Error('Network error'));
            };

            // 发送请求
            xhr.send(JSON.stringify(data));
        });
    }
}

function buildQueryString(params: { [key: string]: any }) {
    const queryParams = [];
    for (const key in params) {
        if (params.hasOwnProperty(key)) {
            const value = encodeURIComponent(Array.isArray(params[key]) ? params[key].join(',') : params[key]);
            queryParams.push(`${key}=${value}`);
        }
    }

    return queryParams.join('&');
}

export { Axios }
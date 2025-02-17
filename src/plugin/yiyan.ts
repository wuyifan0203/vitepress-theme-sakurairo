/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-01 09:36:28
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2025-02-17 11:40:43
 * @FilePath: \vitepress-theme-sakurairo\src\plugin\yiyan.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
import { useRouter } from 'vitepress';
const apis = [
    "https://v1.hitokoto.cn/",
    "https://api.nmxc.ltd/yiyan/",
    "https://api.maho.cc/yiyan/"
];

let dom: null | HTMLElement = null;

function useYiYan() {
    dom = dom || document.querySelector('#yiyan');

    const router = useRouter();
    const cacheAfterRouteChange = router.onAfterRouteChange;

    if (dom) {
        updateYiYan(dom);
    } else {
        console.log('cannot find #yiyan domElement when init!');
    }

    router.onAfterRouteChange  = async (to) => {
        if (dom) {
            updateYiYan(dom);
        } else {
            console.log('cannot find #yiyan domElement');
        }

        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        cacheAfterRouteChange && cacheAfterRouteChange(to);
    }
}

async function request(api: string) {
    const res = await fetch(api, { headers: { Accept: "application/json" } });
    if (res.ok) {
        const data = await res.json();
        const from_who = (data.from_who == 'null' ? null : data.from_who) || '';
        const from = data.from != data.from_who ? `「${data['from']}」` : '';
        const hitokoto = data.hitokoto;
        return hitokoto + '——' + from_who + from;
    } else {
        throw res.status;
    }
}

async function updateYiYan(dom: HTMLElement) {
    for (const apiPath of apis) {
        try {
            const txt = await request(apiPath);
            dom.innerText = txt;
            break;
        }
        catch (e) {
            console.warn(`一言API: 尝试联系"${apiPath}"时出错。 `, e);
            continue;
        }
    }
}

export { useYiYan }
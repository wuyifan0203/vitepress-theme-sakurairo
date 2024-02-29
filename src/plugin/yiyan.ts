import { useRouter } from 'vitepress';

function useYiYan() {
    let dom: null | HTMLElement = null;


    return (() => {
        dom = dom || document.querySelector('#yiyan');

        const router = useRouter();
        const cacheAfterRouteChange = router.onAfterRouteChanged;

        if(dom){
            updateYiYan(dom);
        }else{
            console.log('cannot find #yiyan domElemnt when init!');
        }

        router.onAfterRouteChanged = async (to) => {
            if (dom) {
                updateYiYan(dom);
            } else {
                console.log('cannot find #yiyan domElemnt');
            }

            cacheAfterRouteChange && cacheAfterRouteChange(to);
        }
    })()
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

function updateYiYan(dom: HTMLElement) {
    const apis = [
        "https://v1.hitokoto.cn/",
        "https://api.nmxc.ltd/yiyan/",
        "https://api.maho.cc/yiyan/"
    ]
    return (async (dom) => {
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
    })(dom)
}

export { useYiYan }
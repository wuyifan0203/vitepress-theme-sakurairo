
import { useRouter, useData } from 'vitepress'
export function proxyRouter() {
    const router = useRouter();
    const { site } = useData();
    const base = site.value.base;

    const cacheGo = router.go;
    console.log(base);
    router.go = (href = inBrowser ? location.href : '/') => {
        href = base + href;
        console.log(href);
        
        cacheGo(href)
    }

}
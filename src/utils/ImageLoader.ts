/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-14 16:03:47
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-14 18:02:39
 * @FilePath: /vitepress-theme-sakurairo/src/utils/ImageLoader.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */

enum State {
    PENDING = 0,
    LOADED = 1,
    ERROR = 2
}

class ImageLoader {
    el: HTMLImageElement;
    src: string;
    loading: string;
    error: string | undefined;
    state: State;
    cache: Set<string>;
    constructor(options: {
        el: HTMLImageElement, src: string, loading: string, cache: Set<string>, error?: string
    }) {
        this.el = options.el;
        this.src = options.src;
        this.loading = options.loading;
        this.error = options.error ?? '';
        this.cache = options.cache;
        this.state = State.PENDING;

        this.render(this.loading)
    }

    render(src: string) {
        this.el.setAttribute('src', src);
    }
    load() {
        if (this.state > State.PENDING) return;
        if (this.cache.has(this.src)) {
            this.state = State.LOADED;
            this.render(this.src);
            return;
        }
        this.renderSrc()
    }

    renderSrc() {
        this.loadImage(this.src).then(() => {
            this.state = State.LOADED;
            this.render(this.src);
            this.cache.add(this.src);
        }).catch((e) => {
            this.state = State.ERROR;
            this.error && this.render(this.error)
            console.warn(`load failed with src image(${this.src}) and the error msg is ${e.message}`)
        })
    }

    loadImage(src: string) {
        return new Promise<void>((resolve, reject) => {
            const image = new Image();
            image.onload = () => {
                resolve();
                image.onerror = image.onload = null;
            }

            image.onerror = () => {
                reject();
                image.onerror = image.onload = null;
            }

            image.src = src
        })
    }

    update(src: string) {
        const currentSrc = this.src

        // console.log('src', src, 'currentSrc', src);

        if (src !== currentSrc) {
            this.src = src
            this.state = State.PENDING;
        }
    }

}

export { ImageLoader, State }
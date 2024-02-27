/*
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-23 17:24:09
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-28 00:54:44
 * @FilePath: /vitepress-theme-sakurairo/src/posts.data.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */

import fs from 'node:fs';
import path from 'node:path';
import glob from 'fast-glob';
import matter from 'gray-matter'
import { MarkdownRenderer, createMarkdownRenderer } from 'vitepress';
import type { SiteConfig } from 'vitepress';
import { normalizePath } from 'vite'
import { FrontmatterType } from './types';
import { formatTimestamp } from './utils';


declare const data: any[];
export { data };


export default ((pattern: string | string[]): {
    watch: string | string[]
    load: () => Promise<any>
} => {
    const config: SiteConfig = (globalThis as any).VITEPRESS_CONFIG;
    let md: MarkdownRenderer;

    if (!config) {
        throw new Error(
            'content loader invoked without an active vitepress process, ' +
            'or before vitepress config is resolved.'
        )
    }

    if (typeof pattern === 'string') pattern = [pattern]
    pattern = pattern.map((p) => normalizePath(path.join(config.root, p)))


    // 用于缓存的容器
    const cache = new Map<string, { data: any, timestamp: number }>();
    return {
        watch: pattern,
        async load(files?: string[]) {
            if (!files) {
                files = (
                    await glob(pattern, { ignore: ['**/node_modules/**', '**/dist/**'] })
                ).sort()
            }

            md = md || await createMarkdownRenderer(
                config.srcDir,
                config.markdown,
                config.site.base,
                config.logger
            );


            const raw: Array<any> = [];

            for (const file of files) {
                if (!file.endsWith('.md')) {
                    continue
                }

                const cached = cache.get(file);
                const { mtimeMs, ctimeMs } = fs.statSync(file);
                if (cached && cached.timestamp === mtimeMs) {
                    raw.push(cached.data);
                } else {
                    const sourceFile = fs.readFileSync(file, 'utf-8');
                    const { data, content } = matter(sourceFile);
                    const frontmatter = data as FrontmatterType;

                    if (frontmatter.layout === 'page') {
                        if (!frontmatter?.publish) {
                            frontmatter.publish = formatTimestamp(ctimeMs);
                        } else {
                            frontmatter.publish = formatTimestamp(frontmatter.publish);
                        }

                        if (!frontmatter?.update) {
                            frontmatter.update = formatTimestamp(mtimeMs);
                        } else {
                            frontmatter.update = formatTimestamp(frontmatter.update);
                        }
                    }

                    const url = generateURL(config, file);
                    const html = md.render(sourceFile);

                    const posts = {
                        html,
                        url,
                        ...frontmatter,
                        content
                    }

                    raw.push(posts);
                    cache.set(file, { data: posts, timestamp: mtimeMs })
                }
            }
            return raw;
        }
    }
})('posts/**/**.md')



function generateURL(config: SiteConfig, file: string) {
    return '/' +
        normalizePath(path.relative(config.srcDir, file))
            .replace(/(^|\/)index\.md$/, '$1')
            .replace(/\.md$/, config.cleanUrls ? '' : '.html');
}
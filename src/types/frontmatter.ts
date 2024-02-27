/*
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-27 17:45:48
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-27 17:46:21
 * @FilePath: /vitepress-theme-sakurairo/src/types/frontmatter.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */
export type HomeFrontmatter = {
    layout: 'home'
}

export type PageFormatter = {
    layout: 'page',
    tags?: string[],
    update?: string,
    publish?: string,
    title: string,
    synopsis?: string
}

export type TagsFormatter = {
    layout: 'tags',
}

export type FrontmatterType = HomeFrontmatter | PageFormatter | TagsFormatter;
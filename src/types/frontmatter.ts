/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-27 17:45:48
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-10 23:47:09
 * @FilePath: /vuepress-interview/src/types/frontmatter.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
export type HomeFrontmatter = {
    layout: 'home'
}

export type PageFormatter = {
    layout: 'page',
    tags?: string[],
    cover?: false | string,
    update?: string,
    publish?: string,
    title: string,
    synopsis?: string,
    prev?: false | string,
    next?: false | string,
    comment?:boolean
}

export type DefaultPageFormatter = {
    layout: 'page',
    tags: false | string[],
    update: string,
    publish: string,
    title: string,
    synopsis: string,
    prev: false | string,
    next: false | string,
    cover: string
    url:string,
    comment:boolean,
    key:string
}

export type TagsFormatter = {
    layout: 'tags',
}

export type FrontmatterType = HomeFrontmatter | PageFormatter | TagsFormatter;
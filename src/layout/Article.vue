<!--
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-21 15:06:46
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-28 18:27:06
 * @FilePath: /vitepress-theme-sakurairo/src/layout/Article.vue
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <div class="article-wrapper">
        <div class="article-head">
            <div class="article-cover" :style="{
                backgroundImage: `url(${page.cover})`
            }"></div>
            <header>
                <h1 class="entry-title">{{ page.title }}</h1>
                <span class="topic-line"></span>
                <p class="entry-census">
                    <span>
                        <a href="">
                            <img :src="theme.global.avatar" alt="">
                        </a>
                    </span>
                    <span>
                        <a href="">
                            {{ theme.global.author }}
                        </a>
                    </span>
                    <span class="bull">·</span>
                    {{ page.publish }}
                    <span class="bull">·</span>
                    {{ 0 }} 次阅读
                </p>
            </header>
        </div>
        <div class="article-content">
            <Content />
        </div>
        <div class="article-footer">

        </div>
    </div>
</template>

<script setup lang="ts">
import { Content, useData, } from 'vitepress';
import { computed, inject } from 'vue';
import { Theme } from '../types';


const data = inject('data');

const theme = useData().theme.value as Theme;

// 以url为key获取文章信息
const page = computed(() => {
    let filePath = useData().page.value.filePath;
    filePath = filePath.replace(/\.md$/, '.html');
    filePath = '/' + filePath;
    return (data as any).find((page: any) => page.url === filePath)
})

</script>
<style lang="scss">
@import "../styles/variable.scss";
@import "../styles/animate.scss";

.article-wrapper {
    -webkit-animation: blur .8s;
    animation: blur .8s;
    animation-duration: .8s;
    background-color: rgba(255, 255, 255, .8);
    -webkit-transition: all .8s ease !important;
    -moz-transition: all .8s ease !important;
    -o-transition: all .8s ease !important;
    transition: all .8s ease !important;

    .article-head {
        animation: blur .8s;
        position: relative;
        top: 0;
        left: 0;
        width: 100%;
        border-radius: 0 0 20px 20px;
        overflow: hidden;
        transition: all .8s ease !important;

        .article-cover {
            width: 100%;
            height: 400px;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            background-origin: border-box;
        }

        &>header {
            position: absolute;
            left: 0;
            right: 0;
            color: #fff;
            z-index: 1;
            max-width: 800px;
            padding: 0 10px;
            margin-left: auto;
            margin-right: auto;
            text-align: left;
            top: auto;
            bottom: 20px;

            .entry-title {
                font-size: 32px;
                margin: 0;
                font-size: 32px;
                width: 100%;
                font-weight: $--global-font-weight;
                padding: 0;
                border: 0;
                -moz-animation: fadeInUp 2s;
                -webkit-animation: fadeInUp 2s;
                animation: fadeInUp 2s;
            }

            .topic-line {
                position: relative;
                bottom: 0;
                left: 0;
                display: block;
                width: 100%;
                height: 2px;
                background-color: #fff;
                animation: lineWidth 2.5s;
                animation-fill-mode: forwards;
            }

            .entry-census {
                color: #fff;
                font-size: 14px;
                padding: 18px 0 0;
                line-height: 39px;
                font-weight: $--global-font-weight;
                margin: 0;
                animation: fadeInDown 2s;

                a {
                    animation: fadeInDown 2s;

                    img {
                        width: 35px;
                        height: 35px;
                        border-radius: 100%;
                        float: left;
                        margin-right: 12px;
                    }
                }

                .bull {
                    margin: 0 5px;
                }
            }
        }
    }
}

.article-content {
    max-width: 800px;
    padding: 0 10px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    background-color: rgba(255, 255, 255, .8);

    img,
    video {
        height: auto;
        max-width: 100%;
        width: 100%;
    }

    ol li,
    ul li {
        padding: 8px 0;
    }

    h3,
    h4,
    h5 {
        padding-left: 16px;
    }

    h3 {
        padding-bottom: 8px;
        border-bottom: 1px dashed #ddd;
        color: #737373;
    }

    h2:after,
    h3:after,
    h4:after,
    h5:after {
        left: 0;
        position: absolute;
        color: #ff6d6d
    }

    h2:after {
        content: "\00B6";
        font-family: 'Merriweather Sans', Helvetica, Tahoma, Arial, 'PingFang SC', 'Hiragino Sans GB', 'Microsoft Yahei', 'WenQuanYi Micro Hei', sans-serif;
        padding-left: 6px;
        font-size: 1.03em;
    }

    h3:after {
        content: "#";
    }

    h4:after {
        content: "▌";
    }

    h5:after {
        content: "♯";
    }
    

    ul,
    li {
        border: 1px dashed #e4e4e4;
        padding: 15px 10px 15px 50px;
        color: #616161;
        margin-left: 0;
        border-radius: 10px;
    }

    ol {
        list-style: decimal;
    }

    ul {
        list-style: disc;
    }

    p {
        color: #797979;
        line-height: 30px;
    }

    hr {
        margin-top: 40px;
        margin-bottom: 40px;
        display: block;
        border: 0;
        text-align: center;
        background: 0 0;
    }

    hr:before {
        content: '...';
        display: inline-block;
        margin-left: .6em;
        color: rgba(0, 0, 0, .8);
        position: relative;
        top: -30px;
        font-size: 28px;
        letter-spacing: .6em;
    }


    // code block;
    div[class*="language-"] {
        position: relative;
        line-height: var(--code-line-height);
        font-size: var(--code-font-size);
        font-family: var(--code-font-family);
        display: flex;
        flex-direction: row-reverse;
        border-radius: 8px;
        border: 1px solid var(--color-border);
        padding-top: 32px;
        overflow: hidden;
        background: var(--shiki-background);

        button.copy {
            position: absolute;
            top: 8px;
            right: 8px;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            background-color: white;
            background-image: var(--vp-icon-copy);
            background-repeat: no-repeat;
            background-position: 50%;
            border-radius: 4px;
            opacity: 0;
            border: 1px solid var(--color-border);
        }

        &:hover button.copy {
            opacity: 1;
        }

        .lang {
            position: absolute;
            transform: translate(-50%, -28px);
            left: 50%;
            user-select: none;
        }

        pre {
            margin: 0;
            padding-left: 16px;
            flex-grow: 1;
            overflow: auto;
        }

        code {
            background-color: transparent;
            padding: 0;
        }

        &:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            height: 32px;
            background: #f6f8fa;
            border-bottom: 1px solid var(--color-border);
        }

        &:after {
            content: "";
            position: absolute;
            top: 10px;
            left: 12px;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #fc625d;
            box-shadow: 20px 0 #fdbc40, 40px 0 #35cd4b;
        }
    }
}
</style>
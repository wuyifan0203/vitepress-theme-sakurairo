<!--
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-21 15:06:46
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-22 02:06:48
 * @FilePath: /vitepress-theme-sakurairo/src/layout/Article.vue
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <div class="article-wraper">
        <div class="article-head">
            <div class="article-cover"></div>
            <header>
                <h1 class="entry-title"> 母猪产后护理</h1>
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
                </p>
            </header>
        </div>
        <div class="article-content">

        </div>
        <div class="article-footer">

        </div>
    </div>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { Theme } from '../types';

const theme = useData().theme.value as Theme;

</script>
<style lang="scss">
@import "../styles/variable.scss";
@import "../styles/animate.scss";

.article-wraper {
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
            }
        }
    }


}
</style>
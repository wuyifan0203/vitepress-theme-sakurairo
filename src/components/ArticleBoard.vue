<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-16 19:47:23
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-18 13:05:54
 * @FilePath: /vitepress-theme-sakurairo/src/components/ArticleBoard.vue
-->
<template>
    <div class="article-area">
        <div class="content-article">
            <h1 :style="{
                textAlign: theme.global.board?.titleAlign
            }">
                <i class="far" :class="iconFont" :style="{
                visibility: showIcon
            }"></i>
                <br>
                {{ theme.articleBoard.title }}
            </h1>
        </div>
        <ArticleList :list="pages"></ArticleList>
    </div>
</template>

<script setup lang='ts'>
import { useData } from "vitepress";
import { Ref, computed } from "vue";
import { Theme } from "../types/theme";
import ArticleList from "./ArticleList.vue";
import { useStore } from "../utils";
import { DefaultPageFormatter } from "../types";

const globalStore = useStore('global');

const data = computed(() => globalStore.getData())

const theme: Ref<Theme> = useData().theme;

const showIcon = (theme.value.global?.board?.showIcon ?? true) ? 'visible' : 'hidden';
const iconFont: string = theme.value.articleBoard?.icon ?? 'fa-laptop';

const pages = computed(() => {
    return data.value.filter((d: DefaultPageFormatter) => d.layout === 'page').sort((a: DefaultPageFormatter, b: DefaultPageFormatter) => {
        return +new Date(b.publish) - +new Date(a.publish)
    })
})


</script>

<style lang="scss">
@import "../styles/variable.scss";
@import "../styles/animate.scss";

.article-area {
    margin-top: 50px;

    .content-article {
        h1 {
            padding-right: 3px;
            padding-bottom: 10px;
            padding-left: 3px;
            margin-bottom: 30px;
            font-size: 20px;
            text-decoration: underline wavy $--theme-skin-active;
            color: $--theme-skin;
            transition: all .8s ease !important;
            font-weight: $--global-font-weight;
            text-underline-offset: 10px;
            animation: fadeInDown 2s;

            &::before {
                display: block;
                margin-top: -80px;
                height: 80px;
                visibility: hidden;
                content: " ";
            }
        }
    }


}
</style>
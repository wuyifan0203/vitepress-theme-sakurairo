<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-16 19:47:23
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-13 16:42:10
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
            <ArticleList :list="pages"></ArticleList>
        </div>
        <div class="content-pagination">
            <a href="" v-if="true">更早文章</a>
            <span v-else>
                很高兴你翻到这里，但是真的没有了...
            </span>
        </div>
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
@import url("../styles/variable.scss");
@import url("../styles/animate.scss");

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

    .content-pagination {
        display: inline-block;
        padding: 20px 0;
        margin: 40px 0 80px;
        width: 100%;
        text-align: center;

        a {
            padding: 13px 35px;
            font-size: 13px;
            color: $--theme-skin;
            background: rgb(255 255 255/50%);
            border: 1.5px solid #fff;
            border-radius: 50px;
            box-shadow: 0 1px 30px -4px #e8e8e8;
            transition: all .8s ease;

            &:hover {
                color: var(--post_list_matching_color, #505050);
                box-shadow: 0 1px 20px 10px #e8e8e8;
                transition: all 0.8s ease !important;
            }
        }

        span {
            font-size: 15px;
            color: $--theme-skin;
            font-weight: $--global-font-weight;
        }
    }
}
</style>
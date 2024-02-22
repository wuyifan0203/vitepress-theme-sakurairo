<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-16 19:47:23
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-20 14:42:13
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
            <ArticleList :list="theme.articleBoard.items"></ArticleList>
        </div>
        <div class="pagination">
            <a href="" v-if="true">更早文章</a>
            <span v-else>
                很高兴你翻到这里，但是真的没有了...
            </span>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { useData } from "vitepress";
import { Ref } from "vue";
import { Theme } from "../types/theme";
import ArticleList from "./ArticleList.vue";
const theme: Ref<Theme> = useData().theme;

const showIcon = (theme.value.global?.board?.showIcon ?? true) ? 'visible' : 'hidden';
const iconFont: string = theme.value.articleBoard?.icon ?? 'fa-laptop';


</script>
    
<style lang="scss" scoped>
@import "../styles/variable.scss";
@import "../styles/animate.scss";

.article-area {
    margin-top: 50px;

    .content-article {
        h1 {

            color: $--theme-skin;
            font-size: 20px;
            font-weight: $--global-font-weight;
            padding-bottom: 10px;
            padding-left: 3px;
            padding-right: 3px;
            margin-bottom: 30px;
            text-underline-offset: 10px;
            text-decoration: underline wavy $--theme-skin-active;
            transition: all .8s ease !important;
            -moz-animation: fadeInDown 2s;
            -webkit-animation: fadeInDown 2s;
            animation: fadeInDown 2s;

            &::before {
                display: block;
                content: " ";
                height: 80px;
                margin-top: -80px;
                visibility: hidden;
            }
        }
    }

    .pagination {
        width: 100%;
        padding: 20px 0;
        text-align: center;
        margin: 40px 0 80px;
        display: inline-block;

        a {
            padding: 13px 35px;
            background: rgb(255 255 255/50%);
            box-shadow: 0 1px 30px -4px #e8e8e8;
            border: 1.5px solid #fff;
            border-radius: 50px;
            color: $--theme-skin;
            transition: all .8s ease;
            font-size: 13px;

            &:hover {
                color: var(--post_list_matching_color, #505050);
                box-shadow: 0 1px 20px 10px #e8e8e8;
                transition: all 0.8s ease !important;
            }
        }

        span {
            color: $--theme-skin;
            font-size: 15px;
            font-weight: $--global-font-weight;
        }
    }
}
</style>
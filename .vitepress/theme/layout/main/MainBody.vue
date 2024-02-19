<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-16 02:07:12
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-19 13:50:55
 * @FilePath: /vitepress-theme-sakurairo/.vitepress/theme/layout/main/MainBody.vue
-->
<template>
    <main class="main-wrapper">
        <div class="main-content">
            <NoticeBoard v-if="theme.noticeBoard.enable" class="main-notice" />
            <DisplayBoard v-if="theme.displayBoard.enable" />
            <ArticleBoard></ArticleBoard>
        </div>
    </main>
</template>
    
<script setup lang='ts'>
import { useData } from 'vitepress'
import NoticeBoard from "./components/NoticeBoard.vue";
import DisplayBoard from './components/DisplayBoard.vue';
import ArticleBoard from './components/ArticleBoard.vue';

const { theme } = useData();

</script>
    
<style lang="scss">
@import "../../style/animate.scss";
@import "../../style/animate.scss";

.main-wrapper {
    background-color: rgba(255, 255, 255, 0.7);
    animation: blur .8s;
    animation-duration: .8s;
    -webkit-animation: blur .8s;
    transition: all .8s ease !important;

    .main-content {
        max-width: 860px;
        padding: 0 20px;
        margin-left: auto;
        margin-right: auto;
        background-color: transparent !important;
        animation: main 1s;
        box-sizing: border-box;

        .main-notice {
            margin-top: 60px;
        }
    }
}
</style>
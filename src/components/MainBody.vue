<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-16 02:07:12
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-18 09:26:53
 * @FilePath: /vitepress-theme-sakurairo/src/components/MainBody.vue
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
import NoticeBoard from "./NoticeBoard.vue";
import DisplayBoard from './DisplayBoard.vue';
import ArticleBoard from './ArticleBoard.vue';

const { theme } = useData();
</script>
    
<style lang="scss">
@import url("../styles/variable.scss");
@import url("../styles/animate.scss");

.main-wrapper {
    background-color: rgb(255 255 255 / 70%);
    animation: blur .8s;
    animation-duration: .8s;
    transition: all .8s ease !important;

    .main-content {
        padding: 0 20px;
        margin-right: auto;
        margin-left: auto;
        max-width: 860px;
        background-color: transparent !important;
        animation: main 1s;
        box-sizing: border-box;

        .main-notice {
            margin-top: 60px;
        }
    }
}
</style>
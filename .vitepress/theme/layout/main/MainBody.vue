<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-16 02:07:12
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-19 00:22:55
 * @FilePath: /vuepress-interview/.vitepress/theme/layout/main/MainBody.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <main class="main-wrapper">
        <div class="main-content">
            <NoticeBoard v-if="theme.noticeBoard.enable" class="main-notice" />
            <DisplayBoard v-if="theme.displayBoard.enable" />
            <ArticleBoard />
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
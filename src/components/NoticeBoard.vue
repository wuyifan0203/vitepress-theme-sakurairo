<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-16 02:11:35
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-04-16 16:16:03
 * @FilePath: /vitepress-theme-sakurairo/src/components/NoticeBoard.vue
-->
<template>
    <section class="notice-board" :style="noticeBoardStyle">
        <div class="notice-board-title"> 公告</div>
        <div class="notice-board-content">{{ theme.noticeBoard.text.content || '欢迎回家！！！👏' }}</div>
    </section>
</template>
    
<script setup lang='ts'>
import { useData } from "vitepress";
import { reactive } from "vue";
import { Theme } from "../types/theme";

const theme = useData().theme.value as Theme;


const noticeBoardStyle = reactive({
    backgroundImage: `url(${theme.noticeBoard.background.src()})`,
    backgroundColor: theme.noticeBoard.background.color,
    textAlign: theme.noticeBoard.text.align,
    color: theme.noticeBoard.text.color,
})

</script>
    
<style lang="scss">
@import "../styles/animate.scss";

.notice-board {
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding: 20px;
    width: 100%;
    height: 67px;
    text-overflow: ellipsis;
    white-space: nowrap;
    background-repeat: round;
    border: none;
    border-radius: 15px;
    box-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
    transition: all .8s ease;
    animation: main .6s;
    box-sizing: border-box;

    .notice-board-title {
        float: left;
        margin: 2px 10px;
    }

    .notice-board-content {
        display: initial;
        vertical-align: middle;
    }
}
</style>
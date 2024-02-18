<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-16 02:11:35
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-18 14:50:56
 * @FilePath: /vuepress-interview/.vitepress/theme/layout/main/components/NoticeBoard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <section class="notice-board" :style="noticeBoardStyle">
        <div class="notice-board-title"> 公告</div>
        <div class="notice-board-content">{{ theme.noticeBoard.text.content || '欢迎回家！！！👏' }}</div>
    </section>
</template>
    
<script setup lang='ts'>
import { useData } from "vitepress";
import { Ref, reactive } from "vue";
import { Theme } from "../../../types/theme";

const theme: Ref<Theme> = useData().theme;


const noticeBoardStyle = reactive({
    backgroundImage: `url(${theme.value.noticeBoard.background.src()})`,
    backgroundColor: theme.value.noticeBoard.background.color,
    textAlign: theme.value.noticeBoard.text.align,
    color: theme.value.noticeBoard.text.color,
})

</script>
    
<style lang="scss">
@import '../../../style/animate.scss';

.notice-board {
    background-repeat: round;
    border: none;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
    animation: main .6s;
    padding: 20px;
    position: relative;
    display: inline-block;
    width: 100%;
    height: 67px;
    border-radius: 15px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: all .8s ease;
    box-sizing: border-box;

    .notice-board-title {
        float: left;
        margin: 2px 10px;
        font-family: dela gothic one;
    }

    .notice-board-content {
        display: initial;
        vertical-align: middle;
    }
}
</style>
<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-16 19:47:23
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-16 21:05:01
 * @FilePath: /vuepress-interview/.vitepress/theme/layout/main/components/Content.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="article-area">
        <div class="content-article">
            <h1>
                <i class="far" :class="iconFont" :style="{
                    visibility: showIcon
                }"></i>
                <br>
                {{ theme.articleBorad.title }}
            </h1>

        </div>
        <div class="pagination">

        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { useData } from "vitepress";
const { theme } = useData();

const showIcon = theme.value.global.board.showIcon ? 'visible' : 'hidden';
const iconFont: string = theme.value.articleBorad?.icon ?? 'fa-laptop';


</script>
    
<style lang="scss" scoped>
@import "../../../style/variable.scss";
@import "../../../style/animate.scss";

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
}
</style>
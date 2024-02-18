<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-16 12:59:29
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-16 20:56:41
 * @FilePath: /vuepress-interview/.vitepress/theme/layout/main/components/DisplayBoard.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="display">
        <h1>
            <i class="fa" :class="iconFont" :style="{
                visibility: showIcon
            }"></i>
            <br>
            {{ theme.displayBoard?.title }}
        </h1>
        <a v-for="(item, index) in theme.displayBoard?.items" :key="index" class="display-item" :href="item.link">
            <img :src="item.background.src()" alt="">
            <div class="display-info">
                <h3>{{ item.title }}</h3>
                <p>{{ item.description }}</p>
            </div>
        </a>
    </div>
</template>
    
<script setup lang='ts'>
import { useData } from 'vitepress';
import { Ref } from 'vue';
import { Theme } from '../../../types/theme';

const theme: Ref<Theme> = useData().theme;

const showIcon = (theme.value.global?.board?.showIcon ?? true) ? 'visible' : 'hidden';
const iconFont: string = theme.value.displayBoard?.icon ?? 'fa-laptop';

</script>
    
<style lang="scss" scoped>
@import "../../../style/variable.scss";
@import "../../../style/animate.scss";

.display {
    width: 100%;
    height: auto;
    margin-top: 55px;
    white-space: nowrap;

    h1 {
        -moz-animation: fadeInDown 2s;
        -webkit-animation: fadeInDown 2s;
        animation: fadeInDown 2s;
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

        &::before {
            display: block;
            content: " ";
            height: 80px;
            margin-top: -80px;
            visibility: hidden;
            box-sizing: inherit;
        }
    }

    .display-item {
        display: inline-block;
        position: relative;
        border-radius: 15px;
        height: 160px;
        width: 258px;
        margin: 6px 6px 0 6px;

        box-shadow: 1px 1px 3px rgba(0, 0, 0, .3);
        overflow: hidden;
        left: 0;

        -webkit-transition: all .35s ease-in-out;
        -moz-transition: all .35s ease-in-out;
        transition: all .35s ease-in-out;

        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;

        color: $--theme-skin;

        img {
            width: 100%;
            height: 100%;

            -webkit-transition: all .35s ease-in-out;
            -moz-transition: all .35s ease-in-out;
            transition: all .35s ease-in-out;
            -webkit-transform: scale(1);
            -moz-transform: scale(1);
            -ms-transform: scale(1);
            -o-transform: scale(1);
            transform: scale(1);

        }

        .display-info {
            -webkit-animation: fadeInDown 2s;
            animation: fadeInDown 2s;
            background: rgba(255, 255, 255, 0.4);
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            text-align: center;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            background: rgba(255, 255, 255, .4);
            visibility: hidden;
            opacity: 0;
            -webkit-transition: all .35s ease-in-out;
            -moz-transition: all .35s ease-in-out;
            transition: all .35s ease-in-out;

            h3,
            p {
                color: $--theme-skin;
                text-align: center;
                font-weight: $--global-font-weight;
            }

            h3 {
                background: rgba(255, 255, 255, 0.4);
                text-transform: uppercase;
                font-size: 20px;
                padding: 6px;
                margin: 30px 0 0;
                -webkit-transition: all .35s ease-in-out;
                -moz-transition: all .35s ease-in-out;
                transition: all .35s ease-in-out;
                -webkit-transform: translateX(-100%);
                -moz-transform: translateX(-100%);
                -ms-transform: translateX(-100%);
                -o-transform: translateX(-100%);
                transform: translateX(-100%);

            }

            p {
                font-style: italic;
                font-size: 12px;
                position: relative;
                padding: 0 10px 10px;
                -webkit-transition: all .35s .1s linear;
                -moz-transition: all .35s .1s linear;
                transition: all .35s .1s linear;
                -webkit-transform: translateX(100%);
                -moz-transform: translateX(100%);
                -ms-transform: translateX(100%);
                -o-transform: translateX(100%);
                transform: translateX(100%);
            }
        }

        &:hover {
            text-decoration: none;
            outline: 0;

            img {
                -webkit-transform: scale(1.2);
                -moz-transform: scale(1.2);
                -ms-transform: scale(1.2);
                -o-transform: scale(1.2);
                transform: scale(1.2);
            }

            .display-info {
                visibility: visible;
                opacity: 1;

                h3 {
                    -webkit-transform: translateX(0);
                    -moz-transform: translateX(0);
                    -ms-transform: translateX(0);
                    -o-transform: translateX(0);
                    transform: translateX(0);
                }

                p {
                    -webkit-transform: translateX(0);
                    -moz-transform: translateX(0);
                    -ms-transform: translateX(0);
                    -o-transform: translateX(0);
                    transform: translateX(0);
                }
            }

        }


    }
}
</style>
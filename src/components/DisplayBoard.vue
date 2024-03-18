<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-16 12:59:29
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-14 18:03:38
 * @FilePath: /vitepress-theme-sakurairo/src/components/DisplayBoard.vue
-->
<template>
    <div class="display">
        <h1 :style="{
            textAlign:theme.global.board?.titleAlign
        }">
            <i class="fa" :class="iconFont" :style="{
                visibility: showIcon
            }"></i>
            <br>
            {{ theme.displayBoard?.title }}
        </h1>
        <a v-for="(item, index) in theme.displayBoard?.items" :key="index" class="display-item" :href="item.link">
            <img v-lazy="item.background.src()" alt="">
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
import { Theme } from "../types/theme";

const theme: Ref<Theme> = useData().theme;

const showIcon = (theme.value.global?.board?.showIcon ?? true) ? 'visible' : 'hidden';
const iconFont: string = theme.value.displayBoard?.icon ?? 'fa-laptop';

</script>
    
<style lang="scss">
@import "../styles/variable.scss";
@import "../styles/animate.scss";

.display {
    margin-top: 55px;
    width: 100%;
    height: auto;
    white-space: nowrap;

    h1 {
        padding-right: 3px;
        padding-bottom: 10px;
        padding-left: 3px;
        margin-bottom: 30px;
        font-size: 20px;
        text-align: left; // default
        text-decoration: underline wavy $--theme-skin-active;
        color: $--theme-skin;
        transition: all .8s ease !important;
        animation: fadeInDown 2s;
        font-weight: $--global-font-weight;
        text-underline-offset: 10px;

        &::before {
            display: block;
            margin-top: -80px;
            height: 80px;
            visibility: hidden;
            content: " ";
            box-sizing: inherit;
        }
    }

    .display-item {
        position: relative;
        left: 0;
        display: inline-block;
        overflow: hidden;
        margin: 6px 6px 0;
        width: 258px;
        height: 160px;
        color: $--theme-skin;
        border-radius: 15px;
        box-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
        transition: all .35s ease-in-out;
        box-sizing: border-box;

        img {
            width: 100%;
            height: 100%;
            transition: all .35s ease-in-out;
            transform: scale(1);

        }

        .display-info {
            position: absolute;
            inset: 0;
            text-align: center;
            background: rgb(255 255 255 / 40%);
            opacity: 0;
            visibility: hidden;
            transition: all .35s ease-in-out;
            animation: fadeInDown 2s;
            backface-visibility: hidden;

            h3,
            p {
                text-align: center;
                color: $--theme-skin;
                font-weight: $--global-font-weight;
            }

            h3 {
                padding: 6px;
                margin: 30px 0 0;
                font-size: 20px;
                background: rgb(255 255 255 / 40%);
                transition: all .35s ease-in-out;
                text-transform: uppercase;
                transform: translateX(-100%);

            }

            p {
                position: relative;
                padding: 0 10px 10px;
                font-size: 12px;
                transition: all .35s .1s linear;
                font-style: italic;
                transform: translateX(100%);
            }
        }

        &:hover {
            text-decoration: none;
            outline: 0;

            img {
                transform: scale(1.2);
            }

            .display-info {
                opacity: 1;
                visibility: visible;

                h3 {
                    transform: translateX(0);
                }

                p {
                    transform: translateX(0);
                }
            }

        }


    }
}
</style>
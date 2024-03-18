<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-19 00:37:31
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-01 01:39:16
 * @FilePath: /vitepress-theme-sakurairo/src/components/Footer.vue
-->
<template>
    <footer id="footer">
        <div class="site-info">
            <div class="footer-text">
                <div class="sakura-icon">
                    <sakura class="sakura-svg"></sakura>
                </div>
                <p class="copyright">
                    Copyright © {{ theme.footer.copyright }}
                </p>
                <a :href="theme.footer.record" class="record" v-if="theme.footer.record"> {{ theme.footer.record }}</a>
            </div>
            <div class="yiyan">
                <p id="yiyan"></p>
            </div>
            <div class="theme-info">
                Theme <a href="">vitepress-theme-sakurairo</a> by
                <a href="https://github.com/wuyifan0203/vitepress-theme-sakurairo.git" target="_blank"> VF </a>
            </div>
        </div>
    </footer>
</template>
    
<script setup lang='ts'>
import sakura from '../assets/icon/sakura.vue';

import { useData } from 'vitepress'
const { theme } = useData()

</script>
    
<style lang="scss">
@import "../styles/variable.scss";
@import "../styles/animate.scss";

#footer {
    padding: max(2%, 45px);
    margin-right: auto;
    margin-left: auto;
    background: rgb(255 255 255 / 80%);
    transition: all .8s ease !important;
    animation: blur .8s;

    .site-info {
        font-size: 13px;
        text-align: center;
        color: #B9B9B9;
        font-weight:$--global-font-weight;

        .sakura-icon {
            margin: auto;
            width: max-content;
            height: max-content;

            .sakura-svg {
                width: 30px;
                height: 30px;
                animation: slow-rotate 10s linear infinite;
            }

        }
    }
}
</style>
<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-19 00:37:31
 * @LastEditors: wuyifan 1208097313@qq.com
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
    background: rgba(255, 255, 255, .8);
    margin-left: auto;
    margin-right: auto;
    animation: blur .8s;
    transition: all .8s ease !important;

    .site-info {
        text-align: center;
        font-size: 13px;
        color: #B9B9B9;
        font-weight:$--global-font-weight;

        .sakura-icon {
            width: max-content;
            height: max-content;
            margin: auto;

            .sakura-svg {
                width: 30px;
                height: 30px;
                animation: slow-rotate 10s linear infinite;
            }

        }
    }
}
</style>
<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-19 00:37:31
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-19 01:09:37
 * @FilePath: /vuepress-interview/.vitepress/theme/layout/footer/footer.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
            <div class="theme-info">
                Theme <a href="">vitepreet-theme-sakurario</a> by
                <a href="https://github.com/wuyifan123" target="_blank"> wuyifan</a>
            </div>
        </div>
    </footer>
</template>
    
<script setup lang='ts'>
import sakura from '../../icon/sakura.vue';

import { useData } from 'vitepress'
const { theme } = useData()

</script>
    
<style lang="scss">
@import "../../style/variable.scss";
@import "../../style/animate.scss";

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
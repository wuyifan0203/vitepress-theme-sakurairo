<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-11 15:59:00
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-26 01:04:06
 * @FilePath: /vitepress-theme-sakurairo/src/components/NavMenu.vue
-->
<template>
    <nav>
        <ul>
            <li v-for="(item, index) in nav.items" :key="index">
                <a :href="withBase(item.link)">
                    <span>
                        <i class="fa" :class="item.icon"></i>
                        {{ item.text }}
                    </span>
                </a>
                <ul v-if="(item as NavItems).items" class="sub-menu">
                    <li v-for="(cItem, cIndex) in (item as NavItems).items" :key="cIndex">
                        <a :href="withBase(item.link + cItem.link)">
                            <span>
                                <i class="fa" :class="cItem.icon"></i>
                                {{ cItem.text }}
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>
</template>
    
<script setup lang='ts'>
import { useData,withBase } from 'vitepress'
import { NavItems, Theme } from "../types/theme";
import { Ref } from 'vue';
const theme: Ref<Theme> = useData().theme;
const nav = theme.value.nav;
</script>
    
<style lang="scss">
@import "../styles/variable.scss";
@import "../styles/animate.scss";

nav {
    display: block;

    &>ul {
        display: inline-block;
        margin: 0;
        padding: 0;
        max-width: 76vw;
        list-style: none;

        -moz-animation: fadeInLeft 1s;
        -webkit-animation: fadeInLeft 1s;
        animation: fadeInLeft 1s;

        li {
            position: relative;
            margin-left: 28px;
            font-size: 16px;
            float: left;

            a {
                display: inline-block;
                padding: 10px 0;
                color: $--theme-skin;

                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: -5px;
                    height: 4px;
                    background-color: $--theme-skin-active;
                    width: 100%;
                    border-radius: 30px;
                    max-width: 0;
                    transition: max-width 0.3s cubic-bezier(.4, 0, .2, 1);
                }

                &:hover {
                    color: $--theme-skin-active;

                    &::after {
                        max-width: 100%;
                    }
                }
            }

            .sub-menu {
                display: none;
                opacity: 1;
                position: absolute;
                background: #fff;
                padding: 10px;
                top: 46px;
                right: -13px;
                text-align: center;
                z-index: 9999;
                border-radius: 5px;
                box-shadow: 0 1px 40px -8px rgba(0, 0, 0, .5);
                -webkit-animation: fadeInUp .3s .1s ease both;
                animation: fadeInUp .3s .1s ease both;

                &::before {
                    content: "";
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    margin-left: -10px;
                    border-width: 10px;
                    border-style: solid;
                    border-color: transparent transparent #fff;
                }

                li {
                    width: 100%;
                    margin: 0;
                    white-space: nowrap;
                }
            }

            &:hover {
                .sub-menu {
                    display: inline-block;
                    -webkit-transition: all .4s;
                    transition: all .4s;
                }

            }
        }
    }
}
</style>
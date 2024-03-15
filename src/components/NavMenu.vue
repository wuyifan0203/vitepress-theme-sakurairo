<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-11 15:59:00
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-04 01:40:00
 * @FilePath: /vuepress-interview/src/components/NavMenu.vue
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
import { useData, withBase } from 'vitepress'
import { NavItems, Theme } from "../types/theme";
import { Ref } from 'vue';
const theme: Ref<Theme> = useData().theme;
const nav = theme.value.nav;
</script>
    
<style lang="scss">
@import url("../styles/variable.scss");
@import url("../styles/animate.scss");

nav {
    display: block;

    &>ul {
        display: inline-block;
        padding: 0;
        margin: 0;
        max-width: 76vw;
        list-style: none;
        animation: fadeInLeft 1s;

        li {
            position: relative;
            float: left;
            margin-left: 28px;
            font-size: 16px;

            a {
                display: inline-block;
                padding: 10px 0;
                color: $--theme-skin;

                &::after {
                    position: absolute;
                    bottom: -5px;
                    display: block;
                    width: 100%;
                    max-width: 0;
                    height: 4px;
                    background-color: $--theme-skin-active;
                    border-radius: 30px;
                    transition: max-width 0.3s cubic-bezier(.4, 0, .2, 1);
                    content: "";
                }

                &:hover {
                    color: $--theme-skin-active;

                    &::after {
                        max-width: 100%;
                    }
                }
            }

            .sub-menu {
                position: absolute;
                top: 46px;
                right: -13px;
                z-index: 9999;
                display: none;
                padding: 10px;
                text-align: center;
                background: #fff;
                border-radius: 5px;
                opacity: 1;
                box-shadow: 0 1px 40px -8px rgb(0 0 0 / 50%);
                animation: fadeInUp .3s .1s ease both;

                &::before {
                    position: absolute;
                    top: -20px;
                    left: 50%;
                    margin-left: -10px;
                    border-style: solid;
                    border-width: 10px;
                    border-color: transparent transparent #fff;
                    content: "";
                }

                li {
                    margin: 0;
                    width: 100%;
                    white-space: nowrap;
                    list-style: none;
                }
            }

            &:hover {
                .sub-menu {
                    display: inline-block;
                    transition: all .4s;
                }

            }
        }
    }
}
</style>
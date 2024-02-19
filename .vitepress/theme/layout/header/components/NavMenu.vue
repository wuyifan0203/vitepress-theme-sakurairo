<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-11 15:59:00
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-19 13:32:57
 * @FilePath: /vitepress-theme-sakurairo/.vitepress/theme/layout/header/components/NavMenu.vue
-->
<template>
    <nav>
        <ul>
            <li v-for="(item, index) in nav.items" :key="index">
                <a :href="item.link">
                    <span>
                        <i class="fa" :class="item.icon"></i>
                        {{ item.text }}
                    </span>
                </a>
            </li>
        </ul>
    </nav>
</template>
    
<script setup lang='ts'>
// TODO 二级菜单
import { useData } from 'vitepress'
import { Theme } from '../../../types/theme';
import { Ref } from 'vue';
const theme: Ref<Theme> = useData().theme;
const nav = theme.value.nav;
</script>
    
<style lang="scss" scoped>
@import '../../../style/variable.scss';
@import '../../../style/animate.scss';

nav {
    display: block;

    ul {
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
        }
    }


}
</style>
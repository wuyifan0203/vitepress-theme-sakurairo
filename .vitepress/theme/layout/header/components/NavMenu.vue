<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-11 15:59:00
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-13 21:39:51
 * @FilePath: /vuepress-interview/.vitepress/theme/layout/header/components/NavMenu.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <nav>
        <ul>
            <li v-for="(item, index) in nav" :key="index">
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
const { theme } = useData();
const nav = theme.value.nav;
console.log(nav);
</script>
    
<style lang="scss" scoped>
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

                &::after {
                    content: "";
                    display: block;
                    position: absolute;
                    bottom: -5px;
                    height: 4px;
                    background-color: orange;
                    width: 100%;
                    border-radius: 30px;
                    max-width: 0;
                    transition: max-width 0.3s cubic-bezier(.4, 0, .2, 1);
                }

                &:hover {
                    color: orange;
                    &::after {
                        max-width: 100%;
                    }
                }
            }
        }
    }


}

@keyframes fadeInLeft {
    0% {
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0;
    }

    50% {
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0;
    }

    100% {
        -moz-transform: translateX(0%);
        -ms-transform: translateX(0%);
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        opacity: 1;
    }

}
</style>
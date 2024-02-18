<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:22:24
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-18 10:47:11
 * @FilePath: /vuepress-interview/.vitepress/theme/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <Header></Header>
    <Cover></Cover>
    <MainBody></MainBody>
    <BackTop></BackTop>
    <Skin></Skin>
</template>
    
<script setup lang='ts'>
import Header from './layout/header/Header.vue';
import Cover from './layout/cover/Cover.vue';
import MainBody from './layout/main/MainBody.vue';
import BackTop from './layout/common/BackTop.vue';
import Skin from './layout/common/Skin.vue';

import { useData } from "vitepress";
import { onMounted } from 'vue';

const { theme } = useData();

onMounted(()=>{
    document.body.style.backgroundImage = `url(${theme.value.global.background.src})`;
})

</script>
    
<style lang="scss">
@import './style/variable.scss';

* {
    box-sizing: border-box;
}

a {
    background-color: transparent;
    text-decoration: none;
    color: $--theme-skin;
    outline: 0;
    -webkit-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    -moz-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    word-break: break-word;

    &:hover {
        outline: 0;
    }
}
html{
    scroll-behavior: smooth;
}

body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-shadow: 0 0 1px rgba(0, 0, 0, .1);
    color: $--theme-skin;
    line-height: 1.5;
    background: #0000;
    background-attachment: fixed;
    background-position: center;

    @font-face {
        font-family: 'Moe-Mashiro';
        src:  url('./public/Moe-Mashiro.woff2') format('woff2');
        font-weight: normal;
        font-style: normal;
    }

    font-family: 'Moe-Mashiro';


    ol,
    ul {
        box-sizing: border-box;
    }

    ul,
    li {
        text-align: center;
    }

    h2,
    h3,
    h4,
    h5,
    h6 {
        clear: both;
    }

}
</style>
<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:22:24
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-29 00:53:59
 * @FilePath: /vitepress-theme-sakurairo/src/layout/index.vue
-->
<template>
    <Header></Header>
    <Layout></Layout>
    <Footer></Footer>
    <BackTop></BackTop>
    <Skin></Skin>
</template>
    
<script setup lang='ts'>
import { useData } from "vitepress";
import { onMounted, provide } from 'vue';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/regular.min.css';

import Header from '../components/Header.vue';
import Layout from './Layout.vue';
import Footer from '../components//Footer.vue';
import BackTop from '../components//BackTop.vue';
import Skin from '../components//Skin.vue';
import { installThemePlugin } from '../plugin';

import { data } from '../posts.data';


provide('data', data);


const { theme } = useData();

onMounted(() => {
    installThemePlugin()
    document.body.style.backgroundImage = `url(${theme.value.global.background.src()})`;
})

</script>
    
<style lang="scss">
@import '../styles/theme.scss';
@import '../styles/variable.scss';

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

html {
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
    font-size: 15px;

    @font-face {
        font-family: 'Moe-Mashiro';
        src: url('../assets/fonts/Moe-Mashiro.woff2') format('woff2');
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

    h1:before {
        display: block;
        content: " ";
        height: 80px;
        margin-top: -80px;
        visibility: hidden;
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
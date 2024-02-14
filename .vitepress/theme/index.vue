<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:22:24
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-14 19:35:20
 * @FilePath: /vuepress-interview/docs/theme/layout/Layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <Header></Header>
    <Cover></Cover>
    <div style="height: 1000px;">layout</div>
</template>
    
<script setup lang='ts'>
import Header from './layout/header/Header.vue';
import Cover from './layout/cover/Cover.vue';

</script>
    
<style lang="scss">
@import './style/variable.scss';
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    @font-face {
        font-family: 'Moe-Mashiro';
        src: url('Moe-Mashiro.eot');
        src: url('Moe-Mashiro.eot?#iefix') format('embedded-opentype'),
            url('./public/Moe-Mashiro.woff2') format('woff2'),
            url('Moe-Mashiro.woff') format('woff'),
            url('Moe-Mashiro.ttf') format('truetype'),
            url('Moe-Mashiro.svg#Moe-Mashiro') format('svg');
        font-weight: normal;
        font-style: normal;
    }

    font-family: 'Moe-Mashiro';

    main {
        background-color: #f0f0f0;
    }

    a {
        text-decoration-line: none;
    }

    ol,
    ul {
        box-sizing: border-box;
    }

    ul,
    li {
        text-align: center;
    }

}
</style>
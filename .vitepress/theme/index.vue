<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:22:24
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-11 17:06:09
 * @FilePath: /vuepress-interview/docs/theme/layout/Layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <Header></Header>
    <main></main>
    <div>layout</div>
</template>
    
<script setup lang='ts'>
import Header from './layout/header/Header.vue';

</script>
    
<style lang="scss">
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    main {
        background-color: #f0f0f0;
    }
    a{
        text-decoration-line: none;
    }
}
</style>
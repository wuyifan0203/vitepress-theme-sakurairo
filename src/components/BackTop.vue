<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-20 18:00:21
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-28 00:35:14
 * @FilePath: /vitepress-theme-sakurairo/src/components/BackTop.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <button id="back-to-top" @click="backToTop" :style="{
        transform: `scale(${scale})`
    }">
        <i class="fa-solid fa-caret-up fa-lg"></i>
    </button>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue';
import { useEventListener } from "../composables";

const backToTop = () => {
    document.documentElement.scrollTop = 0;
}

const scale = ref<number>(0)

const scrollHandle = () => {
    scale.value = document.documentElement.scrollTop > 0 ? 1 : 0;
}

useEventListener('scroll', scrollHandle);

</script>
    
<style lang="scss">
@import url("../styles/variable.scss");

#back-to-top {
    position: fixed;
    right: 10px;
    bottom: 65px;
    z-index: 99;
    padding: 6px 16px;
    font-size: 16px;
    color: #7D7D7D;
    background: rgb(255 255 255 / 65%);
    border: 1px solid #FFF;
    border-radius: $--style_menu_radius;
    outline: 0;
    box-shadow: 0 1px 30px -4px #e8e8e8;
    transition: all 0.8s ease;
    transform: scale(0);

}
</style>
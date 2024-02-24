<!--
 * @Author: wuyifan wuyifan@max-optics.com
 * @Date: 2024-02-20 18:00:21
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-23 14:12:50
 * @FilePath: /vitepress-theme-sakurairo/src/components/BackTop.vue
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <button id="back-to-top" @click="backToTop" :style="{
        transform: `scale(${scale})`
    }">
        <i class="fa-solid fa-caret-up fa-lg"></i>
    </button>
</template>
    
<script setup lang='ts'>
import { onMounted, ref } from 'vue';
import { useEventListener } from "../composables";

const backToTop = () => {
    document.documentElement.scrollTop = 0;
}

const scale = ref<number>(0)

const scrollHandle = () => {
    scale.value = document.documentElement.scrollTop > 0 ? 1 : 0;
}

onMounted(() => {
    useEventListener('scroll', scrollHandle);
})

</script>
    
<style lang="scss">
@import "../styles/variable.scss";

#back-to-top {
    position: fixed;
    bottom: 65px;
    right: 10px;
    font-size: 16px;
    z-index: 99;
    outline: 0;
    box-shadow: 0 1px 30px -4px #e8e8e8;
    background: rgba(255, 255, 255, 0.65);
    color: #7D7D7D;
    padding: 6px 16px;
    border-radius: $--style_menu_radius;
    transition: all 0.8s ease;
    transform: scale(0);
    border: 1px solid #FFFFFF;

}
</style>
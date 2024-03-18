<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-17 19:04:35
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-15 13:38:34
 * @FilePath: /vitepress-theme-sakurairo/src/components/Skin.vue
-->
<template>
    <button id="change-skin" @click="changeSkin" :style="{
        transform:`scale(${scale})`
    }">
        <i class="fa-solid fa-compass-drafting fa-lg fa-flip"></i>
    </button>
    <div>
        
    </div>
</template>
    
<script setup lang='ts'>
import {  ref } from 'vue';
import { useEventListener } from '../composables';

const changeSkin = () => {
    
}
// const showMenu = ref<boolean>(false);
const scale = ref<number>(0);

const scrollHandle = () => {
    scale.value = document.documentElement.scrollTop > 0 ? 1 : 0;
}

useEventListener('scroll', scrollHandle);
</script>
    
<style lang="scss">
@import "../styles/variable.scss";

#change-skin {
    position: fixed;
    right: 10px;
    bottom: 15px;
    z-index: 99;
    padding: 15px;
    color: #7D7D7D;
    background: rgb(255 255 255 / 65%);
    border: 1px solid #FFF;
    border-radius: $--style_menu_radius;
    outline: 0;
    box-shadow: 0 1px 30px -4px #e8e8e8;
    transition: all 0.8s ease !important;
    transform: scale(0);
}
</style>
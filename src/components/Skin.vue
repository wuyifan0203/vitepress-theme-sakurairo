<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-17 19:04:35
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-20 14:43:06
 * @FilePath: /vitepress-theme-sakurairo/src/components/Skin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
import { onMounted, onUnmounted, ref } from 'vue';

const changeSkin = () => {
    
}
const showMenu = ref<boolean>(false);
const scale = ref<number>(0);

const scrollHandle = () => {
    scale.value = document.documentElement.scrollTop > 0 ? 1 : 0;
}

onMounted(() => {
    window.addEventListener('scroll', scrollHandle)
});
onUnmounted(() => {
    window.removeEventListener('scroll', scrollHandle)
})
</script>
    
<style lang="scss">
@import "../styles/variable.scss";

#change-skin {
    position: fixed;
    bottom: 15px;
    right: 10px;
    z-index: 99;
    outline: 0;
    box-shadow: 0 1px 30px -4px #e8e8e8;
    background: rgba(255, 255, 255, 0.65);
    color: #7D7D7D;
    padding: 15px;
    border-radius: $--style_menu_radius;
    transform: scale(0);
    transition: all 0.8s ease !important;
    border: 1px solid #FFFFFF;
}
</style>
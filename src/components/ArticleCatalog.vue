<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-05 14:33:33
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-08 01:00:33
 * @FilePath: /vuepress-interview/src/components/ArticleCatalog.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <div :style="{
        height:tocHeight
    }">
        <div id="toc-container">
        </div>
    </div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref } from 'vue'
import * as tocbot from 'tocbot';


tocbot.init({
    tocSelector: '#toc-container',
    contentSelector: '.article-body',
    headingSelector: 'h1, h2, h3, h4, h5, h6',
})

onMounted(() => {
    // tocbot.refresh();
})

const tocHeight = ref('100px')

defineExpose({
    refresh(){
        nextTick(()=>{
            tocbot.refresh();
        })
    },
    updateHeight(height:number){
        tocHeight.value = height + 'px';
    }
})

onUnmounted(() => {
    tocbot.destroy();
})

</script>

<style lang="scss">
@import url('tocbot/src/scss/tocbot.scss');

#toc-container {
    position: sticky;
    top: 100px;

    &>.toc-list li {
        list-style: none;
    }
}
</style>
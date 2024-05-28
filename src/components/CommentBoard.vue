<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-01 15:07:53
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-08 01:36:49
 * @FilePath: /vitepress-theme-sakurairo/src/components/CommentBoard.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->

<template>
    <Waline :serverURL="serverURL" :path="currentPath" :comment="true" :pageview="true" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useData, withBase } from 'vitepress';
import { Waline } from '@waline/client/component';
import '@waline/client/style';


const { theme, page } = useData()

const serverURL = (() => {
    const url = theme.value.global?.comments?.serverURL;
    if (url) {
        return url;
    } else {
        console.error("请配置评论区的serverURL");
        return '';
    }
})()


const currentPath = computed(() => {
    let filePath = page.value.filePath;
    filePath = filePath.replace(/\.md$/, '.html');
    filePath = '/' + filePath;
    return withBase(filePath);
})


</script>
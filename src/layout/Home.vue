<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-21 15:12:45
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2025-02-17 13:56:35
 * @FilePath: \vitepress-theme-sakurairo\src\layout\Home.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <Cover></Cover>
    <MainBody></MainBody>
</template>

<script setup lang="ts">
import Cover from '../components/Cover.vue';
import MainBody from '../components/MainBody.vue';
import { store } from '../store';
import { useSiteConfig } from '../composables/useConfig';
const site = useSiteConfig();

store.getTotalPageViews(site.waline.serverURL)
</script>
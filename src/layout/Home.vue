<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-21 15:12:45
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-21 16:19:26
 * @FilePath: /vitepress-theme-sakurairo/src/layout/Home.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <Cover></Cover>
    <MainBody></MainBody>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import Cover from '../components/Cover.vue';
import MainBody from '../components/MainBody.vue';
import { Theme } from '../types';
import { useStore } from '../utils';
const theme = useData().theme.value as Theme;

const globalStore = useStore('global');
globalStore.getTotalPageViews(theme.global.comments.serverURL)
</script>
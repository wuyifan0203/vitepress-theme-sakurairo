<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-01 15:07:53
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-05 01:41:03
 * @FilePath: /vuepress-interview/src/components/CommentBoard.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <Waline :serverURL="serverURL" :path="currentPath" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vitepress';
import { Waline } from '@waline/client/component';
import '@waline/client/style';

const { path } = useRoute()

const serverURL = 'https://vercel-git-main-wuyifan0203s-projects.vercel.app/';
const currentPath = computed(() => path);

</script>
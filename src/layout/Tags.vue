<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-15 11:23:22
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-04-16 16:17:16
 * @FilePath: /vitepress-theme-sakurairo/src/layout/Tags.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <div>
        <div>
            <h1></h1>
        </div>
        <ArticleList :list="pages"></ArticleList>
    </div>
</template>

<script lang="ts" setup>
import ArticleList from "../components/ArticleList.vue";
import { Article } from "../types";
const pages:Article[] = []

</script>
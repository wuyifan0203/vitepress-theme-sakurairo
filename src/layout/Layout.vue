<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-21 02:13:51
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-15 13:35:40
 * @FilePath: /vitepress-theme-sakurairo/src/layout/Layout.vue
-->
<template>
    <NotFound v-if="page?.isNotFound" />
    <Home v-else-if="layout === 'home'" />
    <ArticlePage v-else-if="layout === 'page'"></ArticlePage>
    <Tags v-else-if="layout === 'tags'"></Tags>
</template>

<script setup lang='ts'>
import { useData } from 'vitepress';
import NotFound from './NotFound.vue';
import Home from './Home.vue';
import ArticlePage from './Article.vue';
import Tags from './Tags.vue';
import { computed } from 'vue';

const { page, theme, site } = useData();
console.log("page", page.value);
console.log("theme", theme.value);
console.log("site", site.value);


const layout = computed(() => page.value.frontmatter.layout);



</script>
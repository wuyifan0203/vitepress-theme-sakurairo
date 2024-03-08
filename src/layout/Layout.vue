<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-21 02:13:51
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-08 17:08:17
 * @FilePath: /vitepress-theme-sakurairo/src/layout/Layout.vue
-->
<template>
    <NotFound v-if="page?.isNotFound" />
    <Home v-else-if="path === site.base" />
    <ArticlePage v-else-if="layout === 'page'"></ArticlePage>
</template>

<script setup lang='ts'>
import { useData, useRoute } from 'vitepress';
import NotFound from './NotFound.vue';
import Home from './Home.vue';
import ArticlePage from './Article.vue';
import { computed } from 'vue';
import { fetchApi } from '../api';
import { useAfterRouterChange } from '../composables/useRouter';

const { page, theme, site } = useData()
console.log("page", page.value);
console.log("theme", theme.value);
console.log("site", site.value);

const api = fetchApi.getInstance('');
console.log(api,2);


useAfterRouterChange(async () => {
    const res = await api.getPageViews(['/vitepress-theme-sakurairo/posts/introduce.html'])

    console.log(res);
})


const route = useRoute();

const path = computed(() => route.path);
const layout = computed(() => page.value.frontmatter.layout);



</script>
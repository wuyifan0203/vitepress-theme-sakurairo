<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-21 02:13:51
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-22 02:07:41
 * @FilePath: /vitepress-theme-sakurairo/src/layout/Layout.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <NotFound v-if="page?.isNotFound" />
    <Home v-else-if="path === site.base" />
    <!-- <ArticlePage></ArticlePage> -->
</template>
    
<script setup lang='ts'>
import { useData, useRouter, useRoute } from 'vitepress';
import NotFound from './NotFound.vue';
import Home from './Home.vue';
import ArticlePage from './Article.vue';
const { page, theme, site } = useData()
console.log("page", page.value);
console.log("theme", theme.value);
console.log("site", site.value);

const router = useRouter();
const { path } = useRoute();

console.log(path,7777);


console.log("router", router);
console.log("route",  useRoute());


</script>
    
<style></style>
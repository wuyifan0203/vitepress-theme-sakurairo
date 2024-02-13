<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:35:42
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-13 22:31:20
 * @FilePath: /vuepress-interview/docs/.vitepress/theme/components/MianBody.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <section>
        <figure class="cover-image" :style="{
            backgroundImage: `url(${theme.cover.src})`,
            height: '100vh',
        }">
        </figure>
    </section>
</template>
    
<script setup lang='ts'>
import { useData } from 'vitepress';
const { theme } = useData();

console.log(theme.value);


</script>

<style lang="scss" scoped>
section {
    figure {
        margin: 0;
        padding: 0;
        width: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-size: cover;
        z-index: -1;
    }
}
</style>
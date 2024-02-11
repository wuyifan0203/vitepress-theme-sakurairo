<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:30:35
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-11 18:19:42
 * @FilePath: /vuepress-interview/docs/.vitepress/theme/components/Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <header>
        <SiteBranding></SiteBranding>
        <NavMenu></NavMenu>
        <div>
            <input type="search" name="站内搜索" id="">
        </div>
    </header>
</template>
    
<script setup lang='ts'>
import SiteBranding from './components/SiteBranding.vue';
import NavMenu from './components/NavMenu.vue';

</script>
    
<style lang="scss" scoped>
header{
    background-color: unset;
}
header:hover{
    background-color: #ffffff;
}
</style>
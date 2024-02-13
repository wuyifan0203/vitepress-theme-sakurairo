<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:30:35
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-13 21:24:38
 * @FilePath: /vuepress-interview/docs/.vitepress/theme/components/Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <header>
        <SiteBranding class="header-branding"></SiteBranding>
        <span class="header-search">
            <i class="fa fa-search" />
        </span>
        <NavMenu class="header-nav"></NavMenu>
    </header>
</template>
    
<script setup lang='ts'>
import SiteBranding from './components/SiteBranding.vue';
import NavMenu from './components/NavMenu.vue';

</script>
    
<style lang="scss" scoped>
header {
    position: fixed;
    z-index: 2;
    width: 100%;
    left: 0px;
    top: 0px;
    height: 75px;
    transition: all 1s ease !important;

    .header-branding {
        margin-left: 30px;
        margin-top: 10px;
    }

    .header-nav {
        float: right;
        margin-top: 20px;
    }

    .header-search {
        float: right;
        margin: 25px 30px 0 30px;

        transition: all .3s ease-in-out;
        font-weight: var(--global-font-weight);
        animation: searchbox 1s;
        border: 2px solid transparent;
        font-size: 18px;
        border-radius: 10px;
        padding: 9px 9px;

        &:hover {
            color: orange;
            -webkit-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
            border: 2px solid orange;
        }


    }
}

@keyframes searchbox {
    0% {
        opacity: 0;
        transform: translateX(30px);
    }

    100% {
        opacity: 1;
        transform: translateX(0);
    }
}


header:hover {
    background-color: rgba($color: #ffffff, $alpha: 0.9);
}
</style>
<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-10 20:30:35
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-26 17:19:44
 * @FilePath: /vitepress-theme-sakurairo/src/components/Header.vue
-->
<template>
    <header ref="headerRef" :class="navClass">
        <SiteBranding class="header-branding"></SiteBranding>
        <span class="header-search">
            <i class="fa fa-search" />
        </span>
        <NavMenu class="header-nav"></NavMenu>
    </header>
</template>
    
<script setup lang='ts'>
import { ref, computed, Ref } from 'vue';
import { useData } from 'vitepress';
import SiteBranding from './SiteBranding.vue';
import NavMenu from './NavMenu.vue';
import { useEventListener } from "../composables";
import { Theme } from '../types';
import nProgress from 'nprogress';

const theme = useData().theme.value as Theme;
const headerRef: Ref<null | HTMLElement> = ref(null);
const navClass = computed(() => {
    return (theme.nav.style ?? 'sakura') === 'sakura' ? 'sakura' : 'sakurairo';
})

const scrollHandle = () => {
    if (document.documentElement.scrollTop > 0) {
        headerRef.value!.classList.add('showNav')
    } else {
        headerRef.value!.classList.remove('showNav');
        nProgress.done();
    }
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const width = document.documentElement.scrollTop / (document.body.clientHeight - viewportHeight)
    nProgress.set(width - 0.00001);
}

useEventListener('scroll', scrollHandle);


</script>
    
<style lang="scss" scoped>
@import url("../styles/variable.scss");
@import url("../styles/animate.scss");

header {
    position: fixed;
    z-index: 1;
    height: 75px;
    transition: all 1s ease;
    word-break: keep-all;

    .header-branding {
        margin-top: 10px;
        margin-left: 30px;
    }

    .header-nav {
        float: right;
        margin-top: 20px;
    }

    .header-search {
        float: right;
        padding: 9px;
        margin: 20px 30px 0;
        font-size: 18px;
        border: 2px solid transparent;
        border-radius: 10px;
        transition: all .3s ease-in-out;
        font-weight: var(--global-font-weight);
        animation: searchbox 1s;

        &:hover {
            color: $--theme-skin-active;
            border: 2px solid $--theme-skin-active;
            transition: all .3s ease-in-out;
        }


    }

    &:hover {
        background-color: rgba($color: #fff, $alpha: 70%);
    }
}

.sakurairo {
    top: 2.5%;
    left: 2.5%;
    width: 95%;
    border-radius: 20px;
}

.sakura {
    top: 0;
    left: 0;
    width: 100%;
}

.showNav {
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    background: rgb(255 255 255 / 70%);
    border-radius: 0;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    transition: all .8s ease;
    border-bottom: 1.5px solid #fff;
}
</style>
<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:30:35
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-15 20:43:00
 * @FilePath: /vuepress-interview/docs/.vitepress/theme/components/Header.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
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
import { ref, computed, onMounted, onUnmounted, Ref } from 'vue';
import { useData } from 'vitepress';
import SiteBranding from './components/SiteBranding.vue';
import NavMenu from './components/NavMenu.vue';
const { theme } = useData();
const headerRef:Ref<null|HTMLElement> = ref(null);
const navClass = computed(() => {
    return (theme.value?.navStyle ?? 'sakura') === 'sakura' ? 'sakura' : 'sakurairo';
})
const scrollHandle = (e: Event) => {    
    document.documentElement.scrollTop > 0 ? headerRef.value!.classList.add('showNav') : headerRef.value!.classList.remove('showNav');
}

onMounted(() => {
    window.addEventListener('scroll', scrollHandle)
});
onUnmounted(()=>{
    window.removeEventListener('scroll', scrollHandle)
})


</script>
    
<style lang="scss" scoped>
@import '../../style/variable.scss';
@import '../../style/animate.scss';

header {
    position: fixed;
    z-index: 1;

    height: 75px;
    transition: all 1s ease;
    word-break: keep-all;

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
        margin: 20px 30px 0 30px;

        transition: all .3s ease-in-out;
        font-weight: var(--global-font-weight);
        animation: searchbox 1s;
        border: 2px solid transparent;
        font-size: 18px;
        border-radius: 10px;
        padding: 9px 9px;

        &:hover {
            color: $--theme-skin-active;
            -webkit-transition: all .3s ease-in-out;
            transition: all .3s ease-in-out;
            border: 2px solid $--theme-skin-active;
        }


    }

    &:hover {
        background-color: rgba($color: #ffffff, $alpha: 0.7);
    }
}

.sakurairo {
    left: 2.5%;
    top: 2.5%;
    width: 95%;
    border-radius: 20px;
}

.sakura {
    width: 100%;
    left: 0px;
    top: 0px;
}

.showNav {
    background: rgba(255, 255, 255, .7);
    border-bottom: 1.5px solid #fff;
    transition: all .8s ease;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 0;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .1);
}
</style>
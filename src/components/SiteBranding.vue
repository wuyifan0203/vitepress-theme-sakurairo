<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-11 15:57:05
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-14 18:05:35
 * @FilePath: /vitepress-theme-sakurairo/src/components/SiteBranding.vue
-->
<template>
    <a :href="withBase('/')" class="site-branding">
        <div class="logo-link" v-if="theme.global.logo">
            <img v-lazy="theme.global.logo" alt="">
        </div>
        <ruby v-else>
            <span class="pre">奈雪</span>
            <span class="center">e</span>
            <span>茶</span>
            <rp></rp>
            <rt>一个知名的奶茶</rt>
            <rp></rp>
        </ruby>
    </a>
</template>

<script setup lang='ts'>
import { useData, withBase } from 'vitepress';
import type { Theme } from '../types/theme'
import { Ref } from 'vue';
const theme: Ref<Theme> = useData().theme;


</script>

<style lang="scss">
@import url("../styles/variable.scss");
@import url("../styles/animate.scss");

.site-branding {
    display: inline-block;
    font-size: 25px;
    color: #464646;
    transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    line-height: 56px;
    font-weight: 800;

    ruby {
        -webkit-ruby-position: after;
        ruby-position: under;

        .pre {
            padding-top: 5px;
            padding-bottom: 2px;
            background-color: rgb(255 255 255 / 50%);
            border-radius: 9px;
            line-height: 25px;
            text-size-adjust: 100%;
        }

        .center {
            display: inline-block;
            margin-left: 5px;
        }

        rt {
            font-size: 10px;
            opacity: 0;
            transform: translateY(-13px);
        }
    }

    .logo-link {
        display: inline-block;

        img {
            width: 35px;
            height: 35px;
        }
    }
}

.site-branding:hover {
    color: $--theme-skin-active;

    .pre {
        color: white;
        background-color: $--theme-skin-active;
    }

    .center {
        animation: spin 1.5s linear infinite;
    }

    rt {
        opacity: 1;
        transition-duration: 0.5s, 0.5s;
    }
}
</style>
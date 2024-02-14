<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-11 15:57:05
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-13 17:30:25
 * @FilePath: /vuepress-interview/.vitepress/theme/layout/header/components/SiteBranding.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <a href="" class="site-branding">
        <div class="logolink" v-if="theme.logo">
            <img src="" alt="">
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
import { useData } from 'vitepress'
const { theme } = useData();


</script>
    
<style lang="scss" scoped>
@import '../../../style/variable.scss';

.site-branding {
    display: inline-block;
    color: #464646;
    font-size: 25px;
    line-height: 56px;
    font-weight: 800;
    transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;

    ruby {
        ruby-position: under;
        -webkit-ruby-position: after;

        .pre {
            border-radius: 9px;
            padding-bottom: 2px;
            padding-top: 5px;
            line-height: 25px;
            background-color: rgba(255, 255, 255, 0.5);
            text-size-adjust: 100%;
        }

        .center {
            display: inline-block;
            margin-left: 5px;
        }

        rt {
            opacity: 0;
            font-size: 10px;
            transform: translateY(-13px);
        }
    }

    .logolink {
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
        background-color: $--theme-skin-active;
        color: white;
    }

    .center {
        -webkit-animation: spin 1.5s linear infinite;
        animation: spin 1.5s linear infinite;
    }

    rt {
        opacity: 1;
        transition-duration: 0.5s, 0.5s;
    }
}


@keyframes spin {
    0% {
        transform: rotate(0deg)
    }

    100% {
        transform: rotate(360deg)
    }
}
</style>
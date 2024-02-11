<template>
    <a href="" class="site-branding">
        <div class="logolink" v-if="theme.logo">
            <img src="" alt="">
        </div>
        <ruby>
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
.site-branding {
    display: inline-block;
    color: #464646;
    font-size: 25px;
    line-height: 56px;
    font-weight: 800;
    transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;

    .logolink {
        img {
            width: 35px;
            height: 35px;
        }
    }

    .pre {

        border-radius: 9px;
        padding-bottom: 2px;
        padding-top: 5px;
        line-height: 25px;
        background-color: rgba(255, 255, 255, 0.5);

    }

    .center {
        display: inline-block;
        margin-left: 5px;
    }
}

.site-branding:hover {

    color: orange;


    .pre {
        background-color: orange;
        color: white;
    }

    .center {
        -webkit-animation: spin 1.5s linear infinite;
        animation: spin 1.5s linear infinite;
    }
    ruby{
        rt{
            font-size: 10px;
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

}
</style>
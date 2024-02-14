<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:35:42
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-14 19:15:53
 * @FilePath: /vuepress-interview/docs/.vitepress/theme/components/MianBody.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <section>
        <figure class="cover-image" :style="{
            backgroundImage: `url(${theme.cover.src})`,
            height: '100vh',
        }">
            <div class="cover-focus-info">
                <h1 :data-text="theme.cover.title" v-if="theme.cover.title !== ''">
                    {{ theme.cover.title }}
                </h1>
                <div class="cover-avatar" v-else>
                    <a href="./">
                        <img :src="theme.cover.avatar" alt="">
                    </a>
                </div>
                <div class="cover-container">
                    <div class="cover-comtainer-info">
                        <i class="fa fa-quote-left"></i>
                        <span class="element"></span>
                        <i class="fa fa-quote-right"></i>
                        <p></p>
                    </div>
                </div>
            </div>
        </figure>
    </section>
</template>
    
<script setup lang='ts'>
import { useData } from 'vitepress';
import { onMounted } from 'vue';
import Typed from 'typed.js'

const { theme } = useData();

onMounted(() => {
    new Typed('.element', {
        strings: theme.value.cover.typed.strings || ["First sentence.", "Second sentence."],
        typeSpeed: 140,
        backSpeed: 50,
        loop: false,
        showCursor: true
    });
})


console.log(theme.value);


</script>

<style lang="scss" scoped>
@import '../../style/variable.scss';

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

        .cover-focus-info {
            position: relative;
            max-width: 800px;
            padding: 0 10px;
            top: 49.3%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            text-align: center;
            z-index: 5;
            -webkit-transition: .4s ease all;
            -moz-transition: .4s ease all;
            -o-transition: .4s ease all;
            transition: 4s ease all;

            h1 {
                position: relative;
                mix-blend-mode: lighten;
                font-size: 90px;
                color: white;
                margin: auto;
                text-transform: none;
                clear: both;
                transition: all 0.8s ease;

                &::before {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    width: 100%;
                    background: rgba(0, 0, 0, 0);
                    clip: rect(0, 0, 0, 0);
                    left: -1px;
                    text-shadow: 1px 0 #ff3f1a;
                    margin-top: initial;
                    visibility: visible;
                    height: initial;
                }

                &::after {
                    content: attr(data-text);
                    position: absolute;
                    top: 0;
                    width: 100%;
                    background: rgba(0, 0, 0, 0);
                    clip: rect(0, 0, 0, 0);
                    left: 1px;
                    text-shadow: -1px 0 #00a7e0;
                }

                &:hover::before {
                    text-shadow: 4px 0 #ff3f1a;
                    animation: cover-h1-title-red .8s infinite ease-in-out alternate-reverse;
                }

                &:hover::after {
                    text-shadow: -5px 0 #00a7e0;
                    animation: cover-h1-title-blue .8s infinite ease-in-out alternate-reverse;
                }


            }

            .cover-avatar {
                img {
                    border-radius: 100px;
                    width: 130px;
                    height: 130px;
                    padding: 5px;
                    opacity: 1;
                    -webkit-transform: rotate(0);
                    -moz-transform: rotate(0);
                    -o-transform: rotate(0);
                    -ms-transform: rotate(0);

                    transition: all .8s ease;
                    -webkit-transition: all ease 1s;
                    -moz-transition: all ease 1s;
                    -o-transition: all ease 1s;

                    -moz-animation: fadeInDown 1.8s;
                    -webkit-animation: fadeInDown 1.8s;
                    animation: fadeInDown 1.8s;

                    &:hover {
                        transform: rotate(360deg);
                        -webkit-transform: rotate(360deg);
                        -moz-transform: rotate(360deg);
                    }
                }


            }

            .cover-container {
                display: grid;

                .cover-comtainer-info {
                    -webkit-animation: fadeInDown 1.8s;
                    animation: fadeInDown 1.8s;
                    border-radius: 15px;
                    grid-row: 1;
                    grid-column: 1;
                    width: 65%;
                    margin: auto;
                    font-size: 16px;
                    color: $--theme-skin;
                    background: rgba(255, 255, 255, .8);
                    padding: 15px;
                    margin-top: 22px;
                    letter-spacing: 0;
                    line-height: 30px;
                    border-radius: 15px;
                    box-sizing: initial;
                    white-space: nowrap;
                    font-size: 16px;
                    font-weight: 300;
                    backdrop-filter: blur(10px);
                    transition: all .8s ease;
                }

                p {
                    -moz-animation: fadeInDown 1.8s;
                    -webkit-animation: fadeInDown 1.8s;
                    animation: fadeInDown 1.8s;
                    margin: 0;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    transition: all 0.8s ease;
                }

            }
        }

    }
}

@keyframes cover-h1-title-red {
    0% {
        clip: rect(36px, 9999px, 9px, 0);
    }

    25% {
        clip: rect(25px, 9999px, 99px, 0);
    }

    50% {
        clip: rect(50px, 9999px, 102px, 0);
    }

    75% {
        clip: rect(30px, 9999px, 92px, 0);
    }

    100% {
        clip: rect(91px, 9999px, 98px, 0);
    }
}

@keyframes cover-h1-title-blue {
    0% {
        top: -1px;
        left: 1px;
        clip: rect(65px, 9999px, 119px, 0);
    }

    25% {
        top: -6px;
        left: 4px;
        clip: rect(79px, 9999px, 19px, 0);
    }

    50% {
        top: -3px;
        left: 2px;
        clip: rect(68px, 9999px, 11px, 0);
    }

    75% {
        top: 0;
        left: -4px;
        clip: rect(95px, 9999px, 53px, 0);
    }

    100% {
        top: -1px;
        left: -1px;
        clip: rect(31px, 9999px, 149px, 0);
    }
}

@keyframes fadeInDown {
    0% {
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        opacity: 0
    }

    50% {
        -moz-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
        opacity: 0
    }

    100% {
        -moz-transform: translateY(0%);
        -ms-transform: translateY(0%);
        -webkit-transform: translateY(0%);
        transform: translateY(0%);
        opacity: 1
    }
}
</style>
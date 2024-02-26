<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-10 20:35:42
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-21 01:58:07
 * @FilePath: /vitepress-theme-sakurairo/src/components/Cover.vue
-->
<template>
    <section ref="coverRef">
        <figure class="cover-image" :style="{
            backgroundImage: `url(${theme.cover.background?.src()})`,
            height: '100vh',
        }">
            <div class="cover-focus-info">
                <h1 :data-text="theme.cover.title" v-if="theme.cover.title !== ''">
                    {{ theme.cover.title }}
                </h1>
                <div class="cover-avatar" v-else>
                    <a href="./">
                        <img :src="theme.global.avatar" alt="">
                    </a>
                </div>
                <div class="cover-container">
                    <div class="cover-container-info">
                        <i class="fa fa-quote-left"></i>
                        <span class="element"></span>
                        <i class="fa fa-quote-right"></i>
                        <p>{{ theme.cover.description }}</p>
                    </div>
                </div>
                <ul class="cover-social-links" v-if="theme.cover.socialLinks.length">
                    <li>
                        <img :src="matchIcon('pre')" alt="">
                    </li>
                    <li v-for="({ icon, link }, index) in theme.cover.socialLinks" :key="index">
                        <a :href="link">
                            <img :src="matchIcon(icon)" alt="">
                        </a>
                    </li>
                    <li>
                        <img :src="matchIcon('next')" alt="">
                    </li>
                </ul>
            </div>
        </figure>
        <div class="cover-wave1" :style="{
            background: `url(${wave1}) repeat-x`
        }"></div>
        <div class="cover-wave2" :style="{
            background: `url(${wave2}) repeat-x`
        }"></div>
        <div class="cover-head-down" @click="spaceHandle">
            <HeadDown class="cover-head-down-icon"></HeadDown>
        </div>
    </section>
</template>
    
<script setup lang='ts'>
import { useData } from 'vitepress';
import { Ref, ref } from 'vue'
import { onMounted } from 'vue';
import Typed from 'typed.js';
import HeadDown from '../assets/icon/head_down.vue';
import { Theme } from "../types/theme";
//icon
// TODO 这一个零时做法将内置主题图片导入会找不到路径
import { bilibili } from '../assets/icon/bilibili';
import { douyin } from '../assets/icon/douyin'
import { csdn } from '../assets/icon/csdn';
import { next } from '../assets/icon/next';
import { pre } from '../assets/icon/pre';
import { dingding } from '../assets/icon/dingding';
import { discord } from '../assets/icon/discord';
import { douban } from '../assets/icon/douban';
import { email } from '../assets/icon/email';
import { facebook } from '../assets/icon/facebook';
import { gitee } from '../assets/icon/gitee';
import { github } from '../assets/icon/github';
import { instagram } from '../assets/icon/instagram';
import { jianshu } from '../assets/icon/jianshu';
import { juejin } from '../assets/icon/juejin';
import { kuaishou } from '../assets/icon/kuaishou';
import { line } from '../assets/icon/line';
import { linkedin } from '../assets/icon/linkedin';
import { lofter } from '../assets/icon/lofter';
import { qq } from '../assets/icon/qq';
import { skype } from '../assets/icon/skype';
import { steam } from '../assets/icon/steam';
import { telegram } from '../assets/icon/telegram';
import { twitter } from '../assets/icon/twitter';
import { vk } from '../assets/icon/vk';
import { wechat } from '../assets/icon/wechat';
import { weibo } from '../assets/icon/weibo';
import { youtube } from '../assets/icon/youtube';
import { zhihu } from '../assets/icon/zhihu';
import { neteastcloud } from '../assets/icon/neteasecloud';
import { wave1 } from '../assets/image/wave1';
import { wave2 } from '../assets/image/wave2';

const theme: Ref<Theme> = useData().theme;

const basePath = '../assets/icon/';
const iconMap = {
    next,
    pre,
    bilibili,
    csdn,
    douban,
    dingding,
    discord,
    douyin,
    email,
    facebook,
    gitee,
    github,
    instagram,
    jianshu,
    juejin,
    kuaishou,
    line,
    linkedin,
    lofter,
    neteastcloud,
    qq,
    skype,
    steam,
    telegram,
    twitter,
    vk,
    weibo,
    wechat,
    youtube,
    zhihu,
}

const coverRef = ref<HTMLElement | null>();

const matchIcon = (icon: string) => {
    return (iconMap as any)[icon] || icon
}

const spaceHandle = () => {
    if (coverRef.value) {
        document.documentElement.scrollTop = coverRef.value.clientHeight
    }

}

onMounted(() => {
    if (theme.value.cover.typed) {
        new Typed('.element', {
            strings: theme.value.cover.typed.strings || ["First sentence.", "Second sentence."],
            typeSpeed: 140,
            backSpeed: 50,
            loop: false,
            showCursor: true
        });
    }
})
</script>

<style lang="scss">
@import "../styles/variable.scss";
@import "../styles/animate.scss";

section {
    overflow: hidden;
    position: relative;

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

                .cover-container-info {
                    -webkit-animation: fadeInDown 1.8s;
                    animation: fadeInDown 1.8s;
                    border-radius: 15px;
                    grid-row: 1;
                    grid-column: 1;
                    width: 65%;
                    margin: auto;
                    font-size: 16px;
                    color: $--theme-skin;
                    background: $--cover-info-background;
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

            .cover-social-links {
                height: 32px;
                margin-top: 30px;
                margin-left: 10px;
                list-style: none;
                display: inline-block;
                padding: 0;

                li {
                    float: left;
                    margin-right: 10px;

                    img {
                        height: 40px;
                        width: 40px;
                        padding: 9px;
                        background: $--cover-info-background;
                        transition: all 0.8s ease;
                        backdrop-filter: blur(10px);
                        -moz-animation: fadeInDown 2s;
                        -webkit-animation: fadeInDown 2s;
                        animation: fadeInDown 2s;
                        border-radius: 10px;
                    }
                }
            }
        }

    }

    .cover-wave1,
    .cover-wave2 {
        position: absolute;
        bottom: 0;
        width: 400%;
        opacity: 1;
        transition-duration: .4s, .4s;
        animation-name: move2;
        animation-fill-mode: backwards;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }

    .cover-wave1 {
        height: 65px;
        left: -236px;
        z-index: 4;
        animation-duration: 200s;
    }

    .cover-wave2 {
        height: 80px;
        left: 0;
        z-index: 3;
        animation-duration: 120s;
    }

    .cover-head-down {
        position: absolute;
        bottom: 50px;
        left: calc(50% - 42px);
        z-index: 5;
        animation-name: float-down;
        animation-duration: 5s;
        animation-iteration-count: infinite;

        .cover-head-down-icon {
            width: 80px;
            height: 80px;
        }
    }
}
</style>
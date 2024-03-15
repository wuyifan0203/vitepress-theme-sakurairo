<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-10 20:35:42
 * @LastEditors: wuyifan0203 1208097313@qq.com
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
@import url("../styles/variable.scss");
@import url("../styles/animate.scss");

section {
    position: relative;
    overflow: hidden;

    figure {
        z-index: -1;
        padding: 0;
        margin: 0;
        width: 100%;
        background-position: top center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: scroll;

        .cover-focus-info {
            position: relative;
            top: 49.3%;
            left: 50%;
            padding: 0 10px;
            max-width: 800px;
            text-align: center;
            transition: 4s ease all;
            transform: translate(-50%, -50%);

            h1 {
                position: relative;
                clear: both;
                margin: auto;
                font-size: 90px;
                color: white;
                transition: all 0.8s ease;
                mix-blend-mode: lighten;
                text-transform: none;

                &::before {
                    position: absolute;
                    top: 0;
                    left: -1px;
                    margin-top: initial;
                    width: 100%;
                    height: initial;
                    background: rgb(0 0 0 / 0%);
                    visibility: visible;
                    text-shadow: 1px 0 #ff3f1a;
                    content: attr(data-text);
                    clip: rect(0, 0, 0, 0);
                }

                &::after {
                    position: absolute;
                    top: 0;
                    left: 1px;
                    width: 100%;
                    background: rgb(0 0 0 / 0%);
                    text-shadow: -1px 0 #00a7e0;
                    content: attr(data-text);
                    clip: rect(0, 0, 0, 0);
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
                    padding: 5px;
                    width: 130px;
                    height: 130px;
                    border-radius: 100px;
                    opacity: 1;
                    transition: all ease 1s;
                    transition: all .8s ease;
                    transform: rotate(0);
                    animation: fadeInDown 1.8s;

                    &:hover {
                        transform: rotate(360deg);
                    }
                }


            }

            .cover-container {
                display: grid;

                .cover-container-info {
                    padding: 15px;
                    margin: auto;
                    margin-top: 22px;
                    width: 65%;
                    font-size: 16px;
                    white-space: nowrap;
                    color: $--theme-skin;
                    background: $--cover-info-background;
                    border-radius: 15px;
                    transition: all .8s ease;
                    animation: fadeInDown 1.8s;
                    grid-row: 1;
                    grid-column: 1;
                    letter-spacing: 0;
                    line-height: 30px;
                    box-sizing: initial;
                    font-weight: 300;
                    backdrop-filter: blur(10px);
                }

                p {
                    overflow: hidden;
                    margin: 0;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    transition: all 0.8s ease;
                    animation: fadeInDown 1.8s;
                }

            }

            .cover-social-links {
                display: inline-block;
                padding: 0;
                margin-top: 30px;
                margin-left: 10px;
                height: 32px;
                list-style: none;

                li {
                    float: left;
                    margin-right: 10px;

                    img {
                        padding: 9px;
                        width: 40px;
                        height: 40px;
                        background: $--cover-info-background;
                        border-radius: 10px;
                        transition: all 0.8s ease;
                        backdrop-filter: blur(10px);
                        animation: fadeInDown 2s;
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
        left: -236px;
        z-index: 4;
        height: 65px;
        animation-duration: 200s;
    }

    .cover-wave2 {
        left: 0;
        z-index: 3;
        height: 80px;
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
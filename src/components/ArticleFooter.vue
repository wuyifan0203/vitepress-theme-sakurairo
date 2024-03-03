<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-03-04 00:40:09
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-04 01:21:29
 * @FilePath: /vuepress-interview/src/components/ArticleFooter.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="article-footer ">
        <div class="footer-licenses">
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/deed.zh-hans" target="_blank">
                <i class="fa-brands fa-creative-commons"></i>
            </a>
        </div>
        <div class="footer-reward">
            <i class="fa-solid fa-piggy-bank fa-sm"></i>
            <div class="reward-main">
                <ul class="reward-row">
                    <li v-for="item in theme.global.reward">
                        <img :src="item.src()" alt="">
                    </li>
                </ul>

            </div>
        </div>
        <section class="author-profile">
            <div class="author-avatar">
                <a href="">
                    <img :src="theme.global.avatar" alt="">
                </a>
            </div>
            <div class="author-meta">
                <a href="">
                    {{ theme.global.author }}
                </a>
            </div>
            <div class="description">
                <i class="fa-solid fa-feather"></i>
                {{ theme.global.description }}
            </div>
            <div class="modified-time">
                <i class="fa-solid fa-calendar-day"></i>
                最后更新于 {{ props.page.update }}
            </div>
            <div class="post-tags">
                <i class="fa-solid fa-tag"></i>
                <a href="" v-for="item in props.page.tags" :key="item">{{ item }}</a>
            </div>
        </section>
    </div>
</template>
    
<script setup lang='ts'>
import { PropType } from 'vue'
import { useData } from 'vitepress';
import { PageFormatter, Theme } from '../types';
import { it } from 'node:test';

const props = defineProps({
    page: {
        required: true,
        type: Object as PropType<PageFormatter>,
        default: () => { }
    }
})
const theme = useData().theme.value as Theme;
</script>
    
<style lang="scss" scoped>
.article-footer {
    padding: 30px 0;
    width: 98%;
    height: auto;
    left: 50%;
    margin-left: -49%;
    position: relative;
    float: left;
    border: none;
    margin-top: 50px;

    .footer-licenses,
    .footer-reward,
    .author-avatar,
    .author-meta,
    .description,
    .modified-time,
    .post-tags {
        float: left;
        margin: 5px;
        box-shadow: 0 1px 30px -4px #e8e8e8;
        border-radius: 10px;
        background: rgba(255, 255, 255, 0.5);
        -webkit-transition: all .8s;
        transition: all .8s;
        border: 1px solid #FFFFFF;
        cursor: pointer;
        text-align: center;
        font-weight: var(--global-font-weight);
        display: block;
    }

    .footer-licenses:hover,
    .footer-reward:hover,
    .author-avatar:hover,
    .author-meta:hover,
    .description:hover,
    .post-tags:hover {
        box-shadow: 0 1px 20px 10px #e8e8e8;
        background: rgba(255, 255, 255, 0.8);
        -webkit-transition: all .8s;
        transition: all .8s;
    }


    .footer-licenses,
    .footer-reward {
        color: #7D7D7D;
        padding: 6px 12.5px;
        font-size: 24px;
        position: inherit;
        text-transform: uppercase;

        .reward-main {
            position: absolute;
            left: -1%;
            margin: 0;
            padding: 15px 0 0;
            width: 400px;
            background: 0 0;
            display: none;
            z-index: 2;
            animation: main .4s;

            .reward-row {
                margin: 0 auto;
                padding: 20px 15px 10px;
                background: rgba(255, 255, 255, 0.8);
                display: block;
                border-radius: 10px;
                cursor: auto;
                margin-left: 3%;
                border: 1px solid #FFFFFF;

                li {
                    list-style-type: none;
                    padding: 0 12px;
                    display: inline-block;

                    img {
                        width: 150px;
                        max-width: 150px;
                        border-radius: 3px;
                        position: relative;
                    }
                }
            }
        }

        &:hover {
            .reward-main {
                display: block;
            }
        }
    }



    .author-profile {
        float: left;

        .author-avatar {
            overflow: hidden;
            padding: 9px 9.5px;
            width: 50px;

            a {
                display: block;
                float: left;

                img {
                    max-width: 100%;
                    border-radius: 100%;
                    float: left;
                    -webkit-transition: all .8s;
                    transition: all .8s;
                }
            }
        }

        .author-meta,
        .description,
        .modified-time,
        .post-tags {
            padding: 12px 16px;
        }

        .modified-time i,
        .description i,
        .post-tags i {
            margin-right: 10px;
        }

        .post-tags a {
            margin-right: 5px;
        }

    }

    .footer-pagination {
        float: left;
        margin-top: 30px;
    }
}
</style>
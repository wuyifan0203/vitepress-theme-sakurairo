<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-03-04 00:40:09
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-18 09:42:12
 * @FilePath: /vitepress-theme-sakurairo/src/components/ArticleFooter.vue
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
                    <li v-for="(item, index) in theme.global.reward" :key="index">
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
                最后更新于 {{ page.update }}
            </div>
            <div class="post-tags">
                <i class="fa-solid fa-tag"></i>
                <a href="" v-for="item in page.tags" :key="item">{{ item }}</a>
            </div>
        </section>
    </div>
</template>
    
<script setup lang='ts'>
import { PropType, computed } from 'vue'
import { useData } from 'vitepress';
import { DefaultPageFormatter, Theme } from '../types';

const props = defineProps({
    page: {
        required: true,
        type: Object as PropType<DefaultPageFormatter>,
        default: () => { }
    }
})

const page = computed(()=>props.page)

const theme = useData().theme.value as Theme;
</script>
    
<style lang="scss" scoped>
.article-footer {
    position: relative;
    left: 50%;
    float: left;
    padding: 30px 0;
    margin-top: 50px;
    margin-left: -49%;
    width: 98%;
    height: auto;
    border: none;

    .footer-licenses,
    .footer-reward,
    .author-avatar,
    .author-meta,
    .description,
    .modified-time,
    .post-tags {
        display: block;
        float: left;
        margin: 5px;
        text-align: center;
        background: rgb(255 255 255 / 50%);
        border: 1px solid #FFF;
        border-radius: 10px;
        box-shadow: 0 1px 30px -4px #e8e8e8;
        transition: all .8s;
        cursor: pointer;
        font-weight: var(--global-font-weight);
    }

    .footer-licenses:hover,
    .footer-reward:hover,
    .author-avatar:hover,
    .author-meta:hover,
    .description:hover,
    .post-tags:hover {
        background: rgb(255 255 255 / 80%);
        box-shadow: 0 1px 20px 10px #e8e8e8;
        transition: all .8s;
    }


    .footer-licenses,
    .footer-reward {
        position: inherit;
        padding: 6px 12.5px;
        font-size: 24px;
        color: #7D7D7D;
        text-transform: uppercase;

        .reward-main {
            position: absolute;
            left: -1%;
            z-index: 2;
            display: none;
            padding: 15px 0 0;
            margin: 0;
            width: 400px;
            background: 0 0;
            animation: main .4s;

            .reward-row {
                display: block;
                padding: 20px 15px 10px;
                margin: 0 auto;
                margin-left: 3%;
                background: rgb(255 255 255 / 80%);
                border: 1px solid #FFF;
                border-radius: 10px;
                cursor: auto;

                li {
                    display: inline-block;
                    padding: 0 12px;
                    list-style-type: none;

                    img {
                        position: relative;
                        width: 150px;
                        max-width: 150px;
                        border-radius: 3px;
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
                    float: left;
                    max-width: 100%;
                    border-radius: 100%;
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
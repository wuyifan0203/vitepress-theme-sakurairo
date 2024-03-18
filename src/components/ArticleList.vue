<template>
    <div class="article-list">
        <ul class="clearfix">
            <li v-for="(item, index) in list" :key="index" class="article-block">
                <article>
                    <div class="article-cover" :class="`article-list-${theme.articleBoard.layout}`">
                        <a :href="withBase(item.url)">
                            <!-- <img :src="item.cover" alt=""> -->
                            <img v-lazy="item.cover" alt="">
                        </a>
                    </div>
                    <div class="article-content-wrap" :class="`article-content-wrap-${theme.articleBoard.layout}`">
                        <div class="article-list-content">
                            <div class="article-dateline">
                                <i class="fa-regular fa-clock"></i>
                                发布于 {{ item.publish }}
                            </div>
                            <a :href="withBase(item.url)" class="article-title">
                                <h3>{{ item.title }}</h3>
                            </a>
                            <div class="article-meta">
                                <span class="meta-author">
                                    <a href="" class="meta-author-avatar">
                                        <img :src="theme.global.avatar" alt="">
                                    </a>
                                    <a href="">{{ theme.global.author }}</a>
                                </span>
                                <span>
                                    <i class="fa-regular fa-eye"></i>
                                    {{ item.pageViews }} 热度
                                </span>
                                <span class="meta-comment">
                                    <i class="fa-regular fa-comment"></i>
                                    <a href="">
                                        {{ item.commentsCount === 0 ? '无~' : `${item.commentsCount} 条评论` }}
                                    </a>
                                </span>
                                <span>
                                    <i class="fa-regular fa-folder"></i>
                                    <a href=""> {{ item.type }}</a>
                                </span>
                            </div>
                            <div class="article-synopsis">
                                <p>{{ item.synopsis }}</p>
                            </div>
                        </div>
                    </div>

                </article>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { Article, Theme } from '../types';
import { useData, withBase } from 'vitepress';

const theme = useData().theme.value as Theme;


const { list } = defineProps({
    list: {
        type: Array as PropType<Article[]>,
        default: () => []
    }
})
</script>
<style lang="scss">
@import "../styles/animate.scss";
@import "../styles/variable.scss";
@import "../styles/common.scss";

.article-list {
    ul li {
        padding: 0;
        margin: 0;
        list-style: none;
    }

    .article-block {
        position: relative;
        float: left;
        margin: 20px 0;
        width: 100%;
        height: 300px;
        text-align: left;
        background-color: rgb(255 255 255 / 90%);
        border-radius: 10px;
        opacity: 1;
        box-shadow: 0 1px 30px -4px $--article-block-shadow;
        transition: all 0.8s ease;
        animation: post-list-show .5s;

        .article-cover {
            float: right;
            width: 55%;

            a {
                position: relative;
                display: block;
                overflow: hidden;
                height: 300px;
                background-repeat: no-repeat;
                background-size: cover;
                border-radius: 0 10px 10px 0;

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: all .6s;

                    &:hover {
                        transform: scale(1.1);
                    }
                }
            }
        }

        .article-content-wrap {
            position: relative;
            display: block;
            float: right;
            padding-right: 30px;
            padding-left: 0;
            margin: 20px 10px 0;
            width: 40%;



            .article-list-content {
                i {
                    margin-right: 5px;
                    font-size: 14px;
                    color: $--theme-skin-active;
                    font-weight: $--global-font-weight;
                }

                a {
                    font-weight: $--global-font-weight;
                    transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;

                    &:hover {
                        color: $--theme-skin-active;
                    }
                }

                .article-dateline {
                    padding: 4px 10px;
                    width: max-content;
                    font-size: 12px;
                    white-space: nowrap;
                    color: $--theme-skin-active;
                    background-color: #f5f5f5;
                    border-radius: 6px;
                    transition: all 0.8s ease !important;
                    font-weight: $--global-font-weight;
                }

                .article-title {
                    h3 {
                        display: -webkit-box;
                        overflow: hidden;
                        font-size: 18px;
                        text-overflow: ellipsis;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        word-wrap: break-word;
                    }
                }

                .article-meta {
                    overflow: hidden;
                    font-size: 12px;
                    text-overflow: ellipsis;
                    white-space: nowrap;

                    a {
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }

                    .meta-author {
                        margin: 0 10px 0 0;

                        .meta-author-avatar {
                            img {
                                margin: 0 5px -4px;
                                max-height: 18px;
                                border-radius: 100%;
                                box-shadow: inset 0 -1px 0 #333;
                                transition: -webkit-transform 0.4s ease-out;
                                transition: -moz-transform 0.4s ease-out;
                                transition: transform 0.4s ease-out;

                            }
                        }
                    }

                    .meta-comment {
                        margin-right: 10px;
                        margin-left: 8px;
                    }
                }

                .article-synopsis {
                    position: relative;
                    right: 0;
                    z-index: 50;
                    margin: 0;
                    margin-top: 10px;
                    width: 100%;
                    font-size: 15px;
                    color: rgb(0 0 0 / 66%);
                    transition: all 0.8s ease;

                    p {
                        overflow: hidden;
                        margin: 0;
                        text-overflow: ellipsis;
                    }
                }
            }

        }

        &:hover {
            box-shadow: 0 1px 20px 10px #e8e8e8;
        }

        .article-list-left {
            float: left;
        }


        .article-list-right {
            float: right;
        }

        &:nth-child(2n) .article-list-interlaced {
            float: left;
        }

        .article-content-wrap-left {
            float: left;
            padding-right: 0;
            padding-left: 30px;
            margin: 20px 10px 10px 0;
            text-align: right;
        }

        :nth-child(2n) .article-content-wrap-interlaced {
            float: left;
            padding-right: 0;
            padding-left: 30px;
            margin: 20px 10px 10px 0;
            text-align: right;
        }

    }
}
</style>
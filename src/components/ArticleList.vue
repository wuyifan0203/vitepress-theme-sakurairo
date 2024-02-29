<template>
    <div class="article-list">
        <ul class="clearfix">
            <li v-for="(item, index) in props.list" :key="index" class="article-block">
                <article>
                    <div class="article-cover" :class="`article-list-${theme.articleBoard.layout}`">
                        <a :href="withBase(item.url)">
                            <img :src="item.cover" alt="">
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
                                        {{ item.comment === 0 ? '无~' : `${item.comment} 条评论` }}
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


const props = defineProps({
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
        margin: 0;
        padding: 0;
        list-style: none;
    }

    .article-block {
        -webkit-animation: post-list-show .5s;
        animation: post-list-show .5s;
        opacity: 1;
        background-color: rgba(255, 255, 255, .90);
        transition: all 0.8s ease;
        box-shadow: 0 1px 30px -4px $--article-block-shadow;
        float: left;
        width: 100%;
        height: 300px;
        position: relative;
        margin: 20px 0 20px;
        border-radius: 10px;
        text-align: left;

        .article-cover {
            float: right;
            width: 55%;

            a {
                height: 300px;
                position: relative;
                display: block;
                background-repeat: no-repeat;
                background-size: cover;
                overflow: hidden;
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
            width: 40%;
            margin: 20px 10px 0 10px;



            .article-list-content {
                i {
                    margin-right: 5px;
                    color: $--theme-skin-active;
                    font-size: 14px;
                    font-weight: $--global-font-weight;
                }

                a {
                    font-weight: $--global-font-weight;
                    -webkit-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
                    -moz-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
                    transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;

                    &:hover {
                        color: $--theme-skin-active;
                    }
                }

                .article-dateline {
                    background-color: #f5f5f5;
                    font-size: 12px;
                    width: max-content;
                    padding: 4px 10px 4px 10px;
                    border-radius: 6px;
                    color: $--theme-skin-active;
                    white-space: nowrap;
                    font-weight: $--global-font-weight;
                    transition: all 0.8s ease !important;
                }

                .article-title {
                    h3 {
                        font-size: 18px;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 2;
                        overflow: hidden;
                        word-wrap: break-word;
                    }
                }

                .article-meta {
                    font-size: 12px;
                    overflow: hidden;
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
                                max-height: 18px;
                                margin: 0 5px -4px;

                                -webkit-border-radius: 100%;
                                -moz-border-radius: 100%;
                                border-radius: 100%;

                                -webkit-box-shadow: inset 0 -1px 0 #333333;
                                box-shadow: inset 0 -1px 0 #333333;

                                -webkit-transition: -webkit-transform 0.4s ease-out;
                                -moz-transition: -moz-transform 0.4s ease-out;
                                transition: transform 0.4s ease-out;

                            }
                        }
                    }

                    .meta-comment {
                        margin-left: 8px;
                        margin-right: 10px;
                    }
                }

                .article-synopsis {
                    position: relative;
                    width: 100%;
                    right: 0;
                    margin: 0;
                    margin-top: 10px;
                    z-index: 50;
                    color: rgba(0, 0, 0, .66);
                    transition: all 0.8s ease;
                    font-size: 15px;

                    p {
                        margin: 0;
                        overflow: hidden;
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
            padding-left: 30px;
            padding-right: 0;
            text-align: right;
            margin: 20px 10px 10px 0;
        }

        :nth-child(2n) .article-content-wrap-interlaced {
            float: left;
            padding-left: 30px;
            padding-right: 0;
            text-align: right;
            margin: 20px 10px 10px 0;
        }

    }
}
</style>
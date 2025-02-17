<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-03-03 11:31:21
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-10 19:11:50
 * @FilePath: /vitepress-theme-sakurairo/src/components/Pagination.vue
-->
<template>
    <section class="pagination">
        <div class="half previous" v-if="page.prev || prevPage">
            <a :href="withBase(prevPage!.url)">
                <div class="background" :style="{
                    backgroundImage: `url(${prevPage!.cover})`
                }">
                </div>
                <div class="label">上一篇文章</div>
                <div class="info">
                    <h3>{{ prevPage!.title }}</h3>
                </div>
            </a>
        </div>
        <div class="half next" v-if="page.next || nextPage">
            <a :href="withBase(nextPage!.url)">
                <div class="background" :style="{
                    backgroundImage: `url(${nextPage!.cover})`
                }">
                </div>
                <div class="label">下一篇文章</div>
                <div class="info">
                    <h3>{{ nextPage!.title }}</h3>
                </div>
            </a>
        </div>
    </section>
</template>
    
<script setup lang='ts'>
import { PropType, computed } from 'vue';
import { withBase } from 'vitepress'
import { DefaultPageFormatter } from '../types';
import { store } from '../store';

const data = computed(() => store.posts);

const props = defineProps({
    page: {
        required: true,
        type: Object as PropType<DefaultPageFormatter>,
        default: () => { }
    }
})

const page = computed(()=>props.page)

const prevPage = computed(() => {
    return data.value.find((current) => current.key === page.value.prev)
});

const nextPage = computed(() => {
    return data.value.find(current => current.key === page.value.next)
});

</script>
    
<style lang="scss">
.pagination {
    position: relative;
    left: 50%;
    overflow: hidden;
    margin: 10px 0 0;
    margin-left: -48.5%;
    width: 97%;
    background: #000;
    border-radius: 15px;

    .half {
        float: left;
        width: 50%;
    }

    .background {
        position: absolute;
        top: 0;
        left: 0;
        z-index: 50;
        width: 100%;
        height: 100%;
        background-size: cover;
        opacity: .4;
        transition: opacity .15s ease-out;
    }

    .label {
        position: absolute;
        display: block;
        font-size: 13px;
        color: rgb(255 255 255 / 70%);
        text-transform: uppercase;
        font-weight: var(--global-font-weight);
    }

    .info {
        position: absolute;
        width: 70%;
    }

    a {
        position: relative;
        display: block;
        float: left;
        overflow: hidden;
        padding: 55px 40px;
        width: 100%;
        height: 150px;
        text-align: left;
    }

    h3 {
        display: block;
        overflow: hidden;
        margin: 20px 0;
        font-size: 14px;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: #fff;
        font-weight: var(--global-font-weight, 400);
        line-height: 30px;
    }

    .previous {
        text-align: left;

        .info {
            bottom: 40px;
            left: 40px
        }


        .label {
            top: 40px;
            left: 40px;
            z-index: 100;
            display: block;
        }
    }

    .next {
        .label {
            top: 40px;
            right: 40px;
        }

        .info {
            right: 40px;
            bottom: 40px;
            text-align: right;
        }
    }
}
</style>
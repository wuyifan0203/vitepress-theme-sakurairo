<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-03-03 11:31:21
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-10 19:11:50
 * @FilePath: /vuepress-interview/src/components/Pagination.vue
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
import { useStore } from '../utils';

const globalStore = useStore('global')
const data = globalStore.getData() as DefaultPageFormatter[];

const props = defineProps({
    page: {
        required: true,
        type: Object as PropType<DefaultPageFormatter>,
        default: () => { }
    }
})

const page = computed(()=>props.page)

const prevPage = computed(() => {
    return data.find((current) => current.key === page.value.prev)
});

const nextPage = computed(() => {
    return data.find(current => current.key === page.value.next)
});

</script>
    
<style lang="scss">
.pagination {
    overflow: hidden;
    margin: 10px 0 0 0;
    background: #000;
    width: 97%;
    left: 50%;
    margin-left: -48.5%;
    position: relative;
    border-radius: 15px;

    .half {
        width: 50%;
        float: left;
    }

    .background {
        position: absolute;
        z-index: 50;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: .4;
        background-size: cover;
        -webkit-transition: opacity .15s ease-out;
        -moz-transition: opacity .15s ease-out;
        transition: opacity .15s ease-out;
    }

    .label {
        font-size: 13px;
        display: block;
        text-transform: uppercase;
        position: absolute;
        color: rgba(255, 255, 255, .7);
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
        height: 150px;
        padding: 55px 40px;
        text-align: left;
        width: 100%;
    }

    h3 {
        font-size: 14px;
        font-weight: var(--global-font-weight, 400);
        line-height: 30px;
        margin: 20px 0;
        color: #fff;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        display: block;
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
            display: block;
            z-index: 100;
        }
    }

    .next {
        .label {
            top: 40px;
            right: 40px;
        }

        .info {
            text-align: right;
            right: 40px;
            bottom: 40px;
        }
    }
}
</style>
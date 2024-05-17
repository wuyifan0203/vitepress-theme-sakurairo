<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-03-04 01:49:21
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-05-17 15:39:43
 * @FilePath: /vitepress-theme-sakurairo/docs/components/List.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <div>
        <h2>{{ props.title }}</h2>
        <div>
            <ul>
                <li v-for="(item, index) in props.items" :key="index">
                    <img :src="item.src" alt="" class="img-fluid">
                    {{ item.label }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { PropType } from 'vue';

interface Item {
    label: string,
    src: string
}

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    items: {
        type: Array as PropType<Item[]>,
        default: () => []
    }
})
</script>

<style lang="scss" scoped>
li {
    display: inline-block;
    overflow: hidden;
    margin: 10px 15px;
    max-width: 150px;
    text-align: center !important;
    list-style: none;

    .img-fluid {
        width: 100%;
        height: 200px;
        border-radius: 10px;
    }
}
</style>
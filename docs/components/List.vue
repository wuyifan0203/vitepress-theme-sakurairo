<!--
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-03-04 01:49:21
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-04 02:18:10
 * @FilePath: /vuepress-interview/docs/components/List.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <div>
        <h2>{{ props.title }}</h2>
        <div>
            <ul>
                <li v-for="item in props.items">
                    <img :src="item.src" alt="">
                    {{ item.label }}
                </li>
            </ul>
        </div>
    </div>
</template>
    
<script setup lang='ts'>
import { PropType } from 'vue';

interface Item{
    label: string,
    src: string
}

const props = defineProps({
    title: {
        type: String,
        default: ''
    },
    items:{
        type: Array as PropType<Item[]>,
        default: ()=>[]
    }
})
</script>
    
<style lang="scss" scoped>
    li{
        max-width: 150px;
        overflow: hidden;
        list-style: none;
        text-align: center !important;
        display: inline-block;
        margin: 10px 15px;
        img{
            width: 100%;
            height: 200px;
            border-radius: 10px;
        }
    }
</style>
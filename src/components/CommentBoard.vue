<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-01 15:07:53
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-05 11:13:01
 * @FilePath: /vitepress-theme-sakurairo/src/components/CommentBoard.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->

<template>
    <Waline :serverURL="serverURL" :path="currentPath" />
</template>

<script setup lang="ts">
import { PropType, Ref, computed } from 'vue';
import { useData, withBase } from 'vitepress';
import { Waline } from '@waline/client/component';
import '@waline/client/style';
import { DefaultPageFormatter, Theme } from '../types';


const theme = useData().theme as Ref<Theme>;

const serverURL = (() => {
    const url = theme.value.global?.comments?.serverURL;
    if (url) {
        return url;
    } else {
        console.error("请配置评论区的serverURL");
        return '';
    }
})()

const prop = defineProps({
    page: {
        required: true,
        type: Object as PropType<DefaultPageFormatter>,
        default: () => { }
    }
})

const currentPath = computed(() => {
    return withBase(prop.page.url)
})

</script>
<!--
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-08 17:50:27
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-03-13 01:17:49
 * @FilePath: /vitepress-theme-sakurairo/src/components/Image.vue
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
-->
<template>
    <img :src="source" alt="" :data-path="props.url">
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { fetchApi } from '../api';
import { useData } from 'vitepress';
import { Theme } from '../types';

const props = defineProps({
    url: {
        required: true,
        type: String,
        default: ''
    }
})

const api = fetchApi.getInstance('');
const theme = useData().theme.value as Theme

const source = ref(theme.global.onLoadImage);
const image = new Image();
image.src = props.url;

image.onload = async () => {


    await api.getImage(props.url)


}



</script>
<style scoped></style>
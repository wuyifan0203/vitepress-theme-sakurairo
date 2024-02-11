<template>
    <nav>
        <ul>
            <li v-for="(item, index) in nav" :key="index">
                <a :href="item.link">
                    <i></i>
                    <span>{{ item.text }}</span>
                </a>
            </li>
        </ul>
    </nav>
</template>
    
<script setup lang='ts'>
import { useData } from 'vitepress'
const { theme } = useData();
const nav = theme.value.nav;
console.log(nav);
</script>
    
<style lang="scss" scoped>
nav {
    display: inline-block;

    ul {
        display: flex;
        justify-content: center;
    }

    li {
        list-style: none;
        display: list-item;
        margin: 0 13px;
    }

    ul,
    li {
        text-align: center;
    }
}
</style>
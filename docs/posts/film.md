---
layout: page
title: Film List
cover: '/vitepress-theme-sakurairo/bg.jpeg'
---


<script setup>
import List from '../components/List.vue';
const title='With Lan';

const items= [
    {
        label:'波西米亚狂想曲',
        src:'https://img1.baidu.com/it/u=658432148,379059705&fm=253&fmt=auto&app=138&f=JPEG?w=338&h=500'
    },
    {
        label:'英雄',
        src:'https://img0.baidu.com/it/u=1002229677,3726477502&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=726'
    },
    {
        label:'百万美元宝贝',
        src:'https://t14.baidu.com/it/u=239392399,1309118698&amp;fm=58&amp;app=83&amp;f=JPEG?w=270&amp;h=386'
    },
    {
        label:'时空恋旅人',
        src:'https://t14.baidu.com/it/u=654021510,678953768&amp;fm=58&amp;app=83&amp;f=JPEG?w=200&amp;h=266'
    },
    {
        label:'四月物语',
        src:'https://t15.baidu.com/it/u=1648925139,2032642818&amp;fm=58&amp;app=83&amp;f=JPEG?w=200&amp;h=266'
    },
    {
        label:'低俗小说',
        src:'https://t14.baidu.com/it/u=2299295783,1834460016&fm=58&app=83&size=w931&n=0&f=JPEG&fmt=auto?sec=1709658000&t=810660e20351b8d34e9ac2228b236552'
    },
    {
        label:'Once',
        src:'https://img1.baidu.com/it/u=3740701426,3535446678&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=750'
    },
    {
        label:'毕业生',
        src:'https://so1.360tres.com/dr/270_500_/t0176cd3d3e50faf425.png?size=1080x1501'
    }
]

</script>

<List :title="title" :items="items"/>

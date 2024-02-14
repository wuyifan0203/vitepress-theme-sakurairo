/*
 * @Date: 2024-01-31 16:02:19
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-14 19:13:42
 * @FilePath: /vuepress-interview/docs/.vitepress/config.mts
 */
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  lang: 'zh-CN',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/regular.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config\
    siteTitle: 'VuePress InterView',
    // logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/', icon: 'fa-home' },
      { text: '分类', link: '/' ,icon:'fa-leaf' },
      {
        text: 'Options Test', 
        icon:'fa-tags',
        items: [
          { text: 'Options Test 1', link: '/', icon: '' },
          { text: 'Options Test 2', link: '/' },
          { text: 'Options Test 3', link: '/' },
          { text: 'Options Test 4', link: '/' }
        ]
      }
    ],
    cover:{
      src: '/.vitepress/theme/public/bg.jpeg',
      // src:'https://www.loliapi.com/acg/pc/',
      title: '',//'奈落的家',
      avatar:'/.vitepress/theme/public/avatar.jpg',
      typed:{
        strings:[
          "给时光以生命，给岁月以文明", 
          "寒蝉黎明之时,便是重生之日",
          "当你在凝视着网页的时候,网页也正在凝视着你"
        ]
      }
    },

    sidebar: [
      {
        text: 'HTML',
        items: [
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

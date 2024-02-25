import { defineConfigWithTheme } from 'vitepress';
import type { Theme } from '../../src/'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<Theme>({
  title: "vitepress-theme-sakurairo",
  description: "A VitePress Theme",
  outDir:'..//dist',
  lang: 'zh-CN',
  base: '/vitepress-theme-sakurairo/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config\
    // logo: '/logo.svg',
    nav: {
      style: 'sakura',
      items: [
        { text: '主页', link: '/', icon: 'fa-home' },
        { text: '分类', link: '/posts', icon: 'fa-leaf' },
        {
          text: 'Options Test',
          icon: 'fa-tags',
          link:'/posts',
          items: [
            { text: 'Options Test 1', link: '/introduce', icon: '' },
            { text: 'Options Test 2', link: '/' },
            { text: 'Options Test 3', link: '/' },
            { text: 'Options Test 4', link: '/' }
          ]
        }
      ]
    },
    global: {
      background: {
        src: () => '',
        // src: () => 'https://www.loliapi.com/acg',
        // src: ()=>'/.vitepress/theme/public/bg.jpeg',
      },
      font: {
        src: () => '',
        size: '',
        weight: '',
      },
      board: {
        showIcon: true,
        titleAlign: 'center'
      },
      avatar: '/vitepress-theme-sakurairo/avatar.jpg',
      author: 'naraku'
    },
    cover: {
      background: {
        src: () => '/vitepress-theme-sakurairo/bg.jpeg',
      },

      // src:'https://www.loliapi.com/acg/pc/',
      title: '',//'奈落的家',
      description: '欢迎来到祖安',
      typed: {
        strings: [
          "给时光以生命，给岁月以文明",
          "寒蝉黎明之时,便是重生之日",
          "当你在凝视着网页的时候,网页也正在凝视着你",
          "写些什么好呢？.....对了，谢谢光临我的世界"
        ]
      },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
        { icon: 'discord', link: 'https://discord.com/invite/vite' },
        { icon: 'twitter', link: 'https://twitter.com/vite_js' },
        { icon: 'facebook', link: 'https://facebook.com/vite' },
        { icon: 'instagram', link: 'https://instagram.com/vite_js' },
        { icon: 'linkedin', link: 'https://linkedin.com/company/vite' },
        { icon: 'youtube', link: 'https://www.youtube.com' },
        { icon: 'douyin', link: 'https://www.douyin.com' },
        { icon: 'bilibili', link: 'https://space.bilibili.com/193672843' },
        { icon: 'weibo', link: 'https://weibo.com/u/7731200875' },
        { icon: 'zhihu', link: 'https://www.zhihu.com/people/vite_js' },
        { icon: 'qq', link: 'https://twitter.com/vite_js' },
        { icon: 'wechat', link: 'https://twitter.com/vite_js' },
      ]
    },
    noticeBoard: {
      enable: true,
      background: {
        src: () => '/vitepress-theme-sakurairo/bg.jpeg',
        color: '#ffffff',
      },
      text: {
        content: '欢迎来到我的博客，这里记录了我的学习、生活、思考、感悟。',
        align: 'center',
        color: '#ffff00'
      }
    },
    displayBoard: {
      enable: true,
      icon: 'fa-laptop',//'fa-tags',
      title: 'Display Board',
      items: [
        {
          title: '展示1',
          description: '展示一描述',
          link: '/',
          background: {
            src: () => 'https://www.loliapi.com/acg/',
          }
        },
        {
          title: '展示2',
          description: '展示一描述',
          link: '/',
          background: {
            src: () => 'https://www.loliapi.com/acg/',
          }
        },
        {
          title: '展示3',
          description: '展示一描述',
          link: '/',
          background: {
            src: () => 'https://www.loliapi.com/acg/',
          }
        }
      ]
    },
    articleBoard: {
      title: '文章 展示',
      icon: 'fa-bookmark',
      layout: 'interlaced', // 'left','right','interlaced'
      items: [
        {
          cover: 'https://www.loliapi.com/acg/',
          dateline: 10000000,// 时间戳
          pageViews: 99,
          title: '文章1',
          synopsis: '文章1描述',
          comment: 0,
          type: '原创',
          link: '/',
        },
        {
          cover: 'https://www.loliapi.com/acg/',
          dateline: 10000000,// 时间戳
          pageViews: 99,
          title: '文章2',
          synopsis: '文章1描述',
          comment: 0,
          type: '转载',
          link: '/',
        },
        {
          cover: 'https://www.loliapi.com/acg/',
          dateline: 10000000,// 时间戳
          pageViews: 99,
          title: '文章3',
          synopsis: '文章1描述',
          comment: 0,
          type: '奥利给',
          link: '/',
        },
        {
          cover: 'https://www.loliapi.com/acg/',
          dateline: 10000000,// 时间戳
          pageViews: 99,
          title: '文章4',
          synopsis: '文章1描述',
          comment: 99,
          type: '奥利给',
          link: '/',
        },
        {
          cover: 'https://www.loliapi.com/acg/',
          dateline: 10000000,// 时间戳
          pageViews: 99,
          title: '文章5',
          synopsis: '文章1描述',
          comment: 70,
          type: '奥利给',
          link: '/',
        },
        {
          cover: 'https://www.loliapi.com/acg/',
          dateline: 10000000,// 时间戳
          pageViews: 0,
          title: '文章6',
          synopsis: '文章6描述',
          comment: 10,
          type: '奥利给666',
          link: '/',
        }
      ]
    },
    footer: {
      copyright: '2024-present wuyifan',
      record: '沪ICP备20241234567号-66666',
    }

  },
  markdown:{
    theme:'monokai'

  },
  vite: {
    server: {
      port: 5300,
      host: '0.0.0.0',
    }
  }
})
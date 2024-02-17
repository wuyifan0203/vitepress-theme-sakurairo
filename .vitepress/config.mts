/*
 * @Date: 2024-01-31 16:02:19
 * @LastEditors: wuyifan 1208097313@qq.com
 * @LastEditTime: 2024-02-17 18:38:39
 * @FilePath: /vuepress-interview/docs/.vitepress/config.mts
 */
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  lang: 'zh-CN',
  head: [
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config\
    siteTitle: 'VuePress InterView',
    // logo: '/logo.svg',
    nav: [
      { text: '主页', link: '/', icon: 'fa-home' },
      { text: '分类', link: '/', icon: 'fa-leaf' },
      {
        text: 'Options Test',
        icon: 'fa-tags',
        items: [
          { text: 'Options Test 1', link: '/', icon: '' },
          { text: 'Options Test 2', link: '/' },
          { text: 'Options Test 3', link: '/' },
          { text: 'Options Test 4', link: '/' }
        ]
      }
    ],
    global: {
      background: {
        src: 'https://www.loliapi.com/acg',
        // src: '/.vitepress/theme/public/bg.jpeg',
      },
      font: {
        src: '',
        size: '',
        weight: '',
      },
      board: {
        showIcon: true,
      },
      avatar: '/.vitepress/theme/public/avatar.jpg',
      author:'naraku'
    },
    navStyle: 'sakura',//'sakurairo',// 
    cover: {
      src: '/.vitepress/theme/public/bg.jpeg',
      // src:'https://www.loliapi.com/acg/pc/',
      title: '',//'奈落的家',
      discription: '欢迎来到祖安',
      typed: {
        strings: [
          "给时光以生命，给岁月以文明",
          "寒蝉黎明之时,便是重生之日",
          "当你在凝视着网页的时候,网页也正在凝视着你"
        ]
      }
    },
    noticeBoard: {
      enable: true,
      background: {
        src: '/.vitepress/theme/public/bg.jpeg',
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
      showIcon: true,
      title: 'Display Board',
      items: [
        {
          title: '展示1',
          description: '展示一描述',
          link: '/',
          background: {
            src: 'https://www.loliapi.com/acg/',
          }
        },
        {
          title: '展示2',
          description: '展示一描述',
          link: '/',
          background: {
            src: 'https://www.loliapi.com/acg/',
          }
        },
        {
          title: '展示3',
          description: '展示一描述',
          link: '/',
          background: {
            src: 'https://www.loliapi.com/acg/',
          }
        }
      ]
    },
    articleBorad: {
      title: '文章 展示',
      icon: 'fa-bookmark',
      showIcon: true,
      layout: 'left', // 'left','right','interlaced'
      articleList: [
        {
          cover: 'https://www.loliapi.com/acg/',
          pubdate: 10000000,// 时间戳
          pageViews: 99,
          title: '文章1',
          synopsis: '文章1描述',
          comment: 0,
          type: '原创',
          link: '/',
        },
        {
          cover: 'https://www.loliapi.com/acg/',
          pubdate: 10000000,// 时间戳
          pageViews: 99,
          title: '文章2',
          synopsis: '文章1描述',
          comment: 0,
          type: '转载',
          link: '/',
        },
        {
          cover: 'https://www.loliapi.com/acg/',
          pubdate: 10000000,// 时间戳
          pageViews: 99,
          title: '文章3',
          synopsis: '文章1描述',
          comment: 0,
          type: '奥利给',
          link: '/',
        }
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
  }
})

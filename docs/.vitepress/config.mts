/*
 * @Date: 2024-01-31 16:02:19
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-01 15:30:43
 * @FilePath: /vuepress-interview/docs/.vitepress/config.mts
 */
import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'HTML', link: '/html-docs/iframe-test' },
    ],

    sidebar: [
      {
        text: 'HTML',
        items: [
          { text: 'iframe', link: '/html-docs/iframe-test' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})

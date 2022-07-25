import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar } from './configs/navbar'
import { sidebar } from './configs/sidebar'

// const base = process.argv[2] === 'dev' ? '/' : '/vuepress-interview/';
// console.log(base);

const base = '/'


export default defineUserConfig({
  lang: 'zh-CN',
  title: `你好， VuePress ！`,
  description: '这是一个知识分享站点',
  base,
  theme: defaultTheme({
    navbar,
    sidebar,
    editLink: true
  })

})
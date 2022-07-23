import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar } from './configs/navbar'

const base = process.argv[2] === 'dev' ? '/' : '/vuepress-interview/';
console.log(process,base);


export default defineUserConfig({
  lang: 'zh-CN',
  title: `你好， VuePress ！`+ base,
  description: '这是我的第一个 VuePress 站点',
  base,
  theme: defaultTheme({
    navbar
  })

})
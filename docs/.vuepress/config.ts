import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar } from './configs/navbar'


export default defineUserConfig({
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  open: true,
  theme: defaultTheme({
    navbar
  })

})
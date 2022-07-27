import { defaultTheme, defineUserConfig } from 'vuepress'
import { navbar } from './configs/navbar'
import { sidebar } from './configs/sidebar'
const demoblockPlugin = require('vuepress-plugin-demoblock-plus')
const { path } = require('@vuepress/utils')
const {registerComponentsPlugin} = require('@vuepress/plugin-register-components')

const base = process.argv[2] === 'dev' ? '/' : '/vuepress-interview/';


export default defineUserConfig({
  lang: 'zh-CN',
  title: `你好， VuePress ！`,
  description: '这是一个知识分享站点',
  base,
  theme: defaultTheme({
    navbar,
    sidebar,
    sidebarDepth:2,
    editLink: true
  }),
  plugins: [
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    demoblockPlugin({
      customClass: 'demoblock-custom',
      // theme: 'github-light',
      cssPreprocessor: 'less',
      scriptReplaces: [
        { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        }
      ]
    })
  ],

})
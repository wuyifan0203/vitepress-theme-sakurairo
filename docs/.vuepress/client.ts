import { defineClientConfig } from '@vuepress/client'
import Button from '../../src/component/Button.vue'

export default defineClientConfig({
  enhance({ app }) {
    app.use(Button)
    // 注册组件
    app.component(Button.name, Button)
    console.log(Button);
    
  },
})

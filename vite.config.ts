/*
 * @Author: wuyifan 1208097313@qq.com
 * @Date: 2024-02-17 23:25:49
 * @LastEditors: wuyifan wuyifan@max-optics.com
 * @LastEditTime: 2024-02-18 11:10:12
 * @FilePath: /vuepress-interview/vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE)
 */
import { defineConfig } from 'vite';

export default defineConfig({
    base:'index.md',
    root:'/',
    server:{
        port:3000,
        host:'0.0.0.0',
    }
})
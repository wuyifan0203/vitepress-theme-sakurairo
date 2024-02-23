/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-20 16:09:31
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-20 16:10:05
 * @FilePath: /vitepress-theme-sakurairo/src/assets/icon/juejin.ts
 * Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
 */
const juejin = 'data:image/png;base64,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';

export { juejin }
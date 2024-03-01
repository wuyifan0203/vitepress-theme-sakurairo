/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-02-20 16:19:37
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-02-20 16:20:12
 * @FilePath: /vitepress-theme-sakurairo/src/assets/icon/skype.ts
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
const skype = 'data:image/png;base64,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';

export { skype }
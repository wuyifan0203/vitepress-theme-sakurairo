/*
 * @Author: wuyifan0203 1208097313@qq.com
 * @Date: 2024-03-15 13:21:39
 * @LastEditors: wuyifan0203 1208097313@qq.com
 * @LastEditTime: 2024-03-18 09:45:52
 * @FilePath: /vitepress-theme-sakurairo/.eslintrc.cjs
 * Copyright (c) 2024 by wuyifan0203 email: 1208097313@qq.com, All Rights Reserved.
 */
module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        "vue/multi-word-component-names":"off",
        "@typescript-eslint/no-explicit-any":"off",
        "@typescript-eslint/ban-types":"off"
    }
}

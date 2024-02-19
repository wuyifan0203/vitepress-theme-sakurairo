#!/usr/bin/env sh
###
 # @Author: wuyifan0203 1208097313@qq.com
 # @Date: 2024-02-18 09:04:29
 # @LastEditors: wuyifan0203 1208097313@qq.com
 # @LastEditTime: 2024-02-19 14:15:07
 # @FilePath: /vitepress-theme-sakurairo/deploy.sh
 # Copyright (c) 2024 by wuyifan email: 1208097313@qq.com, All Rights Reserved.
### 

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
yarn run build

# 进入生成的文件夹
cd .vitepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/wuyifan0203/vitepress-theme-sakurairo.git master:gh-pages

cd -
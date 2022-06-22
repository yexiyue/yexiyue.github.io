#! /bin/bash
echo -e "\033[1;36m========开始上传到你的github=======\033[0m"
#进入打包后的目录
git status
git add .
git commit -m "脚本自动上传"
#下面配置你的github地址，中间最长的哪里替换复制下来的链接
git push git@github.com:yexiyue/yexiyue.github.io.git master
cd ./dist
ls
echo -e "\033[1;32m========开始执行git相关操作========\033[0m"
git init
git branch -m master
git status
git add -A
git commit -m "deploy"
#下面配置你的github地址，中间最长的哪里替换复制下来的链接
git push -f git@github.com:yexiyue/yexiyue.github.io.git master:gh-pages
echo -e "\033[1;32m========推送成功=======\033[0m"
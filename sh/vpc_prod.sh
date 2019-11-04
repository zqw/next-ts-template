#!/usr/bin/env bash

#环境启动程序
openresty -t;
service openresty start;

#请自己添加网站根目录
WEB_SITE_ROOT_DIR=""

cd $WEB_SITE_ROOT_DIR

npm install
npm run clean
npm run build
npm run export

pm2 delete next-ts-template;
pm2 start pm2/vpc_prod.json

###################
#上传静态文件
###################
cd $WEB_SITE_ROOT_DIR

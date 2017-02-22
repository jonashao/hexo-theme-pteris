# 添加About页面
下面介绍怎样添加About页。
## 1. 新建页面
在终端窗口下，定位到 Hexo 站点目录下。
使用 hexo new page 新建一个页面，命名为 about ：
```
$ cd your-hexo-site
$ hexo new page about
```

## 2. 编辑页面
编辑刚新建的页面，将页面的 type 设置为 about ，正文为你的介绍内容，渲染方式与`Post`一致。
页面内容如下：
```
title: 关于
type: "about"
---

正文...
```

## 2. 修改菜单
在菜单中添加链接。编辑 `主题配置文件` ， 
添加 about 到 menu 中，如下: 
```
menu:
  Home: /
  About: /about
  Archives: /archives

```
# Pteris
A hexo theme in nunjucks renderer engine.

[Demo](http://www.junnanhao.com)

[中文文档](README.zh.md)

## Getting start
in hexo root directory:

```
npm install --save hexo-renderer-njks
git clone https://github.com/jonashao/hexo-theme-pteris themes/pteris
cd themes/pteris
bower install
```
## Project Progress
* index page : 90%
* post page : 70%
* archive page: 50%
While all pages can be rendered, there are still lots of details that can be cover.

***Main todos***:
- [ ] SEO for post page
- [ ] Beautify post page
- [ ] Analysis plugins
- [ ] Share plugins
- [ ] Comment plugins
- [ ] Customization 
- [ ] docs

## Config
### theme variables
Setting those variables in `pteris/_config.yml`

``` yml
# add your own stylesheets files locations here.
stylesheets:
- style.css  

# add your own js files location here
scripts:
- script.js

# helping search engine to better understand your site.
keywords:  keyword1, keyword2

# path of the biggest image in the front of index page.
headerImageUrl: 

# your avatar representing in the header of index page
avatar:

# title of your site, you can also set title in hexo config yml file. This variable will be represented in the header of index page.
title:

# use a sentence to describe your site. It will also be represented in the header of the index page.
description:
```
*more docs are on the way!*

If you are interested in the project or have some 'special needs',
welcome to join our project in
[teambition](https://www.teambition.com/project/585497e096c7dce53871e4be/)
 or come it up in issue.
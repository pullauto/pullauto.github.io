---
layout: post
title: "hexo添加Valine第三方评论系统"
date: 2020-04-11 9:36
reward: true
comments: true
tags: 
	- hexo
---

#### 准备工作

LeanCloud官网（国际版）：[https://leancloud.app/](https://leancloud.app/)
LeanCloud官网（中国版）：[https://www.leancloud.cn/](https://www.leancloud.cn/)
Valine评论系统官网：[https://valine.js.org/](https://valine.js.org/)

<!-- more -->

LeanCloud 中国版 和 国际版 的差别：

|      中国版      |      国际版      |
| :--------------: | :--------------: |
|     实名认证     |      不需要      |
|     域名备案     |      不需要      |
| 邮箱，手机号绑定 | 邮箱，手机号绑定 |

按需自行选择，个人使用推荐国际版
#### 1、注册登录

注册 [LeanCloud](https://console.leancloud.app/login.html#/signin) 账号 ，登录后需要绑定 **邮箱**  **手机号**  进行下一步操作

剩下的直接看[valine-admin官网](https://github.com/DesertsP/Valine-Admin)吧，比较详细

配置好后

在 `yilia\layout\_partial\post` 中添加valine.ejs

```javascript
<div id="vcomment" class="comment"></div> 
<script src="//cdn1.lncld.net/static/js/3.0.4/av-min.js"></script>
<script src="//unpkg.com/valine/dist/Valine.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/jquery/dist/jquery.min.js"></script>

<script>
   var notify = '<%= theme.valine.notify %>' == true ? true : false;
   var verify = '<%= theme.valine.verify %>' == true ? true : false;
    window.onload = function() {
        new Valine({
            el: '.comment',
            notify: notify,
            verify: verify,
            app_id: "<%= theme.valine.appid %>",
            app_key: "<%= theme.valine.appkey %>",
            placeholder: "<%= theme.valine.placeholder %>",
            avatar:"<%= theme.valine.avatar %>"
        });
    }

    $(document).ready(function(){
      $('.vemoji-btn').text('😀');
      $("#vcomments").on('click', 'span.vat',function(){
        $(this).parent('div.vmeta').next("div.vcontent").after($("div.vwrap"));
        $('textarea#veditor').focus();
      })
    })
</script>

```

在 `yilia\layout\_partial`中添加

```html
<% if (theme.valine && theme.valine.appid && theme.valine.appkey){ %>
    <section id="comments" class="comments">
      <%- partial('post/valine', {
        key: post.slug,
        title: post.title,
        url: config.url+url_for(post.path)
        }) %>
    </section>
  <% } %>
```


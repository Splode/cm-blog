---
layout: post
title: "Build a Custom Search with Jekyll - Part 1: JSON Output"
tagline: "Generate JSON data with Jekyll for powerful search functionality on a static generated website."
date: 2017-06-16
author: Christopher Murphy
description: Build a custom site search feature using Jekyll.
image: /assets/images/posts/007_expand-collapse-menu/007_expand-collapse-menu.gif
categories: Jekyll navigation JavaScript search static-site-generator
---

## What We'll Be Making
In this two-part series, we're going to be creating a custom search bar for our statically generated site using Jekyll and Vue.js. Our search bar will allow a user to  The core of this functionality will rely on Jekyll's generation and output of a dynamic JSON file. We'll use Vue.js to then handle the dynamic filtering of our JSON data against a user's search criteria.

## Jekyll & Static Site Generation
Jekyll. That means there's no database to maintain and you can host your site anywhere that allows you to host static files — even GitHub.

[1]: https://jekyllrb.com/ "Jekyll"
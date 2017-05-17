---
layout: post
title: "Expand/Collapse Navigation Menu on Scroll"
tagline: "Creating an expanding/collapsing nav-bar with scroll events and Vue.js"
date: 2017-05-16
author: Christopher Murphy
description: A simple tutorial for creating a navigation menu bar that expands and collapses when a user scrolls the page.
image: /assets/images/posts/007_expand-collapse-menu/007_expand-collapse-menu.gif
---

## What we'll be making
Here is a thing.

### Base Example
Here's an basic example of the expanding/collapsing nav-bar that we'll be making.

<p data-height="495" data-theme-id="0" data-slug-hash="mmeQzd" data-default-tab="result" data-user="Splode" data-embed-version="2" data-pen-title="Expand/Collapse Navigation Menu - Baseline" class="codepen">See the Pen <a href="http://codepen.io/Splode/pen/mmeQzd/">Expand/Collapse Navigation Menu - Baseline</a> by Christopher Murphy (<a href="http://codepen.io/Splode">@Splode</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>Scroll to see the nav-bar expanding and collapsing effects.</figcaption>

{% highlight JavaScript %}
// returns current scroll position
var scrollTop = function() {
	return window.scrollY;
};
{% endhighlight %}

[1]: http://www.christinachern.com/hpipsum/ "Harry Potter Lorem Ipsum"

---
layout: post
title: "Expand/Collapse Navigation Menu on Scroll"
tagline: "Creating an expanding/collapsing nav-bar with scroll events and Vue.js"
date: 2017-05-16
author: Christopher Murphy
description: A simple tutorial for creating a navigation menu bar that expands and collapses when a user scrolls the page.
image: /assets/images/posts/007_expand-collapse-menu/007_expand-collapse-menu.gif
categories: JavaScript navigation UI/UX Vue.js
---

## What we'll be making
Screen real estate is a precious commodity, especially on small displays, such as mobile devices. One strategy to maximize content display is to dynamically control the display of the primary navigation depending on whether or not the user is scrolling up or scrolling down. It's quite simple: scroll down on the page and the navigation recedes; scroll up on the page and the navigation reappears.

Implementing this strategy is quite simple. We'll be creating the following example using native JavaScript and then integrating with a Vue.js instance.

### Base Example
Here's an basic example (with Vue.js integration) of the expanding/collapsing nav-bar that we'll be making.

<p data-height="495" data-theme-id="0" data-slug-hash="mmeQzd" data-default-tab="result" data-user="Splode" data-embed-version="2" data-pen-title="Expand/Collapse Navigation Menu - Baseline" class="codepen">See the Pen <a href="http://codepen.io/Splode/pen/mmeQzd/">Expand/Collapse Navigation Menu - Baseline</a> by Christopher Murphy (<a href="http://codepen.io/Splode">@Splode</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

<figcaption>Scroll to see the nav-bar expanding and collapsing effects.</figcaption>

### Detecting Scroll Actions
We'll start by creating a function that returns the position of the browser window along the Y-axis. When called, this function will return the value, in pixels, of the uppermost portion of the window (the point at which content is clipped on scroll). `scrollY` is a native property of the browser window object.

{% highlight JavaScript %}
// returns current scroll position
var scrollTop = function() {
	return window.scrollY;
};
{% endhighlight %}

[1]: http://www.christinachern.com/hpipsum/ "Harry Potter Lorem Ipsum"

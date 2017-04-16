---
layout: post
title: "Build a Flexible & Lightweight Drop-down Menu"
tagline: "Create a simple drop-down menu with a little bit of Vue.js"
date: 2017-04-15
author: Christopher Murphy
description: Learn Vue.js - create a simple and flexible drop-down menu using a little bit of Vue.js.
excerpt: In this tutorial we're going to make a flexible and lightweight drop-down menu using a little bit of Vue.js. In the end, we'll have a simple drop-down menu that can be adapted to a wide variety of layouts and styles, and can easily be customized with your own animations and transitions.
image: /assets/images/posts/006_vue_drop-down/006_vue_drop-down.gif
categories: JavaScript Vue.js navigation
---

![Drop-down menu made with Vue.js]({{ site.baseurl }}/assets/images/posts/006_vue_drop-down/006_vue_drop-down.gif)

## What we'll be making
In this tutorial we're going to make a flexible and lightweight drop-down menu using a little bit of Vue.js. Our menu will be animated using Vue transitions and some simple CSS. In the end, we'll have a simple drop-down menu that can be adapted to a wide variety of layouts and styles, and can easily be customized with your own animations and transitions.

## Set up
### Installing Vue.js
Installing Vue is as simple as linking to it via a CDN. You can read more about installation options and how to install Vue in the post [Intro to Vue.js.]({% post_url 2017-03-26-intro-to-vuejs-nato-converter %}){:.linkUnderline}

### Scaffolding HTML
Our drop-down menu will consist of a simple list and menu button that toggles the display of the list. We'll add a simple layout with a nav-bar and cards to give our drop-down menu some context (see animation above). We'll also give our parent container an `id` to tie into Vue.

{% highlight html %}
<div id="app">
  <nav>
    <ul>
      <li></li>
    </ul>
  </nav>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
{% endhighlight %}

### Baseline CSS Styles
I'm going to package in a lot of information here. Suffice to say, the majority of this content will be styling and laying-out our context. This would be a good point to customize your setup, using your own styles and layouts.

We'll be importing Google's Material icons and a web font, Karla. We'll also be establishing a few variable with SCSS. We'll give our primary HTML elements some styling, including color and positioning. A simple media query will expand our layout on mobile devices. Don't worry about the drop-down `<ul>` for now; we'll be conditionally displaying it with Vue shortly.

{% highlight scss %}
@import url('https://fonts.googleapis.com/css?family=Karla');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');

$color-purple: #523F79;
$color-lavender: #807BE4;
$color-teal: #73CFF0;
$color-sea: #AFFFEA;

body {
  display: flex;
  font-family: 'Karla', sans-serif;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

nav {
  background-color: $color-purple;
  display: flex;
  flex-direction: column;
  justify-content: center;
	position: relative;
  width: 100%;
  height: 60px;
}

ul {
  align-self: flex-start;
  background-color: $color-purple;
  border-top: solid 3px $color-teal;
	margin: 0;
	padding: 0;
	position: absolute;
  top: 60px;
  width: 100%;
}

li {
  align-items: center;
  color: $color-teal;
  cursor: pointer;
  display: flex;
  font-size: 1.5em;
  height: 2em;
  justify-content: center;
  list-style-type: none;
  text-transform: uppercase;
  transition: all .3s ease;
  &:hover {
    background-color: $color-lavender;
    color: $color-sea;
  }
}

#app {
  align-items: center;
  background-color: $color-teal;
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 850px;
}

@media (max-width: 1024px) {
  #app {
    width: 100vw;
    height: 100vh;
  }
}

.card {
  background-color: $color-lavender;
  margin-bottom: 5%;
  width: 90%;
  height: 26%;
  &:first-of-type {
    margin-top: 5%;
  }
}
{% endhighlight %}

### Vue Setup
We'll create a new Vue instance and connect it to our HTML via the `#app` id. We'll also build our drop-down list using Vue, though this step is completely optional and we could just as easily hard-code these values into our HTML. In this case, we'll setup an array, `items` in our `data` property, which holds our menu items.

Next, we'll create a boolean property `show`, which will allow us to toggle the display of our drop-down menu. We'll initially set this to `false` because closed will be the initial and default state of our drop-down menu.

{% highlight javascript %}
new Vue({
  el: '#app',
  data: {
    items: [
      'Lorem',
      'ipsum', 'dolor',
      'sit',
      'amet'
    ],
    show: false,
  },
});
{% endhighlight %}

## Building the Drop-down Menu List
We'll build our drop-down menu list with a Vue directive `v-for` and text interpolation. We display each `item` in our array `items` with the text interpolation curly brace syntax. With this setup, we could dynamically control the display of our list items.

We control the display of the drop-down menu using the Vue directive `v-if`. Setting this directive to `show` will display our menu if the property `show` resolves to `true` and will hide our menu if it resolves to `false`.

{% highlight html %}
<div id="app">
  <nav>
  <ul v-if="show">
      <li v-for="item in items">{{ item }}</li>
    </ul>
  </nav>
  <div class="card"></div>
  <div class="card"></div>
  <div class="card"></div>
</div>
{% endhighlight %}

## Building Menu Toggle Buttons
We'll include two Material icons for our menu-toggle buttons, a menu and clear icon. We'll give each icon an additonal class, `menu` and `clear`, so that we can add CSS styling.

{% highlight html %}
<i class="material-icons menu">menu</i>
<i class="material-icons clear">clear</i>
{% endhighlight %}

{% highlight scss %}
.menu,
.clear {
  cursor: pointer;
  font-size: 3em;
  padding-left: 5%;
  transition: all .3s ease;
  width: 1.5em;
}

.menu {
  color: $color-lavender;
  &:hover,
  &:active {
    color: $color-teal;
  }
}

.clear {
  color: $color-teal;
  &:hover,
  &:active {
    color: $color-lavender;
  }
}
{% endhighlight %}

Building the menu toggle buttons is quite similar to the conditional display of our drop-down menu. In fact, our menu-toggle icons will use the same property `show` to control their display, as this will also be connected the display of our drop-down menu. We set the menu icon to be displayed if the drop-down menu is closed, in this case, `!show`. The Vue directive `v-else` displays the clear icon if the menu icon is not shown.

We'll add a Vue event listener to each button with the shorthand `@click`. This will be a toggle, `show = !show`, which controls the display of both the drop-down menu and the icons.

You can find a detailed break-down and demonstration of how to build this component with Vue transitions with Material icons in [creating element transitions with Vue]({% post_url 2017-04-09-vue-transitions %}){:.linkUnderline}.

{% highlight html %}
<nav>
  <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
  <i class="material-icons clear" v-else @click="show = !show" key="clear">clear</i>
  <ul v-if="show">
    <li v-for="item in items">{{ item }}</li>
  </ul>
</nav>
{% endhighlight %}

## Transitions
Finally, we'll add transitions using Vue transition effects. Again, you can find a detailed guide on working with Vue transitions in [creating element transitions with Vue]({% post_url 2017-04-09-vue-transitions %}){:.linkUnderline}.

We'll create a simple fade in and fade out with the following classes:

{% highlight html %}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
{% endhighlight %}

We'll animate the menu-toggle icons and the display of the drop-down menu by nesting these items in a `<transition>` tag, which is a native Vue element. *Note: in order to transition between the two icons we need to provide each element a unique key. In this case, we'll use `menu` and `clear`.*

{% highlight html %}
<transition name="fade" mode="out-in">
      <i class="material-icons menu" v-if="!show" @click="show = !show" key="menu">menu</i>
      <i class="material-icons clear" v-else @click="show = !show" key="clear">clear</i>
    </transition>
    <transition name="fade">
      <ul v-if="show">
        <li v-for="item in items">{{ item }}</li>
      </ul>
    </transition>
{% endhighlight %}

## See it in action
<p data-height="495" data-theme-id="dark" data-slug-hash="yMwamW" data-default-tab="html,result" data-user="Splode" data-embed-version="2" data-pen-title="Drop-down Menu - Vue.js" class="codepen">See the Pen <a href="http://codepen.io/Splode/pen/yMwamW/">Drop-down Menu - Vue.js</a> by Christopher Murphy (<a href="http://codepen.io/Splode">@Splode</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Wrap Up
We created a simple drop-down menu that we can adapt for a variety of applications. In this case we used a little bit of JavaScript, namely Vue, but there are many ways to create drop-down menus — even [with just CSS]({% post_url 2016-01-29-responsive-pure-css-menu %}){:.linkUnderline}.

Have feedback? Let me know; I'd be happy to hear it.
[hello@christopherianmurphy.com](mailto:hello@christopherianmurphy.com){:.linkUnderline}

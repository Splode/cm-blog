---
layout: post
title: "Create Element Transitions with Vue.js"
tagline: "Easily toggle animations with Vue.js."
date: 2017-04-09
author: Christopher Murphy
description: A quick and easy Vue.js tutorial to create an element toggle with transition effects.
excerpt: Vue.js (Vue) offers a simple way to transition between elements on the page, allowing for either simple transitions between CSS properties or complex animations (or both!). In this example I'll demonstrate the basics of Vue transitions by creating a menu-expand toggle button. You can see a demonstration in the preview animation above.
image: /assets/images/posts/005_icon_transitions/005_icon_transitions.gif
categories: animation CSS JavaScript Vue.js
---

Vue.js (Vue) offers a simple way to transition between elements on the page, allowing for either simple transitions between CSS properties or complex animations (or both!). In this example I'll demonstrate the basics of Vue transitions by creating a menu-expand toggle button. You can see a demonstration in the preview animation above.

## Setup
### Installing Vue.js
Installing Vue is as simple as linking to it via a CDN. You can read more about installation options and how to install in the post [Intro to Vue.js]({% post_url 2017-03-26-intro-to-vuejs-nato-converter %}){:.linkUnderline}

### Material Icons
For this example I'll be using [Google's Material Icon][1]{:.linkUnderline} set, an open-source and robust library of 900+ scalable icons. Although I'll be using Material icons, this example could quickly and easily be adapted to fit a wide variety of element types. Adding the icons is quite simple — we'll just import them to our CSS:

{% highlight scss %}
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
{% endhighlight %}

Now that we have the icon set imported, we'll implement both icons that will represent our two states, expanded and collapsed. We'll later control the visibility of these elements with Vue. I'll add another class, `expand`, to enhance the styling of these icons and add a transition effect for hovering.

{% highlight html %}
<i class="material-icons expand">expand_more</i>
<i class="material-icons expand">expand_less</i>
{% endhighlight %}

{% highlight scss %}
// Icon styling
.expand {
  cursor: pointer;
  font-size: 5em;
  transition: all .15s ease;

  &:hover, {
    color: #F3F3F3;
  }
}
{% endhighlight %}

Now that we have our icons in place, we'll implement Vue by wrapping our icons in a parent element and assigning it an `id` that we can pass into Vue.

{% highlight html %}
<div id="icon">
  <i class="material-icons expand">expand_more</i>
  <i class="material-icons expand">expand_less</i>
</div>
{% endhighlight %}

Next, we'll instantiate Vue and pass in our parent element `id`, in this case `icon`. We know that we'll be toggling between two states, so we'll create a `data` property `show` and set it to `true` initially.

{% highlight javascript %}
new Vue({
  el: '#icon',
  data: {
    show: true,
  },
});
{% endhighlight %}

## Vue Transitions
### CSS Transitions and Animations
Vue handles transitioning of rendered elements by automatically assigning and removing classes. By defining the styles in these classes, we can control the animation of these elements. For example, Vue will assign a transitioned element the following classes during the duration of a transition (`.fade` is simply a user-defined name):

{% highlight scss %}
.fade-enter {}
.fade-enter-active {}
.fade-leave-active {}
.fade-leave-to {}
{% endhighlight %}

This method is similar to assigning and removing classes using jQuery or vanilla JavaScript. In this case, Vue is handling the orchestration of the class attachments — very handy!

The classes `.fade-enter` and `.fade-leave-to` will be the initial state of our icons, which will be set to transparent. Immediately after `.fade-enter` is assigned, Vue will assign the class `.fade-enter-active`, which will also handle the transitioning of the element opacity. Ultimately, `.fade-leave-to` is assigned and the final state (transparent) is applied. What makes this setup extremely effective is that Vue is transitioning *both* elements with a single chain of actions.

{% highlight scss %}
// Icon transitions & animations
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to {
  opacity: 0
}
{% endhighlight %}

### Connecting to Vue
In order to transition our elements with Vue, we'll need to wrap our icons in a `<transition>` tag, which comes packaged with Vue. Items within the `<transition>` will automatically be assigned the transition classes identified by the value passed into the `name` attribute. In this case, we're using the name `fade` for our transitions. We'll also add the attribute and value `mode="out-in"` to ensure that the transition of one element finishes before the next begins.

Next, we'll handle the toggling of the icon visibility and transitions by assigning a conditional directive to each icon, `v-if="show"` and `v-else`. Now, the expand icon will be visible if `show` resolves to `true` and the collapse icon will be visible if `show` resolves to `false`.

 On each icon, we'll also attach a click event listener and toggle the visibility of the icon with `@click="show = !show"`. We could refactor our click event listeners into a method, but for the sake of simplicity we'll just leave them in-line. Note that we need to assign each icon a unique `key` value for Vue to hook into. In this case, we'll manually assign these keys to `expand_more` and `expand_less`.

{% highlight html %}
<div id="icon">
  <transition name="fade" mode="out-in">
    <i class="material-icons expand"
       v-if="show"
       @click="show = !show"
       key="expand_more">expand_more</i>
    <i class="material-icons expand"
       v-else
       @click="show = !show"
       key="expand_less">expand_less</i>
  </transition>
</div>
{% endhighlight %}

## Fork It

<p data-height="495" data-theme-id="dark" data-slug-hash="oZVzpb" data-default-tab="result" data-user="Splode" data-embed-version="2" data-pen-title="Icon Transitions" class="codepen">See the Pen <a href="http://codepen.io/Splode/pen/oZVzpb/">Icon Transitions</a> by Christopher Murphy (<a href="http://codepen.io/Splode">@Splode</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Closing Thoughts
I prefer JavaScript to CSS for toggling visibility and animations between elements. In this case, using Vue to handle these effects may be overkill, but for larger and more complex sets of data, Vue makes managing transitions incredibly simple. Vue.js can do some pretty neat things with element transitions, so if you're interested, I would encourage you to dive deeper into the Vue documentation.

Have feedback? Let me know; I'd be happy to hear it.
[hello@christopherianmurphy.com](mailto:hello@christopherianmurphy.com){:.linkUnderline}

### Resources & Additional Reading
- [Google Material Icons][1]{:.linkUnderline}
- [Vue.js Official Documentation - Transition Effects][2]{:.linkUnderline}

[1]: https://material.io/icons/ "Material Icons"
[2]: https://vuejs.org/v2/guide/transitions.html "Vue.js Official Docs - Transition Effects"

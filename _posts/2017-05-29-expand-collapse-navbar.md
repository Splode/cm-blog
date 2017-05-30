---
layout: post
title: "Expand & Collapse Navigation Menu on Scroll"
tagline: "Creating an expanding/collapsing nav-bar with scroll events and vanilla JavaScript"
date: 2017-05-29
author: Christopher Murphy
description: A simple tutorial for creating a navigation menu bar that expands and collapses when a user scrolls the page.
image: /assets/images/posts/007_expand-collapse-menu/007_expand-collapse-menu.gif
categories: CSS JavaScript navigation UI/UX
---

## What we'll be making
Screen real estate is a precious commodity, especially on small displays such as mobile devices. One strategy to maximize content display is to dynamically control the display of the primary navigation depending on whether or not the user is scrolling up or scrolling down. It's quite simple: scroll down on the page and the navigation recedes; scroll up on the page and the navigation reappears.

Implementing this strategy is quite simple. We'll be creating the following example using native JavaScript and some simple CSS. I'll also include an example of a similar implementation using Vue.js.

### HTML Scaffolding and Basic Styles
We'll start by creating our basic HTML elements and styling them. We'll select a few colors as variables and set a variable for our nav-bar height. These steps could easily be accomplished without SCSS, but I prefer using Sass when possible.

{% highlight scss %}
$color-primary-dark: #303A52;
$color-accent: #9E579D;
$color-white: snow;
$navBar-height: 73px;
{% endhighlight %}

Our HTML will consist of a primary `<main>` container and a full-width, fixed-position `<nav>` element at the very top of the page.

{% highlight HTML %}
<main>
  <!--   Nav bar to collapse/expand -->
  <nav id="navBar"></nav>
</main>
{% endhighlight %}

We'll apply a fixed height, `300vh` to the `<body>` of our page for demonstration purposes (this will allow us to scroll as if our page were full of content).

{% highlight scss %}
body {
  background-color: $color-white;
  height: 300vh;
}
{% endhighlight %}

We'll pin our `<nav>` element to the top of the browser window with `position: fixed` and `top: 0`. We'll also make it the full width of the parent element with `width: 100%` and key in our `$navBar-height` variable for the `height` property.

{% highlight scss %}
// Nav bar
nav {
  background-color: $color-primary-dark;
  border-bottom: 2px solid $color-accent;
  position: fixed;
  top: 0;
  width: 100%;
  height: $navBar-height;
}
{% endhighlight %}

### Animating Expand & Collapse
We're going to jump ahead just a little bit with this next step. We know that we want to alternately hide and reveal the `<nav>` element upon scrolling, and the simplest way to achieve this is by adding/removing a class that animates these changes in state.

For this, we'll create two classes, `.collapse` and `.open`, each with a corresponding animation, `collapse` and `open`. *Note the `animation` property of `forwards`, which will keep the animation from reverting to its initial state upon finishing.*

{% highlight scss %}
// Collapse nav bar on scroll down
.collapse {
  animation: collapse .5s ease forwards;
}

// Open nav bar on scroll up
.open {
  animation: open .5s ease forwards;
}
{% endhighlight %}

When we scroll down the page, we'd like our `<nav>` element to fade and collapse  upward simultaneously, and do the opposite when we scroll up. To achieve the fade, the animations for each class will alternately set the `opacity` of the `<nav>` element to fully transparent or opaque. To achieve the collapse and expand effect, we'll set the position of the `<nav>` element to either `top: 0` for `.open` or `top: -$navBar-height` for `.collapse`.

{% highlight scss %}
@keyframes collapse {
  from {
    opacity: 1;
    top: 0;
  }
  to {
    opacity: 0;
    top: -$navBar-height;
  }
}

@keyframes open {
  from {
    opacity: 0;
    top: -$navBar-height;
  }
  to {
    opacity: 1;
    top: 0;
  }
}
{% endhighlight %}

In the collapsed position, the `<nav>` element will be position absolutely above the browser window, rendering it effectively invisible. The `opacity` animation will help make this a smooth transition, but is optional. In fact, this method could be used in conjunction with scroll events to animate any number of elements in all sorts of interesting ways.

### Scroll Events & Animations
#### Adding and Removing Classes with JavaScript
In order to toggle our expand/collapse classes, we'll need to make them available to our script. We'll do this by querying the `<nav>` element by ID and set a variable, `navClasses` with the native `.classList`. This will now give us access to the current classes associated with our `<nav>` element.

{% highlight JavaScript %}
// Store navbar classes
var navClasses = document.getElementById('navBar').classList;
{% endhighlight %}

To assign and remove these classes, we'll define two functions that we'll call either when scrolling down (collapse) or scrolling up (open).

{% highlight JavaScript %}
function downAction() {
  navClasses.remove('open');
  navClasses.add('collapse');
}

function upAction() {
  navClasses.remove('collapse');
  navClasses.add('open');
}
{% endhighlight %}

These functions will make use of the native `.add()` and `.remove()` methods to append or remove strings to the class list of its associated `classList`<sup>[1][1]</sup>.

#### Detecting Scroll Position
Now that we have our structure, styles, and animations in place, we'll need a way to detect scroll position and call our class addition/removal functions.

We'll start by creating a function that returns the position of the browser window along the Y-axis. When called, this function will return the value, in pixels, of the uppermost portion of the window (the point at which content is clipped on scroll). `scrollY` is a native property of the browser window object<sup>[2][2]</sup>.

{% highlight JavaScript %}
// returns current scroll position
var scrollTop = function() {
	return window.scrollY;
};
{% endhighlight %}

We'll also need to keep track of our scroll position in order to check the current scroll value with the previous scroll value.

{% highlight JavaScript %}
// Initial scroll position
var scrollState = 0;
{% endhighlight %}

#### Calling Scroll Detect Functions
Next we'll need to determine if a user has scrolled up or down on the page, and depending upon the case, call the respective function. We'll do this by defining a function, which takes three functions as parameters, a home action (default state), down action, and up action.

{% highlight JavaScript %}
// Primary scroll event function
var scrollDetect = function(home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};
{% endhighlight %}

A conditional statement will check if the current scroll position is lower or higher than the previous scroll position. If the current scroll position is greater than the previous, the user has scrolled down and we invoke the `down()` function. If the current scroll position is less than the previous scroll position, the user has scrolled up and we invoke the `up()` function. Lastly, we update the current scroll position.

#### Putting it All Together
The last step in our example is to create an event listener on the browser window, which invokes our `scrollDetect()` function on scrolling events.

{% highlight JavaScript %}
window.addEventListener("scroll", function() {
  scrollDetect(homeAction, downAction, upAction);
});
{% endhighlight %}

We'll pass in our previously defined functions as arguments and voila! we have an interactive top-level navigation menu that expands and collapses on scroll events.

### Final Result
#### Vanilla JavaScript
<p data-height="495" data-theme-id="0" data-slug-hash="xdoOBB" data-default-tab="result" data-user="Splode" data-embed-version="2" data-pen-title="Expand/Collapse Navigation Menu - Vanilla" class="codepen">See the Pen <a href="https://codepen.io/Splode/pen/xdoOBB/">Expand/Collapse Navigation Menu - Vanilla</a> by Christopher Murphy (<a href="https://codepen.io/Splode">@Splode</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

#### Vue.js
<p data-height="495" data-theme-id="0" data-slug-hash="WjQewW" data-default-tab="result" data-user="Splode" data-embed-version="2" data-pen-title="Expand/Collapse Navigation Menu" class="codepen">See the Pen <a href="https://codepen.io/Splode/pen/WjQewW/">Expand/Collapse Navigation Menu</a> by Christopher Murphy (<a href="https://codepen.io/Splode">@Splode</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

### Closing Thoughts
The expanding and collapsing navbar we've built is a practical example of listening to scroll events on the browser window. With this navigation menu, we can save precious screen real estate and remove interface distractions, which can be especially useful when consuming content on mobile devices.

Not only is this a useful interface component, it exposes the power of listening to native scroll events. With these methods, we have another tool with which we can call all sorts of interactive events.

Have feedback? Let me know; I'd be happy to hear it.
[hello@christopherianmurphy.com](mailto:hello@christopherianmurphy.com)

### Resources & Additional Reading
- [Element.classList API on MDN][1]{:.linkUnderline}
- [Window.scrollY API on MDN][2]{:.linkUnderline}

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Element/classList "Element.classList API on MDN"
[2]: https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY "Window.scrollY API on MDN"

---
layout: post
title: "Pure CSS Responsive Flex Menu"
tagline: "Making a pure CSS responsive menu using flexbox."
date: 2016-01-23
author: Christopher Murphy
description: This resource is a responsive menu based on CSS using flexbox. It relies upon a checkbox input to toggle between states and can therefore be used as an alternative to JavaScript-based solutions.
excerpt: This resource is a responsive menu based on CSS using flexbox. It relies upon a checkbox input to toggle between states and can therefore be used as an alternative to JavaScript-based solutions.
image: assets/images/posts/001_cssMenu/cssMenu.gif
categories: CSS navigation responsive
---

## What We'll be Making
This resource is a responsive menu based on CSS using flexbox. It relies upon a checkbox input to toggle between states and can therefore be used as an alternative to JavaScript-based solutions. For desktop-sized displays, the menu will display as a list of text links, while on mobile devices, the menu will display as an icon that toggles the display of text links.

![Pure CSS Responsive Menu]({{ site.baseurl }}/assets/images/posts/001_cssMenu/cssMenu.gif "Pure CSS Responsive Menu")
<figcaption>A fully responsive menu on mobile devices using CSS.</figcaption>

## Creating the Structure

### Structuring the HTML
Our HTML will be structured in 2 main containers, a `nav` element that contains our menu and a `header` element that contains some preview content.

We're using an unordered list for our navigation links, contained in a `nav` element with the class of "wrapper". Our entire menu system is in-turn wrapped in a `nav` element with the class of "navBar". We'll target these classes with CSS to adjust our layout.

We'll use a basic `div` with a class of "logo" to act as placeholder for a logo.

A simple header with a heading and some filler text will give our page some content to preview.

{% highlight html %}
<nav class="navBar">
	<nav class="wrapper">
		<div class="logo"></div>
		<ul>
			<a href="#"><li>Lorem</li></a>
			<a href="#"><li>Ipsum</li></a>
			<a href="#"><li>Serum</li></a>
		</ul>
	</nav>
</nav>
<header class="wrapper">
  <h1>Big ol' Lorem</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, sint corporis dolores omnis consectetur quaerat nesciunt beatae maiores, itaque labore ex vero pariatur nulla non fugiat, facilis eaque sunt doloremque!</p>
</header>
{% endhighlight %}

### Basic CSS Styling
We’ll add some basic styling to our snippet with CSS. I’m using Sass for this example, but you could just as easily use plain ol’ CSS. We'll give our `h1` some extra top-padding so that it displays below our navigation.

{% highlight scss %}
@import url(https://fonts.googleapis.com/css?family=Oswald:400,700);

//Color Variables
$color1: #E84545; //Red
$color2: #53354A; //Plum
$color3: #903749; //Maroon

// Base Styles
body {
  background-color: $color1;
  color: $color2;
  font-family: 'Oswald', sans-serif;
  line-height: 2em;
  text-transform: uppercase;
}

h1 {
  font-size: 3em;
  padding: 1em 0;
}

header {padding-top: 75px;}
{% endhighlight %}

Our content is centered by giving the `.wrapper` class the property `margin: 0 auto`. We limit its width by giving it the property `max-width: 960px`.

{% highlight scss %}
.wrapper {
  margin: 0 auto;
  max-width: 960px;
  padding: 0 2%;
}
{% endhighlight %}

We ensure that the navigation stays at the top of the browser window by giving it a `position: fixed` property. Setting its width to `min-width: 100%` will ensure that the navigation spans the full width of the browser window.

{% highlight scss %}
.navBar {
  background-color: $color2;
  position: fixed;
  min-width: 100%;
}
{% endhighlight %}

Lastly, we'll give our logo placeholder some definition by giving it a `height`, `width` and `background-color`.

{% highlight scss %}
.logo {
  background-color: $color1;
  border-radius: 50px;
  display: inline-block;
  height: 45px;
  margin: 1em 0;
  width: 45px;
}
{% endhighlight %}

### Navigation Styling
We'll focus on styling the navigation for our full, desktop version first and then implement our mobile toggle afterward.

![CSS Menu - Desktop Version]({{ site.baseurl }}/assets/images/posts/001_cssMenu/cssMenu_desk.png "CSS Menu - Desktop Version")
<figcaption>The desktop version of the menu with full, inline navigation links.</figcaption>

We'll target our navigation wrapper by nesting the selector `.wrapper` within the `nav` element. This allows us to specifically target the wrapper when it is a child of a `nav` element. We give this class the `display: flex` property to make it a flex container. We can vertically center the child elements (navigation links and logo) by giving the parent container the flex property `align-items: center`. Lastly, giving the parent container the flex property `justify-content: space-between` evenly distributes the child elements within the parent flex container, effectively floating our logo to the left and our menu items to the right.

{% highlight scss %}
nav {
   .wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
 }
{% endhighlight %}

Next we'll target our navigation links by nesting them within our `nav` element. In the same manner that we set our `nav .wrapper` to display as a flex container, we can set give the `ul` the `display: flex` and `justify-content: space-between` properties to control the spacing between our list items. Traditionally, we might achieve spacing between list items using right and left padding. The flexbox model allows the spacing between these items to be intelligently adjusted.

We set our list items to `display: inline-block` so that they don't stack. We'll also add a bit of transitioning to our anchors for a bit of visual interest.

{% highlight scss %}
nav {
  ul {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    width: 50%;

    a {
      color: $color1;
      text-decoration: none;
      transition: all .5s ease;

      &:hover {color: $color3;}
    }
  }

  li  {
    display: inline-block;
  }
 }
{% endhighlight %}

## Adding the Menu Toggle

### Setting Up the Input/Label
We'll place our `input` menu as a sibling to our logo `div` and navigation `ul`. Our mobile menu will use a checkbox type `input`, which we'll give an id of "menu-toggle". We'll also give the `input` a label with a class of "label-toggle".

{% highlight html %}
<input type="checkbox" id="menu-toggle">
      <label for="menu-toggle" class="label-toggle"></label>
</input>
{% endhighlight %}

In our CSS we'll set both elements to `display: none`.

{% highlight scss %}
#menu-toggle {display: none;}

.label-toggle {display: none;}
{% endhighlight %}

![CSS Menu - Toggled State]({{ site.baseurl }}/assets/images/posts/001_cssMenu/cssMenu_open.png "CSS Menu - Toggled State")
<figcaption>The mobile version of the menu, toggled open.</figcaption>

### Adding a Media Query and Toggled States
We'll set our media query to target screen widths at or below 768px by nesting the following code within `@media screen and (max-width: 768px)`. We'll switch our `ul` and `li` to `display: block` so that our list items will stack vertically. We set `transition: all` for the `ul` because we'll be transitioning the `height`, `opacity`, and `visibility` properties when toggling.

{% highlight scss %}
ul {
  background-color: $color1;
  display: block;
  height: 0;
  list-style-type: none;
  opacity: 0;
  text-align: center;
  transition: all 1s ease;
  width: 100%;
  visibility: hidden;
}

li {
  border-bottom: 2px solid $color2;
  color: $color2;
  display: block;
  font-size: 1.5em;
  padding: 2em 0;
}
{% endhighlight %}

Because the `display` property isn't effected by `transition`, we'll need to transition our menu using a combination of `visibility: hidden`, `height: 0`, and `opacity: 0`. In our toggled state, dictated by `#menu-toggle:checked`, we'll set the transitioned properties to the following:

{% highlight scss %}
#menu-toggle:checked ~ ul {
      opacity: 1;
      height: 100vh;
      visibility: visible;
}
{% endhighlight %}

Now when toggling our menu, the menu container will expand and transition nicely. This menu, built on CSS alone, serves as a responsive way to serve navigation. You can also remove the desktop state to have a full-screen toggle menu at any screen width.

## The Finished Result
Below you'll see the finished result, which you can fork on Codepen. *Note that in order to see the responsive aspects of the menu, you'll need to run this snippet in debug mode to access the media query breakpoint.*

<p data-height="405" data-theme-id="0" data-slug-hash="RrZZwL" data-default-tab="result" data-user="Splode" class='codepen'>See the Pen <a href='http://codepen.io/Splode/pen/RrZZwL/'>Pure CSS Responsive Menu</a> by Christopher Murphy (<a href='http://codepen.io/Splode'>@Splode</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>

---
layout: post
title: "Making a Glowing Button"
tagline: "A simple snippet for a radioactive button."
date: 2017-04-22
author: Christopher Murphy
description: A simple snippet for a glowing button, made with CSS transitions and animations.
excerpt: I got a wild hair the other day to make a glowing button. The basic idea was simple and straightforward&#58; create a button that has a glowing look, as it were phosphorescent or radioactive, and that glows even more fervently when hovered. So, let's make it!
image: /assets/images/posts/008_glowing-button/008_glowing-button.png
categories: animation CSS snippet UI/UX
---

## Glowing Button, Just for Kicks
I got a wild hair the other day to make a glowing button. The basic idea was simple and straightforward: create a button that has a glowing look, as it were phosphorescent or radioactive, and that glows even more fervently when hovered. So, let's make it!

It all starts with a simple button element. We'll apply the usual button styles, such as `cursor: pointer`, `outline: none`, etc. I know that I'll be adding a pseudo-element, so I'll set the positioning to `position: relative` so that the pseudo-element can be absolutely positioned.

{% highlight HTML %}
<button>Glowsticky</button>
{% endhighlight %}

{% highlight scss %}
button {
  background: #4CAF50;
  border: none;
  border-radius: 25px;
  color: snow; // Vanilla HTML color name
  cursor: pointer;
  font-size: 1.25em;
  letter-spacing: .1em;
  outline: none;
  padding: .75em 2em;
  position: relative; // Required for pseudo-element positioning
  text-transform: uppercase;
}
{% endhighlight %}

To give the button a glowing effect, we'll use the `blur` type on the css property `filter`. The `filter` is often used with images, but will work well for our `background` as well. To keep the `blur` filter from blurring our button into a fuzzy mess, we'll copy our button as a pseudo-element, place it just behind our primary button, and apply the `blur` filter to it. This will allow us to retain a crisp edge to our primary button, while emitting a slight glow.

We'll transition the `filter` and `opacity` on hover, so we'll add a transition rule as well.

{% highlight scss %}
button::before {
    background: #4CAF50;
    border-radius: inherit;
    content: '';
    filter: blur(10px); // Controls the extent of the initial glow
    opacity: .75;
    position: absolute;
    transition: all .3s ease-in-out;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    z-index: -1; // Set behind primary button
  }
{% endhighlight %}

To give our button a bit of interactivity, we'll increase the intensity of the glow on hover. To achieve this we target the *pseudo-element* when the `button` is hovered and double the spread of the `blur` and set the `opacity` to full.

That's our basic glowing button.

{% highlight scss %}
button:hover::before {
    filter: blur(20px); // Increases the extent of the glow on hover
    opacity: 1;
  }
{% endhighlight %}

## Bonus: Pulsar
For an extra bit of panache, we can add a subtle pulsing effect while hovering. Well achieve this by animating the background color of the primary button with an animation that alternates between the initial color and a slightly lighter shade.

{% highlight scss %}
@keyframes glow {
  0% {
    background: $color-primary;
  }
  25% {
    background: $color-primary-light;
  }
  100% {
    background: $color-primary;
  }
}
{% endhighlight %}

We then apply this animation to the primary button upon hover and set the animation to `infinite` so that the pulsing loops continuously. And there is our glowing, pulsing button :zap:

{% highlight scss %}
button:hover {
    animation: glow 1s ease-in infinite;
  }
{% endhighlight %}

## Let it Glow :bulb:
<p data-height="495" data-theme-id="dark" data-slug-hash="wdMNMm" data-default-tab="result" data-user="Splode" data-embed-version="2" data-pen-title="Glowing Button" class="codepen">See the Pen <a href="http://codepen.io/Splode/pen/wdMNMm/">Glowing Button</a> by Christopher Murphy (<a href="http://codepen.io/Splode">@Splode</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Closing Thoughts
There are lots of possibilities for creating interesting effects and experiences with CSS, which is one of the reasons why I love working with it so much. It's thrilling and rewarding to implement an idea that was hitherto just that — an idea.

Have feedback? Let me know; I'd be happy to hear it.
[hello@christopherianmurphy.com](mailto:hello@christopherianmurphy.com){:.linkUnderline}

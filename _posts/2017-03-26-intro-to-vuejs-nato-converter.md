---
layout: post
title: "Learn Vue.js - a quick and friendly tutorial"
tagline: "Making a NATO phonetic alphabet converter with Vue.js."
date: 2017-03-26
author: Christopher Murphy
description: Learn Vue.js - a quick and friendly tutorial for the increasingly popular reactive framework, Vue.js.
excerpt: Vue.js is a progressive and reactive JavaScript framework for building front-end interfaces. It's dead-simple and allows for lightning-fast DOM manipulation through a virtual DOM. It's flexible enough to use in simple, static pages, and powerful enough to use in complex applications as well.
image: /assets/images/posts/003_vueNato/vue.png
categories: JavaScript Vue.js
---
<!-- Assign liquid template variables to escape  curly braces -->
{% assign input = '{{ input }}' %}
{% assign result = '{{ result }}' %}

![Vue.js]({{ site.baseurl }}/assets/images/posts/003_vueNato/vue.png)

## Vue.js
Vue.js is a progressive and reactive JavaScript framework for building front-end interfaces. It's dead-simple and allows for lightning-fast DOM manipulation through a virtual DOM. It's flexible enough to use in simple, static pages, and powerful enough to use in complex applications as well.

### Installing Vue
The simplest way to install Vue.js is by linking to the CDN. Note: place your script tag at the end of the `<body>` tag.

{% highlight html %}
<script src="https://unpkg.com/vue"></script>
{% endhighlight %}

You can also install Vue via the Node Package Manager, or use the powerful Vue CLI.

## What We'll be making - Whiskey Tango Foxtrot
The NATO phonetic alphabet is a radiotelephonic alphabet used by NATO members. In other words, it's a method used by radio operators to spell words and pronounce letters clearly by using a proxy alphabet. "Cat", for example, would be transmitted as "Charlie, Alpha, Tango." You might recall hearing this system used in just about any action movie that features the U.S. military.

Our app will take a user's input and translate it into the NATO phonetic alphabet in real-time. No need to refresh the page, rewrite DOM elements, or create event listeners. In other words, we'll be leveraging real-time, two-way binding between our DOM and data.

*Note: I won't be diving into the CSS of this project, as Vue.js is the focus. I'll be using ES6 syntax, so you may need to use a preprocessor, such as Babel, for full browser support (or you could just use ES5 syntax).*

![NATO phonetic alphabet converter using Vue.js]({{ site.baseurl }}/assets/images/posts/003_vueNato/vueNato.gif)
<figcaption>Vue.js allows us to create a reactive, two-way binding between data and the DOM.</figcaption>

### Setting up Vue.js
The easiest way to get started with Vue.js is to simply import it from a CDN using a `<script>` tag and placing it at the end of the `<body>` in our HTML document.

{% highlight html %}
<script src="https://unpkg.com/vue"></script>
{% endhighlight %}

Now, in our `<script>` tag we'll have access to the Vue framework. That's really all we need to get started.

### Binding Vue Data and the DOM
Next we'll create a new Vue instance and give it an identifier in order to connect it to our HTML. The `el` property will allow us to hook into an HTML element, thereby giving Vue access it to all its children. We'll connect Vue and our DOM by giving the `<main>` element an id of `app` and setting the value of `el` in our Vue instance to `#app`. The `data` property will store our project variable, `input`, which will initially be set to an empty string.

{% highlight html %}
<main id="app">
</main>
{% endhighlight %}

{% highlight javascript %}
new Vue({
  el: '#app',
  data: {
    input: '',
    },
  })
{% endhighlight %}

Our app will need to take user input in order to convert it, so next we'll setup an `<input>` field. We can connect the value of the `<input>` to Vue by applying the directive `v-model` to our `<input>`. Using `v-model="input"` binds the DOM and the Vue data in a two way relationship. We can easily test this by outputting our `input` using the mustache syntax that Vue provides for string interpolation.

{% highlight html %}
<main id="app">
  <h1>NATO Phonetic Converter</h1>
  <input placeholder="Word or phrase" v-model="input">
  <p>{{ input }}</p>
</main>
{% endhighlight %}

With this setup, we now have two-way binding between our input value and our Vue data without implementing event listeners.

### NATO Conversion
Converting our input to NATO format is quite simple. We'll create a function outside of our Vue instance, which will accept a single letter as a parameter. A `switch` statement with the key/values of our alphabet are then used to check against each letter passed to the function, ultimately returning our NATO phonetic equivalent. We make use of a regular expression to make sure that we're only converting alphanumeric characters (!, #, &, etc. are ignored).

{% highlight javascript %}
const nato = letter => {
  const re = /[a-zA-Z0-9]/g;
  letter = letter.toLowerCase();
  const cases = {
    'a': 'Alpha',
    'b': 'Bravo',
    'c': 'Charlie',
    'd': 'Delta',
    'e': 'Echo',
    'f': 'Foxtrot',
    'g': 'Golf',
    'h': 'Hotel',
    'i': 'India',
    'j': 'Juliette',
    'k': 'Kilo',
    'l': 'Lima',
    'm': 'Mike',
    'n': 'November',
    'o': 'Oscar',
    'p': 'Papa',
    'q': 'Quebec',
    'r': 'Romeo',
    's': 'Sierra',
    't': 'Tango',
    'u': 'Uniform',
    'v': 'Victor',
    'w': 'Whiskey',
    'x': 'Xray',
    'y': 'Yankee',
    'z': 'Zulu',
    '0': 'Zero',
    '1': 'Won',
    '2': 'Two',
    '3': 'Three',
    '4': 'Four',
    '5': 'Five',
    '6': 'Six',
    '7': '7',
    '8': 'Eight',
    '9': 'Niner',
    ' ': ' • '
  };
  if (cases[letter]) {
    return cases[letter];
  } else if (letter.search(re) === -1) {
    return '';
  }
};
{% endhighlight %}

#### Computed Properties
Vue gives us access to computed properties, which you can think of as variables — not unlike those specified in `data`. However, computed properties are actually methods that return a value. Therefore, we can pass our `input` into a computed property, call our NATO conversion function, and return the result. What makes computed properties incredibly powerful, though, is that they are updated *continually*. That is, every time that our `input` is changed, our computed property will be updated as well.

Computed properties are declared with the `computed` property in the Vue instance. To convert our user input into a NATO-ready string, we'll define a computed property, `result()`. The `result()` method will take `input` as a parameter, return the `input` value after splitting it into individual characters, and calling the `nato()` function on each character. Note that Vue allows you to access properties within an instance by using `this` via a helpful proxy. Now, instead of displaying `input` in our `<p>`, we'll instead display `result`.

{% highlight html %}
<main id="app">
  <h1>NATO Phonetic Converter</h1>
  <input placeholder="Word or phrase" v-model="input">
  <p>{{ result }}</p>
</main>
{% endhighlight %}

{% highlight javascript %}
new Vue({
  el: '#app',
  data: {
    input: '',
    },
    computed: {
     result() {
       return this.input.split('').map(el => nato(el)).join(' ');
   }
 },
})
{% endhighlight %}

### Clearing Input
Lastly, we'll create a button that allows us to quickly clear our `input`. We'll accomplish this by creating a button and attaching a click event listener to it. Vue gives us the `v-on:click` directive, which unsurprisingly listens for a mouse-click on an element. It has a shorthand of `@click`, which we'll be using. We'll set the value of the click event listener to a method, `clear`, which we we'll set up next.

{% highlight html %}
<main id="app">
  <h1>NATO Phonetic Converter</h1>
  <input placeholder="Word or phrase" v-model="input">
  <button @click="clear">clear</button>
  <p>{{ result }}</p>
</main>
{% endhighlight %}

#### Methods
Methods are defined in the Vue instance with the `methods` property in the Vue instance. We'll now define the `clear()` method that we attached to the `@click` event listener and simply set the `input` back to its initial state, an empty string.

{% highlight javascript %}
new Vue({
  el: '#app',
  data: {
    input: '',
    },
    computed: {
     result() {
       return this.input.split('').map(el => nato(el)).join(' ');
   }
 },
 methods: {
    clear() {
      this.input = '';
    },
  }
})
{% endhighlight %}

Note that when we clear our `input`, our computed property, `result` is also cleared.

## Result

<p data-height="495" data-theme-id="0" data-slug-hash="MpaWYN" data-default-tab="result" data-user="Splode" data-embed-version="2" data-pen-title="NATO alphabet Converter - Vue" class="codepen">See the Pen <a href="http://codepen.io/Splode/pen/MpaWYN/">NATO alphabet Converter - Vue</a> by Christopher Murphy (<a href="http://codepen.io/Splode">@Splode</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

## Wrap-up
With this example we've only just scratched the surface of Vue's capabilities. Nevertheless, within this example we can start to see the simplicity of the Vue model and the ease in which we can setup reactivity between data and the DOM. I created a version of this exercise using jQuery, which illustrates a different approach to solving this exercise ([see it on codepen][3]{:.linkUnderline}). The Vue version of this app is much more concise and flexible.

I encourage you to explore the [official Vue documentation][1]{:.linkUnderline}, which is both comprehensive and approachable. Vue is capable of much, much more, including conditional DOM rendering, component architecture, routing, and state management. While Vue doesn't necessarily offer anything new that isn't already available with other frameworks, such as React and Angular, it is incredibly lightweight and simple.

### Resources & Additional Reading
- [Official Vue.js documentation][1]{:.linkUnderline}
- [NATO phonetic alphabet - Wikipedia][2]{:.linkUnderline}

Have feedback? Let me know; I'd be happy to hear it. [hello@christopherianmurphy.com](mailto:hello@christopherianmurphy.com){:.linkUnderline}

[1]: https://vuejs.org/ "Official Vue.js documentation"
[2]: https://en.wikipedia.org/wiki/NATO_phonetic_alphabet "NATO phonetic alphabet - Wikipedia"
[3]: http://codepen.io/Splode/pen/egXjZO "NATO phonetic alphabet converter - jQuery version"

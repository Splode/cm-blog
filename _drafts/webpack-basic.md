---
layout: post
title: "Up & Running Quickly with Webpack & ES2015"
tagline: "Bundle project assets with Webpack and leverage ES2015 syntax with Babel."
date: 2017-04-23
author: Christopher Murphy
description: A tutorial for setting up a basic workflow with Webpack and Babel. Webpack allows you to bundle project assets and modules efficiently. Babel allows you to use ES2015 syntax by transpiling
excerpt: 
image: /assets/images/posts/009_webpack-basic/009_webpack-basic.png
categories: ES2015 JavaScript npm tooling Webpack
---

![Webpack]({{ site.url }}/assets/images/posts/009_webpack-basic/009_webpack-basic.png)

## Webpack — What is it?
Module bundlers, like Webpack and Browserify, have become

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack Test Project</title>
  </head>
  <body>
    <script type="text/javascript" src="script-1.js"></script>
    <script type="text/javascript" src="script-2.js"></script>
    <script type="text/javascript" src="script-3.js"></script>
    <script type="text/javascript" src="script-4.js"></script>
  </body>
</html>
{% endhighlight %}

## Installing Webpack
Installing Webpack is quite simple, especially if you're familiar with installing modules with npm. If you haven't used npm, then you'll f

{% highlight bash %}
mkdir webpack-test-project
cd webpack-test-project
npm init
{% endhighlight %}

Running `npm init` will take us through the process of generating a package.json file, which contains information about our project and stores all of our npm project dependencies.

Now that we have our package.json file, we'll install webpack as a development dependency by adding the `--save-dev` flag. This will install webpack locally and save it to our package.json file as a package dependency (see package.json to see webpack added).

{% highlight bash %}
npm install webpack --save-dev
{% endhighlight %}

## Basic Bundling
### Module Includes
Now that we have webpack installed, we can use it to bundle our assets and modules together. We'll create a `index.js` file from which we'll include our modules and write some of our app logic.

{% highlight bash %}
touch index.js
{% endhighlight %}

As an example, let's use jQuery for our project. We'll install it and save it as a dependency.

{% highlight bash %}
npm install jquery --save
{% endhighlight %}

To access it within our `index.js` file, we'll assign it to a variable and `require` it. Let's test our app by creating a simple "Hello World" statement using jQuery.

{% highlight javascript %}
var $ = require('jquery');

$('#hw').html('Hello World');
{% endhighlight %}

We'll create an `index.html` as the entry point for our project and reference our script.

{% highlight html %}
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Webpack Test Project</title>
  </head>
  <body>
    <div id="hw"></div>
    <script type="text/javascript" src="./dist/bundle.js"></script>
  </body>
</html>
{% endhighlight %}

### Bundle!
To bundle our `index.js` file with jQuery, we'll run the `webpack` command followed by our entry point, `index.js` and our bundled file location/name, `./dist/bundle.js`

{% highlight bash %}
webpack index.js ./dist/bundle.js
{% endhighlight %}

## Webpack Config

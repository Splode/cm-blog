---
layout: post
title: "10 Essential Extensions for Visual Studio Code"
tagline: "A collection of useful extensions for front-end development in Microsoft Visual Studio Code"
date: 2017-08-18
author: Christopher Murphy
description: "The best Visual Studio Code extensions for front-end development in 2017."
excerpt: VS Code is a powerful editor right out of the box, but there are a slew extensions available that add some great functionality and flavor. What follows is my top-10 list of the most useful extensions for front-end development in VSCode.
image: /assets/images/posts/top-vscode-extensions/visual-studio-code-logo.png
categories: editor extensions tools VSCode
---

## VS Code Extensions

Microsoft’s [Visual Studio Code][vscode] (VSCode) is a robust, open-source(!), multi-platform editor that has quickly become my code editor of choice. VSCode has some really great features like Intellisense, native Git support and Emmet implementation. It’s also extensible and quite customizable.

VS Code is a powerful editor right out of the box, but there are many great extensions available that add some great functionality and flavor. What follows is my top-10 list of the most useful extensions for front-end development in VSCode:

### 10. [Dracula][dracula] or [One Dark Pro][oneDark]

![Dark themes for VSCode: Dracula and One Dark Pro](/assets/images/posts/top-vscode-extensions/vscode-dark-themes.png "Dark themes for VSCode: Dracula and One Dark Pro")

Up first is one of two color themes. I get a lot of simple pleasure out of a well balanced color palette for my coding environment. I also find that dark color palettes are easier on my eyes, especially when working late at night. 

Take your pick of the following two themes—they're both nicely designed, highly rated, and have a wide fan base, which means that you'll likely be able to find versions of each theme for a plethora of other apps. 

#### [Dracula][dracula]

[Dracula][dracula] is a popular theme that has support for lots of different applications, including Slack and Terminal. Dracula is my current theme of choice, though One Dark Pro is a close second.

![Dracula Theme for Visual Studio Code](/assets/images/posts/top-vscode-extensions/vscode-dracula.png "Dracula Theme for Visual Studio Code")

<figcaption>The Dracula theme for VSCode. Does it remind you of Halloween candy?</figcaption>

#### [One Dark Pro][oneDark]

 Before switching to VSCode, I used Atom and really enjoyed Atom's default theme, One Dark. [One Dark Pro][oneDark] is a port of One Dark, which is quite nice on its own.

 ![One Dark Pro for Visual Studio Code](/assets/images/posts/top-vscode-extensions/vscode-one-dark-pro.png "One Dark Pro for Visual Studio Code")

 <figcaption>Atom's beautful theme, One Dark ported to VSCode.</figcaption>

### 9. [HTML CSS Support][html]

[HTML CSS Support][html] scans your project directory for CSS and SCSS files and provides HTML attribute autocomplete for classes and ids.

### 8. [Code Runner][coderunner]

[Code Runner][coderunner] does what it says on the tin: it will execute statements from a variety of languages and output the results to the built-in Output Window. For JavaScript, this is already easily achievable with Node or the browser console, but Code Runner will allow you to execute a selection of code in a variety of languages, like php.

### 7. [stylelint][stylelint]

The [stylelint][stylelint] extension lints your CSS, SCSS, and LESS files as you type. It’s handy tool that helps to maintain consistent stylesheet formatting between projects and developers.

### 6. [npm][npm]

The [npm][npm] extension provides a few helpful features when working with npm packages. Notably, it provides validation for `package.json` files, alerting you to extraneous or outdated modules. It also provides shortcuts for common npm commands, like *Rerun last script*.

### 5. [Settings Sync][sync]

[Setting Sync][sync] allows you to sync your editor settings, extensions, and snippets between different environments. It does this by using GitHub's gist system as a central store. The process is simple and the extension makes it even simpler with detailed instructions. I use this extension regularly to sync settings between my work and home environments.

### 4. [Vetur][vetur]

![Vetur extension for Visual Studio Code](/assets/images/posts/top-vscode-extensions/vscode-vetur.png "Vetur extension for Visual Studio Code")

<figcaption>Vetur provides a suite of useful features for working with Vue.</figcaption>

This is a particularly biased pick. Vue.js is my reactive library of choice. It's incredibly easy to pick up, yet is powerful and extensible enough to be used for complex projects. 

[Vetur][vetur] is an extension with a suite of features useful for working with Vue, like syntax highlighting and scaffolding for single file components, snippets, linting, etc.

### 3. [Beautify][beautify]

[Beautify][beautify] is a handy auto-formatter for HTML, CSS, and JavaScript documents. This tool is especially useful when used in conjunction with ESLint. [Beautify][beautify] will format your code quite nicely without any configuration, but it can also be customized to follow your preferred conventions.

### 2. [Path Intellisense][path]

[Path Intellisense][path] makes working with file paths incredibly simple. It parses your project directory and provides an inline intellisense menu for file paths in your project directory. This is especially hand when searching through deeply nested directories like `node_modules`.

### 1. [ESLint][ESLint]

![ESLint extension for Visual Studio Code](/assets/images/posts/top-vscode-extensions/vscode-eslint.png "ESLint extension for Visual Studio Code")

<figcaption>ESLint, and incredibly useful extension for keeping bugs at bay.</figcaption>

[ESLint][ESLint] is an incredibly valuable tool for working with JavaScript. It allows you to parse your code and generate errors or warnings based on best-practice rules for a given code format.  This helps to eliminate many bugs before runtime.

The ESLint extension greatly enhances this functionality by linting your code as you type.  You can also autocorrect many errors right from the editor itself.

ESLint is incredibly useful and the one extension that I would recommend to any front-end developer.

## Conclusion

VSCode is a powerful and robust editor even without any of the preceding extensions, but each extension provides some convenient and handy functionality. Be sure to visit the [Visual Studio Marketplace][marketplace] where you can explore all sorts of extensions.

Do you have a favorite extension that you find essential? [Let me know @splode](https://twitter.com/intent/tweet?text=@splode).

[vscode]: https://code.visualstudio.com/

[marketplace]: https://marketplace.visualstudio.com/

[ESLint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

[path]: https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense

[beautify]: https://marketplace.visualstudio.com/items?itemName=HookyQR.beautify

[vetur]: https://marketplace.visualstudio.com/items?itemName=octref.vetur

[sync]: https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync

[npm]: https://marketplace.visualstudio.com/items?itemName=eg2.vscode-npm-script

[coderunner]: https://marketplace.visualstudio.com/items?itemName=formulahendry.code-runner

[stylelint]: https://marketplace.visualstudio.com/items?itemName=shinnn.stylelint

[html]: https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css

[oneDark]: https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme

[dracula]: https://marketplace.visualstudio.com/items?itemName=dracula-theme.theme-dracula
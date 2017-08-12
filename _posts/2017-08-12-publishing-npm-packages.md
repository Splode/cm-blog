---
layout: post
title: "Publishing npm Packages"
tagline: "Publishing npm packages and sharing code between projects is ridiculously simple."
date: 2017-08-12
author: Christopher Murphy
description: "Publishing npm packages and sharing code between projects is a simple process. This article will walk you through the steps to create, publish, and update your own npm packages."
image: /assets/images/posts/publishing-npm-packages/publishing-npm-packages.png
categories: Bootstrap JavaScript npm tools
excerpt: The Node Package Manager (npm) is a ubiquitous system used in front-end development for sharing and managing useful bits of code between developers and projects. Node packages are published on a central and public directory maintained by npm.
---

## npm Packages

The Node Package Manager (npm) is a ubiquitous system used in front-end development for sharing and managing useful bits of code between developers and projects. Node packages are published on a central and public directory maintained by npm.

> npm makes it easy for JavaScript developers to share and reuse code, and it makes it easy to update the code that you're sharing.

*[npm official documentation][npm-docs]*

What’s especially wonderful about npm is that it will assist in managing not only updates to modules used in projects, it handles the dependency chain for modules within your project. For example, if I’m using  the *node-sass* package in my project and save it as a dependency, npm will also install and update the  *node-sass* dependencies. This makes updating and managing projects with lots of dependencies a breeze.

### [Bootstrap Nucleus][bootstrap-nucleus]

I recently went through the package publication process when I decided to publish a package, [Bootstrap Nucleus][bootstrap-nucleus]. I found myself using the Bootstrap grid and utilities for many different projects, but ended up either ditching the majority of the components or overwriting most of their properties. I don't want to include the entire Bootstrap framework if I'm not going to use it, so I opted for creating a custom build of the Bootstrap framework with only the features that I find essential and foundational.

Thankfully, npm packages can be used for CSS libraries, too. Instead of manually copying over the Bootstrap files between projects, I decided to leverage the power of npm to create a central store, or package, for these files. This approach has several benefits:

- The package files can easily be updated
- Updates can be pushed to all projects that use the package
- I can share the functionality of this package with others

## Prerequisites for Publishing

### Node .js and npm

First, we'll need to make sure that we have node.js and npm installed. Luckily, npm comes bundled with node.js, so there's a good chance that if you've got node.js installed then you've also got npm installed. We can check to make sure that we have both installed by checking the version on the command line with `node -v` and `npm -v`.

These should each return a version. If you don't have them installed, head over to [npm’s installation guide](https://www.npmjs.com/get-npm).

### npm Account

You’ll also need to [create a free npm account](https://www.npmjs.com/signup)  if you don’t already have one. Alternatively, you can create an account from the command line using `npm adduser`.

After ensuring that you have an npm account, you can login using `npm login`.

You can also double-check to make sure that you’re logged in with `npm whoami`.

Now that you’re logged in, you’ll be able to publish a package using your account.

## Creating your Package

### Package Initialization

Creating a package is a simple process that starts with the creation of a `package.json` file within your project directory that contains project information, such as package name, description, version number, etc.

Luckily, npm comes with a simple script that will generate a `package.json` file for you and allow you to provide some basic inputs. Initialize your  package using `npm init`. The only required fields for publishing your package are `name` and `version`, but it certainly doesn’t hurt to provide additional information.

*Note that when naming your package, you’ll want to ensure that a package with the same name doesn’t already exist.*

## Publishing your Package

Publishing your package to the npm directory is a simple as running `npm publish`. Seriously, this is the easiest part of the whole process. The actual work is in creating your package's functionality and maintaining it.

Be sure to include a README.md file with instructions or usage information so that others can easily understand your package's functionality and features.

## Testing your Package

After publishing your package, you can test an installation in a project to ensure that it works.

```bash
mkdir npm-test && cd npm-test && npm init -y
```

### :star: Tip :star:

 `npm init -y` will automatically initialize a `package.json` file with default values. This is handy for quick tests.

Now, install your published package using `npm install my-package` where `my-package` is the name your package. You should now see your package in the `node_modules` directory at your project root.

## Updating your Package with Versioning

Npm uses semantic versioning for managing updates to packages. There's quite a bit of nuance to semantic versioning, but the basic principle is that a version number follows a standard numbering convention, which indicates major, minor and patch versions `1.0.0`.

![Basic structure of semantic version numbering](/assets/images/posts/publishing-npm-packages/npm-semver-explained.png "Basic structure of semantic version numbering")

<figcaption>Basic structure of semantic version numbering</figcaption>

1. **Major** - is the first number and indicates an API change that makes the new version incompatible with previous versions. Major releases should be used when an update is required for functionality.
2. **Minor** - is the second number and indicates a feature update that is backwards-compatible.
3. **Patch** - is the last number and indicates a backwards-compatible update for bug fixes.

For a deep dive into semantic versioning visit the semantic versioning specification at [semver.org][semver].

npm includes a handy way to update packages consistently with a semantic versioning command, `npm version`. The command requires a `--version-name` argument, which can be `major`, `minor`, or `patch`.

For example, if you used the default value in the `npm init` process, your package version will be `1.0.0`. Running the following command will increment the version number to `1.0.1`:

```bash
npm version patch
```

After updating the package with the version command, npm will increment the package version number and write this new version to your `package.json`. You can now push your updated package to the npm registry once more with the `npm publish` command.

## Closing Thoughts

The [official npm documentation][npm-docs] is robust and quite accessible. It's useful if you intend to author packages, or even if you only ever intend to consume packages. Additionally, you can explore the wide world of published packages at [npm's online registry of packages][npm]. There's a wealth of incredibly useful packages to choose from.

Did you publish a package or have an idea for a package you'd like to publish? If so, be sure to [let me know](mailto:christopherianmurphy@gmail.com).

[npm]: http://npmjs.com
[npm-docs]: https://docs.npmjs.com
[bootstrap-nucleus]: https://www.npmjs.com/package/bootstrap-nucleus
[semver]: http://semver.org/
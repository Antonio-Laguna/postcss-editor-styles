# PostCSS Editor Styles Wrapper [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Support Chat][git-img]][git-url]

[PostCSS Editor Styles Wrapper] lets you do this in CSS.

> **Note**
> This is a fork of [postcss-editor-styles](https://github.com/m-e-h/postcss-editor-styles) that works with PostCSS 8 and ensuring this is the last thing to run.

```css
:root {           /* ignored */
  --color-text: #24292e;
}

html {            /* removed */
  font-family: sans-serif;
}

body {            /* replaced */
  color: var(--color-text);
}

button {          /* scoped and negated */
  min-height: 1.5rem;
}

.block-heading {  /* scoped */
  background-color: #eee;
}

/* becomes */

:root {
  --color-text: #24292e;
}

.editor-styles-wrapper {
  color: var(--color-text);
}

.editor-styles-wrapper button:not([class^="components-"]):not([class^="editor-"]):not([class^="block-"]):not([aria-owns]) {
  min-height: 1.5rem;
}

.editor-styles-wrapper .block-heading {
  background-color: #eee;
}
```

## Usage

Add [PostCSS Editor Styles Wrapper] to your project:

```bash
npm install postcss-editor-styles-wrapper --save-dev
```

Use [PostCSS Editor Styles] to process your CSS:

```js
const postcssEditorStyles = require("postcss-editor-styles-wrapper");

postcssEditorStyles.process(YOUR_CSS /*, processOptions, pluginOptions */);
```

Or use it as a [PostCSS] plugin:

```js
const postcss = require("postcss");
const postcssEditorStyles = require("postcss-editor-styles-wrapper");

postcss([postcssEditorStyles(/* pluginOptions */)]).process(
  YOUR_CSS /*, processOptions */
);
```

## Options
defaults:
```js
// The selector we're working within.
scopeTo: '.editor-styles-wrapper',

// Increase specificity by repeating the selector.
repeat: 1,

remove: ['html'],

replace: ['body'],

ignore: [':root'],

tags: ['a', 'button', 'input', 'label', 'select', 'textarea', 'form'],

tagSuffix: ':not([class^="components-"]):not([class^="editor-"]):not([class^="block-"]):not([aria-owns])'
```


[PostCSS Editor Styles Wrapper] runs in all Node environments, with special instructions for:

| [Node](INSTALL.md#node) | [PostCSS CLI](INSTALL.md#postcss-cli) | [Webpack](INSTALL.md#webpack) | [Create React App](INSTALL.md#create-react-app) | [Gulp](INSTALL.md#gulp) | [Grunt](INSTALL.md#grunt) |
| ----------------------- | ------------------------------------- | ----------------------------- | ----------------------------------------------- | ----------------------- | ------------------------- |


[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[npm-img]: https://img.shields.io/npm/v/postcss-editor-styles-wrapper.svg
[npm-url]: https://www.npmjs.com/package/postcss-editor-styles-wrapper
[postcss]: https://github.com/postcss/postcss
[PostCSS Editor Styles Wrapper]: https://github.com/Antonio-Laguna/postcss-editor-styles

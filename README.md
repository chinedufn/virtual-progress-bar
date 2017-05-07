virtual-progress-bar [![npm version](https://badge.fury.io/js/virtual-progress-bar.svg)](http://badge.fury.io/js/virtual-progress-bar) [![Build Status](https://travis-ci.org/chinedufn/virtual-progress-bar.svg?branch=master)](https://travis-ci.org/chinedufn/virtual-progress-bar)
===============

> A stateless progress bar component. Takes on its parent element's width and height

[View live demo](http://chinedufn.github.io/virtual-progress-bar/)

Examples:

- [virtual-dom](demo/standalone-virtual-dom.js)
- [react](demo/react.js)

## To Install

```
$ npm install --save virtual-progress-bar
```

## Demo

You can also run the [live demo](http://chinedufn.github.io/virtual-progress-bar/) locally:

```sh
# Your changes to the `/demo` folder will now live reload in your browser
git clone https://github.com/chinedufn/virtual-progress-bar && cd virtual-progress-bar && npm install && npm run demo
```

## Usage

`virtual-progress-bar` works with [virtual-dom](https://github.com/Matt-Esch/virtual-dom),
[react](https://npmjs.com/package/react), or any other DOM builder with a [hyperscript](https://github.com/Raynos/virtual-hyperscript#hselector-properties-children) style api

with [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

```js
var h = require('virtual-dom/h')
var ProgressBar = require('virtual-progress-bar')
ProgressBar.render(h) // returns vtree
```

with [react](https://npmjs.com/package/react)

```js
var h = require('react').createElement
var ProgressBar = require('virtual-progress-bar')
ProgressBar.render(h, {meterColor: 'red'}) // returns vtree
```


```sh
# view the demo in a local browser by pasting this into your terminal
# changes to the `demo` and `src` directories will live reload in your browser
git clone https://github.com/chinedufn/virtual-progress-bar && cd virtual-progress-bar && npm install && npm run demo
```

## API

### `ProgressBar.render(h[, opts])` -> `vtree`

#### h

*Required*

Type: `function`

Your `hyperscript` style DOM builder

```js
// standalone virtual-dom example
var h = require('virtual-dom/h')
ProgressBar.render(h)
```

```js
// React example
var React = require('react')
ProgressBar.render(React.createElement)
```

#### Options

*Optional*

Type: `object`

`virtual-progress-bar` comes with [default options](src/default-options.js). Pass in the ones that you'd like to override

```js
// Example overrides
var myOptions = {
  containerColor: 'rgba(0, 0, 0, .8)',
  meterColor: '#ff0000'
  direction: 'column',
  percent: 90
}
ProgressBar.render(h, myOptions)
```

##### containerColor

Type: `string`

Default: `'#1a1a1a1'`

The color of your container in [css color notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

##### meterColor

Type: `string`

Default: `'#fecf23'`

The color of your progress meter in [css color notation](https://developer.mozilla.org/en-US/docs/Web/CSS/color)

##### direction

Type: `string`

Default: `'row'`

`'row'` for a horizontal progress bar

`'column'` for a vertical progress bar

##### percent

Type: `number`

Default: `50`

The percent that your meter is filled

##### meterStyle

Type: `Object`

Styles that you pass in to override the default styling for the meter

##### containerStyle

Type: `Object`

Styles that you pass in to override the default styling for the container

## TODO:

- Clean up examples
- Think about exposing an api to extend the properties of RenderProgressBar's internal Vnodes
- Add an animated candy-striped bar example

## See Also

- [virtual-loading-dots](https://github.com/chinedufn/virtual-loading-dots)
- [virtual-dom](https://github.com/Matt-Esch/virtual-dom)

## License

MIT

// TODO: Clean up examples
var h = require('virtual-dom/h')
var createElement = require('virtual-dom/create-element')
var diff = require('virtual-dom/diff')
var patch = require('virtual-dom/patch')

var ProgressBar = require('../')

var percent = 50
var direction = 'row'
var meterColor = '#fecf23'
var containerColor = '#1a1a1a'
var oldProgressBarVtree = exampleWrapper(ProgressBar.render(h, {
  percent: percent,
  direction: direction,
  meterColor: meterColor,
  containerColor: containerColor,
  containerStyle: {
    padding: '0px'
  }
}))

var progressBarElement = createElement(oldProgressBarVtree)

document.body.appendChild(progressBarElement)

function render () {
  var newProgressBarVtree = exampleWrapper(ProgressBar.render(h, {percent: percent, direction: direction, meterColor: meterColor, containerColor: containerColor}))
  progressBarElement = patch(progressBarElement, diff(oldProgressBarVtree, newProgressBarVtree))
  oldProgressBarVtree = newProgressBarVtree
}

// Wrap our responsive progress bar in a div with the size that we want
function exampleWrapper (child) {
  return h('div', [
    'standalone virtual-dom example',
    h('div', { style: {width: '10em', height: '2em'} }, [
      child
    ])
  ])
}

// Throw some controls into the page
var slider = document.createElement('input')
document.body.appendChild(slider)
slider.type = 'range'
slider.min = 0
slider.max = 100
slider.value = percent
slider.oninput = function (e) {
  percent = e.target.value
  render()
}

var rowOrColumn = document.createElement('select')
var row = document.createElement('option')
row.value = 'row'
row.innerHTML = 'row'
var column = document.createElement('option')
column.value = 'column'
column.innerHTML = 'column'
rowOrColumn.appendChild(row)
rowOrColumn.appendChild(column)
document.body.appendChild(rowOrColumn)
rowOrColumn.oninput = function (e) {
  direction = e.target.value
  render()
}

var meterColorInput = document.createElement('input')
meterColorInput.value = '#fecf23'
meterColorInput.oninput = function (e) {
  meterColor = e.target.value
  render()
}
document.body.appendChild(meterColorInput)

var containerColorInput = document.createElement('input')
containerColorInput.value = '#fecf23'
containerColorInput.oninput = function (e) {
  containerColor = e.target.value
  render()
}
document.body.appendChild(containerColorInput)

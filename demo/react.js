// TODO: Clean up examples
var React = require('react')
var ReactDOM = require('react-dom')
var ProgressBar = require('../')

var containerColor = '#eee'
var direction = 'column'
var meterColor = 'rgb(255, 0, 0)'
var percent = 20

var divToMount = document.createElement('div')
document.body.appendChild(divToMount)
render()

function render () {
  var progressBar = ProgressBar.render(React.createElement, {
    containerColor: containerColor,
    direction: direction,
    meterColor: meterColor,
    percent: percent
  })

  ReactDOM.render(React.createElement('div', {}, [
    'React example',
    React.createElement('div', {style: {width: '1em', height: '10em'}}, [
      progressBar
    ])
  ]), divToMount)
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
rowOrColumn.appendChild(column)
rowOrColumn.appendChild(row)
document.body.appendChild(rowOrColumn)
rowOrColumn.oninput = function (e) {
  direction = e.target.value
  render()
}

var meterColorInput = document.createElement('input')
meterColorInput.value = 'rgb(255, 0, 0)'
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

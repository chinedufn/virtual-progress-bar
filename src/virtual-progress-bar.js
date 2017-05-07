var extend = require('xtend')
var prefix = require('preflex')

var defaults = {
  containerColor: '#1a1a1a',
  meterColor: '#fecf23',
  direction: 'row',
  percent: '50'
}

module.exports = {
  render: renderProgressBar
}

function renderProgressBar (h, opts) {
  opts = extend(defaults, opts)
  var meter
  var container

  meter = h('span', {
    style: extend({
      backgroundColor: opts.meterColor,
      borderRadius: '3px',
      height: opts.direction === 'row' ? '100%' : opts.percent + '%',
      transition: 'all .4s ease',
      width: opts.direction === 'column' ? '100%' : opts.percent + '%'
    }, opts.meterStyle)
  })

  container = h('div', {
    style: prefix(extend({
      alignItems: 'flex-end',
      backgroundColor: opts.containerColor,
      borderRadius: '5px',
      boxSizing: 'border-box',
      display: 'flex',
      height: '100%',
      padding: '5px',
      width: '100%'
    }, opts.containerStyle))
  }, meter)
  return container
}

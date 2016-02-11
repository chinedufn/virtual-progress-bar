var defaults = require('./default-options.js')
var extend = require('xtend')

module.exports = {
  render: RenderProgressBar
}

function RenderProgressBar (h, opts) {
  opts = extend(defaults, opts)
  var meter
  var container

  meter = h('span', {
    style: {
      backgroundColor: opts.meterColor,
      borderRadius: '3px',
      height: opts.direction === 'row' ? '100%' : opts.percent + '%',
      transition: 'all .4s ease',
      width: opts.direction === 'column' ? '100%' : opts.percent + '%'
    }
  })

  container = h('div', {
    style: {
      alignItems: 'flex-end',
      backgroundColor: opts.containerColor,
      borderRadius: '5px',
      boxSizing: 'border-box',
      display: 'flex',
      height: '100%',
      padding: '5px',
      WebkitAlignItems: 'flex-end',
      width: '100%'
    }
  }, meter)
  return container
}

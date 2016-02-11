var test = require('tape')
var ProgressBar = require('../')
var h = require('virtual-dom/h')

// For now let's just test that it doesn't break in node/browser
test('test running in ' + (process.browser ? 'browser' : 'node'), function (t) {
  ProgressBar.render(h)
  ProgressBar.render(h, {meterColor: 'red', containerColor: '#f7f7f7'})
  t.pass()
  t.end()
})

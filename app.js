const rint = require('./rint');

rint.timer.on('tick', function(code) {
  console.log('event is processing');
})
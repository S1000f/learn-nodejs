process.on('exit', function (code) {
  console.log('good bye...');
});

process.on('uncaughtException', (error) => {
  console.log('exception thrown');
});

process.emit('exit');
process.emit('exit');

var count = 0;
var test = function () {
  count = count + 1;
  if (count > 3) {
    return;
  };

  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 2000);

process.setMaxListeners(20);

process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});
process.on('exit', function() {});

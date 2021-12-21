var onUncaughtException = (error) => {
  console.log('exception thrown');
  process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);

var test = function() {
  setTimeout(test, 2000);
  error.error.error();
};
setTimeout(test, 1000);


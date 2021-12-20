console.log('__filename is : ', __filename);
console.log('__dirname is : ', __dirname);

console.time('aaa');

var output = 1;
for (var i = 1; i <= 10; i++) {
  output *= i;
}
console.log('\u001b[36m', 'result : ', output);

console.timeEnd('aaa');

process.argv.forEach(function (item, index) {
  console.log(index + ' : ' + typeof(item) + ' : ', item);

  if (item == '--exit') {
    var exitTimer = Number(process.argv[index + 1]);

    setTimeout(function() {
      process.exit();
    }, exitTimer);
  }
});

var module = require('./module');

console.log(module.abs(-3333));
console.log(module.circleArea(3));

const url = require('url');

var parsed = url.parse('https://www.naver.com/blog/45?limit=10');

console.log(parsed);
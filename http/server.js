const http = require('http');
const fs = require('fs');
const url = require('url');
const mariadb = require('mariadb');
const mysql = require('mysql');

const dbClient = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '81754682',
  database: 'exchange'
});

dbClient.query('select * from users', (error, result, fields) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
});

// const pool = mariadb.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '81754682',
//   connectionLimit: 10
// });

// pool.getConnection().then(conn => {
//   conn.query('use exchange');
//   conn.query('select * from users').then(rows => console.log(rows));
// })

const server = http.createServer();

server.on('connection', function (code) {
  console.log('connection on');
});

server.on('request', function (req, res) {
  const pathname = url.parse(req.url).pathname;
  const method = req.method;
  const query = url.parse(req.url, true).query;

  const expire = new Date();
  expire.setDate(expire.getDate() + 7);

  if (method === 'GET' && pathname === '/') {
    res.writeHead(200, {
      'Set-Cookie': ['breakfast=toast; Expires = ' + expire.toUTCString(), 'dinner=chicken'],
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({
      serverName:'this is Node.js server',
      cookieValues: req.headers.cookie,
      queryString: query
    }));
  } else if (method === 'POST' && pathname === '/') {
    req.on('data', (data) => {
      res.writeHead(200, { 'Content-Type':'application/json'});
      res.end(data);
    })
  
  } else if (pathname === '/file') {
    fs.readFile('htmlPage.html', function (error, data) {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });

  } else if (pathname === '/image') {
    fs.readFile('unya.jpg', (error, data) => {
      res.writeHead(200, {'Content-Type':'image/jpeg'});
      res.end(data);
    });

  } else if (pathname === '/redirect') {
    res.writeHead(302, {'Location':'http://www.naver.com'});
    res.end();
  }

});


server.on('close', function (code) {
  console.log('close on');
});


server.listen(52273, function () {
  console.log('Server is running at http://127.0.0.1:52273');
});
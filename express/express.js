const express = require('express');

const app = express();

app.use('/user', require('./userRoute').router);

app.get('/page/:id', ((req, res) => {
  const id = req.params.id;
  const nickname = req.query.nickname;

  res.send('path variable : ' + id + ', query string : ' + nickname);
}));

app.get('*', ((req, res, next) => {

  req.dataForResponse = {
    name: "milly",
    age: 10,
    type: 'super cat'
  };

  const userAgent = req.header('User-Agent');
  console.log(req.headers);
  console.log(userAgent);

  next();
}));

app.get('*', ((req, res, next) => {
  res.send(req.dataForResponse)
}));

app.listen(52273, () => {
  console.log("server is running at http://localhost:52273");
})
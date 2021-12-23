const express = require('express');

const app = express();

app.use(((req, res) => {
  let data = {
    name: "milly",
    age: 11
  }

  res.send(data);
}));

app.listen(52273, () => {
  console.log("server is running at http://localhost:52273");
})
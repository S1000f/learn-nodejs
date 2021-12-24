const express = require('express');
const router = express.Router();

router.get('/join', ((req, res) => {
  res.send("user join");
}));

router.all('*', ((req, res) => {
  res.send('this is user router : * page');
}));

exports.router = router;
const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  res.send('Hey! It works!');

  // send json as res
  // const data = {
  //   name: 'jerry',
  //   age: '23'
  // };
  // res.json(data);

  // grab query from url
  // query format ?name=jerry&age=23
  // res.json(req.query);
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;

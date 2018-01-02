# Notes

## send data as json
```js
router.get('/', (req, res) => {
  // send json as res
  const data = {
    name: 'jerry',
    age: '23'
  };
  res.json(data);

  // grab query from url
  // query format ?name=jerry&age=23
  res.json(req.query);

  // render pug template 
  res.render('hello', {
    title: 'I love food'
  });
});
```
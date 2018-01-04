exports.myMiddleware = (req, res, next) => {
  req.name = 'Tesing!!========';
  next();
};

exports.homePage = (req, res) => {
  console.log(req.name);
  res.render('index');
};
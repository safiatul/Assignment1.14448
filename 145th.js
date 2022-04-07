app.get('/user', function(req, res, next) {
    req.user = getTheUserSync();  
    next();
  }, function(req, res) {
    res.send(req.user);
  });
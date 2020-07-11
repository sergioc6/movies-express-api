var express = require('express');
var router = express.Router();
const moviesRoutes = require('./movies-routes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Movies API' });
});

router.use('/movies', moviesRoutes);

module.exports = router;

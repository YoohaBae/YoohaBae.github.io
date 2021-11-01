var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/:id', function(req, res, next) {
    res.render('blog', { title: 'Blog', blogId: req.params.id});
});


module.exports = router;

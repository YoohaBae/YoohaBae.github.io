var express = require('express');
var path = require('path');
var router = express.Router();
var url = require('url');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('projects', { title: 'Projects' , filter: req.query.filter});
});

router.get('/designer', function(req, res) {
    res.redirect(url.format({
            pathname: "/projects",
            query: {
                "filter": "designer"
            }
        }))
})
router.get('/leader', function(req, res) {
    res.redirect(url.format({
        pathname: "/projects",
        query: {
            "filter": "leader"
        }
    }))
})
router.get('/developer', function(req, res) {
    res.redirect(url.format({
        pathname: "/projects",
        query: {
            "filter": "developer"
        }
    }))
})

module.exports = router;

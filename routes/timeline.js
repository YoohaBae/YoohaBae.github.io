var express = require('express');
var path = require('path');
var router = express.Router();
const fs = require('fs');

let data= fs.readFileSync(path.resolve(__dirname, './database/projects.json'))
console.log(data);
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('timeline', { title: 'Timeline' });
});
module.exports = router;

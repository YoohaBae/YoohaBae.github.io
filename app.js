var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var projectsRouter = require('./routes/projects');
var contactRouter = require('./routes/contact');
var contactSentRouter = require('./routes/contact-sent');
var blogRouter = require('./routes/blog');
var timelineRouter = require('./routes/timeline');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(__dirname + '/public'));
app.use('/images', express.static('public'));
app.use('/database', express.static('public'));

app.use('/', indexRouter);
app.use('/projects', projectsRouter);
app.use('/contact', contactRouter);
app.use('/blog', blogRouter);
app.post('/contact', contactRouter)
app.use('/contact-sent', contactSentRouter);
app.use('/timeline', timelineRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

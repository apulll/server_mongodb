/*!
 * sass_admin - app.js
 */

/**
 * Module dependencies.
 */

var config = require('./config');
if (!config.debug && config.oneapm_key) {
  require('oneapm');
}
require('colors');
var logger = require('./server/common/logger');
var path = require('path');
var express = require('express');
var session = require('express-session');
var _ = require('lodash');
var csurf = require('csurf');
var compress = require('compression');
var bodyParser = require('body-parser');
var errorhandler = require('errorhandler');
var cors = require('cors');
var helmet = require('helmet');

var webRoutes = require('./server/web_router.js');
// 静态文件目录
var staticDir = path.join(__dirname, 'public');
var urlinfo = require('url').parse(config.host);
config.hostname = urlinfo.hostname || config.host;
var app = express();
// configuration in all env
app.set('views', path.join(__dirname, '/server/views'));
app.set('view engine', 'ejs');

var corsOptions = {
  origin: 'http://localhost:3001',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

app.use(cors(corsOptions))

// 通用的中间件

app.use(helmet.frameguard('sameorigin'));
app.use(bodyParser.json({limit: '1mb'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '1mb' }));
app.use(require('cookie-parser')(config.session_secret));
app.use(compress());

if (!config.debug) {
  app.use(function (req, res, next) {
    if (req.path === '/api' || req.path.indexOf('/api') === -1) {
      csurf()(req, res, next);
      return;
    }
    next();
  });
  app.set('view cache', true);
}

app.use('/', webRoutes);

// error handler
if (config.debug) {
  app.use(errorhandler());
} else {
  app.use(function (err, req, res, next) {
    logger.error(err);
    return res.status(500).send('500 status');
  });
}

if (!module.parent) {
  app.listen(config.port, function () {
    logger.info('NodeClub listening on port', config.port);
    logger.info('God bless love....');
    logger.info('You can debug your app with http://' + config.hostname + ':' + config.port);
    logger.info('');
  });
}

module.exports = app;

var User         = require('../proxy').User;
var Topic        = require('../proxy').Topic;
var Reply        = require('../proxy').Reply;
var TopicCollect = require('../proxy').TopicCollect;
var utility      = require('utility');
var util         = require('util');
var TopicModel   = require('../models').Topic;
var ReplyModel   = require('../models').Reply;
var tools        = require('../common/tools');
var config       = require('../config');
var EventProxy   = require('eventproxy');
var validator    = require('validator');
var _            = require('lodash');

exports.index = function (req, res, next) {
  var user_name = req.params.name;
  User.getUserByLoginName(user_name, function (err, user) {
    if (err) {
      return next(err);
    }
    if (!user) {
      res.render404('这个用户不存在。');
      return;
    }


  });
};



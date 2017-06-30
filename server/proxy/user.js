var models  = require('../models');
var User    = models.User;
var utility = require('utility');
var uuid    = require('node-uuid');

/**
 * 根据用户名列表查找用户列表
 * Callback:
 * - err, 数据库异常
 * - users, 用户列表
 * @param {Array} names 用户名列表
 * @param {Function} callback 回调函数
 */
exports.getUsersByNames = function (names, callback) {
  if (names.length === 0) {
    return callback(null, []);
  }
  User.find({ loginname: { $in: names } }, callback);
};

/**
 * 根据登录名查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} loginName 登录名
 * @param {Function} callback 回调函数
 */
exports.getUserByLoginName = function (loginName, callback) {
  User.findOne({'loginname': new RegExp('^'+loginName+'$', "i")}, callback);
};

/**
 * 根据用户ID，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} id 用户ID
 * @param {Function} callback 回调函数
 */
exports.getUserById = function (id, callback) {
  if (!id) {
    return callback();
  }
  User.findOne({_id: id}, callback);
};

/**
 * 根据邮箱，查找用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} email 邮箱地址
 * @param {Function} callback 回调函数
 */
exports.getUserByMail = function (email, callback) {
  User.findOne({email: email}, callback);
};

/**
 * 根据用户ID列表，获取一组用户
 * Callback:
 * - err, 数据库异常
 * - users, 用户列表
 * @param {Array} ids 用户ID列表
 * @param {Function} callback 回调函数
 */
exports.getUsersByIds = function (ids, callback) {
  User.find({'_id': {'$in': ids}}, callback);
};

/**
 * 根据关键字，获取一组用户
 * Callback:
 * - err, 数据库异常
 * - users, 用户列表
 * @param {String} query 关键字
 * @param {Object} opt 选项
 * @param {Function} callback 回调函数
 */
exports.getUsersByQuery = function (query, opt, callback) {
  User.find(query, '', opt, callback);
};

/**
 * 根据查询条件，获取一个用户
 * Callback:
 * - err, 数据库异常
 * - user, 用户
 * @param {String} name 用户名
 * @param {String} key 激活码
 * @param {Function} callback 回调函数
 */
exports.getUserByNamePwd = function (username, callback) {
  console.log(username,'getUserByNamePwd')
  User.findOne({username: username}, callback);
};

exports.newAndSave = function (username, pass, email, callback) {
  User.findOne({ username: 'admin7' }, function(err,data){

  });

  // var tomorrow = new Date();
  // tomorrow.setDate(tomorrow.getDate() + 1);


  var user         = new User({username:'admin8',password:'854621'});
  // user.username   = username;
  // user.pass        = pass;
  // user.email       = email;
  // user.role     = 1,
  // user.auth = {
  //   token: 'fdsafasfsafsaf',
  //   used: true,
  //   expires: tomorrow,
  // },
  // user.resetPassword = {
  //   token: 'fdafasfasf',
  //   used: true,
  //   expires: tomorrow,
  // }

  var promise = user.save();
  console.log(promise)
};



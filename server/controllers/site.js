/*!
 * nodeclub - site index controller.
 * Copyright(c) 2012 fengmk2 <fengmk2@gmail.com>
 * Copyright(c) 2012 muyuan
 * MIT Licensed
 */

/**
 * Module dependencies.
 */
var User         = require('../proxy').User;

// import { tokenForUser } from '../helpers/token'




exports.index = function (req, res, next) {
	User.newAndSave('apul','123456','884201733@qq.com')
    res.render('index');
};


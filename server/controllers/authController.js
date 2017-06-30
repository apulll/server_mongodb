// import nodemailer from 'nodemailer';
// import bcrypt from 'bcrypt-nodejs';
// import User from '../models/user';
// import { sendVerificationEmail } from '../helpers/email';
// import { tokenForUser } from '../helpers/token';

/**
 * Sign in
 */
// export const signin = (req, res) => {
//   const { firstname, lastname, email } = req.user;

//   res.json({ token: tokenForUser(req.user), firstname, lastname, email });
// };
var User         = require('../proxy').User;
var token = require('../helpers/token');
exports.signin = function (req, res, next) {
  console.log(req.user,'requser')
  res.json({status:true,code:200,data:{token: token.tokenForUser(req.user)},msg:'成功' });
  // var user_name = req.params.name;
  // res.render('index');
  // User.getUserByLoginName(user_name, function (err, user) {
  //   if (err) {
  //     return next(err);
  //   }
  //   if (!user) {
  //     res.render404('这个用户不存在。');
  //     return;
  //   }


  // });
};

exports.loginFail = function (req, res, next) {
  console.log(req,'requser')

  res.json({status:false,code:200,data:{message: 'aaaa'},msg:'用户名错误' });
  // var user_name = req.params.name;
  // res.render('index');
  // User.getUserByLoginName(user_name, function (err, user) {
  //   if (err) {
  //     return next(err);
  //   }
  //   if (!user) {
  //     res.render404('这个用户不存在。');
  //     return;
  //   }


  // });
};

var express = require('express');
var site = require('./controllers/site');

var config = require('../config');

var router = express.Router();

var passport = require('passport');
var authController = require('./controllers/authController');

require('./services/passport');

var requireSignin = passport.authenticate('local', { session: false,failureRedirect: '/loginFail'  });
// var isAuthenticated = function(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     passport.authenticate('local', { session: false },function(err, user, info){
// 	console.log(err, user, info,'fdsf')
// 	// if(err) {
// 	// 	return next(err)
// 	// }
// 	console.log(next,'next')
// 	// if (!user) { return done(null, false, { message: '用户名错误' }); }
// 	});
// }
console.log(requireSignin,'requiresingn')
// var router = function router(app) {
//   app.get('/', requireAuth, _usersController.fetchUsers);
//   app.post('/signup', _authController.signup);
//   app.post('/signup/verify-email', _authController.verifiEmail);
//   app.post('/resend-verify-code', _authController.resendVerification);
//   app.post('/signin', requireSignin, _authController.signin);
//   app.post('/reset-password', _resetPasswordController.resetPassword);
//   app.post('/reset-password/verify', _resetPasswordController.verifyResetPassword);
//   app.post('/reset-password/new', _resetPasswordController.resetPasswordNew);
// };

// exports.default = router;





// home page
router.get('/', site.index);
router.get('/loginFail', authController.loginFail);
// router.post('/signin', requireSignin, authController.signin);
router.post('/api/signin', requireSignin, authController.signin);




module.exports = router;
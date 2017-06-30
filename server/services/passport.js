var passport = require('passport');
var User         = require('../proxy').User;
var LocalStrategy = require('passport-local');
// import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

var localOptions = { usernameField: 'username' };
console.log('sing')
var localLogin = new LocalStrategy(localOptions, function (username, password, done) {
  console.log(username,password,done,'user22222')
  User.getUserByNamePwd(username, function (err, user){
    console.log(err,user,'user22222')
    if (err) { return done(err); }

    if (!user) { return done(null, false, { message: '用户名错误' }); }

    user.comparePassword(password, (err, isMatch) => {
      if (err) { return done(err); }

      if (!isMatch) { return done(null, false); }
      // if (user.role < 1) { return done(null, false); }

      return done(null, user);
    });
  });
});

// const jwtOptions = {
//   jwtFromRequest: ExtractJwt.fromHeader('authorization'),
//   secretOrKey: dbConfig.secret,
// };

// const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
//   User.findById(payload.sub, (err, user) => {
//     if (err) { return done(err, false); }

//     if (user) {
//       done(null, user);
//     } else {
//       done(null, false);
//     }
//   });
// });

// passport.use(jwtLogin);
passport.use(localLogin);

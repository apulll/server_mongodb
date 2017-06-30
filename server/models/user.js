var mongoose  = require('mongoose');
var BaseModel = require("./base_model");
var Schema    = mongoose.Schema;
var utility   = require('utility');
var _ = require('lodash');
var logger = require('../common/logger');
var bcrypt = require('bcryptjs');
var UserSchema = new Schema({
  username: String,
  // email: { type: String, lowercase: true, unique: true },
  password: String,
  create_at: { type: Date, default: Date.now },
  update_at: { type: Date, default: Date.now },
  // role: { type: Number, default: 0 },
  // auth: {
  //   token: String,
  //   used: Boolean,
  //   expires: Date,
  // },
  // resetPassword: {
  //   token: String,
  //   used: Boolean,
  //   expires: Date,
  // }
});

UserSchema.plugin(BaseModel);

UserSchema.index({username: 1}, {unique: true});


UserSchema.pre('save', function(next){
  var user = this;

  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    bcrypt.hash(user.password, salt, function(err, hash){
      if (err) { return next(err); }

      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);

      user.password = hash;
      // logger('user')
      // user.auth = { token: salt, used: 0, expires: tomorrow };
      next();
    });
  });


});

UserSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) { return callback(err); }

    callback(null, isMatch);
  });
};
mongoose.model('User', UserSchema);

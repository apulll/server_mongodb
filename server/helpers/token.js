'use strict';




var jwtSimple = require('jwt-simple');

var config = require('../../config');



function tokenForUser(user) {
  var timestamp = new Date().getTime();

  return jwtSimple.encode({ sub: user.id, iat: timestamp }, config.session_secret);
}

function tokenForUserDecode(token) {
  var timestamp = new Date().getTime();
  var decoded = jwtSimple.decode(token, config.session_secret);

}

exports.tokenForUser = tokenForUser;
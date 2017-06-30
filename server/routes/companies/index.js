
var controller = require('../../controller')


module.exports = function(router) {
  router.get('/test',controller.getCaptcha);
}


// module.exports = router;

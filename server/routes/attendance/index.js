
var controller = require('../../controller/attendance')
var lib = require('../../lib')

module.exports = function(router) {
  router.get('/attendance/monthDetailSheet',lib.hrmApiCache,controller.monthDetailSheet);
  router.get('/attendance/day',lib.hrmApiCache,controller.getDayData);
  router.get('/attendance/recordsList',lib.hrmApiCache,controller.getLeaveList);
}


// module.exports = router;


var controller = require('../../controller/employees')
var lib = require('../../lib')
console.log(lib.hrmApiCache)
module.exports = function(router) {
  router.get('/employees/empList',controller.employeesList);
  router.post('/employees/delete',controller.delEmployee);
  router.post('/employees/edit',controller.editEmployee);
  router.post('/employees/documents/save',controller.saveDocuments);
  router.post('/employees/documents/del',controller.delDocuments);
}


// module.exports = router;

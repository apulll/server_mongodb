var api = require('../../../server/api');

module.exports = function(router) {

router.get('/refresh', function(req , res , next) {
    api.refreshToken(req , res , function(data){
        res.send(JSON.stringify(data));
    });
});

router.get('/companyRefresh', function(req , res , next) {
    api.refreshCompanyToken(req , res , function(data){
        res.send(JSON.stringify(data));
    });
});

router.get('/favicon.ico', function(req, res) {
    res.sendStatus(204);
});

router.get('/logout',function(req, res, next){
    console.log('/logout Intercepted');
    api.logOut(req, res , function(){
        res.send(JSON.stringify({status:true}));
    })
});



}

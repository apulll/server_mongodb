var express = require('express');
var router = express.Router();

// 首页相关api
require('./home')(router);
// 员工花名册相关api
require('./employees')(router);
// 组织架构相关api
require('./structure')(router);
// 考勤管理相关api
require('./attendance')(router);
// 社保管理相关api
require('./socialmanage')(router);
// 薪酬相关 api
require('./payrolls')(router);
// 公司设置相关api
require('./companies')(router);
// 奖励相关api
require('./awards')(router);
// 公告相关api
require('./noticeboards')(router);
// 奖惩相关api
require('./expenses')(router);
// 职位推荐相关api
require('./jobs')(router);

// 公共信息

require('./common')(router);





module.exports = router;

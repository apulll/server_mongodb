/**
 * config
 */

var path = require('path');
var config = {
	//debug 为tru时， 用于本地调试
	debug: true,

	title: '欢雀SaSS后台管理系统', //
	description: '', //
	keywords: '',

	site_logo: '/public/images/cnodejs_light.svg', // default is `name`
  	site_icon: '/public/images/cnode_icon_32.png', // 默认没有 favicon, 这里填写网址

  	// cdn host，如 http://cnodejs.qiniudn.com
  	site_static_host: '', // 静态文件存储域名

  	// saas的域名
  	host: 'localhost',
  	// 默认的Google tracker ID，自有站点请修改，申请地址：http://www.google.com/analytics/
  	google_tracker_id: '',
  	// 默认的cnzz tracker ID，自有站点请修改
  	cnzz_tracker_id: '',

  	// mongodb 配置
  	db: 'mongodb://127.0.0.1/saas_admin',

  	// redis 配置，默认是本地
  	redis_host: '127.0.0.1',
  	redis_port: 6379,
  	redis_db: 0,
  	redis_password: '',

  	session_secret: 'huanque_saas_admin_secret', // 务必修改
  	auth_cookie_name: 'saas_user',

  	// 程序运行的端口
  	port: 3333,
}


module.exports = config;
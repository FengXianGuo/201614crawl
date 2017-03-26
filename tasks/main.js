//通过async，把多个读和写串行起来

var async = require('async');
var read = require('./read');
var write = require('./write')
var write = require('./write');
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
var logger = require('debug')('crawl:main');
async.waterfall([
	function(callback){
		read(url,callback)
		//相当于callback(err,movies);
	},
	function(movies,callback){
		write(movies,callback)
	}
],function(err,result){
	logger('全部任务执行完毕');
})
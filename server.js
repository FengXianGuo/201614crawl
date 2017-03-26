let express = require('express');
let Movie = require('./model');
var path = require('path');
let app = express();
app.set('view engine','html');
//设置模版的存放目录
app.set('views',path.resolve('views'));
//设置模版的渲染方法
app.engine('html',require('ejs').__express);
app.get('/',function(req,res){
	Movie.find({},function(err,movies){
		res.render('index',{movies});
	})
})
app.listen(8080);
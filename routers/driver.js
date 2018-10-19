/*
 * @Author: yb 
 * @Date: 2018-03-08 15:03:12 
 * @Last Modified by: yb
 * @Last Modified time: 2018-07-18 11:35:41
 */
var express = require('express');
var bodyParser = require('body-parser'); //解析参数
var request = require('request');

// 创建路由
var router = express.Router();

// 创建 application/json 解析
var jsonParser = bodyParser.json();

// // 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', new Date().toLocaleString());
    next();
});
router.get('/tt', function (req, res) {
    // console.log(req.params.id);
    res.send('===123123123===');
});
//     // get 测试
// router.get('/about', function(req, res) {
//     res.end(123);
// });

// router.post('/api/search', jsonParser, function(req, res) {
//     var datas = req.body;
//     console.log('' + JSON.stringify(datas, null, 2));
//     res.end(res.json(hits));

// });


module.exports = router;
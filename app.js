
var express = require('express');
var router = require('./routers/driver'); //搜索
var port = require('./routers/urldata').port;

var app = express();
app.use(express.static('public'));
app.use(router);
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
    res.header('X-Powered-By', ' 3.2.1')
    next()
  })
app.listen(port, () => {
    console.log('Server running at http://127.0.0.1:' + port);
})












// var express = require('express');
// var search = require('./routers/search'); //搜索
// var port = require('./routers/urldata').port;

// var app = express();
// app.use(express.static('public'));
// app.use(search);
// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length, Authorization, Accept,X-Requested-With')
//     res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
//     res.header('X-Powered-By', ' 3.2.1')
//     next()
//   })
//   app.get('/', function (req, res) {
//   res.send('Hello World!');
// });
  
// app.listen(port, () => {
//     console.log('Server running at http://127.0.0.1:' + port);
// })
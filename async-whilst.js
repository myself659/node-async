var async = require('async');

var r = 0;
var a = 0;
// 先进行条件判断，再进行异步执行
// 定义三个函数 第一条件 第二个执行体，第三个结果处理
async.whilst(function() {
    return a < 100;
}, function(callback) {
    r++;
    console.log("r:", r);
    a = r * r * Math.PI;
    callback(null);
}, function(err, results) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log('r = ' + r + ', a = ' + a);
    }
});
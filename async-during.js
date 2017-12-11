var async = require('async');

var r = 0;
var a = 0;
// 条件判断支持函数，个性化 

async.during(function(callback) {
    callback(null, a < 100);
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
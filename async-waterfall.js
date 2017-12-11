var async = require('async');
var util = require('util');
/* 
waterfall 参数
函数之间传递参数由callback提供方法，调用callback来完成  
*/
async.waterfall([
    function(callback) {
        util.log('task 1 start.');
        setTimeout(function() {
            var r1 = Math.random();
            util.log('task 1 complete.');
            util.log('result = ' + r1);
            callback(null, r1);
        }, 5000);
    },
    function(r1, callback) {
        util.log('task 2 start.');
        console.log(r1)
        setTimeout(function() {
            var r2 = Math.random();
            util.log('task 2 complete.');
            util.log('result = ' + r2);
            callback(null, r1, r2);
        }, 10000);
    },
    function(r1, r2, callback) {
        util.log('task 3 start.');
        console.log(r1, r2)
        setTimeout(function() {
            var r3 = Math.random();
            util.log('task 3 complete.');
            util.log('result = ' + r3);
            callback(null, r1, r2, r3);
        }, 5000);
    }
], function(err, r1, r2, r3) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log(r1);
        console.log(r2);
        console.log(r3);
    }
});
var async = require('async');
var util = require('util');

var xs = [7, 9, 6, 3, 4, 0, 5, 2, 1, 8];
// xs 排序对象  每个item操作  结束处理 
async.sortBy(xs, function(item, callback) {
    /*
    setTimeout(function() {
        util.log(item);
        callback(null, item);
    }, Math.random() * 1000);
    */
    util.log(item);
    callback(null, item);
}, function(err, results) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log(results); // 排序后的结果
        async.sortBy(xs, function(item, callback) {
            setTimeout(function() {
                util.log(item);
                callback(null, -item);
            }, Math.random() * 1000);
        }, function(err, results) {
            if (err) {
                console.error(err);
                process.exit(1);
            } else {
                console.log(results);
            }
        });
    }
});
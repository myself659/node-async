var async = require('async');
/*
callback第一个参数
顺序执行
step 1 step 2 如果要关联如何实现 
*/
async.series([
    function(callback) {
        var area = 1 * 1 * Math.PI;
        console.log('area of circle: r = 1 -> ' + area)
        callback(null, area);
    },
    function(callback) {
        var area = 2 * 2 * Math.PI;
        console.log('area of circle: r = 2 -> ' + area)
        callback(null, area);
    },
    function(callback) {
        var area = 3 * 3 * Math.PI;
        console.log('area of circle: r = 3 -> ' + area)
        callback(null, area);
    }
], function(err, results) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        var sum = 0;
        for (var i = 0; i < results.length; i++) {
            sum += results[i];
        }
        console.log('total: ' + sum);
    }
});
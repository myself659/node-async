var async = require('async');
var util = require('util');
// 800 3200 作为 参数  后面函数是对结果的处理 
async.applyEach([
    function(arg1, arg2, callback) {
        setTimeout(function() {
            util.log('function - foo');
            util.log('arg1 - ' + arg1);
            util.log('arg2 - ' + arg2);
            callback(null, 'foo');
        }, 3000);
    },
    function(arg1, arg2, callback) {
        setTimeout(function() {
            util.log('function - bar');
            util.log('arg1 - ' + arg1);
            util.log('arg2 - ' + arg2);
            callback(null, 'bar');
        }, 1000);
    }
], 800, 3200, function(err, results) {
    console.log(results);
    async.applyEachSeries([
        function(arg1, arg2, callback) {
            setTimeout(function() {
                util.log('function - foo');
                util.log('arg1 - ' + arg1);
                util.log('arg2 - ' + arg2);
                callback(null, 'foo');
            }, 3000);
        },
        function(arg1, arg2, callback) {
            setTimeout(function() {
                util.log('function - bar');
                util.log('arg1 - ' + arg1);
                util.log('arg2 - ' + arg2);
                callback(null, 'bar');
            }, 1000);
        }
    ], 9100, 8200, function(err, results) {
        console.log(results);
    });
});
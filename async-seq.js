var async = require('async');

var f = async.seq(function(x, callback) {
    process.nextTick(function() {
        console.log(x);
        callback(null, x + 5);
    });
}, function(x, callback) {
    process.nextTick(function() {
        console.log(x);
        callback(null, x * 10);
    });
});
f(3, function(err, result) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log(result);
    }
});
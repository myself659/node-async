var async = require('async');
var util = require('util');

var xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
async.someSeries(xs, function(item, callback) {
    setTimeout(function() {
        util.log(item);
        callback(null, item > 100);
    }, Math.random() * 1000);
}, function(err, result) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log(result);
        async.some(xs, function(item, callback) {
            setTimeout(function() {
                util.log(item);
                callback(null, item > 4);
            }, Math.random() * 1000);
        }, function(err, result) {
            if (err) {
                console.error(err);
                process.exit(1);
            } else {
                console.log(result);
                async.someLimit(xs, 2, function(item, callback) {
                    setTimeout(function() {
                        util.log(item);
                        //callback(new Error('error'), null);
                        callback(null, item < 5);
                    }, Math.random() * 1000);
                }, function(err, result) {
                    if (err) {
                        console.error(err);
                        process.exit(1);
                    } else {
                        console.log(result);
                    }
                });
            }
        });
    }
});
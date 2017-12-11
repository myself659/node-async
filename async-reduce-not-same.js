var async = require('async');
var util = require('util');

var xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
async.reduce(xs, 0, function(red, item, callback) {
    setTimeout(function() {
        util.log(item);
        console.log(item + ' - ' + red + ' = ' + (item - red));
        callback(null, item - red);
    }, Math.random() * 1000);
}, function(err, result) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        console.log(result);
        async.reduceRight(xs, 0, function(red, item, callback) {
            setTimeout(function() {
                util.log(item);
                console.log(item + ' - ' + red + ' = ' + (item - red));
                callback(null, item - red);
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
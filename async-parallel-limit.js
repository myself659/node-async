var async = require('async');
var util = require('util');

async.parallelLimit([
    function(callback) {
        util.log('task 1 start.');
        setTimeout(function() {
            util.log('task 1 complete.');
            callback(null, 'task 1');
        }, 5000);
    },
    function(callback) {
        util.log('task 2 start.');
        setTimeout(function() {
            util.log('task 2 complete.');
            callback(null, 'task 2');
        }, 10000);
    },
    function(callback) {
        util.log('task 3 start.');
        setTimeout(function() {
            util.log('task 3 complete.');
            callback(null, 'task 3');
        }, 5000);
    }
], 2, function(err, results) {
    if (err) {
        console.error(err);
        process.exit(1);
    } else {
        for (var i = 0; i < results.length; i++) {
            console.log(results[i]);
        }
    }
});
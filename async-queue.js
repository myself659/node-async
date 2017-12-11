var async = require('async');
var util = require('util');

var q = async.queue(function(data, callback) {
    util.log(data);
    console.log('length: ' + q.length());
    console.log('running: ' + q.running());
    var r = Math.random();
    if (r < 0.5) {
        q.push(r);
    }
    setTimeout(function() {
        callback(null);
    }, data * 1000);
}, 2);
q.push(Math.random());
q.push(Math.random());
q.push(Math.random());
var async = require('async');
var util = require('util');

var c = async.cargo(function(datas, callback) {
    for (var i = 0; i < datas.length; i++) {
        util.log(datas[i]);
        console.log('length: ' + c.length());
        var r = Math.random();
        console.log("enqueue:", r);
        if (r < 0.5) {
            c.push(r);
        }
    }
    setTimeout(function() {
        callback(null);
    }, 1000);
}, 2);
c.push(Math.random());
c.push(Math.random());
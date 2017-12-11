var async = require('async');
var util = require('util');

var q = async.priorityQueue(function(data, callback) {
    util.log(data);
    console.log('length: ' + q.length());
    console.log('running: ' + q.running());
    var r = Math.random();
    if (r < 0.8) {
        q.push(r, r);
    }
    // q.push(1, 1);  // 队列不为空，一直在执行
    setTimeout(function() {
        callback(null);
    }, data * 1000);
}, 2);
/* 入队列 优先级 */
q.push(0.5, 0.5);
q.push(0.8, 0.5);
/*
var r = Math.random();
q.push(r, r);
var r = Math.random();
q.push(r, r);

var r = Math.random();
q.push(r, r);
var r = Math.random();
q.push(r, r);
var r = Math.random();
q.push(r, r);
*/
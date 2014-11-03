var express = require('express'),
    app = express(),
    createPromisePool = require('./createPromisePool'),
    pool = createPromisePool(),
    shuttingDown = false,
    $ = require('jquery-deferred'),

    handleRequest = function () {
        return $.Deferred(function (dfd) {
            console.log("handleRequest()", +new Date());
            dfd.resolve();
        }).promise();
    },
    flushAvatarCache = function () {
        return $.Deferred(function (dfd) {
            console.log("flushAvatarCache()", +new Date());
            dfd.resolve();
        }).promise();
    },
    sendShutdownEmail = function () {
        return $.Deferred(function (dfd) {
            console.log("sendShutdownEmail()", +new Date());
            dfd.resolve();
        }).promise();
    },
    flushLogs = function () {
        return $.Deferred(function (dfd) {
            console.log("flushLogs()", +new Date());
            dfd.resolve();
        }).promise();
    };


app.get('/', function (req, res) {
    if (shuttingDown) {
        res.redirect('http://example.com');
    } else {
        pool.add(handleRequest(req, res));
    }
});

app.get('/shutdown', function (req, res) {
    if (shuttingDown === false) {
        shuttingDown = true;
        pool.add(flushAvatarCache());
        pool.add(sendShutdownEmail());
        pool.add(flushLogs());
        pool.emptyPromise().done(function () {
            res.sendStatus(200);
            process.exit(0);
        });
    } else {
        res.sendStatus(200);
    }
});

app.listen(9999);

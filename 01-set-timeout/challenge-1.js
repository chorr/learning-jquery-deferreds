// http://jsbin.com/woyubo/1/edit?html,js,console

function wait(timeout) {
    return $.Deferred(function (d) {
        setTimeout(d.resolve, timeout);
    }).promise();
}

wait(1000).done(function () {
    console.log('Timeout fired!');
});
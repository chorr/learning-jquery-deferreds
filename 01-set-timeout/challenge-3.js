// http://jsbin.com/zageh/1/edit?html,js,console

function wait(timeout) {
    var id;
    return $.Deferred(function (d) {
        id = setTimeout(d.resolve, timeout);
        console.log('Timeout start : ' + id);
    }).promise({
        cancel: function () {
            clearTimeout(id);
            console.log('Timeout cancel : ' + id);
        }
    });
}

wait(1000)
    .done(function () {
        console.log('Timeout fired!');
    })
    .cancel();
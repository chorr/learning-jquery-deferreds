// http://jsbin.com/qejaca/1/edit?html,js,console

function one() {
    return $.Deferred(function (d) {
        setTimeout(function () {
            console.log('one() after 1s');
            d.resolve();
        }, 1000);
    }).promise();
}

function two() {
    return $.Deferred(function (d) {
        setTimeout(function () {
            console.log('two() after 2s');
            d.resolve();
        }, 2000);
    }).promise();
}

$.when(one(), two()).then(function () {
    console.log('Timeout exfired.');
});
function synchronously(tasks) {
    var i, task, func,
        promise = $.Deferred().resolve().promise(),
        makeRunner = function (func, args) {
            return function () {
                return func.apply(null, args).promise();
            };
        };

    for (i = 0; i < tasks.length; i++) {
        task = tasks[i];
        func = task.shift();
        promise = promise.then(makeRunner(func, task));
    }

    return promise;
}

var promise = synchronously([
    [$('#label-1').animate, {
            opacity: 0.25
        },
        100
    ],
    [$('#label-2').animate, {
            opacity: 0.75
        },
        200
    ]
]);
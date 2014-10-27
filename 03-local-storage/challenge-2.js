// node.js Redis package : https://www.npmjs.org/package/redis

var redis = require("redis");
var client = redis.createClient();

function get(keys) {
    var deferred = $.Deferred();

    client.get(keys, function (err, result) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(result);
        }
    });

    return deferred.promise();
}

// chrome.storage : https://developer.chrome.com/extensions/storage

function set(items) {
    var deferred = $.Deferred();

    chrome.storage.local.set(items, function () {
        if (chrome.runtime.lasterror) {
            deferred.reject(chrome.runtime.lasterror.message);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise();
}

function get(keys) {
    var deferred = $.Deferred();

    chrome.storage.local.get(keys, function (items) {
        if (chrome.runtime.lasterror) {
            deferred.reject(chrome.runtime.lasterror.message);
        } else {
            deferred.resolve(items);
        }
    });

    return deferred.promise();
}

function getBytesInUse(keys) {
    var deferred = $.Deferred();

    chrome.storage.local.getBytesInUse(keys, function (bytesInUse) {
        if (chrome.runtime.lasterror) {
            deferred.reject(chrome.runtime.lasterror.message);
        } else {
            deferred.resolve(bytesInUse);
        }
    });

    return deferred.promise();
}

function remove(items) {
    var deferred = $.Deferred();

    chrome.storage.local.remove(items, function () {
        if (chrome.runtime.lasterror) {
            deferred.reject(chrome.runtime.lasterror.message);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise();
}

function clear() {
    var deferred = $.Deferred();

    chrome.storage.local.clear(function () {
        if (chrome.runtime.lasterror) {
            deferred.reject(chrome.runtime.lasterror.message);
        } else {
            deferred.resolve();
        }
    });

    return deferred.promise();
}

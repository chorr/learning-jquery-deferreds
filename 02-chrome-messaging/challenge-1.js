// sendResponse()로 응답이 없을 경우 아무런 동작이 없기 때문에,
// timeout 처리가 필요.

function sendMessageDeferred(tabId, message) {
    var deferred = $.Deferred(),
        timeout = wait(5000);

    chrome.tabs.sendMessage(tabId, message, function (result) {
        if (result === undefined) {
            deferred.reject(chrome.runtime.lasterror.message);
        } else {
            deferred.resolve(result);
        }
        timeout.cancel();
    });

    timeout.done(function () {
        deferred.reject('시간 초과');
    });

    return deferred.promise();
}

sendMessageDeferred(17, {
    action: 'addSidebar'
})
    .done(function (result) {
        if (result.success) {
            console.log('Sidebar added to DOM.');
        } else {
            console.error('Could not add sidebar to tab 17:', result.error);
        }
    })
    .fail(function (error) {
        console.error('Chrome error:', error);
    });

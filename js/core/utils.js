function fShowNotification(type, message) {
    var toast = $('<div class="toast bg-' + type + ' text-white" role="alert" aria-live="assertive" aria-atomic="true">'
        + '<div class="toast-body">'
        + '<div class="toast-message align-items-center">'
        + '<div class="mr-2"><i class="fas ' + (type == 'danger' ? 'fa-exclamation' : 'fa-check') + ' fa-fw"></i></div>'
        + '<div>' + message + '</div>'
        + '</div>'
        + '</div>');

    $('#notifications-stack').append(toast);
    $(toast).toast({
        autohide: true,
        delay: 5000
    });
    $(toast).toast('show');
}

function fShowError(message) {
    fShowNotification('danger', message);
}

function fShowSuccess(message) {
    if ($.trim(message) != "") {
        fShowNotification('success', message);
    }
}
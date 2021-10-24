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

function fAfficheError(message) {
    fShowNotification('danger', message);
}

function fAfficheSuccess(message) {
    if ($.trim(message) != "") {
        fShowNotification('success', message);
    }
}

function fGetSettings(){
    $.ajax({
        url: 'js/core/data/settings.json',
        type: 'GET',
        crossDomain: true,
        accept: 'application/json',
        dataType: 'jsonp',
        contentType: "application/json",
        success: function() { alert("Success"); },
        error: function() { alert('Failed!'); },
    });
    /*$.ajax({
        crossDomain: true,        
        dataType: "jsonp",
        url: "js/core/data/settings.json",
        success: function(jsondata){
            //let data = JSON.parse(data.d);
            console.log(jsondata);
        }
     })*/
}
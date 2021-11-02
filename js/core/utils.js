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

function fSetInvalidInput(idInput, errorMessage){
    $('#' + idInput).removeClass("is-valid");
    $('#' + idInput).addClass("is-invalid");

    if ($('#' + idInput).parent().hasClass('input-group')) {
        $('#' + idInput).parent().removeClass("is-valid");
        $('#' + idInput).parent().addClass("is-invalid");
    }

    $('#' + idInput + "Feedback").addClass("invalid-feedback");
    $('#' + idInput + "Feedback").html(errorMessage);
}

function fSetValidInput(idInput, message){
    $('#' + idInput).removeClass("is-invalid");
    $('#' + idInput).addClass("is-valid");

    if ($('#' + idInput).parent().hasClass('input-group')) {
        $('#' + idInput).parent().removeClass("is-invalid");
        $('#' + idInput).parent().addClass("is-valid");
    }

    $('#' + idInput + "Feedback").addClass("valid-feedback");
    $('#' + idInput + "Feedback").html(message);
}

/**
 * Check and get json settings store in local storage if exist
 */
function fGetStoredSettings(){
    let settingsStored = localStorage.getItem('jsonSettings');
    if(settingsStored == null){
        //if null, init local storage with default value
        localStorage.setItem('jsonSettings', JSON.stringify(jsonSettings));
    }else{
        let jsonSettingsLocalStorage = JSON.parse(localStorage.getItem("jsonSettings"));
        
        if (jsonSettingsLocalStorage.version == undefined || jsonSettingsLocalStorage.version != jsonSettings.version){
            //if localStorage settings is not uptodate replace localStorage with default settings
            localStorage.setItem('jsonSettings', JSON.stringify(jsonSettings));
            fShowNotification("warning", "custom settings has been replaced with default value due to major settings update");
        }else{
            //if not null and version is up to date replace default jsonSettings
            jsonSettings = jsonSettingsLocalStorage;
        }
    }
}
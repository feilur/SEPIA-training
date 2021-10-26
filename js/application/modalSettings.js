$(document).ready(function() {

    $("#btnSaveSettings").on('click', function(){
        saveSettings();
    });
});

function openModalSettings(){
    //Load all field with jsonSettings

    $("#modalSettings").modal('show');
}

function saveSettings(){
    fShowError("Not implemented yet");
}
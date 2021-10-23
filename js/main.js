var compteur = 0;

$(document).ready(function() {
    console.log( "ready!" );

    $("#btnStart").on('click', function(){
        $("#btnStart").prop('disabled', true);
        $("#btnStart").addClass('disabled');

        $("#btnStop").prop('disabled', false);
        $("#btnStop").removeClass('disabled');

        //Ajouter fonction au clic sur Start
    });

    $("#btnStop").on('click', function(){
        $("#btnStop").prop('disabled', true);
        $("#btnStop").addClass('disabled');

        $("#btnStart").prop('disabled', false);
        $("#btnStart").removeClass('disabled');
        //Ajouter fonction au clic sur stop
    });
});


function fTest(){
    setTimeout(function(){
        console.log(compteur);
        if(compteur < 4){
            fTest();
        }

        compteur++;
    }, 2000);
}
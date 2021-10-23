var compteur = 0;

$(document).ready(function() {
    //Button start
    $("#btnStart").on('click', function(){
        $("#btnStart").prop('disabled', true);
        $("#btnStart").addClass('disabled');

        $("#btnPlayAgain").prop('disabled', false);
        $("#btnPlayAgain").removeClass('disabled');

        //Ajouter fonction au clic sur Start
    });

    //Button play again
    $("#btnPlayAgain").on('click', function(){
        $("#btnPlayAgain").prop('disabled', true);
        $("#btnPlayAgain").addClass('disabled');

        $("#btnStart").prop('disabled', false);
        $("#btnStart").removeClass('disabled');
        //Ajouter fonction au clic sur playAgain
    });


    $("#btnValidateFinish").on('click', function(){
        if($("#inNbShapes").val() == "" || $("#inNumberSequence").val() == ""){
            $("#inNbShapes, #inNumberSequence").addClass('is-invalid');

            fAfficheError("Please answer both fields");
            return;
        }

        $("#inNbShapes, #inNumberSequence").removeClass('is-invalid');
        $("#modalFinish").modal('hide');
        
        openResults();
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
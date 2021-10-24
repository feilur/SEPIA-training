var compteur = 0;

var stopScheduler = false;

$(document).ready(function() {

    let scheduler = new Scheduler();


    //Button start
    $("#btnStart").on('click', function(){
        console.log("start");

        $("#btnStart").prop('disabled', true);
        $("#btnStart").addClass('disabled');

        $("#btnStop").prop('disabled', false);
        $("#btnStop").removeClass('disabled');

        //Ajouter fonction au clic sur Start
        scheduler.start();
    });

    //Button stop
    $("#btnStop").on('click', function(){
        console.log("stop");
        
        $("#btnStop").prop('disabled', true);
        $("#btnStop").addClass('disabled');

        $("#btnStart").prop('disabled', false);
        $("#btnStart").removeClass('disabled');
        //Ajouter fonction au clic sur playAgain
        scheduler.stop();
    });


    //Button show settings
    $("#btnSettings").on('click', function(){
        openModalSettings();
    });

    $("#btnValidateFinish").on('click', function(){
        if($("#inNbShapes").val() == "" || $("#inNumberSequence").val() == ""){
            $("#inNbShapes, #inNumberSequence").addClass('is-invalid');

            fShowError("Please answer both fields");
            return;
        }

        $("#inNbShapes, #inNumberSequence").removeClass('is-invalid');
        $("#modalFinish").modal('hide');
        
        openResults();
    });
});
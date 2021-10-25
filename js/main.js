var compteur = 0;

var stopScheduler = false;

$(document).ready(function() {
    resetPage();

    let scheduler = new Scheduler();


    //Button start
    $("#btnStart").on('click', function(){
        displayModalStartTraining(scheduler.shapeGenerator.shapeToCount);
    });

    //Button start training (after shape discover)
    $("#btnStartTraining").on('click', function(){
        disableStartButton();

        $("#modalSelectionShape").modal('hide');

        //Ajouter fonction au clic sur Start
        scheduler.start();
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
        
        openResults(scheduler.shapeGenerator.result, 1234, 450, 90); //TODO: Change value with correct answers
    });
});
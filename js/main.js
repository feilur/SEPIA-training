var compteur = 0;

var gStopScheduler;
var nbArrowsSuccess;
var nbTotalArrows;

var audioGame = new Audio("audio/gameSound.mp3");

$(document).ready(function() {
    fGetStoredSettings();
    resetPage();
    
    var scheduler = new Scheduler();

    //Button start
    $("#btnStart").on('click', function(){
        displayModalStartTraining(scheduler.shapeGenerator.shapeToCount);
    });

    //Button start training (after shape discover)
    $("#btnStartTraining").on('click', function(){
        disableStartButton();
        disableSettingsButton();

        $("#modalSelectionShape").modal('hide');

        scheduler.start(scheduler.shapeGenerator.shapeToCount);
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
        
        let arrowsPercentSuccess = Math.floor((nbArrowsSuccess / nbTotalArrows) * 100);

        openResults(scheduler.shapeGenerator.result, scheduler.numberGenerator.result, scheduler.calculationGenerator.result, arrowsPercentSuccess);
    });

    //Keyboard binds
    keyboardJS.bind('up', (e) => {
        keyPressEvent("Up");
      });

      keyboardJS.bind('right', (e) => {
        keyPressEvent("Right");
      });

      keyboardJS.bind('down', (e) => {
        keyPressEvent("Down");
      });

      keyboardJS.bind('left', (e) => {
        keyPressEvent("Left");
      });

      //Arrows touch event (mobile version)
      $("#arrowUp").on("click", function(){
        keyPressEvent("Up");
      });

      $("#arrowRight").on("click", function(){
        keyPressEvent("Right");
      });

      $("#arrowDown").on("click", function(){
        keyPressEvent("Down");
      });

      $("#arrowLeft").on("click", function(){
        keyPressEvent("Left");
      });
});

function keyPressEvent(direction){
    if($("#arrow" + direction + ".text-warning").length == 1){
        displayArrowState(direction, "success");
        nbArrowsSuccess+=1;
    }else{
        //if there are other warning arrows, they become red
        $(".arrowSelect.text-warning").addClass("text-danger");
        $(".arrowSelect.text-warning").removeClass("text-warning");
    }
}
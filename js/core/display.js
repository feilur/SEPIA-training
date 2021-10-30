/**
 * @brief Display the start training modal & sohw the shape to count
 * @param {string} shapeToCount string shape qualifier
 */
function displayModalStartTraining(shapeToCount){
    $("#divShapeToCount")[0].innerHTML = shapeObject[shapeToCount];

    $("#modalSelectionShape").modal('show');
}

/**
 * @brief Display shape in divShape bloc
 * @param {string} keyShape string shape qualifier
 */
function displayShape(keyShape){
    $("#shapeHide").hide();
    $("#divShape")[0].innerHTML = shapeObject[keyShape];
}

/**
 * @brief Hide shape in divShape bloc
 */
 function hideShape(){
    $("#shapeHide").show();
    $("#divShape")[0].innerHTML = "";
}

/**
 * @brief Display operation in divOperator bloc
 * @param {string} keyShape string operator qualifier
 * @param {number} num1 first number in operation
 * @param {number} num2 second number in operation
 */
function displayOperation(keyOperator, num1, num2){
    $("#operationHide").hide();
    $("#divOperator")[0].innerHTML = operatorObject[keyOperator];
    $("#firstNumber")[0].innerHTML = num1;
    $("#secondNumber")[0].innerHTML = num2;

    $("#resultOperation").focus();
}

/**
 * @brief Hide operation with question mark icon
 */
 function hideOperation(){
    $("#operationHide").show();
    $("#divOperator")[0].innerHTML = "";
    $("#firstNumber")[0].innerHTML = "";
    $("#secondNumber")[0].innerHTML = "";
}

/**
 * @brief Display the next number of the sequence (top-right corner)
 * @param {number} number number to display
 */
function displayNumberSequence(number){
    $("#numberSequenceHide").hide();
    $("#numberSequence")[0].innerHTML = number;
}

/**
 * @brief Hide the next number of the sequence (top-right corner)
 */
 function hideNumberSequence(){
    $("#numberSequenceHide").show();
    $("#numberSequence")[0].innerHTML = "";
}

/**
 * @brief Highlight the arrow choosen
 * @param {string} direction direction of the first arrow to highlight ("Left", "Top", "Right", "Down")
 * @param {string} state warning (yellow), success (green), danger (red)
 * @param {string} direction2 direction of the second arrow to highlight ("Left", "Top", "Right", "Down") (optional)
 * @param {string} state2 warning (yellow), success (green), danger (red) for the second arrow (optional)
 */
function displayArrowState(direction1, state1, direction2 = null, state2 = null){
    $(".arrowSelect").removeClass("text-warning text-success text-danger");
    $("#arrow" + direction1).addClass("text-" + state1);

    if(direction2 && state2){
        $("#arrow" + direction2).addClass("text-" + state2);
    }
}

/**
 * @brief Enable / disable answer operation input 
 * @param {string} isEditable true / false
 */
function toggleAnswerOperation(isEditable){
    $("#resultOperation").prop('readonly', !isEditable);
}

function enableStartButton(){
    $("#btnStart").prop('disabled', false);
    $("#btnStart").removeClass('disabled');
}

function disableStartButton(){
    $("#btnStart").prop('disabled', true);
    $("#btnStart").addClass('disabled');
}

function enableSettingsButton(){
    $("#btnSettings").prop('disabled', false);
    $("#btnSettings").removeClass('disabled');
}

function disableSettingsButton(){
    $("#btnSettings").prop('disabled', true);
    $("#btnSettings").addClass('disabled');
}

/**
 * @brief Reset all inputs of form with question mark icon instead of elements
 */
function resetPage(){
    gStopScheduler = true;

    //Reset audio
    audioGame.pause();
    audioGame.currentTime = 0;
    
    //Shape replaced with question mark
    $("#shapeHide").show();
    $("#divShape")[0].innerHTML = "";

    //reset operation inputs, show question mark
    $("#operationHide").show();
    $("#divOperator")[0].innerHTML = "";
    $("#firstNumber")[0].innerHTML = "";
    $("#secondNumber")[0].innerHTML = "";
    $("#resultOperation").val("");

    //show question mark instead of the number of the sequence
    $("#numberSequenceHide").show();
    $("#numberSequence")[0].innerHTML = "";

    //reset arrows background
    $(".arrowSelect").removeClass("text-warning text-success text-danger");

    //reset buttons
    enableStartButton();
    enableSettingsButton();
    
    toggleAnswerOperation(false);

    //reset modal finish
    $("#inOperationResultFilled, #inNbShapes, #inNumberSequence").val("");

    $("#inNbShapes, #inNumberSequence").removeClass('is-invalid');
}

/**
 * @brief open finish modal
 * @param {string} shapeCounted name of shape counted
 */
function openFinish(shapeCounted){
    let resultFilled = $("#resultOperation").val();

    resetPage();

    $("#label-nbShapes").text("Number of " + shapeCounted + "s");
    $("#inOperationResultFilled").val(resultFilled);

    $("#modalFinish").modal('show');
}

/**
 * @brief open result modal
 * @param {number} nbShapeAnswer shape count result answer
 * @param {number} sequenceNumbersAnswer sequence number answer
 * @param {number} operationAnswer calculation result
 * @param {number} userArrowPercentSuccess user arrow key success percentage
 */
function openResults(nbShapeAnswer, sequenceNumbersAnswer, operationAnswer, userArrowPercentSuccess){
    //Loading fields
    let userNbShapes = $("#inNbShapes").val();
    let userSequenceNumbers = $("#inNumberSequence").val();
    let userCalculationResult = $("#inOperationResultFilled").val();

    $("#labelNbShapesResult").text($("#label-nbShapes").text());
    $("#nbShapesResult").val(userNbShapes);
    $("#inNumberSequenceResult").val(userSequenceNumbers);
    $("#inCalculationResult").val(userCalculationResult);
    $("#inArrowResult").val(userArrowPercentSuccess + "%");

    //Verifying answers
    if(userNbShapes == nbShapeAnswer){
        fSetValidInput("nbShapesResult", "Valid answer");
    }else{
        fSetInvalidInput("nbShapesResult", "Correct answer was: " + nbShapeAnswer);
    }

    if(userSequenceNumbers == sequenceNumbersAnswer){
        fSetValidInput("inNumberSequenceResult", "Valid answer");
    }else{
        fSetInvalidInput("inNumberSequenceResult", "Correct answer was: " + sequenceNumbersAnswer);
    }

    if(userCalculationResult == operationAnswer){
        fSetValidInput("inCalculationResult", "Valid answer");
    }else{
        fSetInvalidInput("inCalculationResult", "Correct answer was: " + operationAnswer);
    }

    if(userArrowPercentSuccess >= parseInt(jsonSettings.arrowsSettings.minPercentToSuccess)){
        fSetValidInput("inArrowResult", "");
    }else{
        fSetInvalidInput("inArrowResult", "score is too low");
    }

    //Enable start button
    enableStartButton();
    enableSettingsButton();

    $("#modalResult").modal('show');
}
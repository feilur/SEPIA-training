/**
 * @brief Display shape in divShape bloc
 * @param {string} keyShape string shape qualifier
 */
function displayShape(keyShape){
    $("#shapeHide").hide();
    $("#divShape")[0].innerHTML = shapeObject[keyShape];
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
 * @brief Highlight the arrow choosen
 * @param {string} direction direction of the arrow to highlight ("Left", "Top", "Right", "Down")
 * @param {string} state warning (yellow), success (green), danger (red)
 */
function displayArrowState(direction, state){
    $(".arrowSelect").removeClass("bg-warning bg-success bg-danger");
    $("#arrow" + direction).addClass("bg-" + state);
}

/**
 * @brief Enable / disable answer operation input 
 * @param {string} isEditable true / false
 */
function toggleAnswerOperation(isEditable){
    $("#resultOperation").prop('readonly', !isEditable);
}

/**
 * @brief Reset all inputs of form with question mark icon instead of elements
 */
function resetPage(){
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
    $(".arrowSelect").removeClass("bg-warning");

    //reset start / stop buttons
    $("#btnStop").prop('disabled', true);
    $("#btnStop").addClass('disabled');

    $("#btnStart").prop('disabled', false);
    $("#btnStart").removeClass('disabled');
}
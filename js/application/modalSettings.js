$(document).ready(function() {

    $("#btnSaveSettings").on('click', function(){
        saveSettings();
    });
});

function openModalSettings(){
    //Reset all inputs
    $("#modalSettings input").val("");

    //Load all field with current jsonSettings
    //Global settings
    $("#inSettingsGlobalGameDuration").val(jsonSettings.gameDuration/1000);

    //Shapes settings
    $("#inSettingsShapesPeriod").val(jsonSettings.shapesSettings.period/1000);
    $("#inSettingsShapesNbApparition").val(jsonSettings.shapesSettings.numberOfApparition);

    //calculation settings
    //Global
    $("#inSettingsCalculationMinPeriod").val(jsonSettings.calculationSettings.minPeriod/1000);
    $("#inSettingsCalculationMaxPeriod").val(jsonSettings.calculationSettings.maxPeriod/1000);
    $("#inSettingsCalculationNumberOfApparition").val(jsonSettings.calculationSettings.numberOfApparition);
    $("#inSettingsCalculationApparitionTime").val(jsonSettings.calculationSettings.apparitionTime/1000);
    $("#inSettingsCalculationInputTime").val(jsonSettings.calculationSettings.inputTime/1000);

    //Plus operator
    $("#inSettingsCalculationPlusM1Min").val(jsonSettings.calculationSettings.plusOperation.member1.min);
    $("#inSettingsCalculationPlusM1Max").val(jsonSettings.calculationSettings.plusOperation.member1.max);
    $("#inSettingsCalculationPlusM2Min").val(jsonSettings.calculationSettings.plusOperation.member2.min);
    $("#inSettingsCalculationPlusM2Max").val(jsonSettings.calculationSettings.plusOperation.member2.max);

    //Minus operator
    $("#inSettingsCalculationMinusM1Min").val(jsonSettings.calculationSettings.minusOperation.member1.min);
    $("#inSettingsCalculationMinusM1Max").val(jsonSettings.calculationSettings.minusOperation.member1.max);
    $("#inSettingsCalculationMinusM2Min").val(jsonSettings.calculationSettings.minusOperation.member2.min);
    $("#inSettingsCalculationMinusM2Max").val(jsonSettings.calculationSettings.minusOperation.member2.max);

    //Divide operator
    $("#inSettingsCalculationDivideM1Min").val(jsonSettings.calculationSettings.divideOperation.member1.min);
    $("#inSettingsCalculationDivideM1Max").val(jsonSettings.calculationSettings.divideOperation.member1.max);
    $("#inSettingsCalculationDivideM2Min").val(jsonSettings.calculationSettings.divideOperation.member2.min);
    $("#inSettingsCalculationDivideM2Max").val(jsonSettings.calculationSettings.divideOperation.member2.max);

    //Multiplicate operator
    $("#inSettingsCalculationMultiplicateM1Min").val(jsonSettings.calculationSettings.multiplicateOperation.member1.min);
    $("#inSettingsCalculationMultiplicateM1Max").val(jsonSettings.calculationSettings.multiplicateOperation.member1.max);
    $("#inSettingsCalculationMultiplicateM2Min").val(jsonSettings.calculationSettings.multiplicateOperation.member2.min);
    $("#inSettingsCalculationMultiplicateM2Max").val(jsonSettings.calculationSettings.multiplicateOperation.member2.max);
    //end calculation settings
    
    //numbers sequence settings
    $("#inSettingsNumbersSequenceMinNumber").val(jsonSettings.numbersSequenceSettings.minNumber);
    $("#inSettingsNumbersSequenceMaxNumber").val(jsonSettings.numbersSequenceSettings.maxNumber);
    $("#inSettingsNumbersSequencePeriod").val(jsonSettings.numbersSequenceSettings.period/1000);
    $("#inSettingsNumbersSequenceNumberOfApparition").val(jsonSettings.numbersSequenceSettings.numberOfApparition);

    //arrow settings
    $("#inSettingsArrowsMinPercentSuccess").val(jsonSettings.arrowsSettings.minPercentToSuccess);

    $("#modalSettings").modal('show');
}

function saveSettings(){
    let arrayAllSettingsValue = new Array();
    $("#modalSettings input").toArray().forEach(settingCourant => arrayAllSettingsValue[settingCourant.id] = settingCourant.value);
    
    //check that all inputs are not empty
    let nbErreur = 0;

    for(idSetting in arrayAllSettingsValue){
        if(arrayAllSettingsValue[idSetting].trim() == ""){
            nbErreur++;
        }
    }

    if(nbErreur > 0){
        fShowError(nbErreur + " entry fields are empty, please fill them all");
        return;
    }

    //assign all inputs to global settings var
    //Global settings
    jsonSettings.gameDuration = $("#inSettingsGlobalGameDuration").val() * 1000;

    //Shapes settings
    jsonSettings.shapesSettings.period = $("#inSettingsShapesPeriod").val() * 1000;
    jsonSettings.shapesSettings.numberOfApparition = $("#inSettingsShapesNbApparition").val();

    //calculation settings
    //Global
    jsonSettings.calculationSettings.minPeriod = $("#inSettingsCalculationMinPeriod").val() * 1000;
    jsonSettings.calculationSettings.maxPeriod = $("#inSettingsCalculationMaxPeriod").val() * 1000;
    jsonSettings.calculationSettings.numberOfApparition = $("#inSettingsCalculationNumberOfApparition").val();
    jsonSettings.calculationSettings.apparitionTime = $("#inSettingsCalculationApparitionTime").val() * 1000;
    jsonSettings.calculationSettings.inputTime = $("#inSettingsCalculationInputTime").val() * 1000;

    //Plus operator
    jsonSettings.calculationSettings.plusOperation.member1.min = $("#inSettingsCalculationPlusM1Min").val();
    jsonSettings.calculationSettings.plusOperation.member1.max = $("#inSettingsCalculationPlusM1Max").val();
    jsonSettings.calculationSettings.plusOperation.member2.min = $("#inSettingsCalculationPlusM2Min").val();
    jsonSettings.calculationSettings.plusOperation.member2.max = $("#inSettingsCalculationPlusM2Max").val();

    //Minus operator
    jsonSettings.calculationSettings.minusOperation.member1.min = $("#inSettingsCalculationMinusM1Min").val();
    jsonSettings.calculationSettings.minusOperation.member1.max = $("#inSettingsCalculationMinusM1Max").val();
    jsonSettings.calculationSettings.minusOperation.member2.min = $("#inSettingsCalculationMinusM2Min").val();
    jsonSettings.calculationSettings.minusOperation.member2.max = $("#inSettingsCalculationMinusM2Max").val();

    //Divide operator
    jsonSettings.calculationSettings.divideOperation.member1.min = $("#inSettingsCalculationDivideM1Min").val();
    jsonSettings.calculationSettings.divideOperation.member1.max = $("#inSettingsCalculationDivideM1Max").val();
    jsonSettings.calculationSettings.divideOperation.member2.min = $("#inSettingsCalculationDivideM2Min").val();
    jsonSettings.calculationSettings.divideOperation.member2.max = $("#inSettingsCalculationDivideM2Max").val();

    //Multiplicate operator
    jsonSettings.calculationSettings.multiplicateOperation.member1.min = $("#inSettingsCalculationMultiplicateM1Min").val();
    jsonSettings.calculationSettings.multiplicateOperation.member1.max = $("#inSettingsCalculationMultiplicateM1Max").val();
    jsonSettings.calculationSettings.multiplicateOperation.member2.min = $("#inSettingsCalculationMultiplicateM2Min").val();
    jsonSettings.calculationSettings.multiplicateOperation.member2.max = $("#inSettingsCalculationMultiplicateM2Max").val();
    //end calculation settings

    //numbers sequence settings
    jsonSettings.numbersSequenceSettings.minNumber = $("#inSettingsNumbersSequenceMinNumber").val();
    jsonSettings.numbersSequenceSettings.maxNumber = $("#inSettingsNumbersSequenceMaxNumber").val();
    jsonSettings.numbersSequenceSettings.period = $("#inSettingsNumbersSequencePeriod").val() * 1000;
    jsonSettings.numbersSequenceSettings.numberOfApparition = $("#inSettingsNumbersSequenceNumberOfApparition").val();

    //arrow settings
    jsonSettings.arrowsSettings.minPercentToSuccess = $("#inSettingsArrowsMinPercentSuccess").val();

    //store new global settings in localStorage
    localStorage.setItem("jsonSettings", JSON.stringify(jsonSettings));

    fShowSuccess("Settings updated");

    $("#modalSettings").modal('hide');
}
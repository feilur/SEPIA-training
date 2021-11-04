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
    $("#inSettingsGlobalEnableSound").prop("checked", jsonSettings.enableSound);

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
    $("#inSettingsArrowsMinPeriod").val(jsonSettings.arrowsSettings.minPeriod);
    $("#inSettingsArrowsMaxPeriod").val(jsonSettings.arrowsSettings.maxPeriod);
    $("#inSettingsArrowsNbSimultaneous").val(jsonSettings.arrowsSettings.nbSimultaneousPresses);

    $("#modalSettings").modal('show');
}

function saveSettings(){
    let arrayAllSettingsValue = new Array();
    $("#modalSettings [type=number]").toArray().forEach(settingCourant => arrayAllSettingsValue[settingCourant.id] = settingCourant.value);
    
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
    jsonSettings.gameDuration = parseInt($("#inSettingsGlobalGameDuration").val()) * 1000;
    jsonSettings.enableSound = $("#inSettingsGlobalEnableSound").prop("checked");

    //Shapes settings
    jsonSettings.shapesSettings.period = parseInt($("#inSettingsShapesPeriod").val()) * 1000;
    jsonSettings.shapesSettings.numberOfApparition = parseInt($("#inSettingsShapesNbApparition").val());

    //calculation settings
    //Global
    jsonSettings.calculationSettings.minPeriod = parseInt($("#inSettingsCalculationMinPeriod").val()) * 1000;
    jsonSettings.calculationSettings.maxPeriod = parseInt($("#inSettingsCalculationMaxPeriod").val()) * 1000;
    jsonSettings.calculationSettings.numberOfApparition = parseInt($("#inSettingsCalculationNumberOfApparition").val());
    jsonSettings.calculationSettings.apparitionTime = parseInt($("#inSettingsCalculationApparitionTime").val()) * 1000;
    jsonSettings.calculationSettings.inputTime = parseInt($("#inSettingsCalculationInputTime").val()) * 1000;

    //Plus operator
    jsonSettings.calculationSettings.plusOperation.member1.min = parseInt($("#inSettingsCalculationPlusM1Min").val());
    jsonSettings.calculationSettings.plusOperation.member1.max = parseInt($("#inSettingsCalculationPlusM1Max").val());
    jsonSettings.calculationSettings.plusOperation.member2.min = parseInt($("#inSettingsCalculationPlusM2Min").val());
    jsonSettings.calculationSettings.plusOperation.member2.max = parseInt($("#inSettingsCalculationPlusM2Max").val());

    //Minus operator
    jsonSettings.calculationSettings.minusOperation.member1.min = parseInt($("#inSettingsCalculationMinusM1Min").val());
    jsonSettings.calculationSettings.minusOperation.member1.max = parseInt($("#inSettingsCalculationMinusM1Max").val());
    jsonSettings.calculationSettings.minusOperation.member2.min = parseInt($("#inSettingsCalculationMinusM2Min").val());
    jsonSettings.calculationSettings.minusOperation.member2.max = parseInt($("#inSettingsCalculationMinusM2Max").val());

    //Divide operator
    jsonSettings.calculationSettings.divideOperation.member1.min = parseInt($("#inSettingsCalculationDivideM1Min").val());
    jsonSettings.calculationSettings.divideOperation.member1.max = parseInt($("#inSettingsCalculationDivideM1Max").val());
    jsonSettings.calculationSettings.divideOperation.member2.min = parseInt($("#inSettingsCalculationDivideM2Min").val());
    jsonSettings.calculationSettings.divideOperation.member2.max = parseInt($("#inSettingsCalculationDivideM2Max").val());

    //Multiplicate operator
    jsonSettings.calculationSettings.multiplicateOperation.member1.min = parseInt($("#inSettingsCalculationMultiplicateM1Min").val());
    jsonSettings.calculationSettings.multiplicateOperation.member1.max = parseInt($("#inSettingsCalculationMultiplicateM1Max").val());
    jsonSettings.calculationSettings.multiplicateOperation.member2.min = parseInt($("#inSettingsCalculationMultiplicateM2Min").val());
    jsonSettings.calculationSettings.multiplicateOperation.member2.max = parseInt($("#inSettingsCalculationMultiplicateM2Max").val());
    //end calculation settings

    //numbers sequence settings
    jsonSettings.numbersSequenceSettings.minNumber = parseInt($("#inSettingsNumbersSequenceMinNumber").val());
    jsonSettings.numbersSequenceSettings.maxNumber = parseInt($("#inSettingsNumbersSequenceMaxNumber").val());
    jsonSettings.numbersSequenceSettings.period = parseInt($("#inSettingsNumbersSequencePeriod").val()) * 1000;
    jsonSettings.numbersSequenceSettings.numberOfApparition = parseInt($("#inSettingsNumbersSequenceNumberOfApparition").val());

    //arrow settings
    jsonSettings.arrowsSettings.minPercentToSuccess = parseInt($("#inSettingsArrowsMinPercentSuccess").val());
    jsonSettings.arrowsSettings.minPeriod = parseInt($("#inSettingsArrowsMinPeriod").val());
    jsonSettings.arrowsSettings.maxPeriod = parseInt($("#inSettingsArrowsMaxPeriod").val());
    jsonSettings.arrowsSettings.nbSimultaneousPresses = parseInt($("#inSettingsArrowsNbSimultaneous").val());

    //store new global settings in localStorage
    localStorage.setItem("jsonSettings", JSON.stringify(jsonSettings));

    fShowSuccess("Settings updated");

    $("#modalSettings").modal('hide');
}
/**
 * @brief Coordinates generators, display and inputs
 */
class Scheduler {
    numberGenerator;
    shapeGenerator;
    calculationGenerator;
    arrowsGenerator;

    constructor() {
        this.numberGenerator = new NumberGenerator(jsonSettings.numbersSequenceSettings.minNumber, jsonSettings.numbersSequenceSettings.maxNumber);
        //console.log(this.numberGenerator);

        this.shapeGenerator = new ShapeGenerator(shapeObject);
        this.calculationGenerator = new CalculationGenerator(operatorObject);
        this.arrowsGenerator = new ArrowsGenerator(arrowsObject);
    }
    start(shapeToCount) {

        if(jsonSettings.enableSound){
            audioGame.play();
        }
        
        gStopScheduler = false;
        nbTotalArrows = 0;
        nbArrowsSuccess = 0;

        this.numberGenerator.resetResult();
        this.shapeGenerator.resetShapeToCount();
        this.shapeGenerator.resetResult();

        this.manageNumberGenerator();
        this.manageShapeGenerator();
        this.manageArrowsGenerator();

        this.startPeriodicNumberGenerator(jsonSettings.numbersSequenceSettings.period, jsonSettings.numbersSequenceSettings.numberOfApparition-1, this);
        this.startPeriodicShapeGenerator(jsonSettings.shapesSettings.period, jsonSettings.shapesSettings.numberOfApparition-1, this);
        
        const minArrowsPeriod = parseInt(jsonSettings.arrowsSettings.minPeriod);
        const maxArrowsPeriod = parseInt(jsonSettings.arrowsSettings.maxPeriod);
        this.startPeriodicArrowsGenerator(minArrowsPeriod, maxArrowsPeriod, this);

        const minCalculationPeriod = parseInt(jsonSettings.calculationSettings.minPeriod);
        const maxCalculationPeriod = parseInt(jsonSettings.calculationSettings.maxPeriod);

        const calculationPeriod = Math.floor((Math.random() * maxCalculationPeriod - minCalculationPeriod + 1) + minCalculationPeriod);
        //console.log("Random period for calculation display:" + calculationPeriod);

        this.startPeriodicCalculationGenerator(calculationPeriod, jsonSettings.calculationSettings.numberOfApparition, this);


        setTimeout(function(){
            openFinish(shapeToCount);
        }, jsonSettings.gameDuration);
    }
    stop() {
        resetPage();

        clearAllTimeouts();
    }

    startPeriodicNumberGenerator(period, numberOfExecutions, scheduler) {
        if ( !gStopScheduler ) {
            setTimeout(function(){

                numberOfExecutions--;
    
                if (numberOfExecutions >= 0 ) {
                    scheduler.manageNumberGenerator();
    
                    scheduler.startPeriodicNumberGenerator(period, numberOfExecutions, scheduler);
                }
                else {
                    hideNumberSequence();
                }
            }, period);
        }
    }

    startPeriodicShapeGenerator(period, numberOfExecutions, scheduler) {
        if ( !gStopScheduler ) {
            setTimeout(function(){

                numberOfExecutions--;

                if (numberOfExecutions >= 0) {
                    scheduler.manageShapeGenerator();

                    scheduler.startPeriodicShapeGenerator(period, numberOfExecutions, scheduler);
                }
                else {
                    hideShape();
                }
            }, period);
        }
    }

    startPeriodicArrowsGenerator(minPeriod, maxPeriod, scheduler) {
        let  calculationPeriod = Math.floor(Math.random() * (maxPeriod - minPeriod + 1)) + minPeriod;
        calculationPeriod *= 1000;

        if ( gStopScheduler == false ) {
            setTimeout(function(){
                    scheduler.manageArrowsGenerator();

                    scheduler.startPeriodicArrowsGenerator(minPeriod, maxPeriod, scheduler);
            }, calculationPeriod);
        }
    }

    startPeriodicCalculationGenerator(period, numberOfExecutions, scheduler) {
        if ( !gStopScheduler ) {
            setTimeout(function(){

                numberOfExecutions--;

                if (numberOfExecutions >= 0) {
                    toggleAnswerOperation(true);

                    scheduler.manageCalculationGenerator();

                    scheduler.startPeriodicCalculationGenerator(period, numberOfExecutions, scheduler);

                    setTimeout(function() {
                        hideOperation();
                    }, jsonSettings.calculationSettings.apparitionTime)

                    setTimeout(function() {
                        toggleAnswerOperation(false);
                    }, jsonSettings.calculationSettings.inputTime)
                }
                else if (jsonSettings.calculationSettings.numberOfApparition > 1) {
                    hideOperation();
                }
            }, period);
        }
    }

    manageNumberGenerator() {
        if ( !gStopScheduler ) {
            const newNumber = this.numberGenerator.generateNumber();
            //console.log(newNumber);

            displayNumberSequence(newNumber);
        }
    }

    manageShapeGenerator() {
        if ( !gStopScheduler ) {
            const newShape = this.shapeGenerator.generateShape();
            //console.log(newShape);

            displayShape(newShape);            
        }
    }

    manageCalculationGenerator() {
        if ( !gStopScheduler ) {
            const newCalculation = this.calculationGenerator.generateCalculation();
            //console.log(newCalculation);

            displayOperation(newCalculation.operatorKey, newCalculation.member1, newCalculation.member2);
        }
    }

    manageArrowsGenerator() {
        if (!gStopScheduler){
            const newArrows = this.arrowsGenerator.generateArrows();
            displayArrowState(newArrows, "warning");

            nbTotalArrows +=1;
            console.log(nbTotalArrows);
        }
    }

    clearAllTimeouts() {
        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i);
        }
    }
}
/**
 * @brief Coordinates generators, display and inputs
 */
class Scheduler {
    numberGenerator;
    shapeGenerator;
    calculationGenerator;

    constructor() {
        this.numberGenerator = new NumberGenerator(jsonSettings.numbersSequenceSettings.minNumber, jsonSettings.numbersSequenceSettings.maxNumber);
        //console.log(this.numberGenerator);

        this.shapeGenerator = new ShapeGenerator(shapeObject);
        this.calculationGenerator = new CalculationGenerator(operatorObject);
    }
    start(shapeToCount) {
        stopScheduler = false;

        this.numberGenerator.resetResult();

        this.manageNumberGenerator();
        this.manageShapeGenerator();

        this.startPeriodicNumberGenerator(jsonSettings.numbersSequenceSettings.period, jsonSettings.numbersSequenceSettings.numberOfApparition-1, this);
        this.startPeriodicShapeGenerator(jsonSettings.shapesSettings.period, jsonSettings.shapesSettings.numberOfApparition-1, this);

        const minCalculationPeriod = jsonSettings.calculationSettings.minPeriod;
        const maxCalculationPeriod = jsonSettings.calculationSettings.maxPeriod;

        const calculationPeriod = Math.floor((Math.random() * maxCalculationPeriod - minCalculationPeriod + 1) + minCalculationPeriod);
        //console.log("Random period for calculation display:" + calculationPeriod);

        this.startPeriodicCalculationGenerator(calculationPeriod, jsonSettings.calculationSettings.numberOfApparition, this);

        setTimeout(function(){
            openFinish(shapeToCount);
        }, jsonSettings.gameDuration);
    }
    stop() {
        stopScheduler = true;
        resetPage();

        clearAllTimeouts();
    }

    startPeriodicNumberGenerator(period, numberOfExecutions, scheduler) {
        if ( !stopScheduler ) {
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
        if ( !stopScheduler ) {
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

    startPeriodicCalculationGenerator(period, numberOfExecutions, scheduler) {
        if ( !stopScheduler ) {
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
        if ( !stopScheduler ) {
            const newNumber = this.numberGenerator.generateNumber();
            //console.log(newNumber);

            displayNumberSequence(newNumber);
        }
    }

    manageShapeGenerator() {
        if ( !stopScheduler ) {
            const newShape = this.shapeGenerator.generateShape();
            //console.log(newShape);

            displayShape(newShape);
        }
    }

    manageCalculationGenerator() {
        if ( !stopScheduler ) {
            const newCalculation = this.calculationGenerator.generateCalculation();
            //console.log(newCalculation);

            displayOperation(newCalculation.operatorKey, newCalculation.member1, newCalculation.member2);
        }
    }

    clearAllTimeouts() {
        var highestTimeoutId = setTimeout(";");
        for (var i = 0 ; i < highestTimeoutId ; i++) {
            clearTimeout(i);
        }
    }
}
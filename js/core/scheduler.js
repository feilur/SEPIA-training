/**
 * @brief Coordinates generators, display and inputs
 */
class Scheduler {
    numberGenerator;
    shapeGenerator;
    calculationGenerator;

    constructor() {
        this.numberGenerator = new NumberGenerator(1, 10);
        console.log(this.numberGenerator);

        this.shapeGenerator = new ShapeGenerator(shapeObject);
        this.calculationGenerator = new CalculationGenerator(operatorObject);
    }
    start() {
        Scheduler.startPeriodicNumberGenerator(1000, 5, this.numberGenerator);
    }
    stop() {
        resetPage();
    }

    static startPeriodicNumberGenerator(period, numberOfExecutions, numberGenerator) {
        setTimeout(function(){
            const newNumber = numberGenerator.generateNumber();

            console.log(newNumber);

            displayNumberSequence(newNumber);
            numberOfExecutions--;
            if (numberOfExecutions > 0) {
                Scheduler.startPeriodicNumberGenerator(period, numberOfExecutions, numberGenerator);
            }
        }, period);
    }

    managePeriodicNumberGenerator(){
        setTimeout(function(){
            const newNumber = numberGenerator.generateNumber();

            console.log(newNumber);

            displayNumberSequence(newNumber);
        }, period);
    }

    startPeriodicShapeGenerator(period) {

    }

    startTimerCalculationGenerator(maxApparitionTime) {

    }
}
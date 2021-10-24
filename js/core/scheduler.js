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

            if (numberOfExecutions > 0) {
                const newNumber = numberGenerator.generateNumber();
                console.log(newNumber);

                displayNumberSequence(newNumber);

                Scheduler.startPeriodicNumberGenerator(period, numberOfExecutions, numberGenerator);
            }
            else {
                hideNumberSequence();
            }

            numberOfExecutions--;
        }, period);
    }

    startPeriodicShapeGenerator(period, numberOfExecutions, shapeGenerator) {
        setTimeout(function(){

            if (numberOfExecutions > 0) {
                const newShape = shapeGenerator.generateShape();
                console.log(newShape);

                displayShape(newShape);

                Scheduler.startPeriodicNumberGenerator(period, numberOfExecutions, shapeGenerator);
            }
            else {
                hideShape();
            }

            numberOfExecutions--;
        }, period);
    }

    startTimerCalculationGenerator(maxApparitionTime) {

    }
}
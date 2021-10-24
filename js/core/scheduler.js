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
        this.startPeriodicNumberGenerator(1000, 5, this);
        this.startPeriodicShapeGenerator(1000, 5, this);
    }
    stop() {
        resetPage();
    }

    startPeriodicNumberGenerator(period, numberOfExecutions, scheduler) {
        setTimeout(function(){

            numberOfExecutions--;

            if (numberOfExecutions > -1) {
                const newNumber = scheduler.numberGenerator.generateNumber();
                console.log(newNumber);

                displayNumberSequence(newNumber);

                scheduler.startPeriodicNumberGenerator(period, numberOfExecutions, scheduler);
            }
            else {
                hideNumberSequence();
            }
        }, period);
    }

    startPeriodicShapeGenerator(period, numberOfExecutions, scheduler) {
        setTimeout(function(){

            numberOfExecutions--;

            if (numberOfExecutions > -1) {
                const newShape = scheduler.shapeGenerator.generateShape();
                console.log(newShape);

                displayShape(newShape);

                scheduler.startPeriodicShapeGenerator(period, numberOfExecutions, scheduler);
            }
            else {
                hideShape();
            }
        }, period);
    }

    startTimerCalculationGenerator(maxApparitionTime) {

    }
}
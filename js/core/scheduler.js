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
        this.manageNumberGenerator();
        this.manageShapeGenerator();

        this.startPeriodicNumberGenerator(1000, 5-1, this);
        this.startPeriodicShapeGenerator(1000, 5-1, this);
        this.startPeriodicCalculationGenerator(15000, 1, this);
    }
    stop() {
        resetPage();
    }

    startPeriodicNumberGenerator(period, numberOfExecutions, scheduler) {
        setTimeout(function(){

            numberOfExecutions--;

            if (numberOfExecutions > -1) {
                scheduler.manageNumberGenerator();

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
                scheduler.manageShapeGenerator();

                scheduler.startPeriodicShapeGenerator(period, numberOfExecutions, scheduler);
            }
            else {
                hideShape();
            }
        }, period);
    }

    startPeriodicCalculationGenerator(period, numberOfExecutions, scheduler) {
        setTimeout(function(){

            numberOfExecutions--;

            if (numberOfExecutions > -1) {
                scheduler.manageCalculationGenerator();

                scheduler.startPeriodicCalculationGenerator(period, numberOfExecutions, scheduler);
            }
            else {
                hideOperation();
            }
        }, period);
    }

    manageNumberGenerator() {
        const newNumber = this.numberGenerator.generateNumber();
        console.log(newNumber);

        displayNumberSequence(newNumber);
    }

    manageShapeGenerator() {
        const newShape = this.shapeGenerator.generateShape();
        console.log(newShape);

        displayShape(newShape);
    }

    manageCalculationGenerator() {
        const newCalculation = this.calculationGenerator.generateCalculation();
        console.log(newCalculation);

        displayOperation(newCalculation.operatorKey, newCalculation.member1, newCalculation.member2);
    }
}
/**
 * @brief Class to give a random calculation (operator from operatorObject)
 */
 class CalculationGenerator {
    operatorObject; ///< Object containing all operators
    generatedCalculation; ///< Instance of Calculation class (to display)

    minValueMember1;
    maxValueMember1;

    minValueMember2;
    maxValueMember2;

    result;     ///< Number containing the result of the calculation

    /**
     * @brief Constructor
     * 
     * @param Object containing names of shape to be generated
     */
    constructor(operatorObject) {
        this.operatorObject = operatorObject;
        this.generatedCalculation;

        this.minValueMember1 = -1;
        this.maxValueMember1 = -1;

        this.minValueMember2 = -1;
        this.maxValueMember2 = -1;

        this.result = -1;
    }

    /**
     * @brief Generates a random shape and stores it in result
     * 
     * @returns String of the shape to be generated (used as key name to get the display command)
     * 
     * @todo Import values for min and max values
     */
    generateCalculation() {
        const operatorKey = this.generateOperator();

        switch (operatorKey) {
            case "plus":
                this.minValueMember1 = parseInt(jsonSettings.calculationSettings.plusOperation.member1.min);
                this.maxValueMember1 = parseInt(jsonSettings.calculationSettings.plusOperation.member1.max);

                this.minValueMember2 = parseInt(jsonSettings.calculationSettings.plusOperation.member2.min);
                this.maxValueMember2 = parseInt(jsonSettings.calculationSettings.plusOperation.member2.max);
                break;

            case "minus":
                this.minValueMember1 = parseInt(jsonSettings.calculationSettings.minusOperation.member1.min);
                this.maxValueMember1 = parseInt(jsonSettings.calculationSettings.minusOperation.member1.max);

                this.minValueMember2 = parseInt(jsonSettings.calculationSettings.minusOperation.member2.min);
                this.maxValueMember2 = parseInt(jsonSettings.calculationSettings.minusOperation.member2.max);
                break;

            case "divide":
                this.minValueMember2 = parseInt(jsonSettings.calculationSettings.divideOperation.member2.min);
                this.maxValueMember2 = parseInt(jsonSettings.calculationSettings.divideOperation.member2.max);

                // member 1 will be determined according to member 2 (to get null remainder)
                break;

            case "multiplicate":
                this.minValueMember1 = parseInt(jsonSettings.calculationSettings.multiplicateOperation.member1.min);
                this.maxValueMember1 = parseInt(jsonSettings.calculationSettings.multiplicateOperation.member1.max);

                this.minValueMember2 = parseInt(jsonSettings.calculationSettings.multiplicateOperation.member2.min);
                this.maxValueMember2 = parseInt(jsonSettings.calculationSettings.multiplicateOperation.member2.max);
                break;

            default:
                //console.log("Not a valid operator to generate a calculation");
                return -1; // Error
        }

        const member2 = Math.floor((Math.random() * this.maxValueMember2 - this.minValueMember2 + 1) + this.minValueMember2);

        let member1;

        if (operatorKey == "divide") {
            const minQuotient = parseInt(jsonSettings.calculationSettings.divideOperation.member1.min);
            const maxQuotient = parseInt(jsonSettings.calculationSettings.divideOperation.member1.max);

            const quotient = Math.floor((Math.random() * maxQuotient - minQuotient + 1) + minQuotient);

            member1 = quotient * member2;
        }
        else {
            member1 = Math.floor((Math.random() * this.maxValueMember1 - this.minValueMember1 + 1) + this.minValueMember1);
        }

        this.generatedCalculation = new Calculation(operatorKey, member1, member2);

        this.result = this.generatedCalculation.getResult();

        return this.generatedCalculation;
    }

    /**
     * @brief Generates a random operator key
     * 
     * @returns operatorObject key
     */
    generateOperator() {
        const operatorArray = Object.keys(this.operatorObject);

        const maxIndex = operatorArray.length;
        const randomIndex = Math.floor(Math.random() * maxIndex);

        return operatorArray[randomIndex];
    }
}

/**
 * @brief Contains calculation components (operator, member 1, member 2)
 */
 class Calculation {
    operatorKey;   ///< operator key
    member1;    ///< First number of the operation
    member2;    ///< Second number of the operation
    result;     ///< Result of the operation

    constructor(operatorKey, member1, member2) {
        this.operatorKey = operatorKey;
        this.member1 = member1;
        this.member2 = member2;
        this.result = -1;
    }

    getResult() {
        let result = -1;
        switch (this.operatorKey) {
            case "plus":
                result = this.member1 + this.member2;
                break;

            case "minus":
                result = this.member1 - this.member2;
                break;

            case "divide":
                result = this.member1 / this.member2;
                break;

            case "multiplicate":
                result = this.member1 * this.member2;
                break;

            default:
                //console.log("Not a valid operator to generate a calculation");
        }
        this.result = result;
        return result;
    }
}
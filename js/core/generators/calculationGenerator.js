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

        result = -1;
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
                this.minValueMember1 = 10;
                this.maxValueMember1 = 9999;

                this.minValueMember2 = 10;
                this.maxValueMember2 = 9999;
                break;

            case "minus":
                this.minValueMember1 = 10;
                this.maxValueMember1 = 9999;

                this.minValueMember2 = 10;
                this.maxValueMember2 = 9999;
                break;

            case "divide":
                this.minValueMember2 = 10;
                this.maxValueMember2 = 99;

                // member 1 will be determined according to member 2 (to get null remainder)
                break;

            case "multiplicate":
                this.minValueMember1 = 10;
                this.maxValueMember1 = 9999;

                this.minValueMember2 = 10;
                this.maxValueMember2 = 99;
                break;

            default:
                console.log("Not a valid operator to generate a calculation");
                return -1; // Error
        }

        const member2 = Math.floor((Math.random() * this.maxValueMember2 - this.minValueMember2 + 1) + this.minValueMember2);

        let member1;

        if (operatorKey == "divide") {
            const minQuotient = 5;
            const maxQuotient = 20;

            const quotient = Math.floor((Math.random() * maxQuotient - minQuotient + 1) + minQuotient);

            member1 = quotient * member2;
        }
        else {
            member1 = Math.floor((Math.random() * this.maxValueMember1 - this.minValueMember1 + 1) + this.minValueMember1);
        }

        this.generatedCalculation = new Calculation(operatorKey, member1, member2);

        this.result = this.generatedCalculation.getResult();

        return this.generateCalculation;
    }

    /**
     * @brief Generates a random operator key
     * 
     * @returns operatorObject key
     */
    generateOperator() {
        const maxIndex = this.operatorObject.length();
        const operatorArray = Object.keys(this.operatorObject);
        randomIndex = Math.floor(Math.random() * maxIndex + 1);

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

    constructor(operatorKey, member1, member2) {
        this.operatorKey = operatorKey;
        this.member1 = member1;
        this.member2 = member2;
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
                result = this.member1 * this.member2;
                break;

            case "multiplicate":
                result = this.member1 / this.member2;
                break;

            default:
                console.log("Not a valid operator to generate a calculation");
        }
        return result;
    }
}
/**
 * @brief Class to give a random number between minNumber and maxNumber
 */
class NumberGenerator {
    minNumber;  ///< Minimun number to generate
    maxNumber;  ///< Maximum number to generate
    generatedNumber;     ///< generatedNumber
    lastgeneratedNumber; ///< Last generatedNumber to avoid providing the same one

    /**
     * @brief Constructor
     * 
     * @param minNumber Minimum value of the generated number
     * @param maxNumber Maximum value of the generated number
     */
    constructor(minNumber, maxNumber) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        this.generatedNumber = -1;
        this.lastgeneratedNumber = -1;
    }

    /**
     * @brief Generates a random number and stores it in generatedNumber
     * 
     * @returns generatedNumber between minNumber and maxNumber
     */
    generateNumber() {
        this.lastgeneratedNumber = this.generatedNumber;

        while (this.generatedNumber == this.lastgeneratedNumber && this.maxNumber != this.minNumber) {
            this.generatedNumber = Math.floor((Math.random() * this.maxNumber - this.minNumber + 1) + this.minNumber);
        }

        return this.generatedNumber;
    }
}
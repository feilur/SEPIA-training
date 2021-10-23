/**
 * @brief Class to give a random number between minNumber and maxNumber
 */
class NumberManager {
    minNumber;  ///< Minimun number to generate
    maxNumber;  ///< Maximum number to generate
    result;     ///< Result of the generation: used to check the user's answer

    /**
     * @brief Constructor
     * 
     * @param minNumber Minimum value of the generated number
     * @param maxNumber Maximum value of the generated number
     */
    constructor(minNumber, maxNumber) {
        this.minNumber = minNumber;
        this.maxNumber = maxNumber;
        this.result = -1;
    }

    /**
     * @brief Generate a random number and stores it in result
     * 
     * @returns Result of the random generation between minNumber and maxNumber
     */
    generateNumber() {
        this.result = Math.floor((Math.random() * this.maxNumber - this.minNumber + 1) + this.minNumber);

        return this.result;
    }
}
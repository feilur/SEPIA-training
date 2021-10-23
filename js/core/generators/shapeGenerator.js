/**
 * @brief Class to give a random shape from enumShape
 */
 class ShapeGenerator {
    shapeObject; ///< Object containing names of shape to be generated
    result;     ///< String containing the shape to generate

    /**
     * @brief Constructor
     * 
     * @param Object containing names of shape to be generated
     */
    constructor(shapeObject) {
        this.shapeObject = shapeObject; ///< Object containing shapes (in data.js)
        result = -1;    ///< Result of the generation: used to check the user's answer
        lastResult;     ///< Last result to avoid providing the same one
    }

    /**
     * @brief Generates a random shape and stores it in result
     * 
     * @returns String of the shape to be generated (used as key name to get the display command)
     */
    generateShape() {
        this.lastResult = this.result;
        const maxIndex = this.shapeObject.length();

        const shapeArray = Object.keys(this.shapeObject);

        while (this.result == this.lastResult && shapeArray.length() > 1) {
            randomIndex = Math.floor(Math.random() * this.maxNumber + 1);
            this.result = shapeArray[randomIndex];
        }

        return this.result;
    }
}
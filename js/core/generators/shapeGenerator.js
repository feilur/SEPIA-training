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
        this.shapeObject = shapeObject;
        result = -1;
    }

    /**
     * @brief Generates a random shape and stores it in result
     * 
     * @returns String of the shape to be generated (used as key name to get the display command)
     */
    generateShape() {
        const maxIndex = this.shapeObject.length();
        randomIndex = Math.floor(Math.random() * this.maxNumber + 1);

        const shapeArray = Object.keys(this.shapeObject);

        this.result = shapeArray[randomIndex];

        return this.result;
    }
}
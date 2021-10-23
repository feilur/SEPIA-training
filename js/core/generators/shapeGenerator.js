/**
 * @brief Class to give a random shape from shapeObject
 */
 class ShapeGenerator {
    shapeObject; ///< Object containing names of shape to be generated
    generatedShape;     ///< String containing the shape to generate
    lastgeneratedShape; ///< Last generatedShape to avoid providing the same one

    /**
     * @brief Constructor
     * 
     * @param Object containing names of shape to be generated
     */
    constructor(shapeObject) {
        this.shapeObject = shapeObject;
        generatedShape = -1;
        lastgeneratedShape = -1;     
    }

    /**
     * @brief Generates a random shape and stores it in generatedShape
     * 
     * @returns String of the shape to be generated (used as key name to get the display command)
     */
    generateShape() {
        this.lastgeneratedShape = this.generatedShape;
        const maxIndex = this.shapeObject.length();

        const shapeArray = Object.keys(this.shapeObject);

        while (this.generatedShape == this.lastgeneratedShape && shapeArray.length() > 1) {
            randomIndex = Math.floor(Math.random() * maxIndex + 1);
            this.generatedShape = shapeArray[randomIndex];
        }

        return this.generatedShape;
    }
}
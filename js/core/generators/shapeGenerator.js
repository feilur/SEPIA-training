/**
 * @brief Class to give a random shape from shapeObject
 */
 class ShapeGenerator {
    shapeObject; ///< Object containing names of shape to be generated
    generatedShape;     ///< String containing the shape to generate
    lastgeneratedShape; ///< Last generatedShape to avoid providing the same one

    shapeToCount;   ///< Shape the user has to count during the test
    result; ///< Number of shapeToCount during the test

    /**
     * @brief Constructor
     * 
     * @param Object containing names of shape to be generated
     */
    constructor(shapeObject) {
        this.shapeObject = shapeObject;
        this.generatedShape = -1;
        this.lastgeneratedShape = -1;    
        
        //this.resetShapeToCount();
        //console.log("Shape to count: " + this.shapeToCount);

        //this.resetResult();
    }

    /**
     * @brief Sets the shape to count
     * 
     * @returns The shape the user has to count
     */
    resetShapeToCount() {
        this.lastgeneratedShape = this.generatedShape;

        const shapeArray = Object.keys(this.shapeObject);
        const maxIndex = shapeArray.length;

        const randomIndex = Math.floor(Math.random() * maxIndex);
        
        this.shapeToCount = shapeArray[randomIndex];
        console.log("shapeToCount: " + this.shapeToCount);
    }

    resetResult() {
        this.result = 0;
    }

    /**
     * @brief Generates a random shape and stores it in generatedShape
     * 
     * @returns String of the shape to be generated (used as key name to get the display command)
     */
    generateShape() {
        this.lastgeneratedShape = this.generatedShape;

        const shapeArray = Object.keys(this.shapeObject);
        const maxIndex = shapeArray.length;

        while (this.generatedShape == this.lastgeneratedShape && shapeArray.length > 1) {
            const randomIndex = Math.floor(Math.random() * maxIndex);
            this.generatedShape = shapeArray[randomIndex];
        }

        if (this.generatedShape == this.shapeToCount) {
            this.result++;
            //console.log(this.result);
        }

        return this.generatedShape;
    }
}
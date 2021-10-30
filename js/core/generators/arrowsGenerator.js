/**
 * @brief Class to give randoms arrow combinations
 */
class ArrowsGenerator{
    arrowsObject; ///< Object containing names of shape to be generated
    generatedArrows; ///< String array containing arrows to generate

    /**
     * @brief Constructor
     * 
     * @param Object containing names of arrows to be generated
     */
     constructor(arrowsObject) {
        this.arrowsObject = arrowsObject;
        this.generatedArrows = -1;
    }

    /**
     * @brief Generates random arrows combination and stores it in generatedArrows
     * 
     * @returns String containing arrow to display
     */
     generateArrows() {
        //Prendre en compte le paramètre nbSimultaneousPresses : jsonSettings.arrowsSettings.nbSimultaneousPresses
        //let maxSimultaneousArrows = parseInt()
        //random entre 0 et maxSimultaneousArrows + 1
        //et boucler pour gen plusieurs fleches
            const randomIndex = Math.floor(Math.random() * 4);
            this.generatedArrows = this.arrowsObject[randomIndex];

        return this.generatedArrows;
    }
}
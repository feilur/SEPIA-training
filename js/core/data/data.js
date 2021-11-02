/**
 * @brief Contains shapes to generate
 */
const shapeObject = {
    triangle:   '<i class="fas fa-5x fa-play" style="transform: rotateZ(270deg);"></i>',
    square:     '<i class="fas fa-5x fa-square"></i>',
    circle:     '<i class="fas fa-5x fa-circle"></i>'
};

/**
 * @brief Contains operators to generate
 */
const operatorObject = {
    plus: '<i class="fas fa-2x fa-plus"></i>',
    minus: '<i class="fas fa-2x fa-minus"></i>',
    divide: '<i class="fas fa-2x fa-divide"></i>',
    multiplicate: '<i class="fas fa-2x fa-times"></i>'
};

const arrowsObject = [
    "Up",
    "Left",
    "Down",
    "Right"
]

var jsonSettings = {
    version: 1, //Increment version (integer only) ONLY if needed (adding attribute or major settings update)
    gameDuration: 50000,
    enableSound: true,
    shapesSettings: {
        period: 5000,
        numberOfApparition: 10
    },
    calculationSettings: {
        plusOperation:{
            member1:{
                min: 10,
                max: 999
            },
            member2:{
                min: 10,
                max: 999
            }
        },
        minusOperation:{
            member1:{
                min: 10,
                max: 999
            },
            member2:{
                min: 10,
                max: 999
            }
        },
        divideOperation:{
            member1:{   // Not the member 1 but the quotient of the dividing operation: member2 / X = quotient(member1 here)
                min: 3,
                max: 10
            },
            member2:{
                min: 10,
                max: 999
            }
        },
        multiplicateOperation:{
            member1:{
                min: 10,
                max: 999
            },
            member2:{
                min: 10,
                max: 999
            }
        },
        minPeriod: 10000,
        maxPeriod: 35000,
        numberOfApparition: 1,
        apparitionTime: 5000,
        inputTime: 10000
    },
    numbersSequenceSettings:{
        minNumber: 1,
        maxNumber: 9,
        period: 10000,
        numberOfApparition: 5
    },
    arrowsSettings:{
        minPercentToSuccess: 90,
        minPeriod: 2,
        maxPeriod: 5,
        nbSimultaneousPresses: 2
    }
}
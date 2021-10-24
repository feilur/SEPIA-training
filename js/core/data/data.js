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

const jsonSettings = {
    gameDuration: 60,
    shapesSettings: {
        member1:{
            min: 10,
            max: 9999
        },
        member2:{
            min: 10,
            max: 9999
        }
    },
    calculationSettings: {
        plusOperation:{
            member1:{
                min: 10,
                max: 9999
            },
            member2:{
                min: 10,
                max: 9999
            }
        },
        minusOperation:{
            member1:{
                min: 10,
                max: 9999
            },
            member2:{
                min: 10,
                max: 9999
            }
        },
        divideOperation:{
            member1:{
                min: 5,
                max: 20
            },
            member2:{
                min: 10,
                max: 9999
            }
        },
        multiplicateOperation:{
            member1:{
                min: 10,
                max: 9999
            },
            member2:{
                min: 10,
                max: 9999
            }
        }
    },
    numbersSequenceSettings:{

    },
    arrowsSettings:{

    }
}
function solve(rawNumber, firstOperation, secondOperation, thirdOperation, forthOperation, fifthOperation, sixthOperation){
    'use strict';
    
    function executeOperation(currentNumber, currentOperation){
        if (currentOperation === 'chop'){
            return currentNumber / 2;
        }else if (currentOperation === 'dice'){
            return Math.sqrt(currentNumber);
        }else if (currentOperation === 'spice'){
            return currentNumber + 1;
        }else if (currentOperation === 'bake'){
            return currentNumber * 3;
        }else if (currentOperation === 'fillet'){
           return currentNumber * 0.8;
        }else{
            return currentNumber;
        }
    }

    let number = parseInt(rawNumber, 10);

    number = executeOperation(number, firstOperation);
    console.log(number);

    number = executeOperation(number, secondOperation);
    console.log(number);

    number = executeOperation(number, thirdOperation);
    console.log(number);

    number = executeOperation(number, forthOperation);
    console.log(number);

    number = executeOperation(number, fifthOperation)
    console.log(number);

}
solve('32', 'chop', 'chop', 'chop', 'chop', 'chop')
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet')

/* if (firstOperation === 'chop'){
        number = number / 2;
    }else if (firstOperation === 'dice'){
        number = Math.sqrt(number);
    }else if (firstOperation === 'spice'){
        number += 1;
    }else if (firstOperation === 'bake'){
        number = number * 3;
    }else if (firstOperation === 'fillet'){
        number = number * 0.80;
    }
    console.log(number); */
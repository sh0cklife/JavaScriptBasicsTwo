function solve(fruit, weight, pricePerKilo){
    'use strict';
    const pricePerGram = pricePerKilo / 1000;
    const totalPrice = weight * pricePerGram;
    const weightInKilo = weight / 1000;

    console.log(`I need $${totalPrice.toFixed(2)} to buy ${weightInKilo.toFixed(2)} kilograms ${fruit}.`)
}
solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);
/*
Create a program that require numbers and verify the highest pair and the lowest unpair
*/

const { gets, print } = require('./Exercise2Exp');

let number = gets();
let higherPair = 0;
let lowestUnpair = 1000 ;

for (let i = 0; i<5;i++){
    if(number % 2 === 0 && (higherPair === null || number > higherPair)){
        higherPair = number;
    } else if (number % 2 != 0 && (lowestUnpair === null || number < lowestUnpair))
    {
        lowestUnpair = number;
    }
    number = gets();
}

print(higherPair);
print(lowestUnpair);
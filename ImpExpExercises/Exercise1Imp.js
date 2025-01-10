/*
A classroom contains 5 students and for each student a number from 1 to 100 was drawn.
Make a program that receives the 5 numbers drawn for the students and shows the highest number drawn.

Input data:

5
50
18
98
23

Output:
98
*/

const { gets, print } = require('./Exercise1Exp');

const numberOfClassmates = gets();
let valueHigher = 0;

for (let i = 0; i<numberOfClassmates;i++){
    const classmateNumber = gets();
    if(classmateNumber > valueHigher){
        valueHigher = classmateNumber;
    }
}

print(valueHigher);
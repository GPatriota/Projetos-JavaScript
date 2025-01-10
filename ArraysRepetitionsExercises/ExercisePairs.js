//create a program that is capable to verify a list and print the pairs numbers

const numbers = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i<numbers.length;i++){
    if (numbers[i] % 2 === 0){
        console.log("O numero " + numbers[i] + " é par.")
    } 
}
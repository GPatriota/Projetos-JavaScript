//Create a program that calculate a average and classficate a classmate

const { gets, print } = require('./Exercise1Exp');

let number = gets();

if (number >= 6 && number <= 10){
    print('Aprovado');
} else if (number >= 0){
    print ('Reprovado');
} else{
    print('Nota invalida');
}
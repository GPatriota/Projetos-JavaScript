// 2) BMI - Body Mass Index is a World Health Organization criterion 
// to indicate the weight condition of an adult person.

// BMI formula:
// bmi = weight / (height * height)

// Create an algorithm that, given the weight and height of an adult, displays their condition according to the table below.

// BMI in adults Condition:
// Below 18.5 Underweight;
// Between 18.5 and 25 Normal weight;
// Between 25 and 30 Overweight;
// Between 30 and 40 Obese;
// Above 40 Severe obesity;


const weight = 46;
const height = 1.59;

const imc = (weight / (height * height).toFixed(1));

if (imc>40) {
    console.log("Obesidade Grave");
} else if(imc>29.9){
    console.log("Obeso");
} else if (imc>24.9){
    console.log("Acima do peso");
} else if (imc> 18.4){
    console.log("Peso normal")
} else {
    console.log("Abaixo do peso");
}

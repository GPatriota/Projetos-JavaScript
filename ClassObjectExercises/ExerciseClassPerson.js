// Create a class to represent people. Each person will have the attributes name, weight, and height. 
// People should be able to tell their BMI value (BMI = weight / (height * height)). 
// Instantiate a person named José who weighs 70kg and is 1.75m tall and ask José to tell his BMI.

class Person{
    name;
    weight;
    height;

    constructor(name, weight, height){
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculateImc(){
        return this.weight/(this.height * this.height) ;
    }

    classificateImc() {
        const imc = this.calculateImc();
        if (imc < 18.5) {
            return ('Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return('Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return('Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return('Obeso');
        } else {
            return('Obesidade Grave');
        }
    }

}


const jose = new Person ('Jose', 100, 1.75);

const imcJose = jose.calculateImc;

console.log(jose.classificateImc(imcJose));
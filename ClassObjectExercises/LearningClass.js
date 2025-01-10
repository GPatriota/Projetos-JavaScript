class Person {
    name;
    age;
    yearOfBirth;

    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2022 - age;
    }

    describe() {
        console.log(`Meu nome é ${this.name} e minha idade é ${this.age}`);
    }
}

function comparePeople(p1, p2) {
    if (p1.age > p2.age) {
        console.log(`${p1.name} é mais velho(a) que ${p2.name}`);
    } else if (p2.age > p1.age) {
        console.log(`${p2.name} é mais velho(a) que ${p1.name}`);
    } else {
        console.log(`${p1.name} e ${p2.name} tem a mesma idade`);
    }
}

const vitor = new Person('Vitor', 25);
const renan = new Person('Renan', 30);

comparePeople(vitor, renan);

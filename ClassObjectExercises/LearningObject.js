const person = {
    name: 'Vitor J Guerra',
    age: 25,
    describe: function() {
        console.log("Meu nome é ${this.name) e minha idade é $(this.idade)");
    }
};

person.describe = function() {
    console.log(`My name is ${this.name}`);
};

person.describe();
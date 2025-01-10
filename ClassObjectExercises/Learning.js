const person = {
    name: 'Vitor J Guerra',
    age: 25,
    describe: function() {
        console.log("My name is ${this.name) and my age is $(this.idade}");
    }
};

person.describe = function() {
    console.log("My name is ${this.nome}");
};

person.describe();
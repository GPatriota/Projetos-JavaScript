// Constructor function for Animal
function Animal(type, sound) {
    this.type = type; 
    this.sound = sound;
  }
  
  // Adding a method to the prototype
  Animal.prototype.makeSound = function() {
    console.log(`${this.type} makes "${this.sound}"`);
  };
  
  // Adding another method to the prototype
  Animal.prototype.walk = function() {
    console.log(`${this.type} is walking.`);
  };
  
  // Creating instances
  const dog = new Animal("Dog", "Au Au");
  const cat = new Animal("Cat", "Miau miau");
  
  // Using the methods
  dog.makeSound(); 
  dog.walk(); 
  
  cat.makeSound();
  cat.walk(); 

  

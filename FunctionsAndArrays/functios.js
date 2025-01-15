// index.js

function function1() {
    console.log(this);
  }
  
  const function2 = () => {
    console.log(this);
  }
  
  const renan = {
    nome: 'Renan',
    function1,
    function2
  }
  
  //show the object
  renan.function1();

  //show nothing
  renan.function2();


//closure
//the function is guarding the value of x
  function sum(x) {
    return function(y) {
      return x + y;
    }
  }
  
  const partialSum = sum(10);
  
  console.log(partialSum(20));
  console.log(partialSum(30));
  console.log(partialSum(40));
const numbers = [3000.00, 500.00]; 
let i = 0;

function gets() {
  const value = numbers[i];
  i++;
  return value;
}

function print(text) {
  console.log(text);
}

module.exports = { gets, print };

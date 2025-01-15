function sum(x, y) {
  return x + y;
}

function multiplication(x, y) {
  return x * y;
}

function calculate(x, operacao, y) {
  console.log(operacao(x, y));
}

calculate(10, sum, 20);
calculate(10, multiplication, 20);

document.getElementById("btn1").addEventListener("click", () => {
  console.log("Clicou!");
});

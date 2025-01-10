// Create an algorithm to calculate the total amount to be paid for a product, 
// considering the regular price tag and the selected payment method.

// Use the codes from the table below to determine the chosen payment method 
// and perform the appropriate calculation.

// Payment method codes:

// - Debit payment, receives a 10% discount;
// - Cash payment or PIX, receives a 15% discount;
// - In two installments, regular price tag without interest;
// - More than two installments, regular price tag plus 10% interest;


let priceProduct = 199.90;
const methodPayment = "Credito";
const installments = 3;

if(methodPayment === "Debito"){
    priceProduct = priceProduct * 0.9;
} else if (methodPayment === "Dinheiro" || methodPayment === "Pix"){
    priceProduct = priceProduct * 0.85;
} else if (methodPayment === "Credito" && installments < 3){
} else{
    priceProduct = (priceProduct * 1.1).toFixed(2);
}

console.log(priceProduct);
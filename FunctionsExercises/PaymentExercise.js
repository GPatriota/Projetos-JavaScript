// Develop an algorithm that calculates the amount to be paid for a product, considering the normal price tag
// and the choice of payment method.
//
// Use the codes from the table below to read which payment method was chosen and perform the appropriate calculation.
//
// Code Payment Condition
//
//- A vista Débito, receives a 10% discount;
//- À vista no Dinheiro ou PIX, receives a 15% discount;
//- In two installments, normal price tag without interest;
// - Above two installments, normal price tag plus 10% interest;

function modifyPrice(price, multiplier){
    return (price * multiplier).toFixed(2);    
}

let priceProduct = 199.90;
const methodPayment = "Credito";
const installments = 3;

if(methodPayment === "Debito"){
    console.log(modifyPrice(priceProduct,0.9));
} else if (methodPayment === "Dinheiro" || methodPayment === "Pix"){
    console.log(modifyPrice(priceProduct,0.85));
} else if (methodPayment === "Credito" && installments < 3){
    console.log(modifyPrice(priceProduct,1));
} else{
    console.log(modifyPrice(priceProduct,1.1));
}

console.log(priceProduct);
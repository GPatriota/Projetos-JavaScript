// Make a program that calculates and prints the salary to be transferred to an employee.
// To perform the calculation, receive the gross salary value and the additional benefits.
// The salary to be transferred is calculated as follows:
//
// gross salary value - tax percentage according to the salary range + additional benefits
//
// To calculate the tax percentage, follow the rates:
//
// From R$ 0.00 to R$ 1100.00 - 5.00%
// From R$ 1100.01 to R$ 2500.00 - 10.00%
// Greater than R$ 2500.00 - 15.00%

const { gets, print } = require('./Exercise3Exp');


const grossSalary = gets(); 
const additionalBenefits = gets(); 


function calculateTax(salary) {
    if (salary <= 1100.00) {
        return salary * 0.05; 
    } else if (salary <= 2500.00) {
        return salary * 0.10;
    } else {
        return salary * 0.15; 
    }
}

const tax = calculateTax(grossSalary);
const netSalary = grossSalary - tax + additionalBenefits;


print(`Gross Salary: R$ ${grossSalary.toFixed(2)}`);
print(`Additional Benefits: R$ ${additionalBenefits.toFixed(2)}`);
print(`Tax: R$ ${tax.toFixed(2)}`);
print(`Net Salary to be Transferred: R$ ${netSalary.toFixed(2)}`);

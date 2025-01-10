// Create an algorithm that, given the 3 grades obtained by a student in a semester, calculates and prints
// their average and classification according to the table below.

// Average = (grade1 + grade2 + grade3) / 3;

// Classification: Average less than 5, failed;
//                 Average between 5 and 7, recovery;
//                 Average above 7, passed the semester.



const grade1 = 8;
const grade2 = 8;
const grade3 = 8;

const average = (grade1 + grade2 + grade3)/3;


if (average > 7){
    console.log("Aprovado");
} else if (average>5){
    console.log("Recuperação")
} else{
    console.log("Reprovado");
}
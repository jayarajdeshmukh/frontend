// input from user
let score =prompt("Enter your score (0-100):");
let grade;

if(score >=90 && score<=100){
    grade = "A";
} else if( score >= 80 && score <=89){
    grade = "B";
} else if( score >= 70 && score <=79){
    grade = "C";
} else if( score >= 60 && score <=69){
    grade = "d";
} else if( score >= 0 && score <=59){
    grade = "fail";
}
console.log("according to your score your grade is :", grade);
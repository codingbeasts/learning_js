/*
conditional statments

if else if

*/
var myName = 'dipanshu';
var civilStatus = 'single';

if (civilStatus === 'married'){
  console.log(firstName + " is married");
}
else console.log(firstName + " will hopefully get married soon!");


var isMarried = true;
if(isMarried){

  console.log(firstName + " is married");
}
else console.log(firstName + " will hopefully get married soon!");
/*
  boolean logic
  making conditional statements for a student percentage.
*/


var stuName = prompt("Enter Your Name");
var stuPer = prompt("Enter Your Percentage : ");

if (stuPer >= 90 && stuPer <= 100){
  console.log(stuName+" has scored Excellence");
}
else if (stuPer < 90 && stuPer >= 75){
  console.log(stuName+" has scored Distinction");
}
else if (stuPer < 75 && stuPer >= 60){
  console.log(stuName+" has scored First Division");
}
else if (stuPer < 60 && stuPer >= 50){
  console.log(stuName+" has scored Second Division");
}
else if (stuPer < 50 && stuPer >= 40){
  console.log(stuName+" has scored Third Division");
}
else {
  console.log(stuName+" got Failed");
}
/*
  ternary operator  and switch statement
*/


var myage=22;

myage >=18 ? console.log(myName+" is Eligible for Voting") : console.log(myName+" is Not Eligible for Voting");


//taking percentage example for swich statements
stuPer=62;
switch(true){
  case stuPer >= 90 && stuPer <= 100:
  console.log(stuName+" has scored Excellence");
  break;
  case stuPer < 90 && stuPer >= 75:
  console.log(stuName+" has scored Distinction");
  break;
  case stuPer < 75 && stuPer >= 60:
  console.log(stuName+" has scored First Division");
  break;
  case stuPer < 60 && stuPer >= 50:
  console.log(stuName+" has scored Second Division");
  break;
  case stuPer < 50 && stuPer >= 40:
  console.log(stuName+" has scored Third Division");
  break;
  default:
  console.log(stuNam+" got Failed");
}

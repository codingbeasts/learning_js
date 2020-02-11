//coding challenge 1

/*
Dipanshu and Jatin are typing to compare their BMI (body mass index),
which is calculated using the formula:
BMI = mass/height^2 = mass /(height*height).
(mass in kg and height in meter).

1. Store Dipanshu's and Jatin's mass and height in variables.
2. Calculate both their BMIs.
3. Create a boolean variable containing information about whether Dipanshu
has a higher BMI than Jatin.

4. Print a string to the console containing the variable from step 3.
(Something like "Is Dipanshu's BMI higher than Jatin's? true").

*/


// coding start from here



var mass={'dipanshu':95,'jatin':75},height={'dipanshu':1.68,'jatin':1.57},bmi={};

// console.log(mass.dipanshu);
// way of initialize an array object value.
// mass.dipanshu=160;
// console.log(mass.dipanshu);

//storing values in array
// mass['dipanshu'] = prompt("Enter Dipanshu mass(kg)");
// height['dipanshu']=prompt("Enter Dipanshu height(m)");
//
//
// mass['jatin'] = prompt("Enter Jatin mass(kg)");
// height['jatin'] = prompt("Enter Jatin height(m)");


bmi['dipanshu'] = mass.dipanshu / (height.dipanshu^2);
bmi['jatin'] = mass.jatin / (height.jatin^2);

// console.log(bmi.dipanshu,bmi.jatin);

var greaterBMI= bmi.dipanshu > bmi.jatin;

console.log("Is Dipanshu's BMI higher than Jatin's? "+greaterBMI);

//another way of storing array values
// mass.dipanshu=mass.jatin;
// console.log(mass.dipanshu);

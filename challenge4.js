/*
  coding challenge 4

Let's remember the first coding challenge where Jatin
and Dipanshu compared their BMIs. Let's now implement
the same functionality with objects and methods.

1. For each of them, create an object with properties
for their full name, mass and height.

2. Then, add a method to each object to calculate the BMIs.
Save the BMIs to the object and also return it from the method.

3. In the end, log to console who's BMI is higher, together with the
full name and the respective BMIs. Don't forget they might have the same BMI.

4. BMI = mass / height ^2.(mass in kg and height in meter).

*/


dipanshu = {
  flName:'dipanshu shora',
  height:1.88,
  mass:95,
  calcBMI: function(){
    return this.bmi = this.mass / (this.height * this.height);
  }
};

jatin = {
  flName:'jatin ahuja',
  height:1.73,
  mass:80,
  calcBMI: function(){
    return this.bmi = this.mass / (this.height * this.height);
  }
};


var bmiHigher = function(){
  if(dipanshu.calcBMI() > jatin.calcBMI()){
    return dipanshu.flName+" has higher BMI than "+jatin.flName+" with "+dipanshu.bmi;
  }
  else if(dipanshu.calcBMI() === jatin.calcBMI()){
    return dipanshu.flName+" and "+jatin.flName+" has same BMIs";
  }
  else{
    return jatin.flName+" has higher BMI than "+dipanshu.flName+" with "+jatin.bmi;
  }
};
console.log(bmiHigher());
console.log(dipanshu);
console.log(jatin);

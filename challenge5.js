/*
  coding challenge 5

this time, Jatin and his family went to 5 different restaurants
. The bills were $124, $48, $268, $180 and $42.

Jatin likes to tip 20% of the bill when bill is less than $50,
15% when bill is between $50 and $200, and 10% if the bill is
more than $200.


Implement a tip calculator using objects and loop:

1. Create an object with an array for the bills
values.

2. Add a method to calculate the tip.

3. This method should include a loop to iterate over all the
paid bills and do the tip calculations.

4. As an ouput, create  1:) a new array containing all tips.
                        2:) an containing final amounts (bill+tip).(hint: start with two empty arrays.)
                        as properties and then fill them up in the loop.



Extra :::::::::::::::::::::::::::::::::::::::::::::

Dipanshu's family also went on a holiday, going to 4 different restaurants. The bills
were $77, $375, $110 and $45.

Dipanshu likes to tip 20% of the bill when the bill is less than $100, 10% when the bill
is between $100 and $300, and 25% when the bill is more than $300.(different from Jatin).


5. Implement using the same functionalities as before, this time using Dipanshu's tipping rules.

6. Create a function (not a method) to calulate the average of a given array of tips.
    (Hint: Loop over the array, and in each iteration store the current sum in a variables
    {starting from 0}. After you have the sum of the array, divide it by the number of elements
    in it {that's how you calculate the average}).

7. Calculate the average tip for each family.

8. Log to the console which family paid the highes tip on average.


*/


var jatin={
    fName:"jatin ahuja",
    bills:[124,48,268,180,42],
    calcTip:  function(){
      this.tip=[];
      this.pAmt=[];
      for (var i=0;i<this.bills.length;i++){
        var bill=this.bills[i],perC;
        if(bill < 50){
          perC=0.20;
        }
        else if(bill > 50 && bill < 200){
          perC=0.15;
        }
        else{
          perC=0.10;
        }
        this.tip[i] = bill * perC;
        this.pAmt[i] = bill + this.tip[i];
      }
      return 0;
    }
};

var dipanshu={
  fName:"dipanshu shora",
  bills:[77,375,110,45],
  calcTip: function(){
    this.tip=[];
    this.pAmt=[];
    for (var i=0;i<this.bills.length;i++){
      var bill=this.bills[i],perC;
      if(bill < 100){
        perC=0.20;
      }
      else if(bill > 100 && bill < 300){
        perC=0.10;
      }
      else{
        perC=0.25;
      }
      this.tip[i] = bill * perC;
      this.pAmt[i] = bill + this.tip[i];
    }
    return 0;
  }
};

function calcAverage(tips){
  var sum=0;
  for(i=0;i<tips.length;i++){
    sum += tips[i];
  }
  return sum/tips.length;
}

jatin.calcTip();
jatin.average=calcAverage(jatin.tip);
dipanshu.calcTip();
dipanshu.average=calcAverage(dipanshu.tip);

if(jatin.average > dipanshu.average){
  console.log("%s paid more tips than %s",jatin.fName,dipanshu.fName);
}
else if(jatin.average === dipanshu.average){
  console.log("%s and %s paid same amount of tips",jatin.fName,dipanshu.fName);
}
else{
  console.log("%s paid more tips than %s",dipanshu.fName,jatin.fName);
}

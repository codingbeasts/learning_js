/*
  coding challenge 3
  Dipanshu and his family went on a holiday and went to 3 different
  restaurants. The bill were
  $124, $48 and $268.

  To tip the waiter a fair amount, Dipanshu created a simple tip calculator
  (as a function). He likes to tip 20% of the bill is less than $50,
  15% when bill is between $50 and $200, and 10% if the bill is more than
  $200.

  In the end, Dipanshu would like to have 2 arrays:
  1) Containing all three tips (one for each bill).
  2) Containing all three final paid amounts (bill + tip).


*/

function calcTip(){
  for(i=0;i<=bill.length-1;i++){
    if(bill[i] < 50){
      tip[i] = bill[i] * 20/100;
      tAmt[i] = bill[i] + tip[i];

      console.log('Dipanshu paid Tip of $'+tip[i]+' and Total Amount of $'+tAmt[i]);
    }
    else if(bill[i] >= 50 && bill[i] <= 200){
      tip[i] = bill[i] * 15/100;
      tAmt[i] = bill[i] + tip[i];
      console.log('Dipanshu paid Tip of $'+tip[i]+' and Total Amount of $'+tAmt[i]);
    }
    else{
      tip[i] = bill[i] * 10/100;
      tAmt[i] = bill[i] + tip[i];
      console.log('Dipanshu paid Tip of $'+tip[i]+' and Total Amount of $'+tAmt[i]);
    }
  }
}

var bill=[124,48,268,40],tip=[],tAmt=[];
calcTip();

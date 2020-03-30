/*
  closures in javascript
*/
function makeAdder(x){
  return function(y){
    return x+y;
  };
}


var add5 = makeAdder(5);

var add10 = makeAdder(10);

console.log(add5(2));
console.log(add10(2));



function retirement(retirementAge){
  var a = " year left until retirment";
  return function(yearOfBirth){
    var age = 2020-yearOfBirth;
    console.log( (retirementAge-age) + a );
  }
}

var retire_India = retirement(60);

retire_India(1997);

/*another way of calling <high order functions>
  retirement(60)(1999);
*/


function interviewQuestion(job){
  return function(name){
    if (job === "programmer"){
      console.log(name + " is a "+job);
    }
    else if (job === "designer"){
      console.log(name + " is a "+job);
    }
    else{
      console.log(name + " is a berozgar");
    }
  }
}


var programmer = interviewQuestion("programmer");
programmer("dipanshu");

var designer = interviewQuestion("designer");
designer("jatin");

var developer = interviewQuestion();
developer("lakshay");

/*
  hoisting

*/

var b = callme('Jatin');
callme('Deepanshu');
function callme(name){
  console.log(name+" tried to call you");
}

callme('Dipanshu');


//function expression



var callhim = function(name){
  console.log(name + " call him now");
};


callhim("Robin");

// variables


var age=22;

console.log(age);

function callage(){
  console.log(age);
  var age=20;
  console.log(age);
}
callage();
// lexical scoping

var a='hello';

first();

function first(){
  var b='hi';
  second();

  function second(){
    var c='hey';
    console.log(a,b,c);
    // third();
  }
}
//
// function third(){
//   var d='dipanshu';
//   console.log(a,b,c,d);
// }


var dipanshu = {
  name:"dipanshu shora",
  yob:1997,
  calculateAge: function(){
    console.log(this);
    console.log(2020-this.yob);
    // function innerfunction(){
    //   console.log(this);
    // }
    // innerfunction();
  }
};

dipanshu.calculateAge();


var jatin = {
  name:"jatin ahuja",
  yob:1996
};

jatin.calculateAge = dipanshu.calculateAge;

jatin.calculateAge();

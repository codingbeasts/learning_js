/*
  interitance in javascript using prototype;

*/

//
// object notation
// var dipanshu = {
//   name:"Deepanshu",
//   yob:1997,
//   occupation:"Programmer"
// };

// Constructor function
var Developer = function(name,yob,occupation){
  this.name = name;
  this.yob = yob;
  this.occupation = occupation;
}
// protoype method or function using Constructor function
Developer.prototype.calcAge = function () {
  console.log(2020-this.yob);
};
// prototype properties using Constructor function
Developer.prototype.lastname = "shora";


//creating new objects using

var dipanshu = new Developer("dipanshu",1997,"programmer");

var robin = new Developer("robin",1998,"mechanic");

var jatin = new Developer("jatin",1997,"manager");

// calling prototpes methods or function with their associated object
dipanshu.calcAge();
robin.calcAge();
jatin.calcAge();
// logging
console.log(dipanshu.name+" "+dipanshu.lastname);
console.log(robin.name+" "+dipanshu.lastname);

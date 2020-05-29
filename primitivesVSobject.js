/*
primitives vs objects in javascript

*/


var a=10;

var b=a;
a=20;
console.log(a);
console.log(b);

var obj1 = {
  name:"dipanshu",
  age:22
};

var obj2 = obj1;

obj2.name="deepanshu";


console.log(obj1.name,obj2.name);


function callobjects(){
 a=30;
 obj1.name="jatin";
}
callobjects();
console.log(a,  b);

console.log(obj1.name,obj2.name);

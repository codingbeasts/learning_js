/*
  arrays in javascript
*/

var a=[10,20,30];

console.log(a[0]+a[1]+a[2]);



var n=[1,2,3];

n.indexOf(3) === -1 ? console.log('value present in array') : console.log('not present in array');


// object and properties in javascript

var dipanshu={
    firstName:"dipanshu",
    lastName:"shora",
    married:false,
    loveSomeone:true,
    yearBorn:1997,
    occupation:"programmer",
    calcAge: function(){
      this.age = 2020 - this.yearBorn;
    }
};
dipanshu.calcAge();
console.log(dipanshu);

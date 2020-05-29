//
// operators in javascript


var year,yearDipanshu,yearDeepanshu,now,nowAgedipanshu,nowAgedeepanshu;

now = 2019;

nowAgedipanshu=22;
nowAgedeepanshu=24;
// math operators
yearDipanshu = now - nowAgedipanshu;
yearDeepanshu = now - nowAgedeepanshu;

console.log(yearDipanshu);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


//logical operators

var dipanshuOlder = yearDipanshu > yearDeepanshu;
console.log(dipanshuOlder);


//typeof operators

console.log(typeof yearDipanshu);
console.log(typeof nowAgedipanshu);
console.log(typeof 'dipanshu');
var xyz;
console.log(typeof xyz);

//operators precedence

var isbirth = now - nowAgedipanshu == 1997;
console.log(isbirth);


var s1=80,s2=34,s3=40,s4=69,s5=56,average;
average = (s1+s2+s3+s4+s5)/5;
console.log(average);

//multiple assignments

var x,y;

x=y=(3+5)*4-6;
console.log(x,y);


//assignment operators

x *=2;
console.log(x);

--x;
console.log(x);
--x;
console.log(x);

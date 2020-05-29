/*
  bind, call and apply in Javascript
*/


var dipanshu={
  name: "Dipanshu",
  age: 22,
  job: 'programmer',
  presentation: function(style,timeOfDay){
    if(style === "casual"){
      console.log("Hey What\"s up? I\'m "+this.name+" I\'m a "+this.job+" and My age is "+this.age+". Have a nice "+timeOfDay+".");
    }
    else if (style === "formal"){
      console.log("Good "+timeOfDay+" , Ladies and Gentlemen! I\'m "+this.name+" I\'m a "+this.job+" and My age is "+this.age+".");
    }
  }
};

dipanshu.presentation("formal","Morning");

var jatin={
  name: "Jatin",
  age: 22,
  job: "Backend Manager"
};


dipanshu.presentation.call(jatin,"casual","afternoon");


////////////////////////////////////////////////////////////////////////////////
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"



/////////////////////////////////////////////////////////////
/*
  Apply method in javascript
*/


//dipanshu.presentation.apply(jatin,["formal","Night"]);


var dipanshuFormal = dipanshu.presentation.bind(jatin,"formal");

dipanshuFormal("Night");

dipanshuFormal("Afternoon");

/////////////////////////////////////////////////////////////////////////////////

var years=[1961,1969,1997,2001];
// made a genric call function which receive arguments and arguments as function
function calc(arr,fn){
  var result=[];//store calcAges results
  for(var i=0;i<arr.length;i++){
    result.push(fn(arr[i]));// storing ages in age Array and calling agecalulate function
    // result[i]=fn(arr[i]); same as push method
  }
  return result;
}

// calculate age via function
function agecalulate(el){
  return 2020-el;
}

// check whether age is greater than 18 or not
function isFullAge(limit,el){
    return el >=limit;
}

var ages = calc(years,agecalulate);

var japanAge = calc(ages,isFullAge.bind(this,20));

console.log(ages);
console.log(japanAge);



////////////////////////////////////////////////////////////////////////


const module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// expected output: 42

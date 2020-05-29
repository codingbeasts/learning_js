/*
  passing function as arguments

*/


var years=[1961,1969,1997,1999];
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
function isFullAge(el){
    return el >=18;
}

// calculate max heart rate of person by their respective age
function maxHeartRate(el){
  if(el >=18 && el <=81){
    return Math.round(206.9-(0.67*el));
  }
  else{
    return -1;
  }
}


var ages = calc(years,agecalulate);
var fullages = calc(ages,isFullAge);
var heartRate = calc(ages,maxHeartRate);

console.log(ages,"\n",fullages,"\n",heartRate);

/*
  calculate age and retirement of a person
  and use one function for calculate age and
  other function for retirement and print name of the person too.
*/

function calcAge(birthyear){
 return 2020-birthyear;
}

function calcRetirement(year, name){
  var age = calcAge(year);
  var retirement = 60 - age;

  if(retirement > 0){
    console.log(name+" retires in "+retirement+" years.");
  }
  else{
    console.log(name+" is already retired.");
  }
}

// calcRetirement(1997,'Dipanshu');
// calcRetirement(1961,'Nandkishore');


// functions and expressions


var occupation = function(job, name){
  switch (job) {
    case 'Programmer':
      return name + " is doing " + job + " job for living.";
      break;
    case 'Entrepreneur':
      return name + " is doing "+ job + " in a Multinational Company.";
      break;
    case 'Designer':
      return name + " is making very good "+ job +" templates";
      break;
    case 'Retired':
      return name + " is "+ job +" now";
      break;
    default:
      return name + "doing Something Good";
  }
}

console.log(occupation('Entrepreneur','Lakshay'));
console.log(occupation('Programmer','Dipanshu'));
console.log(occupation('Designer','Jatin'));
console.log(occupation('Retired','Mike'));

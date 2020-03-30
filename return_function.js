/*
  function return function in js know as high order function
*/


function interviewQuestion(job){
  if(job === "programmer"){
     return function (name){
       console.log(name +" is a "+job);
     };
  }
  else{
    return function (name){
      console.log(name +" is a berozgar");
    }
  };
}

interviewQuestion("programmer")("dipanshu");


// var question = interviewQuestion("programmer");
//
// question("dipanshu");

/*
  Loops and iteration in javascript.
*/


// for loop
for(var i=0; i<10;i++){
  console.log(i);
}

// while loop

var i=0;
while(i <= 10){
  if(i%2 === 1){
    console.log("Odd : "+i);
  }
  i++;
}

var dipanshu=[1997,"dipanshu","shora",22,false,'programmer',6.2];

for(var i=0; i<dipanshu.length;i++){
  if(typeof dipanshu[i] !== "string"){
       continue;

  }
  console.log(dipanshu[i]);
}

for(var i=dipanshu.length-1; i>=0;i--){
  console.log(dipanshu[i]);
}

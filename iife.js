/*
  immediately invoked function expression

*/

(function(luck){
  var score = Math.random()*10;
  console.log(score >=5-luck);
})(2);

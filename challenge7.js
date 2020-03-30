/*
  coding challenge 6

  Let's build a fun quize game in the console......

  1. Build a function constructor called Question to describe a question.
    A question should include:
    a:) question itself.
    b:) the answer from which the player can choose the correct one(choose an  adequate data structure here, array, object).
    c:) correct answer (I would use a number for this).

  2. Create a couple of questions using the constructor.

  3. Store them all inside an array.

  4. Select one random question and log it on console, together with possible answers (each question should have a number) (Hint: write
      a method for the Question objects for this task).

  5. Use the 'prompt' function to ask the user for correct answer. The user should input the number of the correct answer such as you displayed it on
      Task 4.

  6. Check if the answer is correct and print to the console whether the answer is correct or not (Hint: Write another method for this.)

  7. Suppose this code would be a plugin for other programmers to use in their code. So Make sure that all your code is private and doesn't interfare with other
      programmers code (Hint: we learned a special technique to do exactly that).


  Expert Level:

  8. After you display the result, display the next random question, so the game never ends (Hint: write a function for this and call it right after displaying the
      result).

  9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case,
      DON't Call the function from Task 8.

  10. Track the user's score to make the game more fun! So each time an anwser is correct, add 1 point to the score (Hint: I'm going to use the power of closures for
      this, but you DON't have to, just do this with tools you feel more comfortable at this point).

  11. Display the score in the console. Use yet another method for this.

*/

(function(){
  function Question(question,answer,correct){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
  }

  Question.prototype.askQuestion = function(){
    console.log(this.question);
    for(i=0;i<this.answer.length;i++){
      console.log("Option %d : "+this.answer[i],i);
    }
  }

  Question.prototype.checkAnswer = function(ans){
    if(parseInt(ans) === this.correct){
      console.log("Right Answer");
      score+=1;
      console.log("Current Score : "+score+"\n\n");
    }
    else{
      console.log("Wrong Answer. retry!");
      score-=1;
      console.log("Current Score : "+score+"\n\n");
    }
  }


  var q1 = new Question("which is the most demanded languages used for game developement?",["Java","C/C++","Python","C#"],1);

  var q2 = new Question("which car is the favourite of dipanshu shora?",["Audi R8","BMW M3","Mercedes S63 AMG coupe","Koenigsegg Regera"],2);

  var q3 = new Question("what kind of developer dipanshu shora wants to be?",["Android Developer","Web-Developer","IOS Developer","Full Stack Developer"],3);

  var q4 = new Question("which languages is currently studying dipanshu shora",["js","java","c/c++","All of the above"],3);

  var allQuestion = [q1,q2,q3,q4];

  var score=0;
  function callQuestion(){
    var nQ = Math.floor(Math.random()*allQuestion.length);

    allQuestion[nQ].askQuestion();
    var userAns = prompt("Enter the correct using option number");
    allQuestion[nQ].checkAnswer(userAns);
    if(userAns==="exit"){

    }
    else{
      callQuestion();
    }
  }

  callQuestion();
})();

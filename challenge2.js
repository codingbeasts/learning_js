/*
coding challenge 2

Jatin and Dipanshu both play cricket in different teams.
In the latest 3 games, Jatin's team scored 89, 120 and 103 while
Dipanshu's team scored 116, 94 and 123 points.



1.  Calculate the average score for each team.

2.  Decide which teams wins in average(highest average score), and print the winner
    to console. Also include the average score in the output.

3.  Then change the scores to show different winnners. Don't forget to take into
    account there might be a draw (the same average score).

4.  Extra: Mary also plays cricket, and her team scored 97, 134 and 105 points.
    Like before, log the average winner to the console. HINT: you will need the &&
    operator to take decision.

5.  Keep in mind there might be draws.
*/

// Part 1
var jatinScores=[89,120,127],dipanshuScores=[116,94,129],average={};

//using function for easy use
function winner(){
  average.jatin = (jatinScores[0]+jatinScores[1]+jatinScores[2]) / 3;
  average.dipanshu = (dipanshuScores[0]+dipanshuScores[1]+dipanshuScores[2]) / 3;
  if(average.jatin > average.dipanshu){
    console.log('Jatin is winner of match with ',average.jatin);
  }
  else if(average.jatin === average.dipanshu){
    console.log('draw');
  }
  else{
    console.log('Dipanshu is winner of match with ', average.dipanshu);
  }
}

winner();

/*
  Part 2
changed the scores
*/
//
// jatinScores=[66,98,58];
// dipanshuScores=[88,45,89];
//
// winner();

/*
  Part 3
  intro of mary scores
*/

var maryScores=[97,134,105];

function winnerof(){

    average.mary=(maryScores[0]+maryScores[1]+maryScores[2]) / 3;
    console.log("jatin : %f , dipanshu: %f and mary: %f",average.jatin,average.dipanshu,average.mary);

    if(average.mary > average.jatin && average.mary > average.dipanshu && average.jatin !== average.dipanshu){
      console.log('Mary is winner of match with ',average.mary);
    }
    else if(average.jatin > average.mary && average.jatin > average.dipanshu && average.mary !== average.dipanshu){
      console.log('Jatin is winner of match with ',average.jatin);
    }
    else if(average.dipanshu > average.mary && average.dipanshu > average.jatin && average.mary !== average.jatin){
      console.log('Dipanshu is winner of match with ',average.dipanshu);
    }
    else if(average.mary === average.jatin && average.mary > average.dipanshu){
      console.log('Mary and Jatin got tie but Dipanshu got lose');
    }
    else if(average.mary === average.jatin && average.mary < average.dipanshu){
      console.log('Mary and Jatin got tie but Dipanshu got won');
    }
    else if (average.dipanshu === average.mary && average.dipanshu > average.jatin){
      console.log('Dipanshu and mary got tie but Jatin got lose');
    }
    else if (average.dipanshu === average.mary && average.dipanshu < average.jatin){
      console.log('Dipanshu and mary got tie but Jatin got won');
    }
    else if (average.jatin === average.dipanshu && average.jatin > average.mary){
      console.log('Jatin and Dipanshu got tie but Mary got lose');
    }
    else if (average.jatin === average.dipanshu && average.jatin < average.mary){
      console.log('Jatin and Dipanshu got tie but Mary got won');
    }
    else{
      console.log('draw');
    }
  }

winnerof();

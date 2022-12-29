var readlineSync=require('readline-sync');
var score = 0;
var userName = readlineSync.question("what is your name ");
console.log("welcome " +userName+ " do you khow sudarshan");

//function

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("RIGHT!");
    score = score + 1;
  } else {
    console.log("WRONG!");
    score = score - 1;
  }
  console.log("your score is :",score);

}

var questions=[{question:"where do i live ",answer:"gulbarga"},{question:"what is my favorite colour ",answer:"black" },{question:"who is my favorite super hero ",answer:"iron man"},
{question:"which movie do i mostly like?",answer:"end game"},
{question:"which laptop do i have..?",answer:"dell"}]

for (i=0;i<questions.length;i++){
  var currentquestion=questions[i];
  play(currentquestion.question,currentquestion.answer)
}

console.log("your total score is : ",score)
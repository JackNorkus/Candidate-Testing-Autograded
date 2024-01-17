const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 

let candidateName = ""; // DONE: defined candidateName as the empty string "" //

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ""; // DONE: all three variables initialized //


//TODO: Variables for Part 2
let questions;
let correctAnswers;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question("What is your name? "); // DONE: defined the function askForName(), //
                                                         // which asks the question "What is your    //
                                                         // name?" and stores the user input into    //
                                                         // the variable candidateName               //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  candidateAnswer = input.question(question); // DONE: defined the function askQuestion(), which     //
                                              // asks the question stored in the variable question,  //
                                              // and stores the user input into the variable         //
                                              // candidateAnswer                                     //

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  if (correctAnswer === candidateAnswer) {
    console.log("Correct!");
  } else {
    console.log("Sorry, that is incorrect.");
  } // DONE: used a conditional statement to decide whether the candidate's answer was correct //


  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //

   console.log("Hello, " + candidateName + "!"); // DONE: wrote a console.log statement, which   //
                                                 // prints a concatenated string to the terminal //
                                                 // greeting the user by their name              //

  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
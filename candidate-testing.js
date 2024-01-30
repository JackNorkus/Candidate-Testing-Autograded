const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName //   

let candidateName = ""; // DONE: defined candidateName as the empty string "" //

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = ""; // DONE: all three variables initialized //


//TODO: Variables for Part 2
let questions = ["Who was the first American woman in space? ",
                 "True or false: 5 kilometer == 5000 meters? ",
                 "(5 + 3)/2 * 10 = ? ",
                 "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
                 "What is the minimum crew size for the ISS? "];
let correctAnswers = ["Sally Ride",
                      "true",
                      "40",
                      "Trajectory",
                      "3"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //

  candidateName = input.question("What is your name? "); // DONE: defined the function askForName(), //
                                                         // which asks the question "What is your    //
                                                         // name?" and stores the user input into    //
                                                         // the variable candidateName               //

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

  for (let i = 0; i < questions.length; i++) {
    candidateAnswer = String(input.question(questions[i]));
    candidateAnswers.push(candidateAnswer);
  }
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0; //variable which stores the candidate's grade

  for (let i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      console.log(`You answered: ${candidateAnswers[i]}, which is the correct answer.`);
      grade += 20;
    } else {
      console.log(`You answered: ${candidateAnswers[i]}, but the correct answer was ${correctAnswers[i]}.`);
    }
  }

  if (grade >= 80){
    console.log(`Your grade was ${grade}%. Nice job! You passed!`)
  } else {
    console.log(`Your grade was ${grade}%. Better luck next time!`)
  }

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
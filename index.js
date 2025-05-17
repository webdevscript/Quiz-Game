let questions = [
  {
    category: "easy",
    question: "What is 2+2?",
    choices: ["4", "I don't know", "5"],
    answer: "4",
  },
  {
    category: "hard",
    question: "How many countinents are there?",
    choices: ["5", "7", "6"],
    answer: "7",
  },
  {
    category: "medium",
    question: "Are Girraffs wild animals?",
    choices: ["Yes", "No", "Maybe"],
    answer: "Yes",
  },
  {
    category: "hard",
    question: "What is the result of 2+2/2?",
    choices: ["4", "6", "3"],
    answer: "3",
  },
  {
    category: "easy",
    question: "Can a dog fly?",
    choices: ["Yes", "Maybe", "No"],
    answer: "No",
  },
  {
    category: "medium",
    question: "Where are the piramids of Giza?",
    choices: ["Turkye", "Italy", "Egypt"],
    answer: "Egypt",
  },
];

const getRandomQuestion = (questions) => {
  let randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
};

const getRandomComputerChoice = (choices) => {
  let randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

const getResults = (question, choice) => {
  if (question.answer === choice) {
    return "The computer's choice is correct!";
  } else {
    return (
      "The computer's choice is wrong. The correct answer is: " +
      question.answer
    );
  }
};

const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
const result = getResults(randomQuestion, computerChoice);

console.log("Question:", randomQuestion.question);
console.log("Choices:", randomQuestion.choices);
console.log("Computer chose:", computerChoice);
console.log(result);

const DATA_SET = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "What is the capital of Germany?",
    options: ["Berlin", "Munich", "Hamburg", "Cologne"],
    answer: "Berlin",
  },
  {
    question: "What is the capital of Italy?",
    options: ["Rome", "Milan", "Naples", "Turin"],
    answer: "Rome",
  },
  {
    question: "What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Seville", "Valencia"],
    answer: "Madrid",
  },
  {
    question: "What is the capital of Portugal?",
    options: ["Lisbon", "Porto", "Faro", "Coim"],
    answer: "Lisbon",
  },
];

let index = 0;


// Initializes Quiz For the first Time when page is loaded
function startQuiz() {
  index = 0; // Set index = 0 when quiz is reset.
  displayQuestion(); // display first question that is on index 0
}

function displayQuestion() {
  const question_obj = DATA_SET[index];

  const question_el = document.querySelector('#question');
  question_el.innerHTML = question_obj["question"]; // change question innerhtml

  const option_container = document.querySelector(".options");
  option_container.innerHTML = ""; // empty previous options

  const options_data = question_obj.options; // get options array from dataset

  // iterate over options array so options can be displayed
  for (let i = 0; i < options_data.length; i++) {
    const text = options_data[i];
    options(text, i);
  }
}

function options(text, i) {
  const option_container = document.querySelector(".options");

  const input_el = document.createElement("input");
  const label_el = document.createElement("label");

  const id = `option_${i}`;

  input_el.setAttribute("type", "radio");
  input_el.setAttribute("name", "option");
  input_el.setAttribute("id", id);
  input_el.setAttribute("value", text);

  label_el.setAttribute("for", id);
  label_el.innerHTML = text;

  option_container.append(input_el, label_el); // append created input and label fields
}

function handleSubmit(e) {
  e.preventDefault();

  const user_answer = e.target.option.value; // get user selected answer value

  const ques_obj = DATA_SET[index]; // get question object on current index

  if(ques_obj.answer === user_answer) {
    // add correct class to label element
  }
  else {
    // add incorrect class to label element
  }

  setTimeout(() => {
    index++; // increment current index so, next question can be displayed
    displayQuestion(); // display next question
  }, 2000);
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);


startQuiz(); // initialize quiz for first time when page is loaded

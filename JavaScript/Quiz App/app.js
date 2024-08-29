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

  // display question text
  const question_el = document.querySelector('#question');
  question_el.innerHTML = question_obj["question"]; // change question innerhtml

  const option_container = document.querySelector(".options");
  option_container.innerHTML = ""; // emptying previous options

  const options_data = question_obj.options; // get options array from dataset

  // iterate over options array so options can be displayed
  for (let index = 0; index < options_data.length; index++) {
    const text = options_data[index];
    options(text, index);
  }
}

function options(text, i) {
  const option_container = document.querySelector(".options");

  const input_el = document.createElement("input");
  const label_el = document.createElement("label");

  const id = `option_${i}`; // literal string

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

  
  const ques_obj = DATA_SET[index]; // get question object on current index
  
  const original_answer = ques_obj.answer;
  const user_answer = e.target.option.value; // get user selected answer value

  if(original_answer === user_answer) {
    // add correct class to label element
  }
  else {
    // add incorrect class to label element
  }

  setTimeout(() => {
    // bug: index must not exceed
    index++; // increment current index so, next question can be displayed
    if (index < DATA_SET.length) {
      displayQuestion(); // display next question
    }
    else {
      startQuiz()
    }
  }, 1000);
}

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);


startQuiz(); // initialize quiz for first time when page is loaded

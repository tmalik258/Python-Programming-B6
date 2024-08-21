const questions = [
  {
    question: "1. What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Rome"],
    answer: "Paris",
  },
  {
    question: "2. What is the capital of Germany?",
    options: ["Berlin", "Munich", "Hamburg", "Cologne"],
    answer: "Berlin",
  },
  {
    question: "3. What is the capital of Italy?",
    options: ["Rome", "Milan", "Naples", "Turin"],
    answer: "Rome",
  },
  {
    question: "4. What is the capital of Spain?",
    options: ["Madrid", "Barcelona", "Seville", "Valencia"],
    answer: "Madrid",
  },
  {
    question: "5. What is the capital of Portugal?",
    options: ["Lisbon", "Porto", "Faro", "Coim"],
    answer: "Lisbon",
  },
];


let index = 0;
let score = 0;

function startQuiz () {
    index = 0;
    score = 0;

    displayQuestion();
}

function displayQuestion () {
    deleteOptions();
    const question_text = questions[index].question;
    const options = questions[index].options;

    const q_element = document.getElementById('question');
    q_element.innerText = question_text;

    
    for (let i = 0; i < options.length; i++) {
        displayOptions(i + 1, options[i]);
    }
}

function displayOptions (i, value) {
    const options_container = document.querySelector('.options');

    const input_el = document.createElement('input');
    input_el.setAttribute('type', 'radio');
    input_el.setAttribute('name', 'option');
    input_el.setAttribute('value', value);
    input_el.setAttribute('id', `option_${i}`); // string literal

    const label_el = document.createElement('label');
    label_el.setAttribute('for', `option_${i}`);
    label_el.innerHTML = value;

    options_container.append(input_el, label_el);
}

function deleteOptions () {
    const options_container = document.querySelector('.options');
    
    while(options_container.firstChild) {
        child = options_container.firstChild;

        options_container.removeChild(child);
    }
}


startQuiz();
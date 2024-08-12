// let bonus = [23, 5, 40, 10];

// bonus.forEach((element, index) => {
//     console.log(index, element);
// });

const printElement = (element, index) => {
    console.log(element, index);
}

printElement('hello', 0);

// bonus.forEach(printElement);

const printCopy = printElement; // assigning a function to another variable

printCopy('hi', 100);

printElement('no', 2);





function sum(a, b) {
    return a + b;
}

function multiply(a, b, num, func) {
    const num2 = func(a, b); // callback function which can be called at later time.
    const result = num * num2;

    console.log(result);
}

multiply(1, 3, 2, sum);
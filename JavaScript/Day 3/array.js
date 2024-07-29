let car_name = ['civic', 'gli', 'm5'];
let honda = 'civic';

let bmw_name = car_name[2];

console.log(honda_name)
console.log(car_name.length)

let random = ['hi', 123, 'is', 'me']

random[2] = 'welcome'; // override 2nd index value

random[1] = 'you';

// ['hi', 'you', 'welcome', 'hello']

// 'hi*you*welcome*me'
let text = random.join('*')

console.log(random);

random.pop(); // removes last value

console.log(random)

random.push('hello'); // adds a value to last

console.log(random);

random.shift(); // removes first index value

console.log(random);

random.unshift('hi'); // adds value to 0 index

console.log(random);


// access last value of array

delete random;

console.log(random);
console.log(random.length);
// console.log(typeof(random[1]));

const arr = [123, 3.4, 'lksdjf', undefined, null, true];

console.log(typeof(random));
console.log(typeof(arr));
console.log(typeof(arr[0]));
console.log(typeof(arr[1]));
console.log(typeof(arr[2]));
console.log(typeof(arr[3]));

let x = 2 + 3;
let y = 'talha' + ' malik';  // concatenation or concat kr rhy hain hm

console.log('talha ' + 'malik');

// let z = y.concat('hello');
y = y + 'hello';

console.log(y);
// console.log(z);

// declare an array with 5 integers
// calculate sum of these 5 values
// add the sum result at the start of the array
// also calculate the average of these integers
// add avg result at the end of the array

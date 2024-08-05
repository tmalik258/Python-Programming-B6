let input = 'azadChaiWala';

let f_word = input.slice(0, 4);

console.log(f_word);

let s_word = input.slice(4, 8);

console.log(s_word);

let l_word = input.slice(8);

console.log(l_word);

s_word = s_word.toLowerCase();
l_word = l_word.toLowerCase();

console.log(s_word, l_word);

let output = `${f_word}_${s_word}_${l_word}`;
console.log(output);
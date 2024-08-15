let para1 = document.getElementById("para1");
console.log(para1);

console.log(typeof para1);
console.log(Array.isArray(para1));

para1.style.color = 'blue';

// para1.innerText = '<u>Hi! this is me.</u>';
para1.innerHTML = '<u>Hi! this is me.</u>';

console.dir(para1); // document information record

document.getElementById('para2').innerHTML = 'hiiiiiiiiiii';

let paras = document.getElementsByClassName('paras');

console.dir(paras);

paras[0].style.color = 'orange';
paras[0].style.fontSize = 'orange';

// change background color of paragraph
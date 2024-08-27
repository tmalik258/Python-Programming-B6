const data = ['this is option 1', 'this is option 2', 'this is option 3']


function options(text, i) {
  const option_container = document.querySelector('.options');
  option_container.innerHTML = ''

  const input_el = document.createElement('input');
  const label_el = document.createElement('label');

  const id = `option_${i}`;

  input_el.setAttribute('type', 'radio');
  input_el.setAttribute('name', 'option');
  input_el.setAttribute('id', id);
  input_el.setAttribute('value', 'option 1');

  label_el.setAttribute('for', id);
  label_el.innerHTML = text;

  option_container.append(input_el, label_el);
}



// form.addEventListener('submit', (e) => {
//   e.preventDefault();
//   for (let i=0; i < data.length; i++) {
//     const text = data[i];
//     options(text, i);
//   }
// })

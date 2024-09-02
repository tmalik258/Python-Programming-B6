const form = document.querySelector('form');

// form.addEventListener('submit', (e) => {
//     console.log('hello')
// })

form.addEventListener('submit', handleSubmit); // callback function

function handleSubmit(e) {
    e.preventDefault();

    const loc = e.target.location.value;

    console.log(loc);
}
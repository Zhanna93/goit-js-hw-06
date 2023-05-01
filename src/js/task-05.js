const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

console.log(input)

input.addEventListener('input', (event) => {
 
 input.textContent !== " " ? output.textContent = event.currentTarget.value : output.textContent = 'Anonymous';
});
const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

console.log(input)

input.addEventListener('input', (event) => {
 
 if (input.value === "") {
  return output.textContent = "Anonymous"
 }
 output.textContent = event.currentTarget.value

});
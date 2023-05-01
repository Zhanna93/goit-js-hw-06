const input = document.querySelector('#validation-input');
console.log(input)

input.addEventListener('blur', () => {
 if (input.getAttribute('data-length') === input.dataset.length) {
  return input.classList.add('valid');
 } else {
  // input.classList.remove('valid');
  return input.classList.add('invalid');
 }
 
})


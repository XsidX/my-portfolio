const form = document.getElementById('form');
const buttonWrapper = document.querySelector('.button-wrapper');
const emailValue = document.getElementById('email');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailValue.value !== emailValue.value.toLowerCase()) {
    if (!document.querySelector('.error')) {
      const errorMessage = document.createElement('p');
      errorMessage.innerText = 'Please submit your email in lowercase';
      buttonWrapper.appendChild(errorMessage);
      errorMessage.classList.add('error');
    }
  } else {
    form.submit();
  }
});
const formInput = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  message: document.getElementById('message').value,
}

const isInputChange = (input) => {
  input.addEventListener('change', (e) => {
    formInput[input.name] = e.target.value;
    localStorage.setItem('userInput', JSON.stringify(formInput));
    console.log(JSON.parse(localStorage.getItem('userInput'))[input.name])
    
  })
}

const isInputEmpty = (input) => {

  if (JSON.parse(localStorage.getItem('userInput').hasOwnProperty(input.name))) {

  }
}


JSON.parse(localStorage.getItem('userInput'))
isInputChange(nameInput)

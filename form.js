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
  })
}

const localData = JSON.parse(localStorage.getItem('userInput'));
isInputChange(nameInput);
isInputChange(emailInput);
isInputChange(messageInput);

// const isEmpty = () => {
// for( let key in localData) {
//   if(localData[key].length>0) {

//   }
// }
// }
console.log(localData)
nameInput.value = localData['name']
emailInput.value = localData['email']
messageInput.value = localData['message']


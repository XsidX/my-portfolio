const form = document.getElementById('contact-section');
const buttonWrapper =  document.getElementById('.contact-container button');
const emailValue = document.getElementById('email');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (emailValue.value !== emailValue.value.toLowerCase()) {
  console.log('value', emailValue.value)
   const errorMessage = document.createElement('p');
   errorMessage.innerText = 'Please submit your email in lowercase letters!'
   buttonWrapper.appendChild(errorMessage);
   errorMessage.classList.add('error-message')
  } 
  else {
    form.submit()
  }

})
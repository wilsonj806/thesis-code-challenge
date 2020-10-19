const form = document.getElementById('signupForm')

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('input[name=Name]')
  const email = document.querySelector('input[name=Email]')
  const password = document.querySelector('input[name=Password]')
  console.log(name.value, email.value,password.value)
})
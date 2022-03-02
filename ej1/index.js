const $FORM = document.querySelector('form')
const $NAME = document.getElementById('name')
const $SURNAME = document.getElementById('surname')
const $EMAIL = document.getElementById('email')
const $PASSWORD = document.getElementById('password')
const $COMMENTS = document.getElementById('comments')
const $ACEPTED = document.getElementById('acepted')

function handleSubmit(e) {
  e.preventDefault()

  const name = $NAME.value.trim()
  const surname = $SURNAME.value.trim()
  const email = $EMAIL.value.trim()
  const password = $PASSWORD.value.trim()
  const comments = $COMMENTS.value.trim()
  const acepted = $ACEPTED.checked

  if ( name && isValidEmail(email) && comments && isValidPassword(password) && acepted ) {
    const newUser = createUser(name, surname, email, password, comments)
    console.log(newUser)
  }
  else {
    alert('Error. Revise los datos introducidos')
  }

}

function isValidEmail ( email ) {
  const pattern = /^(.+\@.+\..+)$/
  return pattern.test(email)
}

function isValidPassword ( password ) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/
  return pattern.test(password)
}

function createUser ( name, surname, email, password, comments ) {
  return {
    name,
    surname,
    email,
    password,
    comments
  }
}

$FORM.addEventListener('submit', handleSubmit)

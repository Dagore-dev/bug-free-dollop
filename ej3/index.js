const $FORM = document.querySelector('form')
const $NAME = document.getElementById('name')
const $SURNAME = document.getElementById('surname')
const $EMAIL = document.getElementById('email')
const $WEB = document.getElementById('web')

function handleSubmit ( e ) {
  e.preventDefault()
  
  const name = $NAME.value.trim()
  const surname = $SURNAME.value.trim()
  const email = $EMAIL.value.trim()
  const web = $WEB.value.trim()

  if ( isValidName(name) && isValidName(surname) && isValidEmail(email) && isValidWeb(web) ) {
    const newUser = createUser(name, surname, email, web)
    console.log(newUser)
  } 
  else {
    alert('Error. Revise los datos introducidos')
  }

}

function isValidName( name ) {
  const pattern = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/

  return pattern.test(name)
}

function isValidEmail ( email ) {
  const pattern = /^(.+\@.+\..+)$/

  return pattern.test(email)
}

function isValidWeb ( web ) {
  const pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

  return pattern.test(web)
}

function createUser ( name, surname, email, web ) {
  return {
    name,
    surname,
    email,
    web
  }
}

$FORM.addEventListener('submit', handleSubmit)

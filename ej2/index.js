const $FORM = document.querySelector('form')
const $DNI = document.getElementById('dni')
const $NAME = document.getElementById('name')
const $SURNAME = document.getElementById('surname')
const $PHONE = document.getElementById('phone')
const $TEXT = document.getElementById('text')
const $TIME = document.getElementById('time')

function handleSubmit ( e ) {
  e.preventDefault()
  
  const dni = $DNI.value.trim()
  const name = $NAME.value.trim()
  const surname = $SURNAME.value.trim()
  const phone = $PHONE.value.trim()
  const text = $TEXT.value.trim()
  const time = $TIME.value.trim()

  if ( isValidDNI(dni) && isValidName(name) && isValidName(surname) && isValidPhone(phone) && isValidComment(text) && isValidTime(time)) {
    const newUser = createUser(dni, name, surname, phone, text, time)
    console.log(newUser)
  }
  else {
    alert('Error. Revise los datos introducidos')  
  }

}

function isValidDNI ( dni ) {
  const letter =  ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']
  const pattern = /^\d{8}[A-Z]$/

  return pattern.test(dni) && dni[8] === letter[parseInt(dni.substring(0, 8)) % 23]
}

function isValidName( name ) {
  const pattern = /^(([\wáéíóúÁÉÍÓÚ]+)|([\wáéíóúÁÉÍÓÚ]+\s[\wáéíóúÁÉÍÓÚ]+))$/

  return pattern.test(name)
}

function isValidPhone ( phone ) {
  const pattern = /^\+\d{2,3}\s\d{9}$/

  return pattern.test(phone)
}

function isValidComment ( text ) {
  return text && text.length < 250
}

function isValidTime ( time ) {
  const pattern = /^(0[1-9]|1\d|2[0-3]):([0-5]\d)$/

  return pattern.test(time)
}

function createUser ( dni, name, surname, phone, text, time ) {
  return {
    dni,
    name,
    surname,
    phone,
    text,
    time
  }
}

$FORM.addEventListener('submit', handleSubmit)

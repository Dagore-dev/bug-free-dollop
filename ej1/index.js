const $FORM = document.querySelector('form')

function handleSubmit ( e ) {
  e.preventDefault()
  console.log('enviado')
}

$FORM.addEventListener('submit', handleSubmit)

const {hash } = window.location
const message = atob(hash.replace('#', ''));
if(message) {
  document.querySelector('#message-form').classList.add('hide')
  document.querySelector('#message-show').classList.remove('hide')
  document.querySelector('h1').innerHTML = message
}
document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault()
  const inputMessage = document.querySelector('#message-input')
  document.querySelector('#link-form').classList.remove('hide')
  document.querySelector('#message-form').classList.add('hide')
  const encrypted = btoa(inputMessage.value)

  const inputLink = document.querySelector('#link-input')
  inputLink.value = `${window.location}#${encrypted}`
  inputLink.select()
})


const scriptURL = 'https://script.google.com/macros/s/AKfycbyLH-08CrRPToQ-Ij3Ncyzuy2AiYnJnIlIiar01raDvrMCjqrApyKaGXrzCQVxz6SeqVw/exec'
const form = document.forms['submit-to-google-sheet']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(_response => { alert("Message sent successfully, we'll get in touch with you asap (if needed)") })
  form.reset()
    .catch(_error => { alert("Oops something went wron, please try again") })
})
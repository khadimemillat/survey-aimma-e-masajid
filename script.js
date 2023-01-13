const form = document.getElementById('submit-to-google-sheet');
const scriptURL = "https://script.google.com/macros/s/AKfycbyLH-08CrRPToQ-Ij3Ncyzuy2AiYnJnIlIiar01raDvrMCjqrApyKaGXrzCQVxz6SeqVw/exec"


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(scriptURL, {
        method: 'POST',
        body: formData
    })
    .then((response) => {
        if (response.ok) {
            alert("Message sent successfully, we'll get in touch with you asap (if needed)");
        } else {
            alert("Error submitting form. Please try again.");
        }
    })      

    // For Developer Taaha! ;)
    /* Bhai yeh error only (FF) Firefox me execute, uska reason hai CORS, yeh kaafi lamba topic hai,
    agr padha hoto is link pr jao: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS*/

    .catch((error) => {
      console.error('Error:', error)
      alert("Error submitting form. Please try again.");
    });
});

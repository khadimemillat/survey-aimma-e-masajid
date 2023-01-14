// -------------form display--------

let ohda = document.getElementById("ohda");
let btn = document.getElementById("submit");
let details = document.getElementById("details");
let _name = document.getElementById("_name");

ohda.addEventListener('change', () => {
  if (ohda.value !== "Select_your_Position") {
    details.style.display = "block"
    btn.style.display = "block"
    _name.innerHTML = ohda.value
  }
  else {
    details.style.display = "none"
    btn.style.display = "none"
  }
})


// ----------- form submit-----------

const form = document.getElementById('submit-to-google-sheet');
const scriptURL = "https://script.google.com/macros/s/AKfycbyLH-08CrRPToQ-Ij3Ncyzuy2AiYnJnIlIiar01raDvrMCjqrApyKaGXrzCQVxz6SeqVw/exec"


form.addEventListener('submit', (event) => {
  let name_ = document.getElementById("NoM");
  let _name = document.getElementById("ohda");
  if (name_.value == "") {
    alert('Please fill the details(Name of Masjid)');
  } else if (_name.value == "Select_your_Position") {
    alert('Please select your Position (apna ohda chunen)')
  }
  else {
    event.preventDefault();
    document.getElementById("loader").style.display = "block";

    const formData = new FormData(form);

    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully, we'll get in touch with you asap (if needed)");
          form.reset()
          details.style.display = "none"
          btn.style.display = "none"
          document.getElementById("loader").style.display = "none";
          window.location.hash = "#logo"
        } else {
          alert("Error submitting form. Please try again.");
          document.getElementById("loader").style.display = "none";
        }
      })

      // For Developer Taaha! ;)
      /* Bhai yeh error only (FF) Firefox me execute, uska reason hai CORS, yeh kaafi lamba topic hai,
      agr padha hoto is link pr jao: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS*/

      .catch((error) => {
        console.error('Error:', error)
        alert('Error submitting form. Please try browser other than "FireFox".');
        document.getElementById("loader").style.display = "none";
      })
  };
});

// JavaScript code for handling the form submission
const form = document.querySelector('form');
const modal = document.getElementById("myModal");
const modalMessage = document.getElementById("modal-message");
const span = document.getElementsByClassName("close")[0];

form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Do some processing with the form data here...
  // ...

  // Show the modal
  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  form.reset();
}


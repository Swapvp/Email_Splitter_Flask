// Get DOM elements
let email = document.getElementById("email");
let emailDetails = document.getElementById("emailDetails");
let errorMessage = document.getElementById("errorMessage");

// Handle form submission event
document
  .getElementById("emailForm")
  .addEventListener("submit", function (event) {
    // Allow form submission but also update UI before reload
    if (email.value.trim() === "") {
      event.preventDefault(); // Prevent submission if email is empty
      alert("Please enter a valid email.");
      return;
    }

    emailDetails.classList.remove("hide");
    emailDetails.classList.add("show");
  });

// Clear the input and reset UI
function clearInput() {
  email.value = "";
  emailDetails.classList.add("hide");
  errorMessage.classList.add("hide");
}

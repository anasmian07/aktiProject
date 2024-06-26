// Function to submit the form data
function submitForm(event) {
  event.preventDefault(); // Prevent default form submission

  // Fetching form values
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let repeatPassword = document.getElementById("repeat-password").value;
  let terms = document.getElementById("terms").checked;

  // Validate if passwords match
  if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
  }

  // Creating formData object
  let formData = {
      email: email,
      password: password,
      terms: terms
  };

  // Sending form data to the server
  fetch('submit_form.php', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
  })
  .then(data => {
      console.log('Form submitted successfully:', data);
      alert('Form submitted successfully!');
      // Optionally reset the form after successful submission
      document.getElementById("registration-form").reset();
  })
  .catch(error => {
      console.error('There was a problem with form submission:', error);
      alert('Form submission failed. Please try again later.');
  });
}

// Adding event listener to the submit button
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("registration-form").addEventListener("submit", submitForm);
});

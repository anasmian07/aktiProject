function submitForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let formData = {
        name: name,
        email: email,
        message: message
    };

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
        return response.json();
    })
    .then(data => {
        console.log('Form submitted successfully:', data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        console.error('There was a problem with form submission:', error);
        alert('the form was submitted');
    });
}

document.getElementById("submitBtn").addEventListener("click", submitForm);
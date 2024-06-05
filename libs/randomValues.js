// toggleDarkMode.js
import function toggleDarkMode(buttonId) {
    const button = document.getElementById(buttonId);
    button.addEventListener('click', function() {
        // Get the current background color of the body
        var currentColor = document.body.style.backgroundColor;

        // Check if the current background color is dark
        if (currentColor === 'black') {
            // Change to light mode
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        } else {
            // Change to dark mode
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
    });

    // Initialize the body to light mode on page load
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
}
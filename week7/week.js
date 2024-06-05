document.getElementById('toogle').addEventListener('click', function() {
   
    let  currentColor = document.body.style.backgroundColor;

   
    if (currentColor === 'yellow') {
       
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'yellow';
    } else {
        
        document.body.style.backgroundColor = 'yellow';
        document.body.style.color = 'white';
    }
});


document.body.style.backgroundColor = 'white';
document.body.style.color = 'yellow';
console.log(document)
//noti
  // Get references to the button and the notification div
  const button = document.getElementById('shar');
  const notification = document.getElementById('notification');

  // Function to show the notification
  function showNotification() {
      notification.style.display = 'block'; // Show the notification
  }

  // Function to hide the button and the notification
  function hideElements() {
      button.style.display = 'none'; // Hide the button
      notification.style.display = 'none'; // Hide the notification
  }

  // Add click event listener to the button to show the notification initially
  button.addEventListener('click', function() {
      if (notification.style.display === 'none' || notification.style.display === '') {
          showNotification(); // Show the notification if it's not already shown
      } else {
          hideElements(); // Hide both the notification and the button if the notification is already shown
      }
  });
function updateCountdown() {
  // Get the current date and time
  var currentTime = new Date();

  // Calculate tomorrow's date
  var tomorrow = new Date(currentTime);
  tomorrow.setDate(currentTime.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0); // Set the time to midnight

  // Calculate the time difference in milliseconds
  var timeDifference = tomorrow - currentTime;

  if (timeDifference <= 0) {
      // If already tomorrow, display a message
      document.getElementById('mobile').innerHTML = "It's already tomorrow!";
  } else {
      // Calculate hours, minutes, and seconds
      var hours = Math.floor(timeDifference / (1000 * 60 * 60));
      var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      // Format the result
      var countdownText = "অফার শেষ হবে, ";

      if (hours > 0) {
          countdownText += hours + " ঘণ্টা  ";
      }

      if (minutes > 0 || (hours > 0 && seconds > 0)) {
          countdownText += minutes + " মিনিট  ";
      }

      countdownText += seconds + " সেকেন্ড পর  !";

      // Display the result
      document.getElementById('mobile').innerHTML = countdownText;
  }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update when the page loads
updateCountdown();

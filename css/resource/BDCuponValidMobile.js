function countDown(x) {
    if (x.matches) {
        console.log('Mobile');
    } else {
        // If media query matches
        console.log('Desktop');
        // Set the date we're counting down to
        var countDownDate = new Date('Dec 30, 2030 00:00:00').getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {
            // Get today's date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes, and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="demo"
            document.getElementById('countdown').innerHTML =
                days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById('countdown').innerHTML = 'EXPIRED';
            }
        }, 1000);
    }
}

var x = window.matchMedia('(max-width: 768px)');
countDown(x); // Call listener function at run time
x.addListener(countDown); // Attach listener function on state changes

// Click to Copy
var tooltip = document.getElementById('myTooltip');
var copyText = document.getElementById('couponCode');

function myFunction() {
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand('copy');
    tooltip.innerHTML = 'Copied: ' + copyText.value;
}

function outFunc() {
    tooltip.innerHTML = 'Copy to clipboard';
}

// Close
var closebtns = document.getElementsByClassName('close');
/* Get all elements with class="close" */
var i;
/* Loop through the elements, and hide the parent, when clicked on */
for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener('click', function () {
        this.parentElement.style.display = 'none';
    });
}

// Countdown for the second code
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
        var countdownText = "অফার শেষ হবে<br>";

        if (hours > 0) {
            countdownText += hours + " ঘণ্টা ";
        }

        if (minutes > 0 || (hours > 0 && seconds > 0)) {
            countdownText += minutes + " মিনিট ";
        }

        countdownText += seconds + " সেকেন্ড পর";

        // Display the result
        document.getElementById('mobile').innerHTML = countdownText;
    }
}

// Update the countdown every second
setInterval(updateCountdown, 1000);

// Initial update when the page loads
updateCountdown();



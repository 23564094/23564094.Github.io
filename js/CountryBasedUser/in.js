        // Function to handle the redirection based on the country
        function redirectBasedOnCountry(countryCode) {
            // Replace 'us' with the country code you want to allow
            if (countryCode.toLowerCase() !== 'bd') {
                window.location.href = '/unavailable.html'; // Replace with your desired URL
            }
        }

        // Fetch the user's IP information from ipinfo.io
        fetch('https://ipinfo.io?token=5f48b936cc8fb1')
            .then(response => response.json())
            .then(data => {
                const countryCode = data.country;
                redirectBasedOnCountry(countryCode);
            })
            .catch(error => {
                console.error('Error fetching IP information:', error);
            });
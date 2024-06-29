document.addEventListener('DOMContentLoaded', function() {
          // Static values for temperature and wind speed
          const temperature = 32; // in Fahrenheit
          const windSpeed = 10; // in mph

          // Function to calculate the wind chill factor
          function calculateWindChill(temp, speed) {
              return (
                  35.74 +
                  0.6215 * temp -
                  35.75 * Math.pow(speed, 0.16) +
                  0.4275 * temp * Math.pow(speed, 0.16)
              ).toFixed(2);
          }

          // Function to display the wind chill
          function displayWindChill() {
              const windChillElement = document.getElementById('windChill');
              if (temperature <= 50 && windSpeed > 3) {
                  const windChill = calculateWindChill(temperature, windSpeed);
                  windChillElement.textContent = `${windChill}°F`;
              } else {
                  windChillElement.textContent = 'N/A';
              }
          }

          // Display the static temperature and wind speed values
          document.getElementById('temperature').textContent = `${temperature}°F`;
          document.getElementById('windSpeed').textContent = `${windSpeed} mph`;

          // Call the function to display the wind chill
          displayWindChill();
      });
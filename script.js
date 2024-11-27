// Select the "No" button
const noButton = document.querySelector('.button.no');

// Add an event listener for mouseover to make the "No" button move around
noButton.addEventListener('mouseover', () => {
  const x = Math.random() * window.innerWidth * 0.8; // Random x position
  const y = Math.random() * window.innerHeight * 0.8; // Random y position
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

// Add event listener for the "Yes" button
document.querySelector('.button.yes').addEventListener('click', () => {
  // Fade out the current screen
  document.body.style.transition = "opacity 2s ease";
  document.body.style.opacity = "0";

  // After the fade-out, change the content to show the new message
  setTimeout(() => {
    document.body.innerHTML = '<h1 style="color:white; font-family: \'Cedarville Cursive\', cursive;">I love you too & happy 1 month anniversary ! -Viper. ♡</h1>';
    document.body.style.backgroundColor = '#60795f'; // Change background to a soft green
    document.body.style.opacity = "1"; // Reset opacity to make text visible
  }, 2000); // Wait for fade-out transition to complete
});

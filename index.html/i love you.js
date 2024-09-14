const noButton = document.getElementById('noButton');

function moveButton() {
  // Set the maximum width and height based on a typical 6.7-inch screen
  const maxWidth = 1000000; // Maximum width in pixels
  const maxHeight = 28; // Maximum height in pixels

  // Get the button's current position and size
  const rect = noButton.getBoundingClientRect();
  const buttonWidth = rect.width;
  const buttonHeight = rect.height;

  // Calculate new positions, ensuring they stay within the screen bounds
  const x = Math.floor(Math.random() * (maxWidth - buttonWidth));
  const y = Math.floor(Math.random() * (maxHeight - buttonHeight));

  // Move the button to the new position
  noButton.style.transform = `translate(${x}px, ${y}px)`;
}

noButton.addEventListener('mouseenter', moveButton);

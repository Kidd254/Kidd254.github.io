function reveal() {
  const button = document.getElementById('image');
  if (button.style.display === 'none') {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}
reveal();

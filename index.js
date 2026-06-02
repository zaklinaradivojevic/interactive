<!-- 8. RUNTIME INTERACTION SCRIPT -->

  const buttons = document.querySelectorAll('.raiting-btn');
  const submitButton = document.getElementById('submit-rating');
  const ratingView = document.getElementById('rating-container');
  const thankYouView = document.getElementById('thank-you-container');
  const numericScore = document.getElementById('rating-score');
  const errorMessage = document.getElementById('validation-error');
  
  let activeScore = null;
// Track item selection matrix
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      // Clear all active styling matches
      buttons.forEach(btn => btn.classList.remove('active'));
      
      // Toggle layout indicators onto the selected selection
      event.target.classList.add('active');
      activeScore = event.target.textContent;
      
      // Dismiss active alerts
      errorMessage.style.display = 'none';
    });
  });

  // Handle card view presentation changes
  submitButton.addEventListener('click', () => {
    if (activeScore !== null) {
      numericScore.textContent = activeScore;
      ratingView.style.display = 'none';
      thankYouView.style.display = 'block';
    } else {
      errorMessage.style.display = 'block';
    }
  });

// Dark/Light mode toggle
const modeButton = document.getElementById('toggle-mode');
let isLight = false;

modeButton.onclick = () => {
  document.body.classList.toggle('light');
  isLight = !isLight;
  modeButton.textContent = isLight ? '☀️' : '🌙';
};

// Service Worker registration for offline support (PWA)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(console.error);
  });
}

// (Optional) Handle contact form submission (can replace with email sending logic)
document.querySelector('form').onsubmit = function(e){
  e.preventDefault();
  alert('Message sent! Thank you for reaching out.');
  this.reset();
};

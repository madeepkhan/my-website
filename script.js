// Handle contact form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = "Message sent! We'll get back to you soon.";
      form.reset();
    });
  }
});

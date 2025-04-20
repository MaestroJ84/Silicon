// Fetch testimonials from API
fetch('https://kyhn24.azurewebsites.net/api/testimonials')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('testimonials-container');
    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'testimonial';
      div.innerHTML = `
        <p>"${item.content}"</p>
        <strong>- ${item.author}</strong>
      `;
      container.appendChild(div);
    });
  })
  .catch(error => console.error('Error fetching testimonials:', error));

// Tema-växling
const toggleBtn = document.getElementById('theme-toggle');

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
  // Växla ikon på knappen
  toggleBtn.textContent = document.body.classList.contains('dark-theme') ? '☀️' : '🌙';
});

// Toggle mobile menu
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('nav-links').classList.toggle('show');
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Minimal click navigation
document.querySelectorAll('.node').forEach(n => {
  n.addEventListener('click', () => window.location.href = n.dataset.target);
});


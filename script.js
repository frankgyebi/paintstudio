document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('themeToggle');

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    document.body.classList.toggle('dark-mode', isDark);
    if (toggleButton) {
      toggleButton.textContent = isDark ? 'Light mode' : 'Dark mode';
    }
    localStorage.setItem('theme', theme);
  }

  const storedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(storedTheme);

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      const nextTheme = document.body.classList.contains('dark-mode') ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  }
});

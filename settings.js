let darkModeEnabled = false;

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled; // This line now works correctly
  const body = document.body;
  body.classList.toggle('dark-mode', darkModeEnabled);
}

// Fügen Sie Ihre Zeitplanungslogik hier hinzu

module.exports = {
  toggleDarkMode,
  isDarkModeEnabled: () => darkModeEnabled
};
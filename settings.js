const darkModeEnabled = false;

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled; // This line causes an error
  const body = document.body;
  body.classList.toggle('dark-mode', darkModeEnabled);
}

// Fügen Sie Ihre Zeitplanungslogik hier hinzu

module.exports = {
  toggleDarkMode,
  isDarkModeEnabled: () => darkModeEnabled
};
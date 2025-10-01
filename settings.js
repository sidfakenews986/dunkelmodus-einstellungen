const darkModeEnabled = false;

function toggleDarkMode() {
  darkModeEnabled = !darkModeEnabled;
  const body = document.body;
  body.classList.toggle('dark-mode', darkModeEnabled);
}

// Fügen Sie Ihre Zeitplanungslogik hier hinzu

module.exports = {
  toggleDarkMode,
  isDarkModeEnabled: () => darkModeEnabled
};
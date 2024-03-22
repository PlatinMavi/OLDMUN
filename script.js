var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
var themeToggleBtn = document.getElementById('theme-toggle');

// Function to set the dark mode
function setDarkMode() {
    themeToggleDarkIcon.classList.add('hidden');
    themeToggleLightIcon.classList.remove('hidden');
    document.documentElement.classList.add('dark');
    localStorage.setItem('color-theme', 'dark');
}

// Function to set the light mode
function setLightMode() {
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
    document.documentElement.classList.remove('dark');
    localStorage.setItem('color-theme', 'light');
}

// Check if the theme is already set in localStorage
if (!localStorage.getItem('color-theme')) {
    // If not set, force dark mode as default
    setDarkMode();
} else {
    // Change the icons and theme based on the localStorage value
    if (localStorage.getItem('color-theme') === 'dark') {
        setDarkMode();
    } else {
        setLightMode();
    }
}

// Event listener for theme toggle button
themeToggleBtn.addEventListener('click', function() {
    // Toggle between dark and light mode
    if (document.documentElement.classList.contains('dark')) {
        setLightMode();
    } else {
        setDarkMode();
    }
});

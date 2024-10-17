const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    
    // Change emoji based on the theme
    if (body.classList.contains('dark-theme')) {
        themeToggleBtn.textContent = '☀️'; // Sun emoji for light theme
    } else {
        themeToggleBtn.textContent = '🌙'; // Moon emoji for dark theme
    }
});

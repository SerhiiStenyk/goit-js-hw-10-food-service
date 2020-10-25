const themeBox = document.querySelector('#theme-switch-toggle');
const body = document.querySelector('body');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

themeBox.addEventListener('change', onThemeBoxChange);
function onThemeBoxChange(e) {
    if (e.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
saveTheme()

function saveTheme() {
    if (localStorage.getItem('Theme') === `${Theme.DARK}`)
    {
        themeBox.checked = true;
        body.classList.add(Theme.DARK);
    } 
}



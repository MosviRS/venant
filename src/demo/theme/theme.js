const toggleSwitch = document.getElementById('switch-2');

function switchTheme(e) {
    const checked = e.detail.checked;
    if (checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}


export function initTheme() {
    toggleSwitch.addEventListener('switchChange', switchTheme);
    const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.setAttribute('checked', true);
        }
    }
}
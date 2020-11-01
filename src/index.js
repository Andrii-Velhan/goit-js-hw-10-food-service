import './styles.css';

//const source = document.querySelector('#menu-template').innerHTML.trim();
//const template = Handlebars.compile(source);

import menuItemsTmpl from './templates/menu-items.hbs';
import menuItems from './menu.json';

//console.log(menuItemsTmpl(menuItems));

const menuContainer = document.querySelector('.js-menu');
const menuCardsMarkup = createMenuCardsMarkup(menuItems);
const BtnSwitch = document.querySelector('input.js-switch-input');
const bodyEl = document.querySelector('body');
const Theme = {LIGHT: 'light-theme', DARK: 'dark-theme',};

menuContainer.insertAdjacentHTML('beforeend', menuCardsMarkup);
BtnSwitch.addEventListener('change', onBtnClick);

// function onBtnClick() {
//     bodyEl.classList.toggle(Theme.DARK);
// }
reloadControllTheme();
function reloadControllTheme() {
    if (localStorage.getItem('Theme') === Theme.DARK) {
        BtnSwitch.checked = true;
        bodyEl.classList.add(Theme.DARK);
    } else {
        bodyEl.classList.remove(Theme.DARK);
        bodyEl.classList.add(Theme.LIGHT);
        
    }
}

function onBtnClick (evt) {
    if (evt.target.checked) {
        bodyEl.classList.add(Theme.DARK);
        bodyEl.classList.remove(Theme.LIGHT);
        localStorage.setItem('Theme', Theme.DARK);
      } else {
        bodyEl.classList.add(Theme.LIGHT);
        bodyEl.classList.remove(Theme.DARK);
        localStorage.setItem('Theme', Theme.LIGHT);
      }
}

function createMenuCardsMarkup(menuItems) {
    return menuItems.map(menuItemsTmpl).join('');
}
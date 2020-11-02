import './styles.css';
import menuItemsTmpl from './templates/menu-items.hbs';
import menuItems from './menu.json';
import { menuContainer, BtnSwitch, bodyEl } from './module/variables';

const Theme = { LIGHT: 'light-theme', DARK: 'dark-theme', };


const menuCardsMarkup = createMenuCardsMarkup(menuItems);

function createMenuCardsMarkup(menuItems) {
    return menuItems.map(menuItemsTmpl).join('');
}

menuContainer.insertAdjacentHTML('beforeend', menuCardsMarkup);
BtnSwitch.addEventListener('change', onBtnClick);

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


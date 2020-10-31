import './styles.css';

//const source = document.querySelector('#menu-template').innerHTML.trim();
//const template = Handlebars.compile(source);

import menuItemsTmpl from './templates/menu-items.hbs';
import menuItems from './menu.json';
const markup = menuItemsTmpl(menuItems);

console.log(markup);

const menuContainer = document.querySelector('.js-menu');
const menuCardsMarkup = createMenuCardsMarkup(menuItems);

menuContainer.insertAdjacentHTML('beforeend', menuCardsMarkup);
menuContainer.addEventListener('click', onMenuContainerClick);

function createMenuCardsMarkup(menuItems) {
    return menuItems.map(menuItemsTmpl).join('');
}
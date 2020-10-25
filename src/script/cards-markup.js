import menu from '../menu.json';
import menuCardsTpl from '../templates/menu-template.hbs';
const menuRef = document.querySelector('.menu');
const cardsMarkup = menuCardsTpl(menu);
menuRef.insertAdjacentHTML('beforeend', cardsMarkup);
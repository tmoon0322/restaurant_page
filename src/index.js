import './style.css';
import { buildHome } from './home.js';
import { buildAbout } from './about.js';
import { buildMenu } from './menu.js';

const homeButton = document.querySelector('.home_btn');
const aboutButton = document.querySelector('.about_btn');
const menuButton = document.querySelector('.menu_btn');

homeButton.addEventListener('click', buildHome);
aboutButton.addEventListener('click', buildAbout);
menuButton.addEventListener('click', buildMenu);
buildHome();
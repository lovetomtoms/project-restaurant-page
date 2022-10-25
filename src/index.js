import displayHome from "./home";
import displayMenu from "./menu";
import displayContact from "./contact";
import './style.css';

function displayContent() {
    const content = document.querySelector('#content');

    const homeButton = document.createElement('button');
    const menuButton = document.createElement('button');
    const contactButton = document.createElement('button');
    const show = document.createElement('div');

    homeButton.innerText = 'HOME';
    menuButton.innerText = 'MENU';
    contactButton.innerText = 'CONTACT';
    show.classList.add('show');
    show.innerText = 'HELLO';

    homeButton.addEventListener('click', displayHome);
    menuButton.addEventListener('click', displayMenu);
    contactButton.addEventListener('click', displayContact);

    content.appendChild(homeButton);
    content.appendChild(menuButton);
    content.appendChild(contactButton);
    content.appendChild(show);
}

displayContent();
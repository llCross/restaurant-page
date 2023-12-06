import { renderHomePage } from "./home";
import { renderMenuPage } from "./menu";
import { renderContactPage } from "./contact";
import { clearPage } from "./clear";

export const renderTabs = () => {
    const content = document.querySelector('#content');

    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container')

    const header = document.createElement('div');
    header.classList.add('header');

    const logo = document.createElement('h1');
    logo.textContent = ('PamFoods');

    const tabContainer = document.createElement('div');
    tabContainer.classList.add('tab-container')

    const homeTab = document.createElement('div');
    const menuTab = document.createElement('div');
    const contactTab = document.createElement('div');

    homeTab.classList.add('tabs');
    menuTab.classList.add('tabs');
    contactTab.classList.add('tabs');

    homeTab.textContent = ('Home');
    menuTab.textContent = ('Menu');
    contactTab.textContent = ('Contact-Us');

    content.appendChild(pageContainer);
    pageContainer.appendChild(header);
    header.appendChild(logo);
    header.appendChild(tabContainer);
    tabContainer.appendChild(homeTab);
    tabContainer.appendChild(menuTab);
    tabContainer.appendChild(contactTab);

    homeTab.addEventListener('click', () => {
        clearPage();
        renderHomePage();
    });

    menuTab.addEventListener('click', () => {
        clearPage();
        renderMenuPage();
    });

    contactTab.addEventListener('click', () => {
        clearPage();
        renderContactPage();
    });
}

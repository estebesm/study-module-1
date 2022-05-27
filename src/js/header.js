const burgerButton = document.querySelector('.header__burger');
const closeButton = document.querySelector('.header__close-button');

const listElement = document.querySelector(".header__list");
const listElementItems = listElement.childNodes;

const headerNav = document.querySelector('.header__nav');

const logoButton = document.querySelector('header .logo');
const getAppButton = document.querySelector('header .app-store-button');

const closeHeaderMenu = () => {
    headerNav.classList.remove('opened');
}
const openHeaderMenu = () => {
    headerNav.classList.add('opened');
}

export const header = () => {
    burgerButton.addEventListener('click', openHeaderMenu);
    closeButton.addEventListener('click', closeHeaderMenu);

    logoButton.addEventListener('click', closeHeaderMenu);
    listElementItems.forEach(item => {
        item.addEventListener('click', closeHeaderMenu);
    })
    getAppButton.addEventListener('click', closeHeaderMenu);
}
const burgerButton = document.querySelector('.header__burger')
const closeButton = document.querySelector('.header__close-button')
const headerNav = document.querySelector('.header__nav')


export const header = () => {
    burgerButton.addEventListener('click', () => {
        headerNav.classList.add('opened')
    })
    closeButton.addEventListener('click', () => {
        headerNav.classList.remove('opened')
    })
}
const themingSection = document.querySelector('.theming')
const lightModeButton = document.querySelector('.theming__button.light')
const darkModeButton = document.querySelector('.theming__button.dark')

export const foo = () => {
    lightModeButton.addEventListener('click', () => {
        themingSection.classList.add('light')
    })
    darkModeButton.addEventListener('click', () => {
        themingSection.classList.remove('light')
    })
}
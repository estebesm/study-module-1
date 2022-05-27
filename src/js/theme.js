const themingSection = document.querySelector('.theming')
const lightModeButton = document.querySelector('.theming__button.light')
const darkModeButton = document.querySelector('.theming__button.dark')

const markedSpan = document.querySelector('.theming__marked')
const title = document.querySelector('.theming .title')

export const foo = () => {
    lightModeButton.addEventListener('click', () => {
        themingSection.classList.add('light');
        markedSpan.textContent = 'light';
        title.textContent = 'light mode';
    })
    darkModeButton.addEventListener('click', () => {
        themingSection.classList.remove('light');
        markedSpan.textContent = 'dark';
        title.textContent = 'dark mode';
    })
}
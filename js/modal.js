const openModalWindowButtons = document.querySelectorAll('.buy-now');
const closeModalWindowButton = document.querySelector('.modal__close-button');
const submitButton = document.querySelector('.modal__submit');
const modalForm = document.querySelector('.modal form')
const loadingBlock = document.querySelector('.modal__loading')

const modalInputName = document.getElementById('modal__name')
const modalInputEmail = document.getElementById('modal__email')

const modalWindow = document.querySelector('.dialog');
const htmlBody = document.querySelector('body');

const isNameCorrect = (name) => {
    return /(\w+) (\w+)/.test(name)
}
const isEmailCorrect = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

const openModalWindow = () => {
    modalWindow.style.display = 'block';
    htmlBody.style.overflow = 'hidden';
}
const closeModalWindow = () => {
    modalWindow.style.display = 'none';
    htmlBody.style.overflow = null;
}

const setStylesBeforeSendingData = () => {
    loadingBlock.style.display = 'flex';
    submitButton.disabled = true;
    modalInputName.classList.remove('error');
    modalInputEmail.classList.remove('error');
    modalInputName.nextElementSibling.style.display = modalInputName.value === '' ? 'block' : 'none';
    modalInputEmail.nextElementSibling.style.display = modalInputEmail.value === '' ? 'block' : 'none';
}
const setStylesAfterSendingData = () => {
    loadingBlock.style.display = 'none';
    submitButton.disabled = false;
}

const setErrorStyles = () => {
    modalInputName.classList.add(!isNameCorrect(modalInputName.value) && 'error');
    modalInputEmail.classList.add(!isEmailCorrect(modalInputEmail.value) && 'error');

    modalInputName.nextElementSibling.style.display = modalInputName.value === '' ? 'block' : 'none'
    modalInputEmail.nextElementSibling.style.display = modalInputEmail.value === '' ? 'block' : 'none'
}

export const runModalWindow = () => {
    modalForm.addEventListener('submit', e => {
        e.preventDefault()
    })

    submitButton.addEventListener('click', () => {
        if(isNameCorrect(modalInputName.value) && isEmailCorrect(modalInputEmail.value)) {
            setStylesBeforeSendingData()
            setTimeout(() => {
                setStylesAfterSendingData()
                closeModalWindow()
            }, 3000)
        }
        else{
            setErrorStyles()
        }
    })

    openModalWindowButtons.forEach(button => button.addEventListener('click', openModalWindow))
    closeModalWindowButton.addEventListener('click', closeModalWindow)
}
const openModalWindowButtons = document.querySelectorAll('.buy-now');
const closeModalWindowButton = document.querySelector('.modal__close-button');
const submitButton = document.querySelector('.modal__submit');
const modalForm = document.querySelector('.modal form');
const loadingBlock = document.querySelector('.modal__loading');

const modalInputName = document.getElementById('modal__name');
const modalInputEmail = document.getElementById('modal__email');

const modalWindow = document.querySelector('.dialog');
const htmlBody = document.querySelector('body');

const isNameCorrect = (name) => {
    return /(\w+) (\w+)/.test(name)
}
const isEmailCorrect = (email) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}

const checkTypeOfPlan = (elem) => {
    if(elem.classList.contains('pricing__premium')){
        return 'premium';
    }
    if(elem.classList.contains('pricing__standard')){
        return 'standard';
    }
    return 'lifetime'

}

const openModalWindow = (classList) => {
    const selectedPlanInput = document.getElementById(`modal__${checkTypeOfPlan(classList)}`);
    selectedPlanInput.checked = true;
    modalWindow.style.display = 'block';
    htmlBody.style.overflow = 'hidden';
}
const closeModalWindow = () => {
    modalWindow.style.display = 'none';
    htmlBody.style.overflow = null;
}

const getSelectedPlan = () => {
    let plan = null;
    document.querySelectorAll('.modal__plan input').forEach(item => {
        if(item.checked){
            plan = item.value;
        }
    })
    return plan;
}
const getSelectedSocialNetworks = () => {
    let socialNetworks = []
    document.querySelectorAll('.modal__social-networks-field input').forEach(item => {
        if(item.checked){
            socialNetworks.push(item.value);
        }
    })
    return socialNetworks;
}
const getName = (modalInputName) => {
    return modalInputName.value;
}
const getEmail = (modalInputEmail) => {
    return modalInputEmail.value;
}

const getDataFromDocument = () => {
    return {
        name: getName(modalInputName),
        email: getEmail(modalInputEmail),
        plan: getSelectedPlan(),
        socialNetworks: getSelectedSocialNetworks()
    }
}
const sendDataToServer = () => {
    setTimeout(() => {
        setStylesAfterSendingData();
        console.log(getDataFromDocument());
        closeModalWindow();
    }, 3000)
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
            setStylesBeforeSendingData();
            sendDataToServer();
        }
        else{
            setErrorStyles();
        }
    })

    openModalWindowButtons.forEach(button => {
        button.addEventListener('click', () => openModalWindow(button));
    })
    closeModalWindowButton.addEventListener('click', closeModalWindow);
}
import {clearTextInputs, getEmail, getName, isValidatedTextInput, validateTextInput} from "./validateTextInput.js";

const openModalWindowButtons = document.querySelectorAll('.buy-now');
const closeModalWindowButton = document.querySelector('.modal__close-button');
const submitButton = document.querySelector('.modal__submit');
const modalForm = document.querySelector('.modal form');
const loadingBlock = document.querySelector('.modal__loading');
const socialNetworksElement = document.querySelector('.modal__social-networks-field');

const modalWindow = document.querySelector('.dialog');
const htmlBody = document.querySelector('body');

const checkTypeOfPlan = (elem) => {
    if(elem.classList.contains('pricing__premium')){
        return 'premium';
    }
    if(elem.classList.contains('pricing__standard')){
        return 'standard';
    }
    return 'lifetime'

}
const checkSocialNetworks = () => {
    if(getSelectedSocialNetworks().length===0){
        socialNetworksElement.classList.add('error');
        return false;
    }
    else {
        socialNetworksElement.classList.remove('error');
        return true;
    }
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

const getDataFromDocument = () => {
    return {
        name: getName(),
        email: getEmail(),
        plan: getSelectedPlan(),
        socialNetworks: getSelectedSocialNetworks()
    }
}
const sendDataToServer = () => {
    setStylesBeforeSendingData();
    setTimeout(() => {
        setStylesAfterSendingData();
        console.log(getDataFromDocument());
        closeModalWindow();
        clearTextInputs();
        document.querySelectorAll('.modal__social-networks-field input').forEach(item => {
            item.checked = false;
        });

    }, 3000);
}

const setStylesBeforeSendingData = () => {
    loadingBlock.style.display = 'flex';
    submitButton.disabled = true;
}
const setStylesAfterSendingData = () => {
    loadingBlock.style.display = 'none';
    submitButton.disabled = false;
}

export const runModalWindow = () => {
    modalForm.addEventListener('submit', e => {
        e.preventDefault();
    });
    let addedEventListenerForTextInput = false;

    submitButton.addEventListener('click', () => {
        if(!addedEventListenerForTextInput)
            validateTextInput();
        addedEventListenerForTextInput = true
        document.querySelectorAll('.modal__social-networks__item input').forEach(item => {
            item.addEventListener('click', () => {
                checkSocialNetworks();
            })
        })
        if(isValidatedTextInput() || checkSocialNetworks()){
            if(checkSocialNetworks())
                sendDataToServer();
        }
    });

    openModalWindowButtons.forEach(button => {
        button.addEventListener('click', () => openModalWindow(button));
    })
    closeModalWindowButton.addEventListener('click', closeModalWindow);
    document.querySelector('.modal-wrapper').addEventListener('click', closeModalWindow);
    document.querySelector('.modal').addEventListener('click', e => {
        e.stopPropagation()
    })
}
const modalInputName = document.getElementById('modal__name');
const modalInputEmail = document.getElementById('modal__email');

const errorMessage = (value) => {
    if(value.length === 0) return 'required field*'
    if(value.length < 4) return 'should be more then 3 symbols*'
    return ''
}

const setCorrectStyles = (element) => {
    element.classList.remove('error');
    element.nextElementSibling.textContent = ''
    element.nextElementSibling.style.display = 'none'
}
const setErrorStyles = (element) => {
    element.classList.add(errorMessage(element.value) && 'error');
    element.nextElementSibling.textContent = errorMessage(element.value);
    element.nextElementSibling.style.display = 'block';
}

export const isValidatedTextInput = () => {
    return (errorMessage(modalInputName.value) === '') && (errorMessage(modalInputEmail.value) === '');
}

export const getName = () => {
    return modalInputName.value;
}

export const getEmail = () => {
    return modalInputEmail.value;
}

export const clearTextInputs = () => {
    modalInputName.value = '';
    modalInputEmail.value = '';
}

export const validateTextInput = () => {
        [modalInputName, modalInputEmail].forEach(element => {
            if (errorMessage(element.value)) {
                setErrorStyles(element)
            }
            element.addEventListener('input', e => {
                if(errorMessage(e.target.value))
                    setErrorStyles(element)
                else setCorrectStyles(element)
            })
            element.addEventListener('blur', () => {
                if (errorMessage(element.value)) setErrorStyles(element)
            })
        })
}

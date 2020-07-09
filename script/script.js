'use strict';

const dataBase = [];

const modalAdd = document.querySelector('.modal__add'),
    btnAdd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    card = document.querySelectorAll('.card'),
    modalItem = document.querySelector('.modal__item'),
    modalBtnWarning = document.querySelector('.modal__btn-warning');

const elementsModalSubmit = [...modalSubmit.elements]
    .filter(elem => elem.tagName !== 'BUTTON');



btnAdd.addEventListener('click', () => {
    modalAdd.classList.remove('hide');
    modalBtnSubmit.disabled = true; //блокировка кнопки
});

modalAdd.addEventListener('click', event => {
    let target = event.target;

    if(target.classList.contains('modal__close') ||
        target === modalAdd) {
        modalAdd.classList.add('hide');
        modalSubmit.reset(); //очищаем форму
    }

});

modalSubmit.addEventListener('input', () => {
    const validForm = elementsModalSubmit.every(elem => elem.value);
    modalBtnSubmit.disabled = !validForm; //блокировка кнопки
    modalBtnWarning.style.display =  validForm ? 'none' : '';
});

modalSubmit.addEventListener('submit',  event => {
    event.preventDefault();
    const itemObj = {};
    for (const elem of elementsModalSubmit) {
        itemObj[elem.name] = elem.value; // в объект добавили
    }
    dataBase.push(itemObj); //добавили в массив объект
    console.log(dataBase);
    modalAdd.classList.add('hide');
    modalSubmit.reset();
});

//дз
card.forEach((item) => {
item.addEventListener('click', event => {
    let target = event.target;
    if(target.closest('.card')){
        modalItem.classList.remove('hide');
    }
});
})

modalItem.addEventListener('click', event => {
    let target = event.target;
    if(target.closest('.modal__close') ||
        target === modalItem) {
            modalItem.classList.add('hide');
    }
});

//закрытие на esc
window.onkeydown = event => {
    if(event.keyCode == 27) {
        modalAdd.classList.add('hide');
        modalSubmit.reset(); //очищаем форму
        modalItem.classList.add('hide'); 
    }
};



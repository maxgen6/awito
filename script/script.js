'use strict';

const modalAdd = document.querySelector('.modal__add'),
    btnAdd = document.querySelector('.add__ad'),
    modalBtnSubmit = document.querySelector('.modal__btn-submit'),
    modalSubmit = document.querySelector('.modal__submit'),
    catalog = document.querySelector('.catalog'),
    modalItem = document.querySelector('.modal__item');

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

//дз
catalog.addEventListener('click', event => {
    let target = event.target;
    if(target.closest('.catalog')){
        modalItem.classList.remove('hide');
    }
});

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
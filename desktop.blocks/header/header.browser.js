(() => {

const header = document.querySelector('.header');
const headerIcon = document.querySelector('.header__icon');

headerIcon.addEventListener('click', () => {
    header.classList.toggle('header_closed')
})

})();

let container = document.querySelector('.header__container')
let headerMenu = document.querySelector('.header__menu')
container.onclick = function () {
    container.classList.toggle("header_change");
    headerMenu.classList.toggle('header__menu_hidden')
}

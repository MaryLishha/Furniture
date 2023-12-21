
const container = document.querySelector('.header__container')
const headerMenu = document.querySelector('.header__menu')
container.onclick = function () {
    container.classList.toggle("header_change");
    headerMenu.classList.toggle('header__menu_hidden')
}
const theme = document.querySelector('.header__theme') 
theme.onclick = () => {
let themeIcon = document.querySelector('.header__theme_icon') 
    themeIcon.classList.toggle('header__theme_active_float')
}

const container = document.querySelector('.header__container')
const headerMenu = document.querySelector('.header__menu')
container.onclick = function () {
    container.classList.toggle("header_change");
    headerMenu.classList.toggle('header__menu_hidden')
}
const theme = document.querySelector('.header__theme') 
theme.onclick = () => {
let body = document.querySelector('body')
    body.classList.toggle('green-theme')
let themeIcon = document.querySelector('.header__theme_icon') 
    themeIcon.classList.toggle('header__theme_active_float')
    let p = document.querySelectorAll('p')
    for (let col = 0; col < p.length; col++) {
        // p[col]
           p[col].classList.toggle('p-color')
        // p[col].style.backgroundColor='red'
        console.log(p)
    } 
    // console.log(body)
}
// var i = 0;
// var txt = 'Furnish for '; /* Текст */
// var speed = 50; /* Скорость/длительность эффекта в миллисекундах */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
// typeWriter()
let ballSpread = document.querySelector('.cont')
let ballSpreadShow = document.querySelector('.div__ball')
setTimeout(() => {
    ballSpread.classList.toggle('cont')
    ballSpreadShow.classList.toggle('div__ball')
}, 6000);
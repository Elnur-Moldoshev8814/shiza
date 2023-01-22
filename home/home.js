const moon = document.querySelector('#moon');
const sun = document.querySelector('#sun');

// смена темы

const themes = document.querySelector('.themes')
const home_no_based = document.querySelector('.home-no_based')
const header = document.querySelector('.header'), scrollPrev = 0;
const logotip = document.querySelector('.logotip')
const header__li = document.querySelector(".header__li")

//сохранение темы. 
//Тут создаём переменную которая получает данные из LocalStorage
let THEMES = localStorage.getItem('THEMES')
//после выводим в консоль для меня любимого
console.log(THEMES);
//а это уже условие, кои выглядить так, что
//если Наша Переменная равна 'dark'
//то срабатывает функция change_theme()

if (THEMES == 'dark') {
    change_theme()
}

function change_theme() {
    themes.classList.toggle('dark');
    header.classList.toggle('dark');
    moon.classList.toggle('dark');
    sun.classList.toggle('dark');
}
moon.addEventListener('click',() => {
    localStorage.setItem('THEMES', 'dark')
    THEMES = localStorage.getItem('THEMES')
    console.log(THEMES);
    change_theme()
})

sun.addEventListener('click', () => {
    localStorage.setItem('THEMES', 'lite')
    THEMES = localStorage.getItem('THEMES')
    console.log(THEMES);
    change_theme()
})

// скрол и хидер

window.onscroll = function (e) {
    if (this.oldScroll > this.scrollY) {
        header.style.transform = "translateY(0px)"; 
    } else {
        header.style.transform = "translateY(-98%)";
    }
    this.oldScroll = this.scrollY; 
}

// всплываюшее сообщение

tippy(moon, {
    content: "Change theme to light",
})

tippy(sun, {
    content: "Change theme to dark"
})
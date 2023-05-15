const links = document.querySelector('.logo .links')
const btnClose = document.querySelector('.logo .btn_close')
const menu = document.querySelector('article .menu')
const aside = document.querySelector('aside')

console.log(btnClose)

menu.addEventListener('click', () => {
   aside.classList.toggle('show')
   menu.classList.toggle('rotate')
   if(menu.classList.contains('rotate')) {
     menu.innerHTML = '<i class="fa-solid fa-square-xmark"></i>'
   } else {
     menu.innerHTML = '<i class="fa-solid fa-bars"></i>'
   }
})

btnClose.addEventListener('click', () => {
    if(aside.classList.contains('show')) {
       aside.classList.remove('show')
    } else {
        aside.classList.add('show')
    }
})












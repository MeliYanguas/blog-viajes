

const closeIcon = document.getElementById('close-icon');

let button = document.getElementById('btn')




console.log(button)

const openIcon = document.getElementById('open-icon');
const nav = document.getElementById('navbarNav')


openIcon.addEventListener('click', () => {
    nav.classList.add('nav-colapsada', 'animate__fadeIn')
    closeIcon.classList.remove('d-none')
    openIcon.classList.add('d-none')
})

closeIcon.addEventListener('click', () => {

    closeIcon.classList.add('d-none')
    openIcon.classList.remove('d-none')
})


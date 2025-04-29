const closeBtn = document.querySelector('.close-nav');
const openBtn = document.querySelector('.open-nav')
const nav = document.querySelector('.nav')

closeBtn.addEventListener('click', () => {
    nav.classList.remove('navigation-open')
})

openBtn.addEventListener('click', () => {
    nav.classList.add('navigation-open')
})
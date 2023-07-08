const hamburger = document.querySelector('.lines')
const close = document.querySelector('.line')
const nav = document.querySelector('.nav')

hamburger.addEventListener('click', ()=> {
    
    nav.classList.toggle('visible')
    
})
const nav = document.querySelector('.nav')
const navList = document.querySelector('.nav-list')
const burgerWrapper = document.querySelector('.burger-wrapper')
const navListItem = document.querySelectorAll('.nav-list-item')




// Scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 1 && window.innerWidth > 700) {
        nav.classList.add('scrolled')
    }
    else {
        nav.classList.remove('scrolled')
    }
})

//burger

burgerWrapper.addEventListener('click', () => {
    burgerWrapper.classList.toggle('active')
    navList.classList.toggle('active')
})

window.addEventListener('resize', () => {
    if(window.innerWidth > 700) {
        burgerWrapper.classList.remove('active')  
    }
    else {
        nav.classList.remove('scrolled')
    }
})

navListItem.forEach(item => {
    item.addEventListener('click', () => {
        navList.classList.toggle('active')
    })
}) 


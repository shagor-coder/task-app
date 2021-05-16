 const bodyLock = document.querySelector('body');

 const toggleMenu = document.querySelector('.toggle-menu');

 const showMenu = document.querySelector('.nav__menu');

 const menuLinks = document.querySelectorAll('.li')

 const navMenu = document.querySelector('#navbar-section')

 window.addEventListener('scroll', onscroll => {
     navMenu.classList.toggle('active', scrollY > 20)
 })


toggleMenu.addEventListener('click', e =>{
    e.preventDefault()
    toggleMenu.classList.toggle('active');
    showMenu.classList.toggle('active');
    bodyLock.classList.toggle('active')
})

menuLinks.forEach(function(menuLinks){
    menuLinks.addEventListener('click', e => {
        toggleMenu.classList.toggle('active');
        showMenu.classList.toggle('active');
        bodyLock.classList.remove('active')
    })
})
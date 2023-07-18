const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu= document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headHamMenuCloseBtn = document.querySelector('.header__main-ham-menu-close')

const headerSmallMenuLinks = document/querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
    if(smallMenu.classList.contains('header__sm-menu-active')) {
        smallMenu.classList.remove('header__sm-menu--active')
    } else {
        smallMenu.classList.add('header__sm-menu--active')
    }
    if(headerHamMenuBtn.classList.contains('d-none')) {
        headerHamMenuBtn.classList.remove('d-none')
        headerHamMenuBtn.classList.add('d-none')
    }
})
for (let i=0; i<headHamMenuLinks.length; i++) {
    headerSmallMenuLinks[1].addEventListener('click', () => {
        smallMenu.classList.remove('header__sm-menu--active')
        headerHamMenuBtn.classList.remove('d-none')
        headHamMenuCloseBtn.classList.add('d-none')
    })
}
const headerLogoContainer = document.querySelector('.header__logo-container')
headerLogoContainer.addEventListener('click', () => {
    location.href= 'index.html'
})
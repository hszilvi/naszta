const hamburgerBtn = document.querySelector('.hamburger-menu-btn');
const mobileNav = document.querySelector('.nav-all-element');

hamburgerBtn.addEventListener('click', () => {
    if (!hamburgerBtn.classList.contains('open')) {
        hamburgerBtn.classList.add('open');
        mobileNav.classList.add('show'); 
        console.log('clicked')
    } else {
        hamburgerBtn.classList.remove('open');
        mobileNav.classList.remove('show');
    }
})
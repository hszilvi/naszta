const hamburgerBtn = document.querySelector('.hamburger-menu-btn');
const mobileNav = document.querySelector('.nav-all-element');
// const errorMsg = document.querySelector('.error');
const submitBtn = document.querySelector('#submit-btn');

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

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const input = document.querySelector(email);
    const errorMesg = input.nextElementSibling;
    if (!regex.test(input.value)) {
        errorMesg.classList.remove('hide');
    } else {
        errorMesg.classList.add('hide')
    }
    
}
const validateInput = (data) => {
    const input = document.querySelector(data);
    const errorMesg = input.nextElementSibling;
    const isEmpty = input.value.trim() === '';
    if (isEmpty) {
        errorMesg.classList.remove('hide');
    } else {
        errorMesg.classList.add('hide')
    }
}
submitBtn.addEventListener('click', (e) => {
    console.log('clicked')
    e.preventDefault();
    validateInput('#name');
    validateEmail('#email');
    validateInput('#subject')
})
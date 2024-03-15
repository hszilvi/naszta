const hamburgerBtn = document.querySelector('.hamburger-menu-btn');
const mobileNav = document.querySelector('.nav-all-element');
const submitBtn = document.querySelector('#submit-btn');

const openAccBtn = document.querySelectorAll('.acc-title');
const dots = document.querySelectorAll('.dots');

const workExp = document.querySelector('.work');
const eduExp = document.querySelector('.education');
const certExp = document.querySelector('.certs');
const workCont = document.querySelector('.work-container');
const eduCont = document.querySelector('.education-container');
const certCont = document.querySelector('.cert-container')


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
    e.preventDefault();
    validateInput('#name');
    validateEmail('#email');
    validateInput('#subject')
})


for (let i = 0; i < openAccBtn.length; i++) {
    openAccBtn[i].addEventListener('click', (e) => {
        let panel = e.currentTarget.nextElementSibling;
        if (panel.classList.contains('hide')) {
            panel.classList.remove('hide');
            dots[i].classList.add('hide');           
        } else {
            panel.classList.add('hide');
            dots[i].classList.remove('hide');
        }
    })
}

// eduExp.addEventListener('click', () => {
//     if (!eduExp.classList.contains('selected') && (eduCont.classList.contains('hide'))) {
//         eduExp.classList.add('selected')
//         workCont.classList.add('hide');
//         eduCont.classList.remove('hide')
//         certCont.classList.add('hide');
//         workExp.classList.remove('selected');
//         certExp.classList.remove('selected');; 
//     } 
// });

// certExp.addEventListener('click', () => {
//     if (certCont.classList.contains('hide') && !(certExp.classList.contains('selected'))) {
//         certExp.classList.add('selected');
//         certCont.classList.remove('hide');
//         workExp.classList.remove('selected');
//         workCont.classList.add('hide');
//         eduCont.classList.add('hide');
//         eduExp.classList.remove('selected');
//     } 
// })
// workExp.addEventListener('click', () => {
//     if (!workExp.classList.contains('selected') && workCont.classList.contains('hide')) {
//         workCont.classList.remove('hide');
//         eduCont.classList.add('hide');
//         eduExp.classList.remove('selected');
//         certCont.classList.add('hide');
//         certExp.classList.remove('selected')
//     } 
// })

eduExp.addEventListener('click', () => {
    toggleSection(eduExp, eduCont);
});

certExp.addEventListener('click', () => {
    toggleSection(certExp, certCont);
});

workExp.addEventListener('click', () => {
    toggleSection(workExp, workCont);
});

function toggleSection(exp, cont) {
    if (!exp.classList.contains('selected') && cont.classList.contains('hide')) {
        exp.classList.add('selected');
        cont.classList.remove('hide');
        [eduExp, certExp, workExp].forEach(item => {
            if (item !== exp) {
                item.classList.remove('selected');
            }
        });
        [eduCont, certCont, workCont].forEach(item => {
            if (item !== cont) {
                item.classList.add('hide');
            }
        });
    }
}


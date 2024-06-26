const btnOpen = document.querySelector('#btnOpen');
const btnClose = document.querySelector('#btnClose');
const media = window.matchMedia('(width < 54em)')
const topNavMenu = document.querySelector('.topnav__menu');
const main = document.querySelector('main');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.topnav__item');

const submitBtn = document.querySelector('#submit-btn');

const openAccBtn = document.querySelectorAll('.acc-title');
const dots = document.querySelectorAll('.dots');

const workExp = document.querySelector('.work');
const eduExp = document.querySelector('.education');
const certExp = document.querySelector('.certs');
const workCont = document.querySelector('.work-container');
const eduCont = document.querySelector('.education-container');
const certCont = document.querySelector('.cert-container');
const publCont = document.querySelector('.publications-container');
const publExp = document.querySelector('.publications');
const arrow = document.querySelectorAll('.arrow');

const currentDate = dayjs();
const today = document.querySelector('#today');


const openMobileMenu = () => {
    btnOpen.setAttribute('aria-expanded', 'true');
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    main.setAttribute('inert', '');
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
}
const closeMobileMenu = () => {
    btnOpen.setAttribute('aria-expanded', 'false');
    topNavMenu.setAttribute('inert', '');
    main.removeAttribute('inert')
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus();
    setTimeout(() => {
        topNavMenu.style.transition = 'none';
    }, 500);
}
const setupTopNav = (e) => {
    if (e.matches) {
        topNavMenu.setAttribute('inert', '');
        topNavMenu.style.transition = 'none' ;
    } else {

        closeMobileMenu();
        topNavMenu.removeAttribute('inert')

    }
}

setupTopNav(media);
btnOpen.addEventListener('click', openMobileMenu);
btnClose.addEventListener('click', closeMobileMenu);

media.addEventListener('change', function (e) {
    setupTopNav(e);

  });


    for (let i = 0; i < navLinks.length; i++) {
        navLinks[i].addEventListener('click', () => {
            // closeMobileMenu();
            btnOpen.setAttribute('aria-expanded', 'false');
      
        })
    }


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
            arrow[i].classList.add('turn');         
        } else {
            panel.classList.add('hide');
            dots[i].classList.remove('hide');
            arrow[i].classList.remove('turn');
        }
    })
}

eduExp.addEventListener('click', () => {
    toggleSection(eduExp, eduCont);
});

certExp.addEventListener('click', () => {
    toggleSection(certExp, certCont);
});

workExp.addEventListener('click', () => {
    toggleSection(workExp, workCont);
});
publExp.addEventListener('click', () => {
    toggleSection(publExp, publCont);
});

function toggleSection(exp, cont) {
    if (!exp.classList.contains('selected') && cont.classList.contains('hide')) {
        exp.classList.add('selected');
        cont.classList.remove('hide');
        [eduExp, certExp, workExp, publExp].forEach(item => {
            if (item !== exp) {
                item.classList.remove('selected');
            }
        });
        [eduCont, certCont, workCont, publCont].forEach(item => {
            if (item !== cont) {
                item.classList.add('hide');
            }
        });
    }
}

today.innerHTML = currentDate.format('YYYY');
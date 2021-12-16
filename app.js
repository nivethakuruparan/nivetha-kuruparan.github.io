const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

const html = document.querySelector('html');
const themeToggle = document.querySelector('.check');

const questions = document.querySelectorAll('.item__header');

// Responsive Nav Bar
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});

menu_item.forEach((item) => {
    item.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    });
});

// Theme Toggle
themeToggle.addEventListener('click', () => {
    html.classList.toggle('dark');
    header.style.backgroundColor = getComputedStyle(html).getPropertyValue('--colour-four');
});

// Project Accordion
questions.forEach(question => {
    question.addEventListener('click', function () {
        let openQuestion = document.querySelector('.item__header.active');
        if (openQuestion && openQuestion !== this) {
            setAnswer(openQuestion);
        }
        setAnswer(question);
    });
});

function setAnswer(question) {
    question.classList.toggle('active');
    let answer = question.nextElementSibling;
    if (answer.style.maxHeight)
        answer.style.maxHeight = null;
    else
        answer.style.maxHeight = answer.scrollHeight + 'px';
}
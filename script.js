
let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translate(0%)') {
        nav.style.transform = 'translate(0%)';
        nav.style.transition = 'transform .2s ease-out';
    } else {
        nav.style.transform = 'translate(-100%)';
        nav.style.transition = 'transform .2s ease-out';
    }
})

let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
       toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scroll-menu").style.top = "0";
    } else {
        document.getElementById("scroll-menu").style.top = "-70px";
    }
}
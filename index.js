window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    for (var i = 0; i < reveals.length; i++) {
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 100;

        if (revealtop <= windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

function changeBg() {
    var navbar = document.getElementById('navbar');
    var scrollValue = window.scrollY;

    if(scrollValue < 150){
        navbar.classList.remove('dark');
    } else {
        navbar.classList.add('dark');
    }
 }

 window.addEventListener('scroll', changeBg)


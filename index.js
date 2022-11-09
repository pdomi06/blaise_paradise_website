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


function searchBar() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('item');
    let list = document.getElementById('card-group')
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display=list;                 
        }
    }
}


function torles() {
    document.getElementById('searchbar').value = "";
    searchBar();
}
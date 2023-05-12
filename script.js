// Variable Declarations 
let bar = document.getElementsByClassName("bar")[0];
let cross = document.getElementsByClassName("cross")[0];
let header_wrap = document.getElementsByClassName("header-wrap")[0];
let navbar = document.getElementById('navbar');
let nav_Bar = document.getElementsByClassName('nav_Bar')[0];


// Events 

// Navbar cross and bar btn 
navbar.addEventListener("click", function () {
    if (bar.style.display != "none") {
        bar.style.display = "none";
        cross.style.display = "block";
        header_wrap.style.left = "0"
        nav_Bar.style.left = "25rem"
    } else {
        cross.style.display = "none";
        bar.style.display = "block";
        header_wrap.style.left = "-25rem"
        nav_Bar.style.left = "0"
    }
})

// window.location.reload(true)
window.addEventListener("load", function () {
    window.scrollTo(0, 0);
})
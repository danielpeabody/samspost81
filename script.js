

// navigation

let navmenu = document.querySelector(".nav__menu");
let mobile__nav = document.querySelector(".show")

navmenu.addEventListener('mouseover',()=>{
    navmenu.style.cursor = "pointer";
})

navmenu.addEventListener('click',()=>{
    mobile__nav.classList.toggle("mobile__nav");
})



let hamburger = document.querySelector(".fa-solid");
let navmenu = document.querySelector(".navbar__links");

hamburger.addEventListener("mouseover",()=>{
    hamburger.style.cursor = "pointer";
})

hamburger.addEventListener("click",()=>{
    navmenu.classList.toggle("hide");
})